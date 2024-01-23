<script>

import { NavSection } from "@onsvisual/svelte-components";
import IndicatorRow from "$lib/bespoke_components/area_page/IndicatorRow.svelte";
import Divider from "$lib/bespoke_components/other/Divider.svelte";

export let topic, selectedArea, sameGeogLevelAreasCodes;

let topicUppercase = topic.name[0].toUpperCase()+topic.name.substring(1);

let hoverId, hoverIndicatorId;

</script>

<div class="topic-section-container">

<NavSection title={topicUppercase}>

    <div class="sticky">

        <span class="selected-area-key">{selectedArea.areanm}</span>
        <span class="median-area-key">{"Median of all "+{lower: "local authorities", upper: "local authorities", region: "regions", countries: "countries", other: "areas"}[selectedArea.geogLevel]}</span>

    </div>

    {#each topic.subTopics as subTopic} 

        <div class="sub-topic-container">

            <Divider 
            orientation="vertical"
            ></Divider>

            <h4 class="sub-topic-header">{subTopic.name[0].toUpperCase()+subTopic.name.substring(1)}</h4>

            {#each subTopic.indicators as indicator}

                <IndicatorRow
                {indicator}
                {selectedArea}
                {sameGeogLevelAreasCodes}
                bind:hoverId={hoverId}
                bind:hoverIndicatorId={hoverIndicatorId}
                ></IndicatorRow>

            {/each}  

        </div>

    {/each}

</NavSection>

</div>





<style>

.topic-section-container {
    margin: 100px 0px 0px 0px;
}

.sub-topic-header {
    font-weight: normal;
    padding: 0px;
    margin: 10px 0px 0px 0px;
}

.sticky {
    margin: 10px 0px;
    width: 100%;
    background-color: white;
    padding: 15px 0px;
    position: sticky;
    top: 0px;
    z-index: 10;
}

.selected-area-key {
    background-color: #003C57;
    color: white;
    border-radius: 2px;
    padding: 5px;
    margin: 0px 5px 0px 0px;
}

.median-area-key {
    background-color: #F66068;
    color: white;
    border-radius: 2px;
    padding: 5px;
    margin: 0px 5px 0px 0px;
}



</style>