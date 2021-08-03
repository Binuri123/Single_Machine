import React from 'react';
import './Home2.css';
import Topbar2 from '../../Comps/topbar2/topbar2';
import Bottombar2 from '../../Comps/bottombar2/bottombar2';
import Printing from '../../Comps/Printing/printing';
import Writing from '../../Comps/Writing/writing';
import General from '../../Comps/General/general';

export default function Home() {



    return (

    <div>

      <Topbar2 />

      <div className="home2">
        <span></span>
        <span></span>
        <span></span>
        <span></span> 
        <span></span>
        <span></span>
        <span><Printing /></span>    
        <span><Writing /></span>    
        <span><General /></span>
        <span></span> 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div>
        <Bottombar2 />
      </div>

    </div>

    )
}