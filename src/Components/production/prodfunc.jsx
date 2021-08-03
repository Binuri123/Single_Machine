import React from 'react';
import { ArrowDropUp, PlayCircleFilled } from "@material-ui/icons";
import './production.css';
import mqtt from 'mqtt'
import Chart from './pchart';
import { useEffect, useState } from 'react';


import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3001";



export default function Production() {

    const [production, setProduction] = useState();

    const [response, setResponse] = useState("");

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

        const socket = socketIOClient(ENDPOINT);
        socket.on("json", data => {
            setResponse(data.dta)
          console.log(data.dta);
        });

    return () => {
        if(client)
        client.end();

    }
    },[])

    const handleJsonMessage = (json) => {
        setProduction(json.productionHourly)
        console.log(json);
        }

    return(
  
        <div className="p">

            <div className="pflexcontainer">
                <span></span>
                <span className="pTitle">
                           Production
                </span>
                <span>
                <a href = '#'> <PlayCircleFilled className="play" /></a>
                </span>
            </div>

            <div className="pflexcontainer">
                <span></span>
                <span className="pPercentage" >{production}</span>
                <span></span>
            </div>
            
            {/* <div className="pflexcontainer"> */}
                {/* <span><a href="#">GEN<CheckCircleOutline className="checkcircle" /></a></span>
                <span><a href="#">GEN<CheckCircleOutline className="checkcircle" /></a></span> */}
                
                {/* <span><input type="file" onChange={(e) => {
                    const file = e.target.files[0];
                    XLSX.readFile(file);
                    }}
                /></span> */}

            {/* </div> */}

            <div className="pPercentagecontainer">

            <div className="pflexcontainerx">
                <span><ArrowDropUp className="pIcon"/></span>
            </div>
            <div className="pflexcontainerx">
                <span className="pPercentageRate" >{response}</span>
            </div>
            <div className="pflexcontainerx">
                <span className="pPercentageDetail">Vs Target</span>
                </div>
            </div>

            {/* <div className="pflexcontainer">
                <span>
                   
                </span>
                <span></span>
            </div> */}

            <div className="pItem">
                <div>
                 <Chart/>
                </div>
            </div>


        </div>
        
    )

 }