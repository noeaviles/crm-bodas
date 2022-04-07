import React from 'react';
import { NavLink} from 'react-router-dom';

const Aside = ({asideStatus,changeTituloHeader}) => {
    
  return (
    <aside className={`sidebar ${ asideStatus && 'collapseMenu'}`}>
      <div className="sidebar_header">
        <h1 className='sidebar_header-hello'>Good Morning, Anna!</h1>
        <div style={ {backgroundImage: `url("https://p.favim.com/orig/2018/09/04/tumblr-girl-woman-Favim.com-6240727.jpg")` } } className="sidebar_header-imagenPerfil"></div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="item-menu">
            <NavLink to='/dashboard' className={ ({isActive}) => isActive && 'active' } onClick={ ()=>changeTituloHeader('Dashboard') }>
              <div className='item' >
                <i className="fa-solid fa-desktop" title="Dashboard"></i>
                <span className="logo expand-menu">
                  Dashboard
                </span>
              </div> 
            </NavLink>
          </li>
          <li className="item-menu">
            <NavLink to='/dashboard/bodas' className={ ({isActive}) => isActive && 'active' } onClick={ ()=>changeTituloHeader('Bodas') }>
              <div className='item' >
                <i className="fa-solid fa-address-book" title="Bodas"></i>
                <span className="logo expand-menu">
                  Bodas
                </span>
              </div>
            </NavLink>
          </li>
          <li className="item-menu">
            <NavLink to='/dashboard/calendario' className={ ({isActive}) => isActive && 'active' } onClick={ ()=>changeTituloHeader('Calendario') }>
              <div className='item'>
                <i className="fa-solid fa-calendar-days" title="Calendario"></i>
                <span className="logo expand-menu">
                  Calendario
                </span>
              </div>
            </NavLink>
          </li>
          <li className="item-menu">
            <NavLink to='/dashboard/mailbox' className={ ({isActive}) => isActive && 'active' } onClick={ ()=>changeTituloHeader('Mailbox') }>
              <div className='item'>
                <i className="fa-solid fa-envelope" title="Mailbox"></i>
                <span className="logo expand-menu">
                  Mailbox
                </span>
              </div>
          </NavLink>
        </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside