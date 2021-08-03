import React from 'react';
import { ArrowDropDown, ArrowDropUp, PlayCircleFilled, ThumbUp, ThumbDown, CheckCircleOutline } from "@material-ui/icons";
import './writing.css';
import WriLine from './wriline'
import WriGauge from './wrigauge'
//import WriBar from './wribar'

function Rightsidebar(){


    return(

        <div className="wri">

            <div className="wriflexcontainer">
                <span></span>
                <span className="pTitle">
                           Performence
                </span>
                <span><PlayCircleFilled className="play"/></span>
            </div>
            <div className="wriflexcontainerx">
                <WriGauge />
            </div>

            <div className="wriItemx">
                {/* <WriBar /> */}
                <WriLine />
            </div>

        </div>
        
    )
}

export default Rightsidebar
