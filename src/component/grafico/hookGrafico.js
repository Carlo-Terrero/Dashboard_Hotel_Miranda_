import React, {Component} from 'react';
import * as d3 from "d3";

class useD3 extends Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 15, 6, 8, 10];
    const data2 = [2, 15, 5, 16, 13, 3];
    const h = 300; 
    const x= 600
    
    const svg = d3.select("body")
    .append("svg")
    .attr("width", x)
    .attr("height", h)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data2)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 25)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")

    svg.selectAll("text")
      .data(data2)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - (10 * d) - 3)
  
  }

  render(){
    return(
      //<div className='body'></div>
      <div className='body'></div>
    )
  }

}

export default useD3;


/*
 componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 15, 6, 8, 10];
    const data2 = [2, 15, 5, 16, 13, 3];
    const h = 300; 
    const x= 600
    
    const svg = d3.select("body")
    .append("svg")
    .attr("width", x)
    .attr("height", h)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 25)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - (10 * d) - 3)
      
  }
*/
