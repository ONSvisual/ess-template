<script>

import BeeswarmRow from "$lib/bespoke_components/datavis/BeeswarmRow.svelte";
import TitleAndAdditionalDescription from "$lib/bespoke_components/area_page/indicator_rows/TitleAndAdditionalDescription.svelte";
import Divider from "$lib/bespoke_components/other/Divider.svelte";
import LineChartRow from "$lib/bespoke_components//datavis/LineChartRow.svelte";

import { getContext } from 'svelte';
    import { max } from "d3";

export let indicator, selectedArea, sameGeogLevelAreasCodes, hoverId, hoverIndicatorId;

let combinedDataObject = getContext("combinedDataObject");

let periodsLookupArray = getContext("periodsLookupArray");

$: filteredPeriodsArray = periodsLookupArray.filter((e) => e.periodGroup === indicator.periodGroup & e.xDomainNumb >= indicator.minXDomainNumb & e.xDomainNumb <= indicator.maxXDomainNumb);

$: minPeriod = filteredPeriodsArray[filteredPeriodsArray.length -1];
$: maxPeriod = filteredPeriodsArray[0];

$: console.log(minPeriod, maxPeriod)

let indicatorsCalculationsArray = getContext("indicatorsCalculationsArray");

$: selectedIndicatorCalculations = indicatorsCalculationsArray.find((e) => indicator.code === e.code && maxPeriod.xDomainNumb === e.period && e.geog_level === selectedArea.geogLevel);

$: console.log(indicatorsCalculationsArray)

</script>

<div class="indicator-container">

    <Divider 
    orientation="vertical"
    ></Divider>

    <TitleAndAdditionalDescription
    titleText={indicator.metadata.label}
    unitDescriptionText={indicator.metadata.subText}
    additionalText={(indicator.metadata.subtitle+"|"+indicator.metadata.additionalDescription).split("|")}
    ></TitleAndAdditionalDescription>

    <div class="visuals-container">

        <div class="beeswarm-container">

            <BeeswarmRow
            {indicator}
            {selectedArea}
            {sameGeogLevelAreasCodes}
            data={combinedDataObject[indicator.code].filter((e) => e.value != "NA" && e.xDomainNumb === indicator.maxXDomainNumb)}
            {selectedIndicatorCalculations}
            {maxPeriod}
            bind:hoverId={hoverId}
            bind:hoverIndicatorId={hoverIndicatorId}
            ></BeeswarmRow>


        </div>

        <div class="line-chart-container">

            {#if filteredPeriodsArray.length > 1}

                <LineChartRow
                {selectedIndicatorCalculations}
                {filteredPeriodsArray}
                bind:hoverId={hoverId}
                medianData={indicatorsCalculationsArray.filter((e) => indicator.code === e.code && e.period >= minPeriod.xDomainNumb && e.period <= maxPeriod.xDomainNumb && e.geog_level === selectedArea.geogLevel).sort((a,b) => a.period - b.period)}
                areaData={combinedDataObject[indicator.code].filter((e) => e.value != "NA" && e.xDomainNumb >= minPeriod.xDomainNumb && e.xDomainNumb <= maxPeriod.xDomainNumb && e.areacd === selectedArea.areacd).sort((a,b) => a.xDomainNumb - b.xDomainNumb)}
                hoverData={combinedDataObject[indicator.code].filter((e) => e.value != "NA" && e.xDomainNumb >= minPeriod.xDomainNumb && e.xDomainNumb <= maxPeriod.xDomainNumb && e.areacd === hoverId).sort((a,b) => a.xDomainNumb - b.xDomainNumb)}
                {indicator}
                ></LineChartRow>

            {:else}

                <span>No historical data</span>

            {/if}

        </div>

    </div>

</div>



<style>

.indicator-container {
    display: flex;
    flex-direction: column;
}

.visuals-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5%;
}

.beeswarm-container {
    width: 65%;
}

.line-chart-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 30%;
}

.line-chart-container span {
    text-align: center;
    font-weight: bold;
}

.beeswarm-wide-container {
    width: 100%;
}





</style>