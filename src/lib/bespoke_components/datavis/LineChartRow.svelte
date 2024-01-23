<script>

import { colorsLookup } from "$lib/config";
import { scaleLinear } from 'd3-scale';
import { line } from "d3-shape";
import { addThousandsSeparator, roundNumber } from "$lib/utils";

export let selectedIndicatorCalculations, filteredPeriodsArray, hoverId, medianData, areaData, hoverData, indicator;

let width = 1000, height = 120;

let labelRect;

let labelWidth = labelRect ? labelRect.width : 60;

$: padding = {top: 5, right: 30+labelWidth, bottom: 20, left: 20};

$: chartWidth = width - padding.left - padding.right;
$: chartHeight = height - padding.top - padding.bottom;

$: yDomain = [selectedIndicatorCalculations.med - 5*selectedIndicatorCalculations.mad, parseFloat(selectedIndicatorCalculations.med) + 5*selectedIndicatorCalculations.mad];

$: y = scaleLinear()
	.domain(yDomain)
	.range([chartHeight, 0]);

$: xDomain = [filteredPeriodsArray[filteredPeriodsArray.length-1].xDomainNumb, filteredPeriodsArray[0].xDomainNumb];

$: x = scaleLinear()
	.domain(xDomain)
	.range([0, chartWidth]);

$: pathFunction1 = line()
    .x((d) => { return x(d.period); })
    .y((d) => { return Math.min(chartHeight, Math.max(0, y(d.med))); });

$: pathFunction2 = line()
    .x((d) => { return x(d.xDomainNumb); })
    .y((d) => { return Math.min(chartHeight, Math.max(0, y(d.value))); });


$: changeCalc = (areaData[0].value - areaData[areaData.length-1].value);


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
            opacity=0
            ></rect>

            <!-- <line
            y1={chartHeight}
            y2={chartHeight}
            x1={x(xDomain[0])}
            x2={x(xDomain[1])}
            stroke="black"
            ></line> -->

            <g opacity=0.5>

                <line
                y1={0}
                y2={chartHeight}
                x1={x(xDomain[0])}
                x2={x(xDomain[0])}
                stroke="black"
                stroke-width="1.5px"
                ></line>

                <text
                text-anchor="middle"
                y={17+chartHeight}
                x={x(xDomain[0])}
                >{xDomain[0]}</text>

                <line
                y1={0}
                y2={chartHeight}
                x1={x(xDomain[1])}
                x2={x(xDomain[1])}
                stroke-width="1.5px"
                stroke="black"
                ></line>

                <text
                text-anchor="middle"
                y={17+chartHeight}
                x={x(xDomain[1])}
                >{xDomain[1]}</text>

            </g>

            <g opacity={hoverId ? 0.25 : 1}>

                <path
                d={pathFunction1(medianData)}
                stroke={colorsLookup.median.color}
                fill="none"
                stroke-width="2.5px"
                ></path>

                <circle
                cx={x(medianData[medianData.length-1].period)}
                cy={Math.min(chartHeight, Math.max(0, y(medianData[medianData.length-1].med)))}
                r=4
                stroke-width="1.5px"
                fill={colorsLookup.median.color}
                stroke="white"
                ></circle>

                <path
                d={pathFunction2(areaData)}
                stroke={colorsLookup.main.color}
                fill="none"
                stroke-width="2.5px"
                ></path>

                <circle
                cx={x(areaData[areaData.length-1].xDomainNumb)}
                cy={Math.min(chartHeight, Math.max(0, y(areaData[areaData.length-1].value)))}
                r=4
                stroke-width="1.5px"
                fill={colorsLookup.main.color}
                stroke="white"
                ></circle>

            </g>

            {#if hoverId}

                <path
                d={pathFunction2(hoverData)}
                stroke={colorsLookup.selected.color}
                fill="none"
                stroke-width="2.5px"
                ></path>

                <circle
                cx={x(hoverData[hoverData.length-1].xDomainNumb)}
                cy={Math.min(chartHeight, Math.max(0, y(hoverData[hoverData.length-1].value)))}
                r=4
                stroke-width="1.5px"
                fill={colorsLookup.selected.color}
                stroke="white"
                ></circle>

            {/if}

            <g transform="translate({chartWidth+25},{Math.min(chartHeight, Math.max(0, y(areaData[areaData.length-1].value)))})"
            opacity={hoverId ? 0.25 : 1}>

                

                {#if labelRect && roundNumber(changeCalc, indicator.metadata.decimalPlaces) != 0}

                    <rect
                    x={-3}
                    width={labelRect.width+6}
                    y={labelRect.y-18}
                    height={labelRect.height}
                    rx="2px"
                    stroke="none"
                    fill={colorsLookup.main.color}
                    ></rect>

                    <path
                    d="M -12 -18 l0 {labelRect.height}"
                    stroke={colorsLookup.main.color}
                    fill="none"
                    stroke-width="2px"
                    ></path>

                    {#if changeCalc > 0}

                        <path
                        d="M -12 -19 l-5 5 l10 0 z"
                        fill={colorsLookup.main.color}
                        stoke="none"
                        ></path>

                    {:else}

                        <path
                        d="M -12 {-17+labelRect.height} l-5 -5 l10 0 z"
                        fill={colorsLookup.main.color}
                        stoke="none"
                        ></path>

                    {/if}

                {/if}

                <text
                bind:contentRect={labelRect}
                text-anchor="start"
                x=0
                y=0    
                fill={"white"}
                >{(changeCalc > 0 ? "+" : "")+addThousandsSeparator(roundNumber(changeCalc, indicator.metadata.decimalPlaces))}</text>
            
            
            </g>

        </g>

    </svg>

</div>



<style>

svg {
    overflow: visible;
}




</style>