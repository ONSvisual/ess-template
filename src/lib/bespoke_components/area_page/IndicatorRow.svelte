<script>

import BeeswarmRow from "$lib/bespoke_components/datavis/BeeswarmRow.svelte";
import TitleAndAdditionalDescription from "$lib/bespoke_components/area_page/indicator_rows/TitleAndAdditionalDescription.svelte";
import Divider from "$lib/bespoke_components/other/Divider.svelte";

import { getContext } from 'svelte';

export let indicator, selectedArea, sameGeogLevelAreasCodes, hoverId, hoverIndicatorId;

let combinedDataObject = getContext("combinedDataObject");

let periodsLookupArray = getContext("periodsLookupArray");

$: filteredPeriodsArray = periodsLookupArray.filter((e) => e.periodGroup === indicator.periodGroup & e.xDomainNumb >= indicator.minXDomainNumb & e.xDomainNumb <= indicator.maxXDomainNumb);

$: maxPeriod = filteredPeriodsArray[0];

let indicatorsCalculationsArray = getContext("indicatorsCalculationsArray");

$: selectedIndicatorCalculations = indicatorsCalculationsArray.find((e) => indicator.code === e.code && maxPeriod.xDomainNumb === e.period && e.geog_level === selectedArea.geogLevel);

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
    width: 30%;
}





</style>