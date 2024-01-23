<script>

import { splitTextIntoRows } from "$lib/utils";
import { colorsLookup } from  "$lib/config";

export let area, chartWidth, y;

$: backgroundColor = colorsLookup.selected.color;
$: textColor = colorsLookup.selected.contrast;

$: labelArray = area.areanm.length > 25 ? splitTextIntoRows(area.areanm, 2) : [area.areanm];

let labelRect;

let yPosition = y(area.data[0].value);

</script>

    <g class="label-container" transform="translate({chartWidth+10},{yPosition+(labelArray.length === 2 ? -10 : 0)})">

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







<style>







</style>