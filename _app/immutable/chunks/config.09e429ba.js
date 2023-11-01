//js
const c="https://www.ons.gov.uk";let s={4:{4:"#b2182b",3:"#f4a582",2:"#92c5de",1:"#2166ac"},8:{1:"#b2182b",2:"#d6604d",3:"#f4a582",4:"#fddbc7",5:"#d1e5f0",6:"#92c5de",7:"#4393c3",8:"#2166ac"}},i={economy:"economy",health:"economy",education:"education",skills:"education",health:"health",connectivity:"connectivity",wellbeing:"wellbeing"},l={improving:{"better than average":"#003a5c",similar:"#016eae","worse than average":"#7bb3d1"},similar:{"better than average":"#4a4779",similar:"#8d6c8f","worse than average":"#dd7c8a"},worsening:{"better than average":"#4b264d",similar:"#8a274a","worse than average":"#cc0024"}},d={population_density:[10,50],female_life_expectancy:[1,5],gdhi:[5,20],no_qualifications_rate:[10,20],life_satisfaction:[2,10]},u=[1,10],m={high:{T:"Better than average",I:"Above average",F:"Worse than average"},low:{T:"Worse than average",I:"Below average",F:"Better than average"},similar:"Similar to average"},h={high:{T:"Improving",I:"Increasing",F:"Worsening"},low:{T:"Worsening",I:"Falling",F:"Improving"},similar:"Little change"};const g={main:"#003C57",parent:"#746CB1",country:"#F66068",uk:"#00A3A6",neighbour:"#BCBCBD",cluster:"#707071",custom1:"#206095",custom2:"#a8bd3a",custom3:"#871a5b",custom4:"#27a0cc",selected:"#F39431"},o=[{key:"ew",codes:["K04"],source:{type:"geojson",promoteId:"areacd"}},{key:"ctry",codes:["E92","N92","S92","W92"],pcio:"country",label:"country",plural:"countries",source:{type:"geojson",promoteId:"areacd"}},{key:"rgn",codes:["E12"],pcio:"region",label:"region",plural:"regions",source:{type:"geojson",promoteId:"areacd"}},{key:"cty",codes:["E10","E06","W06","E09","N09","S12"],pcio:"admin_county",label:"county/unitary authority",plural:"counties/unitary authorities",source:{type:"vector",url:"https://cdn.ons.gov.uk/maptiles/administrative/2021/cty/v1/boundaries/{z}/{x}/{y}.pbf",promoteId:"areacd",minzoom:4}},{key:"lad",codes:["E06","E07","E08","E09","W06","N09","S12"],pcio:"admin_district",label:"district",plural:"districts",source:{type:"vector",url:"https://cdn.ons.gov.uk/maptiles/administrative/2021/authorities-ew/v2/boundaries/{z}/{x}/{y}.pbf",promoteId:"areacd",minzoom:4}}];(()=>{let e={};return o.forEach(a=>a.codes.forEach(t=>e[t]=a)),e})();(()=>{let e={};return o.forEach(a=>e[a.key]=a),e})();const r=[{name:"England",code:"E92000001"},{name:"Northern Ireland",code:"N92000002"},{name:"Scotland",code:"S92000003"},{name:"Wales",code:"W92000004"}],n=[{name:"North East",code:"E12000001"},{name:"North West",code:"E12000002"},{name:"Yorkshire and The Humber",code:"E12000003"},{name:"East Midlands",code:"E12000004"},{name:"West Midlands",code:"E12000005"},{name:"East of England",code:"E12000006"},{name:"London",code:"E12000007"},{name:"South East",code:"E12000008"},{name:"South West",code:"E12000009"}],p=(()=>{let e={};return[...r,...n].forEach(a=>e[a.name]=a.code),e})();export{p as a,u as b,r as c,c as d,m as e,h as f,o as g,g as h,l as i,s as j,i as k,n as r,d as t};