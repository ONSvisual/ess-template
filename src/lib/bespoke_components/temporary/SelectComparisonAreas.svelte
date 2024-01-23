<script>

import ToggleIcon from "$lib/bespoke_components/temporary/ToggleIcon.svelte";
import Checkbox from "$lib/bespoke_components/interactions/Checkbox.svelte";
import Select from "$lib/bespoke_components/temporary/Select.svelte";

import { haveCommonElements } from "$lib/utils";




import { getContext } from 'svelte';

export let selectedArea, selectedAndRelatedAreas, areasWithData, globalVisibleAreasTracker, visibleAreas, chosenParentAreasArray, chosenRelatedAreasArray, sameRegionAreasCodes;

let twistyOpen = false, hover = false;

const mouseoverEvent = () => { hover = true; }
const mouseleaveEvent = () => { hover = false; }

const clickEvent = () => { twistyOpen = !twistyOpen;  }

//

$: parentAreasOptionsArray = selectedAndRelatedAreas.filter((e) => e.role != "main" && areasWithData.includes(e.areacd));

$: descriptionOfAreaPlural = {
    lower: "areas",
    upper: "areas",
    region: "regions",
    country: "countries"
}[selectedArea.geogLevel];

$: theBoolean = [].includes(selectedArea.parentnm) ? "the " : "";

$: relatedAreasOptionsArray = [
    haveCommonElements(areasWithData, sameRegionAreasCodes) && !["other", "country"].includes(selectedArea.geogLevel) ? {id: "sameRegion", label: "Other "+descriptionOfAreaPlural+" in "+theBoolean+selectedArea.parentnm} : undefined, 
    !["other", "country", "region"].includes(selectedArea.geogLevel) ? {id: "similar", label: "Demographically similar areas"} : undefined
].filter((e) => e != undefined);

let xxx;

</script>

<div class="select-comparison-areas-container">

    <p class="twisty-label {twistyOpen ? "twisty-label-open": ""}" on:mouseover={mouseoverEvent} on:mouseleave={mouseleaveEvent} on:click={clickEvent}><ToggleIcon {twistyOpen} {hover}></ToggleIcon>Add/remove comparison areas</p>

    {#if twistyOpen}

        <div class="row-container">

            {#if parentAreasOptionsArray.length > 0}

                <div class="column-container">

                    <Checkbox
                    title="Parent areas:"
                    name="parent-areas-checkbox-selection"
                    optionsArray={parentAreasOptionsArray}
                    bind:valueArray={chosenParentAreasArray}
                    labelKey="areanm"
                    idKey="areacd"
                    ></Checkbox>

                </div>

            {/if}

            {#if parentAreasOptionsArray.length > 0 && relatedAreasOptionsArray.length > 0}


            {/if}

            {#if relatedAreasOptionsArray.length > 0}

                <div class="column-container">

                    <Checkbox
                    title="Related areas:"
                    name="related-areas-checkbox-selection"
                    optionsArray={relatedAreasOptionsArray}
                    bind:valueArray={chosenRelatedAreasArray}
                    labelKey="label"
                    idKey="id"
                    ></Checkbox>

                </div>

            {/if}

        </div>

        <Divider 
        orientation="vertical"
        ></Divider>

        <div class="row-container">

            <div class="column-container">

                <Checkbox
                title="Related areas:"
                name="related-areas-checkbox-selection"
                optionsArray={relatedAreasOptionsArray}
                bind:valueArray={chosenRelatedAreasArray}
                labelKey="label"
                idKey="id"
                ></Checkbox>

                

            </div>






        </div>


    {/if}
    

</div>

<style>


.select-comparison-areas-container {
    margin: 10px 0px 0px 0px;
    padding: 0px;
}

.twisty-label {
    margin: 0px;
    padding: 5px 10px 10px 0px;
    display: inline-block;
    font-weight: bold;
    color: #206095;
    cursor: pointer;
    text-underline-position: under;
    transform: translateY(-1px);
    font-size: 18px;
}

.twisty-label-open {
    background-color: #fbc900;
    box-shadow: 0 -2px #fbc900, 0 4px #222;
    color: #222;
    outline: 3px solid transparent;
    outline-offset: 1px;
}

.twisty-label:hover {
    text-decoration: underline;
    color: #222;
}

.row-container {
    margin: 10px 0px 10px 0px;
    padding: 0px;
    display: flex;
    gap: 20px;
}

.column-container {
    flex: 1;
    flex-shrink: 0;
}


</style>