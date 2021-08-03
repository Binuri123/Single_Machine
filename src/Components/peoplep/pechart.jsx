import "./pechart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12;
var pa04;

var data = [];

export default function Production()  {

  const [people, setPeople] = useState();

  useEffect(() => {
      
      const client = mqtt.connect('ws://localhost:8083/mqtt')

      client.on("connect", () => {
          console.log("connected");
          client.subscribe('+/pa04/pa04stoppagesx/0404');
      });

      client.on('message', (topic, message) => {
          
      handleJsonMessage(JSON.parse(message.toString()));
      //console.log(message);

      if (topic === 'data/pa04/pa04stoppagesx/0404'){
        pa04 = message;
      }


        const today = new Date();
        const hour = today.getHours();
        const minute = today.getMinutes();

        console.log(minute);

        if (pa04) {
          
          // console.log(message.toString());
          var jsonPa04 = JSON.parse(pa04.toString());
          
            if ((hour === 15) && (minute === 1) ) {
              data1 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 15) && (minute === 2) ) {
              data2 = jsonPa04.hourlyStopperStop;
            }

            if ((hour === 15) && (minute === 3) ) {
              data3 = jsonPa04.hourlyStopperStop;
            }

            if ((hour === 10) && (minute === 35) ) {
              data4 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 10) && (minute === 40) ) {
              data5 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 10) && (minute === 45) ) {
              data6 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 10) && (minute === 50) ) {
              data7 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 10) && (minute === 55) ) {
              data8 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 11) && (minute === 0) ) {
              data9 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 11) && (minute === 5) ) {
              data10 = jsonPa04.hourlyStopperStop;
            }
            
            if ((hour === 11) && (minute === 10) ) {
              data11 = jsonPa04.hourlyStopperStop;
            }

            if ((hour === 10) && (minute === 5) ) {
              data12 = jsonPa04.hourlyStopperStop;
            }
          

          data = [
            {
              name:'1',
              value: data1,
            
            },
            {
              name:'2',
              value: data2,
            },
            {
              name:'3',
              value: data3,
            
            },
            {
              name:'4',
              value: data4,
            
            },
            {
              name:'5',
              value: data5,
            
            },
            {
              name:'6',
              value: data6,
            
            },
            {
              name:'7',
              value: data7,
            
            },
            {
              name:'8',
              value: data8,
            
            },
            {
              name:'9',
              value: data9,
            
            },
            {
              name:'10',
              value: data10,
            
            },
            {
              name:'11',
              value: data11,
            
            },
            {
              name:'12',
              value: data12,
            
            },
            
            ];}

          });

          return () => {
            if(client)
            client.end() 
          }
          },[])

      const handleJsonMessage = (json) => {
        setPeople(json.hourlyStopperStop)
        console.log(json);
        }


      return(

        <div className="pchart">
             <ResponsiveContainer width="100%" aspect={3 / 1}>
             <LineChart data={data}>
               <CartesianGrid strokeDasharray="3 3" />0
               <XAxis dataKey='name' />
              <YAxis />
               <Tooltip />
               <Line type="monotone" dataKey='value' stroke="#003366" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
           </ResponsiveContainer>
           </div>
      
      )

}

