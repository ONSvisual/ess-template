<script>

import "@onsvisual/svelte-components/css/main.css";
import "../app.css";
import { page } from "$app/stores";
import { base } from "$app/paths";
import { setContext } from "svelte";
import { domain } from "$lib/config";
import { PhaseBanner, Header, Footer } from "@onsvisual/svelte-components";

export let data;

let similarAreasLookupObject = data.similarAreasLookup.reduce((obj, el) => {  obj[el.areacd] = el.similarlist;  return obj}, {});
let areasGeogInfoObject = data.areasGeogInfo.reduce((obj, el) => {  obj[el.areacd] = el;  return obj}, {});

let areasGeogLevelArray = data.areasGeogLevel;
let areasGeogLevelObject = [...new Set(areasGeogLevelArray.map((el) => el.level))].reduce((obj, el) => {  obj[el] = areasGeogLevelArray.filter((elm) => elm.level === el).map((elm) => elm.areacd);  return obj}, {});

let areasParentsLookupObject = data.areasParentsLookup.reduce((obj, el) => {  obj[el.areacd] = el;  return obj}, {});

let areasArray = data.areas.sort((a,b) => (a.areanm > b.areanm) ? 1 : ((b.areanm > a.areanm) ? -1 : 0));
areasArray.forEach((el) => {

    let areaParentObject = areasParentsLookupObject[el.areacd];

    el.parentcd = areaParentObject.parentcd;
    el.parentnm = areaParentObject.parentnm;
    el.countrycd = areaParentObject.countrycd;
    el.countrynm = areaParentObject.countrynm;

    let areaGeogLevel = areasGeogLevelArray.filter((elm) => elm.areacd === el.areacd).map((elm) => elm.level);

    el.geogLevel = areaGeogLevel.length === 1 ? areaGeogLevel[0] : areaGeogLevel.includes("lower") ? "lower" : "country";
})

let areasObject = areasArray.reduce((obj, el) => {  obj[el.areacd] = el; return obj}, {});

//////////////

data.indicatorsMetadata.forEach((e) => {

e.prefix = e.prefix == null ? "" : e.prefix.replace("GBPSign", "£")
e.suffix = e.suffix== null ? "" : e.suffix

});
let indicatorsMetadataObject = data.indicatorsMetadata.reduce((obj, el) => {  obj[el.code] = el;  return obj}, {});

let indicatorsArray = data.indicators;
indicatorsArray.forEach((el) => {

    el.metadata = indicatorsMetadataObject[el.code]
})

let indicatorsObject = indicatorsArray.reduce((obj, el) => {  obj[el.code] = el;  return obj}, {});

let indicatorsCodeLabelArray = indicatorsArray.map((el) => ({code: el.code, label: el.metadata.label}));

//////////////

let topicsArray = [...new Set(indicatorsArray.map((e) => e.topic))].map((e) => {

    let listOfIndicators = indicatorsArray.filter((el) => el.topic === e);
    let subTopics = [...new Set(listOfIndicators.map((el) => el.subTopic))];

    return ({
        name: e,
        subTopics: subTopics.map((el) => ({name: el, indicators: indicatorsArray.filter((elm) => elm.subTopic === el)}))  
    })

}).sort((a,b) => a.name - b.name);

//////////////

let periodsLookupArray = data.periodsLookup.sort((a,b) => b.xDomainNumb - a.xDomainNumb);
let periodsLookupObject = [...new Set(indicatorsArray.map((e) => e.periodGroup))].reduce((obj, el) => {  obj[el] = periodsLookupArray.filter((elm) => elm.periodGroup === el);  return obj}, {});

//////////////

let combinedDataArray = data.combinedData.sort((a,b) => b.xDomainNumb - a.xDomainNumb);
let combinedDataObject = indicatorsArray.reduce((obj, el) => { obj[el.code] = combinedDataArray.filter((elm) => elm.id === el.id); return obj}, {});

//////////////

let years = Math.min(indicatorsArray.map((e) => parseInt(e.minXDomainNumb)));

let globalXDomainExtent = [Math.min(...indicatorsArray.map((e) => parseInt(e.minXDomainNumb))), Math.max(...indicatorsArray.map((e) => parseInt(e.maxXDomainNumb)))];

//////////////

setContext("similarAreasLookupObject", similarAreasLookupObject);
setContext("areasGeogInfoObject", areasGeogInfoObject);
setContext("areasGeogLevelObject", areasGeogLevelObject);
setContext("areasArray", areasArray);
setContext("areasObject", areasObject);

setContext("indicatorsCodeLabelArray", indicatorsCodeLabelArray);
setContext("indicatorsObject", indicatorsObject);
setContext("indicatorsCalculationsArray", data.indicatorsCalculations);

setContext("topicsArray", topicsArray);

setContext("periodsLookupArray", periodsLookupArray);
setContext("periodsLookupObject", periodsLookupObject);

setContext("combinedDataObject", combinedDataObject);

setContext("globalXDomainExtent", globalXDomainExtent);

setContext("beeswarmKeyData", data.beeswarmKeyData);


// For localisation of menu etc
let path = $page.url.pathname;
let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";

</script>

<svelte:head>
    <title>Explore subnational statistics - ONS</title>
    <meta property="og:title" content="Explore subnational statistics - ONS" />
    <meta property="og:type" content="website" />
    <link rel="icon" href="{domain}{base}/favicon.ico" />
    <link rel="canonical" href="{domain}{base}{$page.url.pathname}" />
    <meta property="og:url" content="{domain}{base}{$page.url.pathname}" />
    <meta
        name="description"
        content="Get data about people and the communities they live in, includes population, economy and health."
    />
    <meta
        property="og:description"
        content="Get data about people and the communities they live in, includes population, economy and health."
    />
</svelte:head>

<!-- <AnalyticsBanner {analyticsId} {analyticsProps}/> -->
<PhaseBanner phase="prototype" />
<Header />

<!-- <header style:background-color="#206095" style:color="white">
  <div class="wrapper">
    <h1 class="title">Explore Subnational Statistics</h1>
  </div>
</header> -->

<main id="main" tabindex="-1">
    <slot />
</main>

<Footer />

<style>
    h1 {
        font-size: 32px;
        line-height: 42px;
        font-weight: bold;
        margin: 26px 0;
        padding: 0;
    }

    /* .subhead {
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 28px 0;
    padding: 0;
  } */
  
    p.footer-text {
        font-size: 1.1em;
        margin: 0;
        padding: 40px 0 5px 0;
    }
    p.footer-text + p.footer-text {
        padding-top: 10px;
    }
</style>
