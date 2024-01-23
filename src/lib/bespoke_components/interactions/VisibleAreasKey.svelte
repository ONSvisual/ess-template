<script>

import VisibleArea from "$lib/bespoke_components/interactions/VisibleAreasKey/VisibleArea.svelte";

export let visibleAreaTypesWithData
export let chosenParentAreasArray, chosenRelatedAreasArray, chosenSameRegionArray, chosenCountriesArray, chosenRegionsArray, chosenAllOtherArray;


</script>

<div class="visible-areas-container">

    {#each visibleAreaTypesWithData as areaType}

        <VisibleArea
        {areaType}
        bind:chosenParentAreasArray={chosenParentAreasArray}
        bind:chosenRelatedAreasArray={chosenRelatedAreasArray}
        bind:chosenSameRegionArray={chosenSameRegionArray}
        bind:chosenCountriesArray={chosenCountriesArray}
        bind:chosenRegionsArray={chosenRegionsArray}
        bind:chosenAllOtherArray={chosenAllOtherArray}
        ></VisibleArea>

    {/each}



</div>


<style>

.visible-areas-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 35px;
}

</style>