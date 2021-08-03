import React from 'react';
import { ArrowDropUp, PlayCircleFilled } from "@material-ui/icons";
import './production.css';
import mqtt from 'mqtt'
import { Component } from 'react';
import Chart from './pchart';

var wb, ws, de_cell, de_value;

var data = [];

const xlsx = require('xlsx');

// const excelreader = () => {



//     }

class Production extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){

        this.client = mqtt.connect('ws://localhost:8083/mqtt')

        this.client.on("connect", () => {
            //console.log("connected");
            this.client.subscribe('+/pa04/pa04dash/0404');
        });

        this.client.on('message', (topic, message) => {

           this.handleJsonMessage(JSON.parse(message.toString()));
        });

        this.interval = setInterval(() => {

            this.wb(xlsx.readFile('Docket.xlsx', {cellDates:true}));
        
            this.ws(wb.Sheets['PA 04 NI']);
        
            const today = new Date();
            const hour = today.getHours();
            const minute = today.getMinutes();

            if ((hour === 1) && (minute === 32)) {
        
                de_cell = ws['D7'];
                de_value = (de_cell ? de_cell.v : '');
                //this.setState({de_value})
                console.log(de_value);
            }
        
            if ((hour === 1) && (minute === 33)) {
        
                de_cell = ws['D8'];
                de_value = (de_cell ? de_cell.v : '');
                // this.setState({de_value})
                console.log(de_value);
            }

            // if (this.props.counter === 'double') {
            //   this.setState({number: this.state.number + this.state.number});        
            // } else {
            //   this.setState({number: this.state.number + 1});
            // }
          }, 1000);

    }

    handleJsonMessage = (json) => {
        this.setState({...json})
    }

    componentWillUnmount(){
        if(this.client)
        this.client.end();

        clearInterval(this.interval);
    }

    // excelreader = (xlsx) => {
        
    //     this.wb = xlsx.readFile('Docket.xlsx', {cellDates:true});

    //     this.ws = wb.Sheets['PA 04 NI'];

    //     this.de_cell = ws['D7'];
    //     this.de_value = (de_cell ? de_cell.v : '');
    //     console.log(de_value);

    //     const today = new Date();
    //     const hour = today.getHours();
    //     const minute = today.getMinutes();

    //     if ((hour === 14) && (minute === 17)) {

    //         de_cell = ws['D7'];
    //         de_value = (de_cell ? de_cell.v : '');
    //         console.log(de_value);
    //     }

    //     if ((hour === 14) && (minute === 18)) {

    //         de_cell = ws['D8'];
    //         de_value = (de_cell ? de_cell.v : '');
    //         console.log(de_value);
    //     }

    //     if ((hour === 14) && (minute === 19)) {

    //         de_cell = ws['D10'];
    //         de_value = (de_cell ? de_cell.v : '');
    //         console.log(de_value);
    //     }

    //     // data = [
    //     // {
    //     //     name:'',
    //     //     value: de_value
    //     // }
    //     // ];

    // }
    
    render(){
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
                <span className="pPercentage">{this.state.hourlyProduction}%</span>
                <span></span>
            </div>
            
            {/* <div className="pflexcontainer">
                <span><a href="#">GEN<CheckCircleOutline className="checkcircle" /></a></span>
            </div>  */}

            <div className="pPercentagecontainer">

            <div className="pflexcontainerx">
                <span><ArrowDropUp className="pIcon"/></span>
            </div>
            <div className="pflexcontainerx"  dataKey='value'>
                <span className="pPercentageRate">
                 {this.state.de_value}
                {/* {this.state.hourlyProduction} */}
                </span></div>
            <div className="pflexcontainerx">
                <span className="pPercentageDetail">Vs Target</span>
                </div>
            </div>

            <div className="pflexcontainer">
                <span>
                   
                </span>
                <span></span>
            </div>

            <div className="pItem">
                <div>
                <Chart/> 
                </div>
            </div>


        </div>
        
    )}

    
}

export default Production




//             // <div className="pPercentageArrow">
//             // <ArrowDropUp className="pIcon"/>
//             // <ArrowDropDown className="pIcon"/>
//             // </div>
//             // <div className="pPercentageRatecontainer">
//             // <span className="pPercentageRate">110% </span>
//             // <span className="pPercentageRate">1506% </span>
//             // </div>
//             // <div className="pPercentageDetailcontainer">
//             // <span className="pPercentageDetail">Vs Budget </span>
//             // <span className="pPercentageDetail">Vs Last Year </span>
//             // </div>
 

////////////////////////////////////////////////////////////////////////

            // workbook.xlsx.readFile("./save/" + filename)
            //     .then(function() {
            //         var today = new Date();
            //         var hour = today.getHours();
            //         var minute = today.getMinutes();
            //         var sec = today.getSeconds();

            //         //Getting the sheet and retrieving cell data
            //         var sheet = workbook.getWorksheet('PA 06 NI');

            //         if ((hour === 10) && (minute === 20) ) {
            //             cell1 = sheet.getCell('D7').value;
            //           }
                      
            //           if ((hour === 10) && (minute === 25) ) {
            //             cell2 = sheet.getCell('D8').value;
            //           }
                    
            //         //   if ((hour === 10) && (minute === 30) ) {
            //         //     cell3 = sheet.getCell('D9').value;
            //         //   }
                    
            //         //   if ((hour === 10) && (minute === 35) ) {
            //         //     cell4 = sheet.getCell('D10').value;
            //         //   }
                      
            //         //   if ((hour === 10) && (minute === 40) ) {
            //         //     cell5 = sheet.getCell('D11').value;
            //         //   }
                      
            //         //   if ((hour === 10) && (minute === 45) ) {
            //         //     cell6 = sheet.getCell('D12').value;
            //         //   }
                      
            //         //   if ((hour === 10) && (minute === 50) ) {
            //         //     cell7 = sheet.getCell('D13').value;
            //         //   }
                      
            //         //   if ((hour === 10) && (minute === 55) ) { 
            //         //     cell8 = sheet.getCell('D14').value;
            //         //   }
                      
            //         //   if ((hour === 11) && (minute === 0) ) {
            //         //     cell9 = sheet.getCell('D15').value;
            //         //   }
                      
            //         //   if ((hour === 11) && (minute === 5) ) {
            //         //     cell10 = sheet.getCell('D16').value;
            //         //   }
                      
            //         //   if ((hour === 11) && (minute === 10) ) {
            //         //     cell11 = sheet.getCell('D17').value;
            //         //   }
                    
            //         //   if ((hour === 10) && (minute === 5) ) {
            //         //     cell12 = sheet.getCell('D18').value;
            //         //   }

            //           cell = [
            //             {
            //               value: cell1
                        
            //             },
            //             {
            //               value: cell2
            //             },
            //             // {
            //             //   value: cell3
                        
            //             // },
            //             // {
            //             //   value: cell4
                        
            //             // },
            //             // {
            //             //   value: cell5
                        
            //             // },
            //             // {
            //             //   value: cell6
                        
            //             // },
            //             // {
            //             //   value: cell7
                        
            //             // },
            //             // {
            //             //   value: cell8
                        
            //             // },
            //             // {
            //             //   value: cell9
                        
            //             // },
            //             // {
            //             //   value: cell10
                        
            //             // },
            //             // {
            //             //   value: cell11
                        
            //             // },
            //             // {
            //             //   value: cell12
                        
            //             // },
                        
            //             ];

        
            //  });

////////////////////////////////////////////////////////////////////////