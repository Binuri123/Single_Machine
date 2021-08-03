import React from 'react';
import { ArrowDropDown, ArrowDropUp, PlayCircleFilled, ThumbUp, ThumbDown, CheckCircleOutline } from "@material-ui/icons";
import './general.css';
import GenLine from './genline'
import GenGauge from './gengauge'
import GenBar from './genbar'

function Rightsidebar(){


    return(

        <div className="r">

            <div className="genflexcontainer">
                <span></span>
                <span className="genTitle">
                           Quality
                </span>
                <span><PlayCircleFilled className="play"/></span>
            </div>
            <div className="genflexcontainerx">
                <GenGauge />
            </div>

            <div className="genItem">
                <GenBar />
                <GenLine />
            </div>

        </div>
        
    )
}

export default Rightsidebar
