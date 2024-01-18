import { readdir } from 'node:fs/promises';
import fs from "fs";

import aq from "arquero";
const {op} = aq;

const CSV_PREPROCESS_DIR = "csv-preprocess";
const FILE_NAMES_LOG = "./config-data/file-names-log.csv";
const AREAS_CSV = "./config-data/geography/areas.csv"

const DEFAULT_VALUE_FIELD_NAME = "value";

const NEW_FILES_WARNING = "The script has been aborted because the list of file paths read in from the csv-preprocess folder includes files which were not present when this script was last run. These file paths can be viewed in the previous-file-paths data frame. Please add these file paths to the file-names-log.csv file in the config-data folder and re-run.";

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

async function processFiles(file_paths) {
    const areas = await aq.loadCSV(AREAS_CSV);

    // TODO: create combined_*data (lines 30 and 31 of R script)
    for (const file of file_paths.objects()) {
        file.valueField ||= DEFAULT_VALUE_FIELD_NAME;
        console.log(file);
        const code = file.filePath.replace(/^.*[/]/, "").replace(/.csv$/, "");
        //console.log(code);
        //const indicator_data = await aq.loadCSV(file.filePath, {parse: {period: String, Period: String}});
        let indicator_data = await aq.loadCSV(file.filePath);
        indicator_data = makeColNamesLowercase(indicator_data);
        //indicator_data.print();
    }
}

async function main() {
    const previous_file_paths = await aq.loadCSV(FILE_NAMES_LOG);

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
