<script>

import { colorsLookup } from "$lib/config";
import { line } from "d3-shape";

export let area, x, y, xDomain, showPoints, hoverId;

$: pathFunction = line()
    .x((d) => { return x(d.xDomainNumb); })
    .y((d) => { return y(d.value); });

$: backgroundColor = colorsLookup[area.role in colorsLookup ? area.role : "default"].color;
$: textColor = colorsLookup[area.role in colorsLookup ? area.role : "default"].contrast;

const onMouseEnterEvent = () => { hoverId = area.areacd };

const onMouseLeaveEvent = () => { hoverId = undefined };

</script>

<path
d={pathFunction(area.data)}
fill="none"
stroke={backgroundColor}
stroke-width={["similar", "sameRegion"].includes(area.role) ? "2px" : "3px" }
opacity={hoverId === undefined ? (["similar", "sameRegion"].includes(area.role) ? 0.75: 1) : 0.15}
></path>

{#each area.data as point}

    {#if showPoints || (point.xDomainNumb === xDomain[1] && !["similar", "sameRegion"].includes(area.role))}

        <g transform="translate({x(point.xDomainNumb)},{y(point.value)})"
        opacity={hoverId === undefined ? (["similar", "sameRegion"].includes(area.role) ? 0.75: 1) : 0.15}
        >

            {#if ["parent", "country", "uk"].includes(area.role)}

                <rect
                transform={["country", "uk"].includes(area.role) ? "rotate(45)" : null }
                x=-4
                y=-4
                width=8
                height=8
                fill={backgroundColor}
                stroke="white"
                stroke-width="1.5px"
                ></rect>

            {:else}

                <circle
                r={4}
                stroke="white"
                stroke-width="1.5px"
                fill={backgroundColor}
                ></circle>

            {/if}

        </g>

        {/if}

{/each}

<path
on:mouseenter={onMouseEnterEvent}
on:mouseleave={onMouseLeaveEvent}
d={pathFunction(area.data)}
fill="none"
stroke={"black"}
stroke-width={"20px"}
opacity={0}
></path>



<style>





</style>