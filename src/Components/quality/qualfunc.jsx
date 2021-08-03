import React from 'react';
import { PlayCircleFilled } from "@material-ui/icons";
import './quality.css';
import mqtt from 'mqtt'
import Chart from './qchart';
import { useEffect, useState } from 'react';


export default function Quality() {

    const [quality, setQuality] = useState();

useEffect(() => {
    
    const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')

    client.on("connect", () => {
        console.log("connected");
        client.subscribe('+/pa04/pa04dash/0404');
    });

    client.on('message', (topic, message) => {
        
       handleJsonMessage(JSON.parse(message.toString()));
       //console.log(message);
    });


    return () => {
        if(client)
        client.end() 
    }
    },[])

    const handleJsonMessage = (json) => {
        setQuality(json.qualHourly)
        console.log(json);
        }

    return(
  
        <div className="q">

            <div className="qflexcontainer">
                <span></span>
                <span className="pTitle">
                           Quality
                </span>
                <span>
                <a href = '#'> <PlayCircleFilled className="play" /></a>
                </span>
            </div>

            <div className="qflexcontainer">
                <span></span>
                <span className="pPercentage" >{quality}%</span>
                <span></span>
            </div>
            
            <div className="qflexcontainer">
                {/* <span><a href="#">GEN<CheckCircleOutline className="checkcircle" /></a></span>
                <span><a href="#">GEN<CheckCircleOutline className="checkcircle" /></a></span> */}
                <span></span>
                <span className="qPercentageRate">FTQ </span>
                <span className="notuse">qqq</span>

            </div>

            <div className="qPercentageDetailcontainer">
                        <span className="qPercentageDetailx"> </span>
                        </div>
                        <div className="qPercentageDetailcontainer">
                        <span className="qPercentageDetail"></span>
            </div>

            <div className="qItem">
                <div>
                 <Chart/>
                </div>
            </div>


        </div>
        
    )

}