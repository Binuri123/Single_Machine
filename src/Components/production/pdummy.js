const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const xlsx = require('xlsx');


setInterval(() => {

    var de_value;

    var wb = xlsx.readFile('Docket.xlsx', {cellDates:true});

    var ws = wb.Sheets['PA 04 NI'];

    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();

    if ((hour === 8)) {

        var de_cell = ws['D7'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }

    if ((hour === 9)) {

        var de_cell = ws['D8'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }

    if ((hour === 10)) {

        var de_cell = ws['D9'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 11)) {

        var de_cell = ws['D10'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 12)) {

        var de_cell = ws['D11'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 13)) {

        var de_cell = ws['D12'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 14)) {

        var de_cell = ws['D13'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 15)) {

        var de_cell = ws['D14'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 16)) {

        var de_cell = ws['D15'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 17)) {

        var de_cell = ws['D16'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 18)) {

        var de_cell = ws['D17'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 19)) {

        var de_cell = ws['D19'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 20)) {

        var de_cell = ws['D20'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 21)) {

        var de_cell = ws['D21'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 22)) {

        var de_cell = ws['D22'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 23)) {

        var de_cell = ws['D23'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 0)) {

        var de_cell = ws['D24'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 1)) {

        var de_cell = ws['D25'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 2)) {

        var de_cell = ws['D26'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 3)) {

        var de_cell = ws['D27'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 4)) {

        var de_cell = ws['D28'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 5)) {

        var de_cell = ws['D29'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 6)) {

        var de_cell = ws['D30'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }
    if ((hour === 7)) {

        var de_cell = ws['D31'];
         de_value = (de_cell ? de_cell.v : '');
        console.log(de_value);
    }

    io.sockets.emit('json', {
        dta: de_value
    });

   }, 60000);

  http.listen(3001, function() {
    console.log("listening on *:3001");
  });