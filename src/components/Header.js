import React from 'react'

const Header = ({asideCollapse,tituloHeader}) => {
    
  const collapse = ()=> {   
    asideCollapse();
  }

  return (
    <header>
      <nav className='header_navbar'>
        <div className="header_navbar-titulo">
          <div onClick={ ()=>{collapse()} } className='header_navbar-titulo-collapse'>
            <i className="fa-solid fa-align-left nav-expand"></i>
          </div>
          <h2>{ tituloHeader }</h2>
        </div>
        <ul className='header_navbar-subMenu'>
            <li><a href=""><i className="fa-solid fa-bell"></i></a></li>
            <li><a href=""><i className="fa-solid fa-envelope"></i></a></li>
            <li><a href=""><i className="fa-solid fa-right-from-bracket"></i></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header