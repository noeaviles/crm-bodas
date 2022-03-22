import React from 'react'
import LineChart from "./LineChart";
import BarChart from "./BarChart"

const Home = () => {
  return (
    <div className='container-home'>
      <div className='seccion1'></div>
      <div className='seccion2'></div>
      <div className='seccion3'></div>
      <div className='seccion4'><BarChart/></div>
      <div className='seccion5'></div>
      <div className='seccion6'></div>
      <div className='seccion7'><LineChart/></div>
    </div>
    
  )
}

export default Home