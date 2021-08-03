import "./priline.css"
import { BarChart, Bar, Legend, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { Component } from 'react';
import mqtt from 'mqtt'

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12;
var pa04;

var data = [];

export default class Production extends Component {

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
         if (topic == 'data/pa04/pa04stoppagesx/0404'){
          pa04 = message;
      }

      const today = new Date();
      const hour = today.getHours();
      const minute = today.getMinutes();

      console.log(minute);

      if (pa04){
        
        // console.log(message.toString());
        var jsonPa04 = JSON.parse(pa04.toString());
        
          // if ((hour === 13) && (minute === 30) ) {
          //   data1 =  jsonPa04.hourlyStopperStop
          //   data2 =  jsonPa04.hourlyStopperStop;

          // }
          
          // if ((hour === 13) && (minute === 31) ) {
          //   data1 =  jsonPa04.hourlyStopperStop
          //   data2 =  jsonPa04.hourlyStopperStop;

          // }

          // if ((hour === 13) && (minute === 32) ) {
          //   data1 =  jsonPa04.hourlyStopperStop
          //   data2 =  jsonPa04.hourlyStopperStop;

          // }

        //   if ((hour === 16) && (minute === 45) ) {
        //     data4 =  jsonPa04.hourlyStopperStop;
        //   }
          
        //   if ((hour === 16) && (minute === 50) ){
        //     data5 =  jsonPa04.hourlyStopperStop;
        //   }
          
        //   if ((hour === 16) && (minute === 55) ){
        //     data6 =  jsonPa04.hourlyStopperStop;
        //   }
          
        //   if ((hour === 17) && (minute === 0) ){
        //     data7 =  jsonPa04.hourlyStopperStop;
        //   }
          
        //   if ((hour === 17) && (minute === 5) ){
        //     data8 =  jsonPa04.hourlyStopperStop;
        //   }
          
        //   if ((hour === 17) && (minute === 10) ){
        //     data9 =  jsonPa04.hourlyStopperStop;
        //   }
          
        //   if ((hour === 17) && (minute === 15) ){
        //     data10 =  jsonPa04.hourlyStopperStop;
        //   }
          
        //   if ((hour === 17) && (minute === 20) ){
        //     data11 =  jsonPa04.hourlyStopperStop;
        //   }

        //   if ((hour === 17) && (minute === 25) ){
        //     data12 =  jsonPa04.hourlyStopperStop;
        //   }
          
  
           data = [
            {
              name:'1',
              value: jsonPa04.hourlyStopperStop,
              valuex: jsonPa04.hourlyStopperStop,
              valuey: jsonPa04.hourlyStopperStop,
            },
            // {
            //   name:'2',
            //   value: jsonPa04.hourlyStopperStop,
            //   valuex: jsonPa04.hourlyStopperStop,
            //   valuey: jsonPa04.hourlyStopperStop,
            // },
            // {
            //   name:'3',
            //   value: data1,
            //   valuex: data2,
            //   valuey: data3,
            
            // },
            // {
            //   name:'4',
            //   value: data4,
            
            // },
            // {
            //   name:'5',
            //   value: data5,
            
            // },
            // {
            //   name:'6',
            //   value: data6,
            
            // },
            // {
            //   name:'7',
            //   value: data7,
            
            // },
            // {
            //   name:'8',
            //   value: data8,
            
            // },
            // {
            //   name:'9',
            //   value: data9,
            
            // },
            // {
            //   name:'10',
            //   value: data10,
            
            // },
            // {
            //   name:'11',
            //   value: data11,
            
            // },
            // {
            //   name:'12',
            //   value: data12,
            
            // },
            
            ];
  
        
        }
    })

}


  handleJsonMessage = (json) => {
      this.setState({...json})
  }

  componentWillUnmount(){
      if(this.client)
      this.client.end()  
  }

  render(){
      return(

        <div className="prichart">

            <ResponsiveContainer width="100%" aspect={4/3}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
                <Bar dataKey="valuex" fill="#82ca9d" />
                <Bar dataKey="valuey" fill="#ffcacd" />
              </BarChart>
            </ResponsiveContainer>

            {/* <ResponsiveContainer width="100%" aspect={2 / 1}>
            <ComposedChart data={data} layout="vertical">
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="value" barSize={30} fill="#413ea0" />
                <Bar dataKey="valuex" barSize={30} fill="#4ffea0" />
                <Bar dataKey="valuey" barSize={10} fill="#513ff0" />
                <Line dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
            </ResponsiveContainer> */}
        </div>
      
      )}

}