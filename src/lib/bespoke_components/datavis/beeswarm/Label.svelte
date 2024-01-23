<script>

import { colorsLookup } from  "$lib/config";

export let label, hoverId;

let labelRect;

$: backgroundColor = colorsLookup[label.datum.datum.areacd === hoverId ? "selected" : label.datum.datum.role in colorsLookup ? label.datum.datum.role : "default"].color;
$: textColor = colorsLookup[label.datum.datum.areacd === hoverId ? "selected" : label.datum.datum.role in colorsLookup ? label.datum.datum.role : "default"].contrast;

$: labelArray = [label.datum.datum.areanm];

</script>

{#if !hoverId}

    <g class="label-container" transform="translate({label.y},0)"
    opacity={hoverId ? 0.2 : 1}>

        {#if labelRect}

            <rect
            x={-3-labelRect.width/2}
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
                text-anchor="middle"
                y={18*i}
                fill={textColor}
                >{line}</text>

            {/each}

        </g>

    </g>

{/if}







<style>







</style>