import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node
      const dataMax = max(this.props.data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#32CD32')
      .attr('x', (d,i) => i * 50)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 40)
   }
render() {
      return (
      <div>
         <h3>The Bar Graph shown below is generated using the methods used in D3.js. The data used to generate this bar graph is hardcoded in the App.js file. 
            Values can be changed inorder to see the difference in the variation of 
            graph.</h3>
        <div style={graphAlign}>
          <svg ref={node => this.node = node}
          width={500} height={500}>
        </svg>
        </div>
      </div>
      )}
}

const graphAlign = {
   background : "#D3D3D3",
   textAlign : "center",
   padding : "20px",
}

export default BarChart
