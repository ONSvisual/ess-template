<script>

import { colorsLookup } from "$lib/config";

export let circle, chartHeight, hoverId;

$: backgroundColor = colorsLookup[circle.datum.role in colorsLookup ? circle.datum.role : "default"].color;
$: textColor = colorsLookup[circle.datum.role in colorsLookup ? circle.datum.role : "default"].contrast;

</script>

<g transform="translate({circle.x},{chartHeight-circle.y})"
opacity={hoverId ? 0.2 : 1}
>

    {#if ["parent", "country", "uk"].includes(circle.datum.role)}

        <rect
        transform={["country", "uk"].includes(circle.datum.role) ? "rotate(45)" : null }
        x=-7
        y=-7
        width=14
        height=14
        fill={backgroundColor}
        stroke="white"
        stroke-width="1.5px"
        ></rect>

    {:else}

        <circle
        r={7}
        stroke="white"
        stroke-width="1.5px"
        fill={backgroundColor}
        ></circle>

    {/if}

</g>
