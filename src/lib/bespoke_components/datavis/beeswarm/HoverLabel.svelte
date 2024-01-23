<script>

import { colorsLookup } from "$lib/config";
import { getContext } from 'svelte';
import { addThousandsSeparator, roundNumber } from "$lib/utils";

export let circle, y, selectedIndicator, hoverIndicatorBoolean = true;

let labelRect1, labelRect2;

let areasArray = getContext("areasArray");

$: console.log("hello");

</script>


<circle
cx={circle.x}
cy={y(circle.y)}
r=8
stroke={"white"}
opaci
fill={colorsLookup.selected.color}
pointer-events="none"
></circle>

<g transform="translate({circle.x},{y(circle.y)})">

    {#if hoverIndicatorBoolean}

    {#if labelRect1}

        <rect
        x={-17-labelRect1.width}
        width={labelRect1.width+6}
        y={labelRect1.y+7}
        height={labelRect1.height}
        rx="2px"
        stroke="none"
        pointer-events="none"
        fill={colorsLookup.selected.color}
        ></rect>

    {/if}

    <g bind:contentRect={labelRect1}>

            <text
            y=25
            x=-15
            text-anchor="end"
            fill={colorsLookup.selected.contrast}
            pointer-events="none"
            >{areasArray.find((e) => e.areacd === circle.datum.areacd).areanm}</text>
    </g>

    {/if}

    {#if labelRect2}

        <rect
        x={10}
        width={labelRect2.width+6}
        y={labelRect2.y-28}
        height={labelRect2.height}
        rx="2px"
        stroke="none"
        pointer-events="none"
        fill={colorsLookup.selected.color}
        ></rect>

    {/if}

    <g bind:contentRect={labelRect2}>

        <text
        y=-10
        x=13
        text-anchor="start"
        fill={colorsLookup.selected.contrast}
        pointer-events="none"
        >{selectedIndicator.metadata.prefix+addThousandsSeparator(roundNumber(circle.datum.value, selectedIndicator.metadata.decimalPlaces))+selectedIndicator.metadata.suffix}</text>
            
    </g>
</g>