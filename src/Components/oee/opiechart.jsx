import { ChartDonut, ChartLabel } from '@patternfly/react-charts';
import mqtt from 'mqtt'
import { Component } from 'react';

class opiecharts extends Component {

  constructor(props) {
      super(props)
      this.state = {}
  }

  componentDidMount(){

      this.client = mqtt.connect('ws://192.168.8.110:8083/mqtt')

      this.client.on("connect", () => {
          console.log("connected");
          this.client.subscribe('+/pa04/pa04dash/0404');
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
        <div style={{ height: '200px', width: '300x', justifyContent: 'center'}}>
          
      <ChartDonut
        ariaDesc=""
        ariaTitle=""
        width={40}
        innerRadius={70}
        constrainToVisibleArea={true}
        data={[{ x: 'Per Hour', y: ((100-this.state.oeeHourly)*((100-this.state.perHourly)/(300-this.state.perHourly-this.state.availHourly-this.state.qualHourly))) }, 
               { x: '2', y: ((100-this.state.oeeHourly)*((100-this.state.availHourly)/(300-this.state.perHourly-this.state.availHourly-this.state.qualHourly))) }, 
               { x: '3', y: ((100-this.state.oeeHourly)*((100-this.state.qualHourly)/(300-this.state.perHourly-this.state.availHourly-this.state.qualHourly))) }]}
        height={230}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        //subTitle="Pets"
        title={(this.state.oeeHourly)}
        titleComponent={ <ChartLabel style={[{ fontSize: 60 }]} />}
        width={230}
      />   
        
          </div>
      );
    }

  }

  export default opiecharts