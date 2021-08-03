import GaugeChart from 'react-gauge-chart';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import mqtt from 'mqtt'
import { Component } from 'react';

class pepiecharts extends Component {

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

  render() {
  
      return (
      <div>
      <ResponsiveContainer width='450px' aspect={2 /1}>
        <GaugeChart id="gauge-chart1" 
        nrOfLevels={150} 
        colors={["#FF0000", "#00FF00"]} 
        arcWidth={0.2} 
        arcPadding={0}
        cornerRadius={0}
        percent={(this.state.hourlyStopperStop)/500} 
        textColor={["000000"]}
        needleColor={["#757575"]}
        needleBaseColor={["#c2ac6b"]}
        animate={true}
        />
      </ResponsiveContainer>
      </div>
      );}
}
export default pepiecharts