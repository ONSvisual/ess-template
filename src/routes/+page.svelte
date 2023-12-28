<script>
    import { base } from "$app/paths";
    import { Breadcrumb, Titleblock, Cards, Card, Button } from "@onsvisual/svelte-components";
</script>

<Breadcrumb links={[{label: "Home", href: "/"}, {label: "Explore subnational statistics"}]} />
<Titleblock title="Explore subnational statistics">
    Get facts and figures about local areas within the United Kingdom, and see how they compare over time
</Titleblock>

<Cards colwidth="wide">
    <Card title="Explore indicators">
        <p>Discover national and regional trends with maps, charts and headline indicators</p>
        <Button href="{base}/indicators" icon="arrow" iconPosition="after">Explore</Button>
    </Card>
    <Card title="Find a local area">
        <p>Get localised data, insights and trends for local authorities and regions</p>
        <Button href="{base}/areas" icon="arrow" iconPosition="after">Find</Button>
    </Card>
</Cards>