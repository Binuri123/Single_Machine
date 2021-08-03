import GaugeChart from 'react-gauge-chart';
import { ResponsiveContainer } from 'recharts';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

export default function Pepie() {

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
  
      return (
      <div >
      <ResponsiveContainer width="100%" aspect={3 / 2}>
        <GaugeChart id="gauge-chart1" 
        nrOfLevels={120}
        arcPadding={0} 
        cornerRadius={0}
        colors={["#FF0000", "#00FF00"]} 
        arcWidth={0.2} 
        percent={people/500} 
        textColor={["000000"]}
        needleColor={["#757575"]}
        needleBaseColor={["#c2ac6b"]}
        animate={true}
        />
      </ResponsiveContainer>
      </div>
      );
    }