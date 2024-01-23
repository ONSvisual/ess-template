<script>

import { colorsLookup } from "$lib/config";
import { line } from "d3-shape";

export let area, x, y, hoverId;

$: pathFunction = line()
    .x((d) => { return x(d.xDomainNumb); })
    .y((d) => { return y(d.value); });

$: console.log(area.data)

$: wrappedConfidenceIntervalArray = [...area.data.map((e) => ({
    xDomainNumb: e.xDomainNumb,
    value: e.uci
})),...[...area.data].reverse().map((e) => ({
    xDomainNumb: e.xDomainNumb,
    value: e.lci
}))].filter((e) => e.value != "NA");

$: console.log(wrappedConfidenceIntervalArray)
$: console.log("hello");


</script>

{#if wrappedConfidenceIntervalArray}

    <path
    d={pathFunction(wrappedConfidenceIntervalArray)}
    stroke="none"
    fill={colorsLookup.selected.color}
    pointer-events="none"
    opacity=0.25
    ></path>

{/if}


<path
d={pathFunction(area.data)}
fill="none"
stroke={colorsLookup.selected.color}
stroke-width="3px"
pointer-events="none"
></path>

{#each area.data as point}

    <g transform="translate({x(point.xDomainNumb)},{y(point.value)})"
    >

        {#if ["parent", "country", "uk"].includes(area.role)}

            <rect
            transform={["country", "uk"].includes(area.role) ? "rotate(45)" : null }
            x=-4
            y=-4
            width=8
            height=8
            fill={colorsLookup.selected.color}
            stroke="white"
            stroke-width="1.5px"
            pointer-events="none"
            ></rect>

        {:else}

            <circle
            r={4}
            stroke="white"
            stroke-width="1.5px"
            fill={colorsLookup.selected.color}
            pointer-events="none"
            ></circle>

        {/if}

    </g>

{/each}


<style>





</style>