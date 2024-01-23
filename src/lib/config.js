export const domain = "https://www.ons.gov.uk";
export const cdnUrl = "https://cdn.ons.gov.uk/maptiles/ap-geos/v1";

export let mainChartOptionsArray = [
    {id: 0, label: "Time series", multiYear: "Yes"}, 
    {id: 1, label: "Distribution", multiYear: "No"}, 
    {id: 2, label: "Map", multiYear: "No"}, 
    {id: 3, label: "Table", multiYear: "Either"}
];

export let addTheArray = ["North East", "North West", "South West", "South East", "West Midlands", "East Midlands", "East of England", "United Kingdom"];

export let areaPluralObject = {
    lower: "areas",
    upper: "areas",
    region: "regions",
    country: "countries",
    other: null
};

export let demographicallySimilarObject = {
    lower: true,
    upper: true,
    region: false,
    country: false,
    other: false
};

export const colorsLookup = {
    "main": {color: "#003C57", contrast: "white"},
    "parent": {color: "#746CB1", contrast: "white"},
    "country": {color: "#118C7B", contrast: "white"},
    "uk": {color: "#00A3A6", contrast: "white"},
    "sameRegion": {color: "#d4d4d4", contrast: "#222"},
    "similar": {color: "#b0b0b0", contrast: "#222"},
    "custom1": {color: "#206095", contrast: "white"},
    "custom2": {color: "#a8bd3a", contrast: "#222"},
    "custom3": {color: "#871a5b", contrast: "white"},
    "custom4": {color: "#27a0cc", contrast: "#222"},
    "selected": {color: "#F39431", contrast: "white"},
    "median":  {color: "#F66068", contrast: "white"},
    "default": {color: "#d4d4d4", contrast: "#222"},
}
















export let geogLevelToNameLookup = {
    region: "regions",
    upper: "local authorities",
    both: "local authorities",
    other: "other"
};

export let medianAbsoluteDeviationLimit = 5;


export let encodingColourPalette = {better: "#E6F5D0", similar: "#eaeaea", worse: "#FDE0EF", higher: "#eaeaea", lower: "#eaeaea", noData: null};


////////////////////


export let bivariateColourObj = {
    "improving": {
        "better than average": "#003a5c",
        "similar": "#016eae", 
        "worse than average": "#7bb3d1"
    },
    "similar": {
        "better than average": "#4a4779",
        "similar": "#8d6c8f",
        "worse than average": "#dd7c8a"
    },
    "worsening": {
        "better than average": "#4b264d",
        "similar": "#8a274a",
        "worse than average": "#cc0024"
    },
}

export let clusterColourPalette = {
    4: {1: "#206095", 2: "#27A0CC", 3: "#871A5B", 4: "#A8BD3A"},
    8: {1: "#206095", 2: "#27A0CC", 3: "#871A5B", 4: "#A8BD3A", 5: "#F66068", 6: "#003C57", 7: "#22D0B6", 8: "#A09FA0"}
}

export let clusterToTopicLookup = {
    economy: "economy",
    health: "economy",
    education: "education",
    skills: "education",
    health: "health",
    connectivity: "connectivity",
    wellbeing: "wellbeing"
};


export const rolesHierarchyObject = {
    "main": 1,
    "parent": 6,
    "country": 7,
    "neighbour": 9,
    "similar": 8,
    "custom1": 5,
    "custom2": 4,
    "custom3": 3,
    "custom4": 2

}

export const rolesHierarchyObject2 = {
    "main": 1,
    "parent": 2,
    "country": 3,
    "neighbour": 4,
    "similar": 5,
    "custom1": 6,
    "custom2": 7,
    "custom3": 8,
    "custom4": 9
}

export const geoNames = {
    W04: { label: "community", plural: "communities" },
    E06: { label: "unitary authority", plural: "unitary authorities" },
    W06: { label: "unitary authority", plural: "unitary authorities" },
    E07: {
        label: "non-metropolitan district",
        plural: "non-metropolitan districts",
    },
    E08: { label: "metropolitan district", plural: "metropolitan districts" },
    E09: { label: "borough", plural: "boroughs" },
    E10: { label: "county", plural: "counties" },
    E11: { label: "metropolitan county", plural: "metropolital counties" },
};

export const geoTypes = [
    {
        key: "ew",
        codes: ["K04"],
        source: {
            type: "geojson",
            promoteId: "areacd",
        },
    },
    {
        key: "ctry",
        codes: ["E92", "N92", "S92", "W92"],
        pcio: "country",
        label: "country",
        plural: "countries",
        source: {
            type: "geojson",
            promoteId: "areacd",
        },
    },
    {
        key: "rgn",
        codes: ["E12"],
        pcio: "region",
        label: "region",
        plural: "regions",
        source: {
            type: "geojson",
            promoteId: "areacd",
        },
    },
    {
        key: "cty",
        codes: ["E10", "E06", "W06", "E09", "N09", "S12"],
        pcio: "admin_county",
        label: "county/unitary authority",
        plural: "counties/unitary authorities",
        source: {
            type: "vector",
            url: "https://cdn.ons.gov.uk/maptiles/administrative/2021/cty/v1/boundaries/{z}/{x}/{y}.pbf",
            promoteId: "areacd",
            minzoom: 4,
        },
    },
    {
        key: "lad",
        codes: ["E06", "E07", "E08", "E09", "W06", "N09", "S12"],
        pcio: "admin_district",
        label: "district",
        plural: "districts",
        source: {
            type: "vector",
            url: "https://cdn.ons.gov.uk/maptiles/administrative/2021/authorities-ew/v2/boundaries/{z}/{x}/{y}.pbf",
            promoteId: "areacd",
            minzoom: 4,
        },
    }
];

export const geoCodesLookup = (() => {
    let lookup = {};
    geoTypes.forEach((g) => g.codes.forEach((k) => (lookup[k] = g)));
    return lookup;
})();

export const geoTypesLookup = (() => {
    let lookup = {};
    geoTypes.forEach((g) => (lookup[g.key] = g));
    return lookup;
})();

export const countries = [
    {name: "England", code: "E92000001"},
    {name: "Northern Ireland", code: "N92000002"},
    {name: "Scotland", code: "S92000003"},
    {name: "Wales", code: "W92000004"},
]

export const regions = [
    {name: "North East", code: "E12000001"},
    {name: "North West", code: "E12000002"},
    {name: "Yorkshire and The Humber", code: "E12000003"},
    {name: "East Midlands", code: "E12000004"},
    {name: "West Midlands", code: "E12000005"},
    {name: "East of England", code: "E12000006"},
    {name: "London", code: "E12000007"},
    {name: "South East", code: "E12000008"},
    {name: "South West", code: "E12000009"},
];

export const geoReverseLookup = (() => {
    let lookup = {};
    [...countries, ...regions].forEach(d => lookup[d.name] = d.code);
    return lookup;
})();