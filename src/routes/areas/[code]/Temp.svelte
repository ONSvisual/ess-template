<script>
import { base } from "$app/paths";
import { Breadcrumb, Titleblock, NavSections, NavSection } from "@onsvisual/svelte-components";
import Subhead from "$lib/layout/partial/Subhead.svelte";
import AreaNav from "../AreaNav.svelte";

import TopicSection from "$lib/bespoke_components/area_page/TopicSection.svelte";
import MainChart from "$lib/bespoke_components/area_page/MainChart.svelte";

import { setContext, getContext } from 'svelte';
import { onMount } from 'svelte';


export let data;

let areasArray = getContext("areasArray")

$: selectedArea = areasArray.find((el) => el.areacd === data.areacd);

//// Identify highlightable areas and track whether they should be visible + add extra areas to set of baseline comparison options
let globalVisibleAreasTracker = {main: true, parent: true, country: true, uk: false, sameRegion: false, similar: false, custom: null};

let chosenParentAreasArray = [], chosenRelatedAreasArray = [], chosenSameRegionArray = [], chosenCountriesArray = [], chosenRegionArray = [], chosenAllOtherArray = [];

$: customAreasArray = [...chosenCountriesArray,...chosenRegionArray,...chosenSameRegionArray,...chosenAllOtherArray];


$: parentArea = areasArray.find((el) => el.areacd == selectedArea.parentcd);
$: countryArea = areasArray.find((el) => el.areacd == selectedArea.countrycd && el.areacd != selectedArea.parentcd);
$: ukArea = areasArray.find((el) => el.areacd === "K02000001" && el.areacd != selectedArea.parentcd && el.areacd != selectedArea.countrycd);

$: selectedAndRelatedAreas = [selectedArea, parentArea, countryArea, ukArea].filter((el) => el != undefined).map((el) => ({
    ...el,
    role: el.areacd === selectedArea.areacd ? "main" : el.areacd === selectedArea.parentcd ? "parent" : el.areacd === selectedArea.countrycd ? "country" : "uk"
}));
$: selectedAndRelatedAreasCodes = selectedAndRelatedAreas.map((el) => el.areacd);


$: visibleSelectedAndRelatedAreas = selectedAndRelatedAreas.filter((e) => chosenParentAreasArray.includes(e.areacd));
$: visibleSelectedAndRelatedAreasCodes = visibleSelectedAndRelatedAreas.map((el) => el.areacd);

$: visibleCustomAreas = areasArray.filter((el) => customAreasArray.includes(el.areacd)).map((el,i) => ({
    ...el,
    role: "custom"+i
}));







$: visibleAreas = [...visibleSelectedAndRelatedAreas,...visibleCustomAreas];


$: globalVisibleAreasTracker.sameRegion = chosenRelatedAreasArray.includes("sameRegion");
$: globalVisibleAreasTracker.similar = chosenRelatedAreasArray.includes("similar");

onMount(() => {
	chosenParentAreasArray = [parentArea == undefined ? undefined : parentArea.areacd, countryArea == undefined ? undefined : countryArea.areacd];
});

$: console.log(visibleSelectedAndRelatedAreas);

/*$: {
    globalVisibleAreasTracker.parent = parentArea == undefined ? false : chosenParentAreasArray.includes(parentArea.areacd);
    globalVisibleAreasTracker.country = countryArea == undefined ? false : chosenParentAreasArray.includes(countryArea.areacd);
    globalVisibleAreasTracker.uk = ukArea == undefined ? false : chosenParentAreasArray.includes(ukArea.areacd);
}*/

$: customAreas = globalVisibleAreasTracker.custom == null ? [] : globalVisibleAreasTracker.custom.map((el) => el.areacd).map((el,i) => ({ ...el, role: "custom"+i }));
$: customAreasCodes = customAreas.map((el) => el.areacd);

$: sameRegionAreas = areasArray.filter((el) => el.parentcd === selectedArea.parentcd & ![...customAreasCodes, ...visibleSelectedAndRelatedAreasCodes].includes(el.areacd)).map((el,i) => ({ ...el, role: "sameRegion" }));
$: sameRegionAreasCodes = sameRegionAreas.map((el) => el.areacd);

//let similarAreasLookupObject = getContext("similarAreasLookupObject");
//$: similarAreas = areasArray.filter((el) => similarAreasLookupObject[selectedArea.areacd].split("|").includes(el.areacd) & ![...customAreasCodes, ...visibleSelectedAndRelatedAreasCodes, ...sameRegionAreasCodes].includes(el.areacd) );

//$: visibleAreas = [...visibleSelectedAndRelatedAreas, ...(globalVisibleAreasTracker.custom == null ? [] : customAreas), ...(globalVisibleAreasTracker.sameRegion ? sameRegionAreas : []), ...(globalVisibleAreasTracker.sameRegion ? sameRegionAreas : []), ...(globalVisibleAreasTracker.similar ? similarAreas : [])];

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
            {visibleAreas}
            bind:globalVisibleAreasTracker={globalVisibleAreasTracker}
            ></TopicSection>

        {/each}

        <NavSection title="Select an indicator">

            <MainChart
            {selectedArea}
            {selectedAndRelatedAreas}
            {visibleAreas}
            bind:globalVisibleAreasTracker={globalVisibleAreasTracker}
            {sameRegionAreasCodes}
            {selectedAndRelatedAreasCodes}
            bind:chosenParentAreasArray={chosenParentAreasArray}
            bind:chosenRelatedAreasArray={chosenRelatedAreasArray}
            bind:chosenSameRegionArray={chosenSameRegionArray}
            bind:chosenCountriesArray={chosenCountriesArray}
            bind:chosenRegionArray={chosenRegionArray}
            bind:chosenAllOtherArray={chosenAllOtherArray}
            ></MainChart>

        </NavSection>

        <NavSection title="Get the data">
            <p>Here, you can find information and links to the data.</p>
        </NavSection>

    </NavSections>


<style>




</style>