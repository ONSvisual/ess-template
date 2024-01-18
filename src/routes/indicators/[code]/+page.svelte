<script>
  import { base } from "$app/paths";

  import {
    Breadcrumb,
    Titleblock,
    NavSections,
    NavSection,
  } from "@onsvisual/svelte-components";
  import { Dropdown, Table } from "@onsvisual/svelte-components";
  import { LineChart } from "@onsvisual/svelte-charts";

  import Subhead from "$lib/layout/partial/Subhead.svelte";
  import { toProperCase } from "$lib/utils.js";
  import { getContext } from "svelte";

  export let data;

  const areasGeogLevel = getContext("areasGeogLevel");
  const indicators = getContext("indicators");
  const indicatorsCalculations = getContext("indicatorsCalculations");
  const indicator = indicators.find(
    (d) => d.label === data.selectedIndicatorName
  );
  const indicatorCalculations = indicatorsCalculations.find(
    (d) => d.code === indicator.code
  );

  let lookups = {
    areaCodeToName: Object.fromEntries(
      data.areas.map((d) => [d.areacd, d.areanm])
    ),
  };

  const geogLevels = [...new Set(areasGeogLevel.map((d) => d.level))];
  lookups.geogLevels = Object.fromEntries(geogLevels.map((d) => [d, []]));
  areasGeogLevel.forEach((d) => lookups.geogLevels[d.level].push(d.areacd));
  lookups.areaToGeogLevel = Object.fromEntries(
    areasGeogLevel.map((d) => [d.areacd, d.level])
  );

  const indicatorAreaCodes = [...new Set(indicator.data.map((d) => d.areacd))];
  const indicatorDates = [];
  for (
    let i = +indicatorCalculations.minXDomain;
    i <= +indicatorCalculations.maxXDomain;
    i++
  ) {
    indicatorDates.push("" + i);
  }
  const indicatorDataLookupByPlaceAndDate = {};
  for (let d of indicator.data) {
    indicatorDataLookupByPlaceAndDate[`${d.areacd}::${d.xDomainNumb}`] = d;
  }

  const tableColumns = [{ key: "areanm", label: "Place", sortable: true }];
  for (
    let i = +indicatorCalculations.minXDomain;
    i <= +indicatorCalculations.maxXDomain;
    i++
  ) {
    tableColumns.push({
      key: "" + i,
      label: "" + i,
      numeric: true,
      sortable: true,
    });
  }

  const tableData = [];
  for (let areacd of indicatorAreaCodes) {
    const tableRow = { areacd, areanm: lookups.areaCodeToName[areacd] };
    for (let date of indicatorDates) {
      tableRow[date] =
        indicatorDataLookupByPlaceAndDate[`${areacd}::${date}`]?.value;
    }
    tableData.push(tableRow);
  }

  const lineChartData = [];
  for (let areacd of indicatorAreaCodes) {
    for (let date of indicatorDates) {
      if (indicatorDataLookupByPlaceAndDate[`${areacd}::${date}`] != null) {
        lineChartData.push({
          date: +date,
          areacd,
          areanm: lookups.areaCodeToName[areacd],
          value: +indicatorDataLookupByPlaceAndDate[`${areacd}::${date}`].value,
        });
      }
    }
  }

  const geogLevelOptions = geogLevels.map((d) => ({ id: d, label: d }));
  let selectedAreaType; // = geogLevelOptions[0];
  $: console.log(selectedAreaType);
  $: filteredTableData = selectedAreaType
    ? tableData.filter(
        (d) => lookups.areaToGeogLevel[d.areacd] === selectedAreaType.id
      )
    : tableData;
  $: filteredLineChartData = selectedAreaType
    ? lineChartData.filter(
        (d) => lookups.areaToGeogLevel[d.areacd] === selectedAreaType.id
      )
    : lineChartData;
  $: console.log(filteredTableData);

  console.log({
    indicators,
    data,
    lookups,
    indicator,
    indicatorCalculations,
  });
</script>

<Breadcrumb
  links={[
    { label: "Home", href: "/" },
    { label: "Explore subnational statistics", href: `${base}/` },
    { label: "Explore indicators", href: `${base}/indicators` },
    { label: "topic" },
  ]}
/>
<Titleblock title="Indicator name">
  <Subhead>{"Indicator information"}</Subhead>
</Titleblock>

<NavSections contentsLabel="Explore this indicator">
  <NavSection title="Get the data">
    <p>Here, you can find information and links to the data.</p>
  </NavSection>

  <NavSection title="Time series">
    <p>TODO look into undefined tick for economic activity rate at year 2004</p>
    <p>TODO: add grey, hover etc. when using Andrew's code</p>
    <div>
      <Dropdown options={geogLevelOptions} bind:value={selectedAreaType} />
      {filteredLineChartData.length}
      {console.log({ filteredLineChartData })}
      {#key filteredLineChartData}
        <div class="chart-container">
          <LineChart
            data={filteredLineChartData}
            xKey="date"
            yKey="value"
            zKey="areanm"
            yMin={null}
            title="Line chart example"
            footer="Source: ONS."
            legend={false}
          />
        </div>
      {/key}
    </div>
  </NavSection>

  <NavSection title="Table">
    <div>
      <Dropdown options={geogLevelOptions} bind:value={selectedAreaType} />
      {filteredTableData.length}
      {#key filteredTableData}
        <!-- A hack to re-create the table -->
        <Table
          data={filteredTableData}
          columns={tableColumns}
          stickyHeader={true}
        />
      {/key}
    </div>
  </NavSection>
</NavSections>

<style>
  section {
    margin-bottom: 80px;
  }

  .chart-container {
    height: 500px;
  }
</style>
