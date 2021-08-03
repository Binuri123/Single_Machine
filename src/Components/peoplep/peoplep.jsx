import React from 'react';
import { CheckCircle, PlayCircleFilled, ThumbUp, ThumbDown, CheckCircleOutline, ErrorOutline } from "@material-ui/icons";
import './peoplep.css';
import mqtt from 'mqtt'
import { Component } from 'react';
import Chartx from './pepiechart';
import Chart from './pechart';

class Peoplep extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){

        this.client = mqtt.connect('ws://localhost:8083/mqtt')

        this.client.on("connect", () => {
            console.log("connected");
            this.client.subscribe('+/pa04/pa04stoppagesx/0404');
        });

        this.client.on('message', (topic, message) => {
           this.handleJsonMessage(JSON.parse(message.toString()));
        })
    }

    handleJsonMessage = (json) => {
        this.setState({...json})
    }

    componentWillUnmount(){
        if(this.client)
        this.client.end()  
    }

    render () {

        return(

            <div className="pe">
    
                <div className="peflexcontainer">
                    <span></span>
                    <span className="peTitle">
                               People Productivity
                    </span>
                    <span><a href = '#'> <PlayCircleFilled className="play" /></a></span>
                </div>
    
                {/* <div className="peflexcontainer">
                    <span><a href="#">PRI<CheckCircleOutline className="checkcircle" /></a></span>
                    <span></span>
                </div>
                <div className="peflexcontainer">
                    <span><a href="#">NIM<CheckCircleOutline className="checkcircle" /></a></span>
                    <span className="pePercentage"></span>
                    <span></span>
                </div>
                <div className="peflexcontainer">
                    <span><a href="#">GEN<ErrorOutline className="errorout" /></a></span>
                </div>  */}
    
                <div  className="gauge">
                    <Chartx />
                </div>
    
                <div className="peItem">
                    
                    <div>
                    <Chart />
                    </div>
                </div>
    
            </div>
            
        )
    }

    }
    


export default Peoplep