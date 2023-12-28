<script>
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    import { getContext } from "svelte";
    import { countries, regions } from "$lib/config";
    import { Container, Twisty, Grid, Select } from "@onsvisual/svelte-components";

    export let open = false;

    const areas = getContext("areas");
    const parents = [...regions, ...countries.slice(1)];

    function doSelect(e) {
        goto(`${base}/areas/${e.detail.areacd}`);
    }
    console.log(areas);
</script>

<Container marginBottom={true}>
    <div class="select-container">
        <Select options={areas} mode="search" placeholder="Find an area name" labelKey="areanm" idKey="areacd" on:change={doSelect} autoClear/>
    </div>
    <Twisty title="Browse areas" {open}>
        <Grid colwidth="narrow">
            {#each parents as parent}
            <div>
                <a href="{base}/areas/{parent.code}" class="parent-link">{parent.name}</a>
                {#each areas.filter(p => p.parentcd === parent.code) as area}
                <a href="{base}/areas/{area.areacd}" class="area-link">{area.areanm}</a>
                {/each}
            </div>
            {/each}
        </Grid>
    </Twisty>
</Container>