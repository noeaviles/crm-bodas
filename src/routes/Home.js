import React from 'react'
import LineChart from "./LineChart";
import BarChart from "./BarChart"
import { NavLink} from 'react-router-dom';
const Home = () => {
  return (
    <div className='container-home'>
      <div className='card'>
        <NavLink to="/bodas" className="enlace-card1">
          <i className="fa-solid fa-heart"></i>
          <div>
            <h3>Proxima Boda</h3>
            <p>Raul & Aranza</p>
            <p>16/04/2022</p>
          </div>
        </NavLink>
      </div>
      <div className='card'>
        <h2>6</h2>
        <div>
          <h3>Bodas Confirmadas</h3>
          <p>En Marzo</p>
        </div>
      </div>
      <div className='card'>
        <NavLink to="/calendario" className="enlace-card3">
          <i className="fa-solid fa-calendar-days"></i>
          <div>
            <h3>Agendar</h3>
            <p>Nueva Boda</p>
          </div>
        </NavLink>
      </div>
      <div className='card feactured'><BarChart/></div>
      <div className='card'></div>
      <div className='card'></div>
      <div className='card'><LineChart/></div>
    </div>
    
  )
}

export default Home