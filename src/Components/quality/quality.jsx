import React from 'react';
import './quality.css';
import { CheckCircle, PlayCircleFilled } from "@material-ui/icons";
import mqtt from 'mqtt'
import { Component } from 'react';
import Chart from './qchart';


class Quality extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){

        this.client = mqtt.connect('ws://localhost:8083/mqtt')

        this.client.on("connect", () => {
            console.log("connected");
            this.client.subscribe('+/pa04/pa04rejectionsx/0404');
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
            <div className="q">
                        
                <div className="qflexcontainer">
                    <span></span>
                    <span className="qTitle">
                               Quality
                    </span>
                    <span><a href = '#'> <PlayCircleFilled className="play" /></a></span>
                </div>
                {/* <div className="qflexcontainer">
                    <span><a href="#">PRI<CheckCircleOutline className="checkcircle" /></a></span>
                    <span></span>
                </div> */}
                <div className="qflexcontainer">
                    <span></span>
                    <span className="qPercentage">{this.state.Script_hourlyCap}%<CheckCircle className="checkcircle" /></span>
                    <span></span>
                </div>
                <div className="qflexcontainer">
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
                    <Chart />
                    </div>
                </div>
    
    
            </div>
            
            
        )

    }

    
}

export default Quality