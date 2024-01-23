<script>

import { scaleLinear } from 'd3-scale';

import AxisX from "$lib/bespoke_components/datavis/beeswarm/AxisX.svelte";
import BeeswarmCircles from "$lib/bespoke_components/datavis/beeswarm/BeeswarmCircles.svelte";

export let sameGeogLevelAreasCodes, selectedArea, visibleAreasWithData, visiblesAreasWithDataCodes, filteredIndicatorDataForVisibleAreas, filteredIndicatorData, selectedIndicator, selectedIndicatorCalculations, chosenRelatedAreasArray, sameRegionAreasCodes;

let width = 1000;

let xAxisSVGHeight = 50;

$: padding = {top: 15, right: 30, bottom: 15, left: 30};

$: spaceForOutliers = 90;

$: chartWidth = width - padding.left - padding.right - (valuesOutsideXDomain[0] ? spaceForOutliers : 0) - (valuesOutsideXDomain[1] ? spaceForOutliers : 0);

//new AccurateBeeswarm(backgroundCirclesStep1, circleRadius.background[chosenId3 === 0 ? 'split' : 'full'], (d) => (x(d.zScore) > scaleWidth ? scaleWidth + rowSvgOuterPadding.areaSpaceBeyondXScale[chosenId3 === 0 ? "split" : "full"]/2 : x(d.zScore) < 0 ? -rowSvgOuterPadding.areaSpaceBeyondXScale[chosenId3 === 0 ? "split" : "full"]/2 : x(d.zScore))).calculateYPositions();


$: xDomainRaw = [0.95*Math.min(...values), 1.05*Math.max(...values)];

$: xDomainAdj = selectedIndicatorCalculations ? [selectedIndicatorCalculations.med - 3*selectedIndicatorCalculations.mad, parseFloat(selectedIndicatorCalculations.med) + 3*selectedIndicatorCalculations.mad] : xDomainRaw;

$: xDomainZeroBaseline = selectedIndicator.metadata.canBeNegative === "F" ? [Math.max(0, xDomainAdj[0]), xDomainAdj[1]] : xDomainAdj;

$: xDistance = Math.abs(xDomainZeroBaseline[1] - xDomainZeroBaseline[0]);
$: xDistancePowerBelow = 10**Math.floor(Math.log10(xDistance));

$: tickInterval = xDistance / xDistancePowerBelow <= 1.5 ? xDistancePowerBelow/5 :
                    xDistance / xDistancePowerBelow <= 3 ? xDistancePowerBelow/2 :
                    xDistance / xDistancePowerBelow <= 6 ? xDistancePowerBelow :
                    xDistancePowerBelow*2;            

let ticks = [];

$: {

    ticks = [];
    for (let i = Math.ceil(xDomainZeroBaseline[0]-tickInterval); i <= Math.floor(xDomainZeroBaseline[1]+tickInterval); i++) { if (i % tickInterval == 0) {ticks.push(i)} }
};

$: xDomainZeroBaselineTicked = ticks.length === 0 ? xDomainZeroBaseline : [selectedIndicator.metadata.canBeNegative === "F" ? Math.max(0, ticks[0]) : ticks[0], ticks[ticks.length-1]];

$: values = filteredIndicatorData.map((e) => e.value);

$: valuesOutsideXDomain = [values.some((e) => e < xDomainZeroBaselineTicked[0]), values.some((e) => e > xDomainZeroBaselineTicked[1])];

$: x = scaleLinear()
	.domain(xDomainZeroBaselineTicked)
	.range([0, chartWidth]);


/*$: circleDataStep1 = [...filteredIndicatorData.filter((e) => sameGeogLevelAreasCodes.includes(e.areacd) && !visiblesAreasWithDataCodes.includes(e.areacd)),... visibleAreasWithData.map((e) => ({
    areacd: e.areacd,
    role: e.role,
    value: filteredIndicatorDataForVisibleAreas.find((el) => el.areacd === e.areacd).value
}))];

$: circleDataStep2 = new AccurateBeeswarm(circleDataStep1, 5, d => x(d.value)).oneSided().calculateYPositions();

$: yDomain = [0, Math.max(...circleDataStep2.map((e) => e.y))];

$: y = scaleLinear()
	.domain(yDomain)
	.range([chartHeight, 0]);*/

</script>

<div class="svgs-container" bind:clientWidth={width}>

    <div class="beeswarms-container">

        {#each ["localAuthorities", "countriesAndRegions"] as geogLevel}

            <BeeswarmCircles
            {selectedIndicator}
            {selectedArea}
            {geogLevel}
            {valuesOutsideXDomain}
            {filteredIndicatorData}
            {padding}
            {chartWidth}
            {spaceForOutliers}
            {x}
            {xDomainZeroBaselineTicked}
            {width}
            {visiblesAreasWithDataCodes}
            {visibleAreasWithData}
            {chosenRelatedAreasArray}
            {sameRegionAreasCodes}
            ></BeeswarmCircles>

        {/each}
        
    </div>

    <svg
    {width}
    height={xAxisSVGHeight}
    >
    
        <g transform="translate({padding.left+(valuesOutsideXDomain[0] ? spaceForOutliers : 0)},25)">

            <AxisX
            {valuesOutsideXDomain}
            {spaceForOutliers}
            {x}
            {xDomainZeroBaselineTicked}
            {selectedIndicator}
            {chartWidth}
            ></AxisX>

        </g>

    </svg>

</div>




<style>

.svgs-container {
    margin: 20px 0px 0px 0px;
}




</style>