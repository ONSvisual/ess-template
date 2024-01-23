<script>

import { addThousandsSeparator, roundNumber } from "$lib/utils";

export let yDomainZeroBaseline, y, selectedIndicator, yAxisMaxTickWidth;

$: yDistance = Math.abs(yDomainZeroBaseline[1] - yDomainZeroBaseline[0]);
$: yDistancePowerBelow = 10**Math.floor(Math.log10(yDistance));

$: tickInterval = yDistance / yDistancePowerBelow <= 1.5 ? yDistancePowerBelow/5 :
                    yDistance / yDistancePowerBelow <= 3 ? yDistancePowerBelow/2 :
                    yDistance / yDistancePowerBelow <= 6 ? yDistancePowerBelow :
                    yDistancePowerBelow*2;            

let ticks = [];

$: {

    ticks = [];
    for (let i = Math.ceil(yDomainZeroBaseline[0]); i <= Math.floor(yDomainZeroBaseline[1]); i++) { if (i % tickInterval == 0) {ticks.push(i)} }
};

let ticksWidthArray = [];

$: console.log(ticksWidthArray);

$: yAxisMaxTickWidth = ticksWidthArray.length > 0 ? Math.max(...ticksWidthArray.map((e) => e.width)) : yAxisMaxTickWidth;
    
</script>
    
<g class="y-axis-container">

    <line
    x1=0
    x2=0
    y1={y(yDomainZeroBaseline[1])}
    y2={y(yDomainZeroBaseline[0])}
    stroke="black"
    ></line>

    {#each ticks as d, i}

        <g class="tick">

            <line
            x1=0
            x2=-8
            y1={y(d)}
            y2={y(d)}
            stroke="#222"
            ></line>

            <text
            bind:contentRect={ticksWidthArray[i]}
            text-anchor="end"
            x={-10}
            y={y(d)+5}
            >{selectedIndicator.metadata.prefix+addThousandsSeparator(d)+selectedIndicator.metadata.suffix}</text>

        </g>

    {/each}

</g>