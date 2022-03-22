import React from 'react';
import { NavLink} from 'react-router-dom';
import imgLogo from '../assets/logo-dorado.png'
const Aside = ({asideStatus,changeTituloHeader}) => {
    
  return (
    <>
        <aside>
            <div className={asideStatus === true ? "close-menu":"logo expand-menu"}><figcaption><img src={imgLogo}/></figcaption></div>
            <nav className="sidebar-nav">
                <ul>
                    <li  className={asideStatus === true ? "close-menu":"menu-title expand-menu"}>--Menu</li>
                    <li className="item-menu"><NavLink to='/' onClick={()=>changeTituloHeader('Dashboard')}><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-desktop" title="Dashboard"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Dashboard</span></div> </NavLink></li>
                    <li className="item-menu"><NavLink to='/bodas' onClick={()=>changeTituloHeader('Bodas')}><div className={asideStatus === true ? "item-close":"item"} ><i className="fa-solid fa-address-book" title="Bodas"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Bodas</span></div></NavLink></li>
                    <li className="item-menu"><NavLink to='/calendario' onClick={()=>changeTituloHeader('Calendario')}><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-folder" title="Calendario"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Calendario</span></div></NavLink></li>
                    <li className="item-menu"><NavLink to='/mailbox' onClick={()=>changeTituloHeader('Mailbox')}><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-envelope" title="Mailbox"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Mailbox</span></div></NavLink></li>

                </ul>
            </nav>
        </aside>
        
    </>
  )
}

export default Aside