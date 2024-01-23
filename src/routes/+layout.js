import { PUBLIC_APP_PATH } from "$env/static/public";

export const prerender =
    PUBLIC_APP_PATH &&
    (PUBLIC_APP_PATH.includes("ons") || PUBLIC_APP_PATH.includes("github"));
export const trailingSlash = "always";

import { base } from "$app/paths";
import { getData } from "$lib/utils";

export async function load({ fetch }) {

    const similarAreasLookup = await getData(`${base}/data/config-data/clusters/similar-areas-lookup.csv`, fetch);

    const areasGeogInfo = await getData(`${base}/data/config-data/geography/areas-geog-info.csv`, fetch);
    const areasGeogLevel = await getData(`${base}/data/config-data/geography/areas-geog-level.csv`, fetch);
    const areasParentsLookup = await getData(`${base}/data/config-data/geography/areas-parents-lookup.csv`, fetch);
    const areas = await getData(`${base}/data/config-data/geography/areas.csv`, fetch);
    
    const indicatorsCalculations = await getData(`${base}/data/config-data/indicators/indicators-calculations.csv`, fetch);   
    const indicators = await getData(`${base}/data/config-data/indicators/indicators-lookup.csv`, fetch);
    const indicatorsMetadata = await getData(`${base}/data/config-data/indicators/indicators-metadata.csv`, fetch);

    const periodsLookup = await getData(`${base}/data/config-data/periods/unique-periods-lookup.csv`, fetch);

    const combinedData = await getData(`${base}/data/csv/combined-data.csv`, fetch);

    const beeswarmKeyData = await getData(`${base}/data/csv/beeswarm-key-data.csv`, fetch);

    return {similarAreasLookup, areasGeogInfo, areasGeogLevel, areasParentsLookup, areas, indicatorsCalculations, indicators, indicatorsMetadata, periodsLookup, combinedData, beeswarmKeyData};

}
