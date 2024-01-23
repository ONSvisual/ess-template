<script>
import { base } from "$app/paths";
import { Breadcrumb, Titleblock, NavSections, NavSection } from "@onsvisual/svelte-components";
import Subhead from "$lib/layout/partial/Subhead.svelte";
import AreaNav from "../AreaNav.svelte";

import TopicSection from "$lib/bespoke_components/area_page/TopicSection.svelte";
import MainChart from "$lib/bespoke_components/area_page/MainChart.svelte";

import { constructSameRegionAreasLabel, haveCommonElements} from "$lib/utils";

import { getContext, onMount } from 'svelte';


export let data;

let areasArray = getContext("areasArray");

$: selectedArea = areasArray.find((el) => el.areacd === data.areacd);
$: sameGeogLevelAreas = areasArray.filter((el) => el.geogLevel === selectedArea.geogLevel);
$: sameGeogLevelAreasCodes = sameGeogLevelAreas.map((el) => el.areacd);

$: sameRegionsLabel = constructSameRegionAreasLabel(selectedArea.geogLevel, selectedArea.parentnm);

let chosenParentAreasArray = [], chosenRelatedAreasArray = [], chosenSameRegionArray = [], chosenCountriesArray = [], chosenRegionsArray = [], chosenAllOtherArray = [];

$: customAreasArray = [...chosenCountriesArray,...chosenRegionsArray,...chosenSameRegionArray,...chosenAllOtherArray];

$: parentArea = areasArray.find((el) => el.areacd == selectedArea.parentcd);
$: countryArea = areasArray.find((el) => el.areacd == selectedArea.countrycd && el.areacd != selectedArea.parentcd);
$: ukArea = areasArray.find((el) => el.areacd === "K02000001" && el.areacd != selectedArea.parentcd && el.areacd != selectedArea.countrycd);

$: selectedAndRelatedAreas = [selectedArea, parentArea, countryArea, ukArea].filter((el) => el != undefined).map((el) => ({
    ...el,
    role: el.areacd === selectedArea.areacd ? "main" : el.areacd === selectedArea.parentcd ? "parent" : el.areacd === selectedArea.countrycd ? "country" : "uk"
}));
$: selectedAndRelatedAreasCodes = selectedAndRelatedAreas.map((el) => el.areacd);

$: visibleSelectedAndRelatedAreas = selectedAndRelatedAreas.filter((e) => chosenParentAreasArray.includes(e.areacd) || e.areacd === selectedArea.areacd);

$: visibleCustomAreas = areasArray.filter((el) => customAreasArray.includes(el.areacd)).map((el,i) => ({
    ...el,
    role: "custom"+(i+1)
}));
$: visibleCustomAreasCodes = visibleCustomAreas.map((el) => el.areacd);

$: sameRegionAreas = areasArray.filter((el) => el.parentcd === selectedArea.parentcd && el.areacd != selectedArea.areacd);
$: sameRegionAreasCodes = sameRegionAreas.map((el) => el.areacd);

$: visibleSameRegionAreas = sameRegionAreas.filter((el) => !visibleCustomAreasCodes.includes(el.areacd) && chosenRelatedAreasArray.includes("sameRegion")).map((el) => ({
    ...el,
    role: "sameRegion"
}));
$: visibleSameRegionAreasCodes = visibleSameRegionAreas.map((el) => el.areacd);

let similarAreasLookupObject = getContext("similarAreasLookupObject");
$: similarAreasArray = similarAreasLookupObject[selectedArea.areacd].split("|");
$: similarAreas = areasArray.filter((el) => similarAreasArray.includes(el.areacd));

$: visibleSimilarAreas = similarAreas.filter((el) => !visibleCustomAreasCodes.includes(el.areacd) && !visibleSameRegionAreasCodes.includes(el.areacd) && chosenRelatedAreasArray.includes("similar")).map((el) => ({
    ...el,
    role: "similar"
}));
$: visibleSimilarAreasCodes = visibleSimilarAreas.map((el) => el.areacd);

$: visibleAreas = [...visibleSelectedAndRelatedAreas,...visibleCustomAreas, ...visibleSameRegionAreas,...visibleSimilarAreas];
$: visibleAreaTypes = [...visibleSelectedAndRelatedAreas,...visibleCustomAreas, ...(visibleSameRegionAreas.length > 0 ? [{label: sameRegionsLabel, role: "sameRegion"}] : []), ...(visibleSimilarAreas.length > 0 ? [{label: "Demographically similar areas", role: "similar"}] : [])];
$: visibleAreasCodes = visibleAreas.map((e) => e.areacd);

onMount(() => {
	chosenParentAreasArray = [parentArea == undefined ? undefined : parentArea.areacd, countryArea == undefined ? undefined : countryArea.areacd];
});

let topicsArray = getContext("topicsArray");


//////

</script>

<Breadcrumb links={[{label: "Home", href: "/"}, {label: "Explore subnational statistics", href: `${base}/`}, {label: "Find a local area", href: `${base}/areas`}, {label: selectedArea.areanm}]} background="#eaeaea"/>
<Titleblock title={selectedArea.areanm} background="#eaeaea">
    <Subhead>Get localised data, insights and trends for {selectedArea.areanm}</Subhead>
</Titleblock>
<AreaNav/>

<NavSections contentsLabel="Explore this area">

        {#each topicsArray as topic, i}

            <TopicSection
            {topic}
            {selectedArea}
            {sameGeogLevelAreasCodes}
            ></TopicSection>

        {/each}

        <NavSection title="Select an indicator">

            <MainChart
            {selectedArea}
            {sameGeogLevelAreasCodes}
            {sameRegionsLabel}
            {selectedAndRelatedAreas}
            {visibleAreas}
            {visibleAreaTypes}
            {visibleAreasCodes}
            {sameRegionAreasCodes}
            {selectedAndRelatedAreasCodes}
            bind:chosenParentAreasArray={chosenParentAreasArray}
            bind:chosenRelatedAreasArray={chosenRelatedAreasArray}
            bind:chosenSameRegionArray={chosenSameRegionArray}
            bind:chosenCountriesArray={chosenCountriesArray}
            bind:chosenRegionsArray={chosenRegionsArray}
            bind:chosenAllOtherArray={chosenAllOtherArray}
            ></MainChart>

        </NavSection>

        <NavSection title="Get the data">
            <p>Here, you can find information and links to the data.</p>
        </NavSection>

    </NavSections>


<style>




</style>