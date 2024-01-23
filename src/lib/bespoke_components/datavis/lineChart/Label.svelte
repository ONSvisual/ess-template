<script>

import { splitTextIntoRows } from "$lib/utils";
import { colorsLookup } from  "$lib/config";

export let label, chartWidth, labelRect, hoverId;

$: backgroundColor = colorsLookup[label.datum.areacd === hoverId ? "selected" : label.datum.role in colorsLookup ? label.datum.role : "default"].color;
$: textColor = colorsLookup[label.datum.areacd === hoverId ? "selected" : label.datum.role in colorsLookup ? label.datum.role : "default"].contrast;

$: labelArray = label.datum.areanm.length > 25 ? splitTextIntoRows(label.datum.areanm, 2) : [label.datum.areanm];

</script>

{#if (hoverId === label.datum.areacd || !hoverId) }

    <g class="label-container" transform="translate({chartWidth+10},{label.y+(labelArray.length === 2 ? -10 : 0)})">

        {#if labelRect}

            <rect
            x={-3}
            width={labelRect.width+6}
            y={labelRect.y-18}
            height={labelRect.height}
            rx="2px"
            stroke="none"
            fill={backgroundColor}
            ></rect>


        {/if}

        <g bind:contentRect={labelRect}>

            {#each labelArray as line,i}

                <text
                y={18*i}
                fill={textColor}
                >{line}</text>

            {/each}

        </g>

    </g>

{/if}







<style>







</style>