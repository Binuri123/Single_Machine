import React from 'react';
import './oee.css';
import { PlayCircleFilled } from "@material-ui/icons";
import Charts from './opiechart';
import mqtt from 'mqtt'
import { Component } from 'react';
import Chart from './ochart';
import { Link } from 'react-router-dom';


class OEE extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){

        this.client = mqtt.connect('ws://localhost:8083/mqtt')

        this.client.on("connect", () => {
            console.log("connected");
            this.client.subscribe('+/pa04/pa04oeex/0404');
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

    render() {

        return(

            <div className="o">
    
                <div className="oflexcontainer">
                    <span></span>
                    <span className="oTitle">
                               OEE
                    </span>
                    <span><Link to={{ pathname: '/home'}}><PlayCircleFilled className="play" /></Link></span>
                </div>
                {/* <div className="oflexcontainer">
                    <span><a href="#">PRI<CheckCircleOutline className="checkcircle" /></a></span>
                    <span></span>
                </div>
                <div className="oflexcontainer">
                    <span><a href="#">GEN<CheckCircleOutline className="checkcircle" /></a></span>
                    <span></span>
                </div> */}
    
                <div className="oItemx">
                <Charts /> 
                </div>
    
                <div className="oItem">  
                <div>
                <Chart />
                </div>
                </div>
        </div>
            
        )

    }

    
}

export default OEE

