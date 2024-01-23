<script>

import { scaleLinear } from 'd3-scale';
import { AccurateBeeswarm } from 'accurate-beeswarm-plot';
import { colorsLookup } from "$lib/config";
import { addThousandsSeparator, roundNumber } from "$lib/utils";

import HoverLabel from "$lib/bespoke_components/datavis/beeswarm/HoverLabel.svelte";
import BackgroundCircle from "$lib/bespoke_components/datavis/beeswarm/BackgroundCircle.svelte";

export let indicator, selectedArea, sameGeogLevelAreasCodes, data, selectedIndicatorCalculations, maxPeriod, hoverId, hoverIndicatorId;

/*$: console.log(indicator);
$: console.log(selectedArea);
$: console.log(sameGeogLevelAreasCodes);
$: console.log(data);
$: console.log(selectedIndicatorCalculations);
$: console.log(maxPeriod);*/

let width = 1000, height = 100;

$: padding = {top: 35, right: 10, bottom: 5, left: 10};

$: spaceForOutliers = 40;

$: chartWidth = width - padding.left - padding.right - spaceForOutliers*2;
$: chartHeight = height - padding.top - padding.bottom;

$: xDomain = [selectedIndicatorCalculations.med - 3*selectedIndicatorCalculations.mad, parseFloat(selectedIndicatorCalculations.med) + 3*selectedIndicatorCalculations.mad];

$: x = scaleLinear()
	.domain(xDomain)
	.range([0, chartWidth]);

$: backgroundCircleDataStep1 = data.filter((e) => sameGeogLevelAreasCodes.includes(e.areacd)).map((e) => ({
    ...e,
    xPosition: e.value < xDomain[0] ? -spaceForOutliers/2 : e.value > xDomain[1] ? chartWidth + spaceForOutliers/2 : x(e.value)
}))

$: backgroundCircleDataStep2 = new AccurateBeeswarm(backgroundCircleDataStep1, 5, d=> d.xPosition).oneSided().calculateYPositions().sort((a,b) => Math.random() - Math.random());

$: yDomain = [0, Math.max(...backgroundCircleDataStep2.map((e) => e.y))];

$: y = scaleLinear()
	.domain(yDomain)
	.range([chartHeight, 0]);

let labelRect1, labelRect2;

</script>


<div class="svgs-container" bind:clientWidth={width}>

    <svg
    {width}
    {height}
    >

        <g transform="translate({padding.left+spaceForOutliers},{padding.top})">

            <g class="background-circles-group" opacity=0.7>

                {#each backgroundCircleDataStep2 as circle, index}

                    <BackgroundCircle
                    indicatorCode={indicator.code}
                    bind:hoverIndicatorId={hoverIndicatorId}
                    bind:hoverId={hoverId}
                    length={backgroundCircleDataStep2.length}
                    {index}
                    {circle}
                    {y}
                    fillOpacity=0.25
                    ></BackgroundCircle>

                {/each}

            </g>

            <g opacity={hoverId ? 0.2 : 1}>

            <line
            x1={chartWidth/2}
            x2={chartWidth/2}
            y1=-35
            y2={chartHeight+20}
            stroke={colorsLookup.median.color}
            stroke-width="3px"
            stroke-dasharray="6 3"
            pointer-events="none"
            ></line>

            <g transform="translate({chartWidth/2},-45)">

                {#if labelRect1}

                    <rect
                    x={-labelRect1.width/2-3}
                    y={8}
                    width={labelRect1.width+6}
                    height=24
                    stroke="none"
                    fill={colorsLookup.median.color}
                    rx="2px"
                    ></rect>
                
                {/if}

                <text
                y=26
                bind:contentRect={labelRect1}
                text-anchor="middle"
                fill={"white"}
                >{indicator.metadata.prefix+addThousandsSeparator(roundNumber(selectedIndicatorCalculations.med, indicator.metadata.decimalPlaces))+indicator.metadata.suffix}</text>

            </g>
            
            {#if labelRect1}

            {#each backgroundCircleDataStep2.filter((e) => e.datum.areacd === selectedArea.areacd) as circle}

                    <circle
                    cx={circle.x}
                    cy={chartHeight}
                    r=10
                    stroke="white"
                    stroke-width="1.5px"
                    fill={colorsLookup.main.color} 
                    ></circle>

                    <path
                    stroke="none"
                    fill={colorsLookup.main.color}
                    d="M {circle.x} {chartHeight-13} l-6 -6 l12 0 z"
                    pointer-events="none"
                    ></path>

                    <path
                    fill="none"
                    stroke={colorsLookup.main.color}
                    d="M {circle.x} {chartHeight-15} l0 -40 L{chartWidth/2 < circle.x ? 10+Math.max(circle.x, chartWidth/2+labelRect1.width+(labelRect2 ? labelRect2.width/2 : 0)) : -10+Math.min(circle.x, chartWidth/2-labelRect1.width-(labelRect2 ? labelRect2.width/2 : 0))} {chartHeight-55} l0 -10"
                    stroke-width="3px"
                    pointer-events="none"
                    ></path>

                    <g transform="translate({chartWidth/2 < circle.x ? 10+Math.max(circle.x, chartWidth/2+labelRect1.width+(labelRect2 ? labelRect2.width/2 : 0)) : -10+Math.min(circle.x, chartWidth/2-labelRect1.width-(labelRect2 ? labelRect2.width/2 : 0))},-40)">

                        {#if labelRect2}

                                <rect
                                x={-labelRect2.width/2-3}
                                y={3}
                                width={labelRect2.width+6}
                                height=31
                                stroke="none"
                                fill={colorsLookup.main.color}
                                rx="2px"
                                ></rect>

                        {/if}

                            <text
                            font-size="28px"
                            fill="white"
                            y=28
                            bind:contentRect={labelRect2}
                            text-anchor="middle"
                            >{indicator.metadata.prefix+addThousandsSeparator(roundNumber(circle.datum.value, indicator.metadata.decimalPlaces))+indicator.metadata.suffix}</text>

                    </g>

            {/each}

            {/if}

            </g>

            <g class="selected-label-group">

                {#each backgroundCircleDataStep2.filter((e) => e.datum.areacd === hoverId) as circle, index}

                    <HoverLabel
                    hoverIndicatorBoolean={hoverIndicatorId === indicator.code}
                    selectedIndicator={indicator}
                    {circle}
                    {y}
                    ></HoverLabel>

                {/each}

            </g>

        </g>

    </svg>

</div>

<style>

svg {
    overflow: visible;
}


</style>
