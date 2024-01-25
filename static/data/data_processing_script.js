import { readdir } from 'node:fs/promises';
import fs from "fs";
import stripBom from "strip-bom";

import aq from "arquero";
const {op} = aq;

const CSV_PREPROCESS_DIR = "csv-preprocess";
const FILE_NAMES_LOG = "./config-data/file-names-log.csv";
const AREAS_CSV = "./config-data/geography/areas.csv"

const DEFAULT_VALUE_FIELD_NAME = "value";

// TODO: check if it's okay to be missing ITL2 codes like TLM5
const AREA_CODE_MAP = {
    TLB: "E92000001",
    TLC: "E12000001",
    TLD: "E12000002",
    TLE: "E12000003",
    TLF: "E12000004",
    TLG: "E12000005",
    TLH: "E12000006",
    TLI: "E12000007",
    TLJ: "E12000008",
    TLK: "E12000009",
    TLL: "W92000004",
    TLM: "S92000003",
    TLN: "N92000002"
};

const NEW_FILES_WARNING = "The script has been aborted because the list of file paths read in from the csv-preprocess folder includes files which were not present when this script was last run. These file paths can be viewed in the previous-file-paths data frame. Please add these file paths to the file-names-log.csv file in the config-data folder and re-run.";

async function loadCsvWithoutBom(filename) {
    const table = await aq.loadCSV(filename);
    return table.rename(Object.fromEntries(table.columnNames().map(n => [n, stripBom(n)])));
}

async function getListOfNewFiles(previous_file_paths) {
    let filenames = await readdir(CSV_PREPROCESS_DIR, { recursive: true });
    filenames = filenames
        .filter(f => f.endsWith(".csv") && !f.includes("/out/") && !f.includes("_IDS"));

    const previous_filenames = previous_file_paths.array("filePath");
    const newFiles = [];
    for (const f of filenames) {
        if (!previous_filenames.includes(`${CSV_PREPROCESS_DIR}/${f}`)) {
            newFiles.push(f);
        }
    }

    return newFiles;
}

function makeColNamesLowercase(table) {
    const names = table.columnNames();
    return table.rename(Object.fromEntries(names.map(n => [n, n.toLowerCase()])));
}

function tidyAreaCodes(indicator_data, areaCodes) {
    // convert codes like "TLB" to GSS codes
    const mapAreaCode = areacd => areacd in AREA_CODE_MAP ? AREA_CODE_MAP[areacd] : areacd;
    indicator_data = indicator_data
        .derive({areacd: aq.escape(d => mapAreaCode(d.areacd))});

    // only include areas that are in areas$areacd
    return indicator_data
        .filter(aq.escape(d => op.includes(areaCodes, d.areacd)));
}

function getMetadataColNames(indicator_data, multiIndicatorCategory) {
    let metadata_columns = ["areacd", "unit", "polarity", "variable name", "indicator"];
    if (multiIndicatorCategory && !metadata_columns.includes(multiIndicatorCategory)) {
        metadata_columns.push(multiIndicatorCategory);
    }
    return metadata_columns
        .filter(c => indicator_data.columnNames().includes(c));
}

function tmpFixForMissingVarName(indicator_data, code) {
    // bespoke code because some of the Northern Ireland areas accidentally have the variable name
    // left blank - hopefully will be able to remove for a future release
    if (code === "gross-median-weekly-pay") {
        return indicator_data.derive({"variable name": d => d["variable name"] || "Gross median weekly pay"});
    }

    return indicator_data
}

async function processFiles(file_paths) {
    const areas = await loadCsvWithoutBom(AREAS_CSV);
    const areaCodes = areas.array('areacd');

    let combined_data = aq.table(Object.fromEntries(["areacd", "period", "value", "code"].map(d => [d, []])));
    let combined_metadata = aq.table();

    for (const f of file_paths.objects()) {
        f.valueField ||= DEFAULT_VALUE_FIELD_NAME;

        // TODO: read period as string?
        let indicator_data = await loadCsvWithoutBom(f.filePath);

        const code = f.filePath.replace(/^.*[/]/, "").replace(/.csv$/, "");

        indicator_data = makeColNamesLowercase(indicator_data);
        indicator_data = indicator_data.rename({[f.valueField]: 'value'});
        indicator_data = tidyAreaCodes(indicator_data, areaCodes);

        let metadata_columns = getMetadataColNames(indicator_data, f.multiIndicatorCategory);

        indicator_data = tmpFixForMissingVarName(indicator_data, code)

        // var fullCode = f.multiIndicatorCategory ? `${code}-${f.multiIndicatorCategory}` : code;
        indicator_data.params({code, multiIndicatorCategory: f.multiIndicatorCategory});

        indicator_data = indicator_data
            .derive({code: aq.escape(d => f.multiIndicatorCategory ? `${code}-${d[f.multiIndicatorCategory]}` : code)})

        let indicator_metadata = indicator_data
            .select(...metadata_columns)
            .select(aq.not('areacd'))
            .derive({code: aq.escape(d => f.multiIndicatorCategory ? `${code}-${d[f.multiIndicatorCategory]}` : code)})

        if (f.multiIndicatorCategory) {
            indicator_metadata = indicator_metadata
                .select(aq.not(f.multiIndicatorCategory));
        }

        indicator_metadata = indicator_metadata
            .dedupe();

        indicator_data = indicator_data
            .select("areacd", "period", "value", "code");
        combined_data = combined_data.concat(indicator_data);

        for (const c of indicator_metadata.columnNames()) {
            if (!combined_metadata.columnNames().includes(c)) {
                combined_metadata = combined_metadata.derive({[c]: d => null});
            }
        }
        combined_metadata = combined_metadata.concat(indicator_metadata);
    }
    fs.writeFileSync('./tmp-csv/combined-data-js.csv', combined_data.toCSV());
    fs.writeFileSync('./tmp-csv/combined-metadata-js.csv', combined_metadata.toCSV());
}

async function main() {
    const previous_file_paths = await loadCsvWithoutBom(FILE_NAMES_LOG);

    const newFiles = await getListOfNewFiles(previous_file_paths);
    if (newFiles.length > 0) {
        console.log("New files:");
        console.log(newFiles);
        console.log(NEW_FILES_WARNING);
    }

    const file_paths = previous_file_paths
        .filter(f => f.include === "Y");

    await processFiles(file_paths);
}

main();
