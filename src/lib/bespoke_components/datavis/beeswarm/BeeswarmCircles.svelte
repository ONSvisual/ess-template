<script>

import BackgroundCircle from "$lib/bespoke_components/datavis/beeswarm/BackgroundCircle.svelte";
import PrimaryCircle from "$lib/bespoke_components/datavis/beeswarm/PrimaryCircle.svelte";
import Label from "$lib/bespoke_components/datavis/beeswarm/Label.svelte";
import HoverLabel from "$lib/bespoke_components/datavis/beeswarm/HoverLabel.svelte";

import { AccurateBeeswarm } from 'accurate-beeswarm-plot';
import { scaleLinear } from 'd3-scale';
import labelplacer from 'labelplacer';

import { getContext } from 'svelte';

export let selectedArea, geogLevel, filteredIndicatorData, padding, chartWidth, spaceForOutliers, x, xDomainZeroBaselineTicked, width, valuesOutsideXDomain, visiblesAreasWithDataCodes, visibleAreasWithData, chosenRelatedAreasArray, sameRegionAreasCodes, selectedIndicator;

$: console.log(backgroundCircleData);

let areasArray = getContext("areasArray");

$: geogLevelAreaCodes = areasArray.filter((e) => geogLevel === "localAuthorities" ? (["lower", "upper"].includes(selectedArea.geogLevel) ? selectedArea.geogLevel === e.geogLevel : "lower" === e.geogLevel) : ["country", "region", "other"].includes(e.geogLevel)).map((e) => e.areacd);

$: height = {localAuthorities: 250, countriesAndRegions: 40}[geogLevel];

$: chartHeight = height - padding.top - padding.bottom;

$: filteredIndicatorDataForGeogLevel = filteredIndicatorData.filter((e) => geogLevelAreaCodes.includes(e.areacd)).map((e) => ({
    ...e,
    xPosition: e.value < xDomainZeroBaselineTicked[0] ? -spaceForOutliers/2 : e.value > xDomainZeroBaselineTicked[1] ? chartWidth + spaceForOutliers/2 : x(e.value)
}))
$: filteredIndicatorDataForGeogLevelCodes = filteredIndicatorDataForGeogLevel.map((e) => e.areacd);

$: visiblesAreasWithDataAdded = visibleAreasWithData.filter((e) => filteredIndicatorDataForGeogLevelCodes.includes(e.areacd) && !["similar", "sameRegion"].includes(e.role)).map((e, i) => ({
    ...e,
    value: filteredIndicatorDataForGeogLevel.find((el) => el.areacd === e.areacd).value,
}));



$: backgroundCircleData = new AccurateBeeswarm(filteredIndicatorDataForGeogLevel, 5, d=> d.xPosition).oneSided().calculateYPositions().sort((a,b) => Math.random() - Math.random());

$: primaryCircleData = new AccurateBeeswarm(visiblesAreasWithDataAdded, 8, d => x(d.value)).oneSided().calculateYPositions();

$: yDomain = [0, Math.max(...backgroundCircleData.map((e) => e.y))];

$: y = scaleLinear()
	.domain(yDomain)
	.range([chartHeight, 0]);

$: labelsDataArray = labelplacer(primaryCircleData, [-spaceForOutliers, chartWidth+spaceForOutliers], d => d.x,  d => 20+d.datum.areanm.length*9);

let hoverId;

</script>

{#if geogLevel === "localAuthorities" || primaryCircleData.length > 0}

    <svg
    {width}
    height={height+(primaryCircleData.length > 0 ? 10 : 0)}
    >

        <g transform="translate({padding.left+(valuesOutsideXDomain[0] ? spaceForOutliers : 0)},{padding.top})">

            {#if geogLevel === "localAuthorities"}

                <g class="background-circles-group" opacity=0.7>

                    {#each backgroundCircleData as circle, index}

                        <BackgroundCircle
                        bind:hoverId={hoverId}
                        length={backgroundCircleData.length}
                        {index}
                        {circle}
                        {y}
                        ></BackgroundCircle>

                    {/each}

                </g>

            {/if}

            {#if chosenRelatedAreasArray.includes("sameRegion")}

                    {#each backgroundCircleData.filter((e) => sameRegionAreasCodes.includes(e.datum.areacd)) as circle}

                        <circle
                        cx={circle.x}
                        cy={y(circle.y)}
                        r=7
                        stroke="white"
                        fill="#545454"
                        fill-opacity=1
                        stroke-width="1.5px"
                        pointer-events="none"
                        ></circle>
                
                    {/each}

            {/if}

            <g class="primary-circles-group" transform="translate(0,0)">

                {#each primaryCircleData as circle}

                    <PrimaryCircle
                    {hoverId}
                    {circle}
                    {chartHeight}
                    ></PrimaryCircle>
                    

                {/each}

            </g>

            <g class="labels-group" transform="translate(0,{chartHeight+33})">

                {#each labelsDataArray as label, i} 

                    <Label
                    {hoverId}
                    {label}
                    ></Label>

                {/each}


            </g>

            <g class="selected-label-group">

                {#each backgroundCircleData.filter((e) => e.datum.areacd === hoverId) as circle, index}

                    <HoverLabel
                    {selectedIndicator}
                    {circle}
                    {y}
                    ></HoverLabel>


                {/each}

            </g>

        </g>

    </svg>

{/if}


<style>

svg {
    overflow: visible;
}

</style>