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
    <div className={asideStatus ? "close-main":'expand-main'}>
            <Header asideCollapse={asideCollapse} tituloHeader={tituloHeader}/>
            <Aside asideStatus={asideStatus} changeTituloHeader={changeTituloHeader}/>
            <div className='content'>
                <Outlet/>
            </div>
            <Footer/>
    </div>
  )
}
export default Main;