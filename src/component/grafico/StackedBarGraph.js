import React, { useState, useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  axisLeft,
  scaleLinear,
  stack,
  max
} from "d3";
import { axisRight } from "d3";
import { axisTop } from "d3";

export const StackedBarGraph = ({ datasets, keys, colors, apellido }) => {
  const [data, setData] = useState(datasets);
  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } = wrapperRef.current.getBoundingClientRect();
    const stackGenerator = stack().keys(keys);
    const layers = stackGenerator(data);
    //const layers = stackGenerator(apellido);
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1]))
    ];

    const yScale = scaleLinear().domain(extent).range([height, 0]);
    
    const xScale = scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.86);

    const zScale = scaleLinear().domain(extent).range([height, 0]); //datos de la escala 'eje'
    

    const xAix = axisBottom(xScale);
    const yAix = axisLeft(yScale);
    const zAix = axisRight(zScale);

    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAix);
    svg
      .select(".y-axis")
      .attr("transform", `translate(${0 + 25}, 0 )`)
      .attr("color", "green")
      .call(yAix);

    svg
      .select(".z-axis")
      .attr("transform", `translate(${0 + (width - 30)}, 0 )`)
      .attr("color", "red")
      .call(zAix);
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("x", (sequence) => xScale(sequence.data.name))
      .attr("width", xScale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => yScale(sequence[0]) - yScale(sequence[1]))
      .attr("z", (sequence) => zScale(sequence[1]))
      .attr("height", (sequence) => zScale(sequence[0]) - zScale(sequence[1]));

    /* svg
      .select(".x-axis")
      .selectAll(".tick") */
      /* .on("click", (e) => {
        const filteredD = data.map((d) => {
          return {
            name: d.name,
            Affiliate: d.name === e ? 0 : d.Affiliate,
            Social: d.name === e ? 0 : d.Social,
            Media: d.name === e ? 0 : d.Media
          };
        });
        setData(filteredD);
      }); */
  }, [data, keys, colors]);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{ width: "90%", height: "400px", marginBottom: "2rem" }}
      >
        <svg ref={svgRef} style={{ width: "100%", height: "110%" }}>
          <g className="x-axis" />
          <g className="y-axis" />
          <g className="z-axis" />
        </svg>
      </div>
    </>
  );
};
