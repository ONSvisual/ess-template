<script>

export let circle, y, index, length, hoverId, fillOpacity = 0.35, hoverIndicatorId = null, indicatorCode = null


$: fillOpacity = length*0.9 < index ? 0.5 : fillOpacity;
$: strokeOpacity = length*0.9 < index ? 0.5 : 0.5;
$: stroke = length*0.9 < index ? "#5a5e63" : length*0.8 < index ? "#6f747a" : length*0.6 < index ? "#8c9096" : "none";

const onMouseEnterEvent = () => { 
    
    hoverId = circle.datum.areacd 
    hoverIndicatorId = indicatorCode

};

const onMouseLeaveEvent = () => { 

    hoverId = undefined 
    hoverIndicatorId = undefined

};

</script>

<circle
cx={circle.x}
cy={y(circle.y)}
r=7
fill-opacity={fillOpacity}
stroke-opacity={strokeOpacity}
stroke={stroke}
fill="#888a8f"
opacity={hoverId ? 0.8 : 1}
></circle>

<circle
on:mouseenter={onMouseEnterEvent}
on:mouseleave={onMouseLeaveEvent}
cx={circle.x}
cy={y(circle.y)}
r=8
stroke="none"
fill="#888a8f"
opacity=0
></circle>
