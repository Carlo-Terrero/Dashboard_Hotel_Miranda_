// -- > https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
import React, {useState, useRef, useEffect,useMemo/* setInterval */  }  from 'react';
import * as d3 from 'd3';

export const Svg = () => {

    return (
        <svg style={{
        border: "2px solid gold"
        }} />
    )
}

export const CircleP = () => {

    return (
        <svg>
            <circle
                cx="150"
                cy="77"
                r="50"
            />
        </svg>
    )
}


const generateDataset = () => (
    Array(10).fill(0).map(() => ([
      Math.random() * 80 + 10,
      Math.random() * 35 + 10,
    ]))
)

// de esta manera es con d3
export const Circles = () => {
    const [dataset, setDataset] = useState(
      generateDataset()
    )
    const ref = useRef()
  
    useEffect(() => {
      const svgElement = d3.select(ref.current)
      svgElement.selectAll("circle")
        .data(dataset)
        .join("circle")
          .attr("cx", d => d[0])
          .attr("cy", d => d[1])
          .attr("r",  3)
    }, [dataset])
  
    /* setInterval (() => {
      const newDataset = generateDataset()
      setDataset(newDataset)
    }, 5000)  */
  
    return (
      <svg
        viewBox="0 0 500 50"
        ref={ref}
      />
    )
}


//De esta manera seria con react puro
export const CirclesReact = () => {
    const [dataset, setDataset] = useState(
      generateDataset()
    )

    /* setInterval(() => {
      const newDataset = generateDataset()
      setDataset(newDataset)
    }, 2000) */

    return (
      <svg viewBox="0 0 500 50"> {/* tamaño del svg */}
        {dataset.map(([x, y], i) => (
          <circle
            cx={x}
            cy={y}
            r="3"
          />
        ))}
      </svg>
    )
}

//este es el medidor del grafico
export const AxisUno = () => {

    const ticks = useMemo(() => {

        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([10, 290])
        return xScale.ticks()

        .map(value => ({
          value,
          xOffset: xScale(value)
        }))

    }, [])

    return (
      <svg>
        <path
        /* linea que une los putos */
          d="M 9.5 0.5 H 290.5" 
          stroke="currentColor"
        />
        {ticks.map(({ value, xOffset }) => (
          <g
            key={value}
            transform={`translate(${xOffset}, 0)`}
          >
            <line
              y2="6"
              stroke="currentColor"
            />
            <text
              key={value}
              style={{
                fontSize: "10px",
                textAnchor: "middle",
                transform: "translateY(20px)"
              }}>
              { value }
            </text>
          </g>
        ))}
        
      </svg>
    )
}

export const AxisDos = ({
        domain=[0, 100], /* dominio del segmento 1 a 10 - 1 a 100 */
        range=[10, 290],/* distancia entre segmentos */
    }) => {

    const ticks = useMemo(() => {

      const xScale = d3.scaleLinear()
        .domain(domain)
        .range(range)

        const width = range[1] - range[0]
        const pixelsPerTick = 30
        const numberOfTicksTarget = Math.max(
            1,
            Math.floor(
            width / pixelsPerTick
            )
        )

      return xScale.ticks(numberOfTicksTarget)
        .map(value => ({
          value,
          xOffset: xScale(value)
        }))

    }, [
      domain.join("-"),
      range.join("-")
    ])

    return (
      <svg>
        <path
          d={[
            "M", range[0], 6,
            "v", -6,
            "H", range[1],
            "v", 6,
          ].join(" ")}
          fill="none"
          stroke="currentColor"
        />
        {ticks.map(({ value, xOffset }) => (
          <g
            key={value}
            transform={`translate(${xOffset}, 0)`}
          >
            <line
              y2="6"
              stroke="currentColor"
            />
            <text
              key={value}
              style={{
                fontSize: "10px",
                textAnchor: "middle",
                transform: "translateY(20px)"
              }}>
              { value }
            </text>
          </g>
        ))}
      </svg>
    )
}

export const AxisTres = () => {

    const ticks = useMemo(() => {

        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([10, 290])
        return xScale.ticks()

        .map(value => ({
          value,
          xOffset: xScale(value)
        }))
        
       

    }, [])


    return (
      <svg>
        <path
        /* linea que une los putos */
          d="M 9.5 0.5 H 290.5" 
          stroke="red" // color de la linea grande
        />
        {ticks.map(({ value, xOffset }) => (
          <g
            key={value}
            transform={`translate(${xOffset}, 0)`}
          >
            <line
              y2="6" //largo de los puntos de indicadores
              stroke="red" //color de los puntos de indicadores
            />
            <text
              key={value}
              style={{
                fontSize: "10px",
                textAnchor: "middle", //centrado del texto
                transform: "translateY(20px)" // margen del dato y la linea
              }}>
              { value }
            </text>
          </g>
        ))}
        
      </svg>
    )
}