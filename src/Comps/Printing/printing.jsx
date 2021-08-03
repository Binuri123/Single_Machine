import React from 'react';
import { ArrowDropDown, ArrowDropUp, PlayCircleFilled, ThumbUp, ThumbDown, CheckCircleOutline } from "@material-ui/icons";
import './printing.css';
import PriLine from './priline'
import PriGauge from './prigauge'
import PriBar from './pribar'

function Rightsidebar(){


    return(

        <div className="pri">

            <div className="priflexcontainer">
                <span></span>
                <span className="priTitle">
                           Availability
                </span>
                <span><PlayCircleFilled className="play"/></span>
            </div>

            <div className="priflexcontainerx">
                <PriGauge />
            </div>

            <div className="priItem">
                <PriBar />
                <PriLine />
            </div>
            <div>
                
            </div>
       
        </div>

    )
}

export default Rightsidebar
