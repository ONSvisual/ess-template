<script>

import { scaleLinear } from 'd3-scale';
import labelplacer from 'labelplacer';

import Line from "$lib/bespoke_components/datavis/lineChart/Line.svelte";
import HoverLine from "$lib/bespoke_components/datavis/lineChart/HoverLine.svelte";
import Label from "$lib/bespoke_components/datavis/lineChart/Label.svelte";
import HoverLabel from "$lib/bespoke_components/datavis/lineChart/HoverLabel.svelte";
import AxisY from "$lib/bespoke_components/datavis/lineChart/AxisY.svelte";
import AxisX from "$lib/bespoke_components/datavis/lineChart/AxisX.svelte";

export let filteredPeriodsArray, visibleAreasWithData, visiblesAreasWithDataCodes, visibleAreaTypesWithData, filteredIndicatorDataForVisibleAreas, selectedArea, selectedIndicator, selectedIndicatorCalculations;

let width = 1000, height = 500;

let yAxisMaxTickWidth = 10;
$: maxLabelWidth = labelRectArray.length === 0 ? 0 : Math.max(...labelRectArray.map((e) => e.width));

$: padding = {top: 10, right: maxLabelWidth+20, bottom: 30, left: 20+yAxisMaxTickWidth};

$: chartWidth = width - padding.left - padding.right;
$: chartHeight = height - padding.top - padding.bottom;

$: xDomain = [filteredPeriodsArray[filteredPeriodsArray.length-1].xDomainNumb, filteredPeriodsArray[0].xDomainNumb];

$: values = [...filteredIndicatorDataForVisibleAreas.map((e) => e.value),...filteredIndicatorDataForVisibleAreas.map((e) => e.lci),...filteredIndicatorDataForVisibleAreas.map((e) => e.uci)].filter((e) => e != "NA");

$: visibleAreasWithDataAdded = visibleAreasWithData.map((e) => ({
    ...e,
    data: filteredIndicatorDataForVisibleAreas.filter((el) => el.areacd === e.areacd)
}));

$: yDomainRaw = [0.95*Math.min(...values), 1.05*Math.max(...values)];

$: yDomainAdj = selectedIndicatorCalculations ? [Math.min(yDomainRaw[0], selectedIndicatorCalculations.med - 3*selectedIndicatorCalculations.mad), Math.max(yDomainRaw[1], parseFloat(selectedIndicatorCalculations.med) + 3*selectedIndicatorCalculations.mad) ] : yDomainRaw;

$: yDomainZeroBaseline = selectedIndicator.metadata.zeroBaseline === "T" ? [0, yDomainAdj[1]] : selectedIndicator.metadata.canBeNegative === "F" ? [Math.max(0, yDomainAdj[0]), yDomainAdj[1]] : yDomainAdj;

$: x = scaleLinear()
	.domain(xDomain)
	.range([0, chartWidth]);

$ : y = scaleLinear()
	.domain(yDomainZeroBaseline)
	.range([chartHeight, 0]);

$: labelInitArray = visibleAreasWithDataAdded.map((e) => ({
    targetY: e.data[0].value,
    areacd: e.areacd,
    areanm: e.areanm,
    role: e.role
}));

$: labelCalculatedArray = labelplacer(labelInitArray.filter((e) => !["similar", "sameRegion"].includes(e.role)), [-padding.top, chartHeight], d => y(d.targetY)+6,  d => d.areanm.length > 25 ? 52 : 26);

$: labelRectArray = [];

let hoverId;

</script>


<div class="svg-container" bind:clientWidth={width}>

    <svg
    {width}
    {height}
    >

        <g transform="translate({padding.left},{padding.top})">

            <rect
            width={chartWidth}
            height={chartHeight}
            fill="black"
            opacity=0.02
            ></rect>

            <AxisY
            bind:yAxisMaxTickWidth={yAxisMaxTickWidth}
            {y}
            {yDomainZeroBaseline}
            {selectedIndicator}
            ></AxisY>

            <AxisX
            {x}
            {xDomain}
            {filteredPeriodsArray}
            {chartHeight}
            ></AxisX>

            {#each [...visibleAreasWithDataAdded].reverse() as area, index}

                <Line
                bind:hoverId={hoverId}
                {xDomain}
                {area} 
                {x}
                {y}
                showPoints={visibleAreasWithDataAdded.length < 4}
                ></Line>

            {/each}

            {#each visibleAreasWithDataAdded as area, index}

                {#if hoverId === area.areacd}

                    <HoverLine
                    {hoverId}
                    {xDomain}
                    {area} 
                    {x}
                    {y}
                    ></HoverLine>

                {/if}

            {/each}

            {#if labelCalculatedArray.length < 8}

                {#each labelCalculatedArray as label, i}

                    <Label
                    bind:hoverId={hoverId}
                    bind:labelRect={labelRectArray[i]}
                    {chartWidth}
                    {label}
                    ></Label>

                {/each}

            {/if}

            {#if hoverId }

                <HoverLabel
                area={visibleAreasWithDataAdded.find((e) => e.areacd === hoverId)}
                {chartWidth}
                {y}
                ></HoverLabel>

            {/if}
        
        </g>



    </svg>

</div>



<style>

.svg-container {
    margin: 20px 0px 0px 0px;
}




</style>

