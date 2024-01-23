<script>

export let xDomain, x, filteredPeriodsArray, chartHeight, gridlines = false;

$: xDistance = Math.abs(xDomain[1] - xDomain[0]);

$: tickInterval = xDistance >= 15 ? 5 :
                xDistance >= 6 ? 2 : 1;

const createDescendingArray = (minValue, maxValue, increment) => {

  const result = [];
  
  for (let i = maxValue; i >= minValue; i -= increment) {
    result.push(parseInt(i));
  }

  return result;
}

$: ticks = createDescendingArray(xDomain[0], xDomain[1], tickInterval)
    
</script>
    
<g class="x-axis-container" transform="translate(0,{chartHeight})">

    <line
    y1=0
    y2=0
    x1={x(xDomain[0])}
    x2={x(xDomain[1])}
    stroke="black"
    ></line>

    {#each filteredPeriodsArray as d, i}

        {#if ticks.includes(parseInt(d.xDomainNumb))}

            <g class="tick">

                <line
                y1=0
                y2=8
                x1={x(d.xDomainNumb)}
                x2={x(d.xDomainNumb)}
                stroke="black"
                ></line>

                <text
                text-anchor="middle"
                y={25}
                x={x(d.xDomainNumb)}
                >{d.label}</text>

                {#if gridlines}

                    <line
                    y1=0
                    y2={-chartHeight}
                    x1={x(d)}
                    x2={x(d)}
                    stroke="black"
                    opacity=0.1
                    ></line>

                {/if}

            </g>
        
        {/if}

    {/each}

</g>
    