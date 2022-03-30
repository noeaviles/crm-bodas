import React,{useState} from 'react'
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';


export const Main = () => {

  const [asideStatus,setAsideStatus] = useState(false)
  const [tituloHeader,setTituloHeader]= useState('Dashboard') 

  const changeTituloHeader = (titulo)=>{
    setTituloHeader(titulo);
  }

  const asideCollapse = ()=>{
    if(asideStatus){
        setAsideStatus(false);
    }else{
        setAsideStatus(true);
    }
  }

  return (
    <div className='wrapper-body'>
      <Aside asideStatus={asideStatus} changeTituloHeader={changeTituloHeader}/>
      <div className='wrapper-content'>
        <Header asideCollapse={asideCollapse} tituloHeader={tituloHeader}/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}
export default Main;