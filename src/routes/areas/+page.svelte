<script>
    import { base } from "$app/paths";
    import { Breadcrumb, Titleblock } from "@onsvisual/svelte-components";
    import AreaNav from "./AreaNav.svelte";
</script>

<Breadcrumb links={[{label: "Home", href: "/"}, {label: "Explore subnational statistics", href: `${base}/`}, {label: "Find a local area"}]} />
<Titleblock title="Find a local area">
    Get localised data, insights and trends for local authorities and regions
</Titleblock>
<AreaNav open/>