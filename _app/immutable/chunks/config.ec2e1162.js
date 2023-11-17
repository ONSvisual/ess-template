//js
const n="https://www.ons.gov.uk";let s={country:"countries",region:"regions",upper:"upper tier local authorities",both:"lower tier local authorities",lower:"lower tier local authorities"},i=5,l={4:{1:"#206095",2:"#27A0CC",3:"#871A5B",4:"#A8BD3A"},8:{1:"#206095",2:"#27A0CC",3:"#871A5B",4:"#A8BD3A",5:"#F66068",6:"#003C57",7:"#22D0B6",8:"#A09FA0"}},d={economy:"economy",health:"economy",education:"education",skills:"education",health:"health",connectivity:"connectivity",wellbeing:"wellbeing"},u={improving:{"better than average":"#003a5c",similar:"#016eae","worse than average":"#7bb3d1"},similar:{"better than average":"#4a4779",similar:"#8d6c8f","worse than average":"#dd7c8a"},worsening:{"better than average":"#4b264d",similar:"#8a274a","worse than average":"#cc0024"}};const m={main:"#003C57",parent:"#746CB1",country:"#118C7B",uk:"#00A3A6",neighbour:"#BCBCBD",cluster:"#707071",custom1:"#206095",custom2:"#a8bd3a",custom3:"#871a5b",custom4:"#27a0cc",selected:"#F39431"},t=[{key:"ew",codes:["K04"],source:{type:"geojson",promoteId:"areacd"}},{key:"ctry",codes:["E92","N92","S92","W92"],pcio:"country",label:"country",plural:"countries",source:{type:"geojson",promoteId:"areacd"}},{key:"rgn",codes:["E12"],pcio:"region",label:"region",plural:"regions",source:{type:"geojson",promoteId:"areacd"}},{key:"cty",codes:["E10","E06","W06","E09","N09","S12"],pcio:"admin_county",label:"county/unitary authority",plural:"counties/unitary authorities",source:{type:"vector",url:"https://cdn.ons.gov.uk/maptiles/administrative/2021/cty/v1/boundaries/{z}/{x}/{y}.pbf",promoteId:"areacd",minzoom:4}},{key:"lad",codes:["E06","E07","E08","E09","W06","N09","S12"],pcio:"admin_district",label:"district",plural:"districts",source:{type:"vector",url:"https://cdn.ons.gov.uk/maptiles/administrative/2021/authorities-ew/v2/boundaries/{z}/{x}/{y}.pbf",promoteId:"areacd",minzoom:4}}];(()=>{let e={};return t.forEach(o=>o.codes.forEach(a=>e[a]=o)),e})();(()=>{let e={};return t.forEach(o=>e[o.key]=o),e})();const r=[{name:"England",code:"E92000001"},{name:"Northern Ireland",code:"N92000002"},{name:"Scotland",code:"S92000003"},{name:"Wales",code:"W92000004"}],c=[{name:"North East",code:"E12000001"},{name:"North West",code:"E12000002"},{name:"Yorkshire and The Humber",code:"E12000003"},{name:"East Midlands",code:"E12000004"},{name:"West Midlands",code:"E12000005"},{name:"East of England",code:"E12000006"},{name:"London",code:"E12000007"},{name:"South East",code:"E12000008"},{name:"South West",code:"E12000009"}],p=(()=>{let e={};return[...r,...c].forEach(o=>e[o.name]=o.code),e})();export{p as a,s as b,r as c,n as d,m as e,u as f,t as g,l as h,d as i,i as m,c as r};