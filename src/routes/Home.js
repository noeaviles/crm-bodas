import React from 'react'
import LineChart from "./LineChart";
import BarChart from "./BarChart"
import { NavLink} from 'react-router-dom';
const Home = () => {
  return (
    <div className='container-home'>
      <div className='seccion1'>
          <NavLink to="/bodas" className="enlace-seccion1">
              <i class="fa-solid fa-heart"></i>
              <div>
                <h3>Proxima Boda</h3>
                <p>Raul & Aranza</p>
                <p>16/04/2022</p>
              </div>
          </NavLink>
      </div>
      <div className='seccion2'>
        <h2>6</h2>
        <div>
          <h3>Bodas Confirmadas</h3>
          <p>En Marzo</p>
        </div>
      </div>
      <div className='seccion3'>
      <NavLink to="/calendario" className="enlace-seccion3">
              <i class="fa-solid fa-calendar-days"></i>
              <div>
                <h3>Agendar</h3>
                <p>Nueva Boda</p>
              </div>
          </NavLink>
      </div>
      <div className='seccion4'><BarChart/></div>
      <div className='seccion5'></div>
      <div className='seccion6'></div>
      <div className='seccion7'><LineChart/></div>
    </div>
    
  )
}

export default Home