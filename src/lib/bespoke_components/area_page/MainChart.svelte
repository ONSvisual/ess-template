<script>

import SelectComparisonAreas from "$lib/bespoke_components/temporary/SelectComparisonAreas.svelte";

import Radio from "$lib/bespoke_components/interactions/Radio.svelte";
import Dropdown from "$lib/bespoke_components/interactions/Dropdown.svelte";
import SubtitleAndAdditionalDescription from "$lib/bespoke_components/area_page/main_chart/SubtitleAndAdditionalDescription.svelte";
import AddRemoveComparisonAreas from "$lib/bespoke_components/area_page/AddRemoveComparisonAreas.svelte";
import LineChart from "$lib/bespoke_components/datavis/LineChart.svelte";
import Beeswarm from "$lib/bespoke_components/datavis/Beeswarm.svelte";

import { onMount, getContext } from 'svelte';

import { mainChartOptionsArray } from "$lib/config";

export let selectedArea, selectedAndRelatedAreas, visibleAreaTypes, visibleAreas, visibleAreasCodes, sameRegionAreasCodes, selectedAndRelatedAreasCodes, sameRegionsLabel, sameGeogLevelAreasCodes;

export let chosenParentAreasArray, chosenRelatedAreasArray, chosenSameRegionArray, chosenCountriesArray, chosenRegionsArray, chosenAllOtherArray;

/////

let combinedDataObject = getContext("combinedDataObject");


let indicatorsObject = getContext("indicatorsObject");
let indicatorsCodeLabelArray = getContext("indicatorsCodeLabelArray");

$: filteredIndicatorsCodeLabelArray = indicatorsCodeLabelArray.filter((e) => combinedDataObject[e.code].filter((el) => el.areacd === selectedArea.areacd).length > 0);
let chosenIndicatorId;

onMount(() => {
    chosenIndicatorId = filteredIndicatorsCodeLabelArray[0];
});

$: selectedIndicator = chosenIndicatorId ? indicatorsObject[chosenIndicatorId.code] : indicatorsObject[filteredIndicatorsCodeLabelArray[0].code];

/////

let periodsLookupArray = getContext("periodsLookupArray");

$: filteredPeriodsArray = periodsLookupArray.filter((e) => e.periodGroup === selectedIndicator.periodGroup & e.xDomainNumb >= selectedIndicator.minXDomainNumb & e.xDomainNumb <= selectedIndicator.maxXDomainNumb);

$: filteredMainChartOptionsArray = mainChartOptionsArray.filter((e) => e.multiYear != "Yes"  | filteredPeriodsArray.length > 1);
$: chosenChartId = filteredMainChartOptionsArray.find((e) => e.id == chosenChartId) == undefined ? filteredMainChartOptionsArray[0].id : chosenChartId;

$: selectedChartType = filteredMainChartOptionsArray.find((e) => e.id == chosenChartId);

$: singlePeriodState = selectedChartType == undefined ? undefined : (selectedChartType.multiYear == "No" || (selectedChartType.multiYear == "Either" && filteredPeriodsArray.length === 1));

$: maxPeriod = filteredPeriodsArray[0];
$: minPeriod = filteredPeriodsArray[filteredPeriodsArray.length - 1];

//////

$: indicatorData = combinedDataObject[selectedIndicator.code];
$: filteredIndicatorData = indicatorData.filter((e) => e.value != "NA" && filteredPeriodsArray.filter((el) => singlePeriodState ? el.xDomainNumb == selectedIndicator.maxXDomainNumb : true).map((el) => el.xDomainNumb).includes(e.xDomainNumb) );

$: areasCodesForAreasWithData = [...new Set(filteredIndicatorData.map((e) => e.areacd))];

$: visibleAreaTypesWithData = visibleAreaTypes.filter((e) => "areacd" in e ? areasCodesForAreasWithData.includes(e.areacd) : true);
$: visibleAreasWithData = visibleAreas.filter((e) => areasCodesForAreasWithData.includes(e.areacd) );
$: visiblesAreasWithDataCodes = visibleAreasWithData.map((e) => e.areacd);

$: filteredIndicatorDataForVisibleAreas = filteredIndicatorData.filter((e) => visibleAreasCodes.includes(e.areacd));

let indicatorsCalculationsArray = getContext("indicatorsCalculationsArray");

</script>


<Radio
name="select-main-chart-type"
optionsArray={filteredMainChartOptionsArray}
bind:chosenId={chosenChartId}
></Radio>

<div class="main-chart-container">

    <Dropdown
    name="select-indicator"
    optionsArray={filteredIndicatorsCodeLabelArray}
    bind:chosenId={chosenIndicatorId}
    ></Dropdown>

    <SubtitleAndAdditionalDescription
    subtitleText={selectedIndicator.metadata.subtitle+", "+(singlePeriodState ? maxPeriod.label : minPeriod.label+" to "+maxPeriod.label)}
    additionalText={selectedIndicator.metadata.additionalDescription.split("|")}
    ></SubtitleAndAdditionalDescription>

    <AddRemoveComparisonAreas
    {selectedArea}
    {sameRegionsLabel}
    {areasCodesForAreasWithData}
    {selectedAndRelatedAreas}
    {selectedAndRelatedAreasCodes}
    {sameRegionAreasCodes}
    visibleAreaTypesWithData={visibleAreaTypesWithData.filter((e) => e.areacd != selectedArea.areacd)}
    bind:chosenParentAreasArray={chosenParentAreasArray}
    bind:chosenRelatedAreasArray={chosenRelatedAreasArray}
    bind:chosenSameRegionArray={chosenSameRegionArray}
    bind:chosenCountriesArray={chosenCountriesArray}
    bind:chosenRegionsArray={chosenRegionsArray}
    bind:chosenAllOtherArray={chosenAllOtherArray}
    ></AddRemoveComparisonAreas>

    <div class="chart-container">

        {#if selectedChartType.label === "Time series"}

            <LineChart
            {filteredPeriodsArray}
            {visibleAreaTypesWithData}
            {visibleAreasWithData}
            {visiblesAreasWithDataCodes}
            {filteredIndicatorDataForVisibleAreas}
            {selectedArea}
            {selectedIndicator}
            selectedIndicatorCalculations={indicatorsCalculationsArray.find((e) => selectedIndicator.code === e.code && maxPeriod.xDomainNumb === e.period && e.geog_level === selectedArea.geogLevel)}
            ></LineChart>


        {:else if selectedChartType.label === "Distribution"}

            <Beeswarm
            {sameRegionAreasCodes}
            {selectedArea}
            {sameGeogLevelAreasCodes}
            {visibleAreasWithData}
            {visiblesAreasWithDataCodes}
            {filteredIndicatorDataForVisibleAreas}
            {filteredIndicatorData}
            {selectedIndicator}
            selectedIndicatorCalculations={indicatorsCalculationsArray.find((e) => selectedIndicator.code === e.code && maxPeriod.xDomainNumb === e.period && e.geog_level === "lower")}
            {chosenRelatedAreasArray}
            ></Beeswarm>


        {/if}

    </div>

</div>



<style>

.main-chart-container {
    margin: 0px;
    padding: 10px 10px 15px 10px;
    border-radius: 0px 5px 5px 5px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(128,128,128);
}


</style>