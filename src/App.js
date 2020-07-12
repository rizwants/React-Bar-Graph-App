import React, { Component } from 'react'
import Header from './components/Header'
import BarChart from './components/BarChart'

export default class App extends Component {
  
  // We can also use the below data in state and pass it as props to BarChart
  // state = {
  //   data : [
  //     { year: 2012, percent: 50 },
  //           { year: 2013, percent: 30 },
  //           { year: 2014, percent: 80 },
  //           { year: 2015, percent: 20 },
  //           { year: 2016, percent: 55 },
  //           { year: 2017, percent: 83 }
  //   ]
  // }

  
  render() {
    return (
      <div className='App'>
        <Header />
        <BarChart data={[5,10,1,3,8,6,7,2,4,8]} size={[500,500]}/>
      </div>
    )
  }
}

