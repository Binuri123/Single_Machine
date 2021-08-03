import React from 'react'
import './Main.css'
import Topbar from '../Components/topbar/topbar';
import Bottombar from '../Components/bottombar/bottombar';
import Sidebar from '../Components/rightsidebar/Rightsidebar';
import Home from '../Pages/Home/Home';
  
  export default function Main() {

      return (

          <div className="AppX">

                <Topbar />

          <div className="container">
            
                <Home/>
                <Sidebar/>

          </div>

          <div>

                <Bottombar />

          </div> 

          </div>
    
      )
  }