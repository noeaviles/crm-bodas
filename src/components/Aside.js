import React from 'react';
import { NavLink} from 'react-router-dom';

const Aside = ({asideStatus}) => {
    
  return (
    <>
        <aside>
            <div className={asideStatus === true ? "close-menu":"logo expand-menu"}><figcaption><img src="img/logo_web_BN.png" alt=""/></figcaption></div>
            <div className="isotipo"><figcaption><img src="img/isotipo2.png" alt=""/></figcaption></div>
            <nav className="sidebar-nav">
                <ul>
                    <li  className={asideStatus === true ? "close-menu":"menu-title expand-menu"}>--Menu</li>
                    <li className="item-menu"><NavLink to='/'><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-desktop" title="Dashboard"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Dashboard</span></div> </NavLink></li>
                    <li className="item-menu"><NavLink to='/bodas'><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-address-book" title="Agenda"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Bodas</span></div></NavLink></li>
                    <li className="item-menu"><NavLink to='/calendario'><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-folder" title="Documentacion"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Calendario</span></div></NavLink></li>
                    <li className="item-menu"><NavLink to='/mailbox'><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-envelope" title="Mailbox"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Mailbox</span></div></NavLink></li>

                </ul>
            </nav>
        </aside>
        
    </>
  )
}

export default Aside