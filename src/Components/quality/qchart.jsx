import "./qchart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12;
var pa04;

var data = [];

export default function Quality()  {

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

         if (topic == 'data/pa04/pa04dash/0404'){
          pa04 = message;
      }


      const today = new Date();
      const hour = today.getHours();
      const minute = today.getMinutes();

      console.log(minute);

      if (pa04){
        
        // console.log(message.toString());
        var jsonPa04 = JSON.parse(pa04.toString());
        
          if ((hour === 7) && (minute === 59) ) {
            data1 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 8) && (minute === 59) ) {
            data2 = jsonPa04.qualHourly;;
          }

          if ((hour === 9) && (minute === 59) ) {
            data3 = jsonPa04.qualHourly;;
          }

          if ((hour === 10) && (minute === 59) ) {
            data4 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 11) && (minute === 59) ){
            data5 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 12) && (minute === 59) ){
            data6 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 13) && (minute === 59) ){
            data7 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 14) && (minute === 59) ){
            data8 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 15) && (minute === 59) ){
            data9 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 16) && (minute === 59) ){
            data10 = jsonPa04.qualHourly;;
          }
          
          if ((hour === 17) && (minute === 59) ){
            data11 = jsonPa04.qualHourly;;
          }

          if ((hour === 18) && (minute === 59) ){
            data12 = jsonPa04.qualHourly;;
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
      setQuality(json.qualHourly)
      console.log(json);
    }


      return(

        <div className="qchart">
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