import React from 'react'

const Header = ({asideCollapse}) => {
    
    const collapse = ()=>{
        
            asideCollapse();
       

    }
  return (
    <>
        <header>
            <nav>
                <div className="titulo"> <a href="#" onClick={()=>{collapse()}}><i className="fa-solid fa-align-left nav-expand"></i></a><h2>Dashboard</h2></div>
                <ul>
                    <li><a href=""><i className="fa-solid fa-bell"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-envelope"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-right-from-bracket"></i></a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header