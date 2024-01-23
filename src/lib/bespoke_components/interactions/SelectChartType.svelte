<script>

import Radio from "$lib/bespoke_components/interactions/Radio.svelte";

export let chosenChartId;

$: chartOptionsArray = [{label: "Time series", multiYear: "Yes"}, {label: "Distribution", multiYear: "No"}, {label: "Map", multiYear: "No"}, {label: "Table", multiYear: "Either"}].filter((e) => e.multiYear != "Yes"  | filteredPeriodsArray.length > 1);



</script>

<Radio
name="select-main-chart-type"
optionsArray={chartOptionsArray}
bind:chosenId={chosenChartId}
></Radio>