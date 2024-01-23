<script>

import { addThousandsSeparator, roundNumber } from "$lib/utils";

export let xDomainZeroBaselineTicked, x, selectedIndicator, chartWidth, valuesOutsideXDomain, spaceForOutliers;

$: xDistance = Math.abs(xDomainZeroBaselineTicked[1] - xDomainZeroBaselineTicked[0]);
$: xDistancePowerBelow = 10**Math.floor(Math.log10(xDistance));

$: tickInterval = xDistance / xDistancePowerBelow <= 1.5 ? xDistancePowerBelow/5 :
                    xDistance / xDistancePowerBelow <= 3 ? xDistancePowerBelow/2 :
                    xDistance / xDistancePowerBelow <= 6 ? xDistancePowerBelow :
                    xDistancePowerBelow*2;            

let ticks = [];

$: {

    ticks = [];
    for (let i = Math.ceil(xDomainZeroBaselineTicked[0]); i <= Math.floor(xDomainZeroBaselineTicked[1]); i++) { if (i % tickInterval == 0) {ticks.push(i)} }
};

$: console.log(xDomainZeroBaselineTicked)
    
</script>
    
<g class="y-axis-container">

    <line
    y1=0
    y2=0
    x1={x(xDomainZeroBaselineTicked[1])}
    x2={x(xDomainZeroBaselineTicked[0])}
    stroke="black"
    ></line>

    {#if valuesOutsideXDomain[0]}

        <g transform="translate({-spaceForOutliers/2},0)"
        >

            <path
            d="M 15 0 l{spaceForOutliers/4-20} 0 l3 -6 l6 12 l3 -6 l{spaceForOutliers/4-20} 0"
            stroke="#222"
            fill="none"
            ></path>

            <line
            x1=-3
            x2=3
            stroke="#222"
            ></line>

            <line
            y1=0
            y2=8
            stroke="#222"
            ></line>

            <text
            x=-20
            text-anchor="start"
            y={24}
            >{"<"+selectedIndicator.metadata.prefix+addThousandsSeparator(ticks[0])+selectedIndicator.metadata.suffix}</text>

        </g>

    {/if}

    {#if valuesOutsideXDomain[1]}

        <g transform="translate({chartWidth + spaceForOutliers/2},0)"
        >

            <path
            transform="translate({-spaceForOutliers/2},0)"
            d="M 15 0 l{spaceForOutliers/4-20} 0 l3 -6 l6 12 l3 -6 l{spaceForOutliers/4-20} 0"
            stroke="#222"
            fill="none"

            ></path>

            <line
            x1=-3
            x2=3
            stroke="#222"
            ></line>

            <line
            y1=0
            y2=8
            stroke="#222"
            ></line>

            <text
            x=20
            text-anchor="end"
            y={24}
            >{">"+selectedIndicator.metadata.prefix+addThousandsSeparator(ticks[ticks.length-1])+selectedIndicator.metadata.suffix}</text>

        </g>

    {/if}



    {#each ticks as d, i}

        {#if (!valuesOutsideXDomain[1] || i != ticks.length-1) && (!valuesOutsideXDomain[0] || i != 0)}

            <g class="tick">

                <line
                y1=0
                y2=8
                x1={x(d)}
                x2={x(d)}
                stroke="#222"
                ></line>

                <text
                text-anchor="middle"
                y={24}
                x={x(d)}
                >{selectedIndicator.metadata.prefix+addThousandsSeparator(d)+selectedIndicator.metadata.suffix}</text>

            </g>

        {/if}

    {/each}

</g>