import React from 'react';
import { PlayCircleFilled } from "@material-ui/icons";
import './Rightsidebar.css';


function Rightsidebar(){

    return(

        <div className="r">

            <div className="rflexcontainer">
                <span></span>
                <span className="pTitle">
                           Right Side Bar
                </span>
                <span><PlayCircleFilled className="play"/></span>
            </div>  

        </div>
        


    )
}

export default Rightsidebar