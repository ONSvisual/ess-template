<script>

import Button from "$lib/bespoke_components/interactions/Button/Button.svelte";
import Checkbox from "$lib/bespoke_components/interactions/Checkbox.svelte";
import Divider from "$lib/bespoke_components/other/Divider.svelte";
import Select from "$lib/bespoke_components/interactions/Select.svelte";
import VisibleAreasKey from "$lib/bespoke_components/interactions/VisibleAreasKey.svelte";

import { haveCommonElements} from "$lib/utils";
import { demographicallySimilarObject } from  "$lib/config";

import { getContext } from 'svelte';

export let selectedArea, sameRegionsLabel, areasCodesForAreasWithData, selectedAndRelatedAreas, selectedAndRelatedAreasCodes, sameRegionAreasCodes,    visibleAreaTypesWithData;
export let chosenParentAreasArray, chosenRelatedAreasArray, chosenSameRegionArray, chosenCountriesArray, chosenRegionsArray, chosenAllOtherArray;

let displayModal = false;

const onClickEventOpen = () => { displayModal = true;  }
const onClickEventClose = () => { displayModal = false;  }


let searchText = "";

$: regex = searchText ? new RegExp(searchText, 'i') : null;

let areasArray = getContext("areasArray");

$: areasWithData = areasArray.filter((e) => areasCodesForAreasWithData.includes(e.areacd) & e.areacd != selectedArea.areacd);
$: searchedForAreasWithData = regex ? areasWithData.filter((e) => regex.test(e.areanm)) : areasWithData;

$: parentAreasOptionsArray = areasWithData.filter((e) => selectedAndRelatedAreasCodes.includes(e.areacd));

$: relatedAreasOptionsArray = [
    haveCommonElements(areasCodesForAreasWithData, sameRegionAreasCodes) && sameRegionsLabel ? {id: "sameRegion", label: sameRegionsLabel } : undefined,
    //demographicallySimilarObject[selectedArea.geogLevel] ? {id: "similar", label: "Demographically similar areas"} : undefined
].filter((e) => e);

$: sameRegionAreasWithData = searchedForAreasWithData.filter((e) => sameRegionAreasCodes.includes(e.areacd) && !selectedAndRelatedAreasCodes.includes(e.areacd));
$: countriesWithData = searchedForAreasWithData.filter((e) => e.geogLevel === "country" && !selectedAndRelatedAreasCodes.includes(e.areacd));
$: regionsWithData = searchedForAreasWithData.filter((e) => e.geogLevel === "region" && !selectedAndRelatedAreasCodes.includes(e.areacd));
$: allOtherAreasWithData = searchedForAreasWithData.filter((e) => e.geogLevel != "other" && !sameRegionAreasCodes.includes(e.areacd) && !["country", "region"].includes(e.geogLevel) && !selectedAndRelatedAreasCodes.includes(e.areacd));

</script>

{#if !displayModal}

    <Button on:click="{onClickEventOpen}" small={true} icon="edit" variant="secondary" strokeWidth="1.5px" stroke="currentcolor" fill="none">Add/remove comparison areas</Button>

{/if}

{#if displayModal}

    <div class="add-comparison-areas-container">

        <div class="row-container title-exit-button-container">
        
            <p class="modal-title">Add/remove comparison areas</p>

            <Button on:click="{onClickEventClose}" small={true} icon="cross" variant="secondary" stroke="currentcolor" fill="none" strokeWidth="2.5px"></Button>

        </div>

        <VisibleAreasKey
        {visibleAreaTypesWithData}
        bind:chosenParentAreasArray={chosenParentAreasArray}
        bind:chosenRelatedAreasArray={chosenRelatedAreasArray}
        bind:chosenSameRegionArray={chosenSameRegionArray}
        bind:chosenCountriesArray={chosenCountriesArray}
        bind:chosenRegionsArray={chosenRegionsArray}
        bind:chosenAllOtherArray={chosenAllOtherArray}
        ></VisibleAreasKey>

        <Divider 
        orientation="vertical"
        ></Divider>

        <div class="row-container parent-related-checkboxes-container">

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

                <Divider 
                orientation="horizontal"
                ></Divider>

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

        <div class="sticky-container">

            <div class="sticky">

                <Select
                bind:searchText={searchText}
                ></Select>

            </div>

            {#if sameRegionAreasWithData.length > 0}

                <div class="checkbox-grid-container">

                    <Checkbox
                    title={sameRegionsLabel+":"}
                    name="parent-areas-checkbox-selection"
                    optionsArray={sameRegionAreasWithData}
                    bind:valueArray={chosenSameRegionArray}
                    labelKey="areanm"
                    idKey="areacd"
                    columns=2
                    ></Checkbox>

                </div>

                <Divider 
                orientation="vertical"
                ></Divider>

            {/if}

            {#if countriesWithData.length > 0 && selectedArea.geogLevel != "country"}

                <div class="checkbox-grid-container">

                    <Checkbox
                    title="Countries:"
                    name="parent-areas-checkbox-selection"
                    optionsArray={countriesWithData}
                    bind:valueArray={chosenCountriesArray}
                    labelKey="areanm"
                    idKey="areacd"
                    columns=2
                    ></Checkbox>

                </div>

                <Divider 
                orientation="vertical"
                ></Divider>

            {/if}

            {#if regionsWithData.length > 0 && selectedArea.geogLevel != "region"}

                <div class="checkbox-grid-container">

                    <Checkbox
                    title="Regions of England:"
                    name="parent-areas-checkbox-selection"
                    optionsArray={regionsWithData}
                    bind:valueArray={chosenRegionsArray}
                    labelKey="areanm"
                    idKey="areacd"
                    columns=2
                    ></Checkbox>

                </div>

                <Divider 
                orientation="vertical"
                ></Divider>

            {/if}

            {#if allOtherAreasWithData.length > 0}

                <div class="checkbox-grid-container">

                    <Checkbox
                    title="All other areas:"
                    name="parent-areas-checkbox-selection"
                    optionsArray={allOtherAreasWithData}
                    bind:valueArray={chosenAllOtherArray}
                    labelKey="areanm"
                    idKey="areacd"
                    columns=2
                    ></Checkbox>

                </div>

            {/if}

        </div>

    </div>




{/if}



<style>

.add-comparison-areas-container {
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 20px;
    background-color: #f0f0f0;
}

.modal-title {
    font-weight: bold;
    padding: 0px;
    margin: 0px;
}

.row-container {
    margin: 0px 0px 20px 0px;
    padding: 0px;
    display: flex;
}

.title-exit-button-container {
    justify-content: space-between;
    align-items: center;
}

.parent-related-checkboxes-container {
    gap: 20px;
}

.column-container {
    flex: 1;
    flex-shrink: 0;
}

.sticky-container {
    max-height: 600px;
    overflow: auto;
}

.sticky {
    padding: 5px 0px;
    position: sticky;
    top: 0px;
    background-color: #f0f0f0;
}

.checkbox-grid-container {
    margin: 20px 0px;
}



</style>