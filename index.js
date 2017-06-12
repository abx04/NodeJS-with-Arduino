const five=require('johnny-five');
const express=require('express');
const path=require('path');

let board=five.Board();
let app=express();

let response='';

app.get('/',function (req,res) {
   res.sendFile(path.join(__dirname,'home.html'));
});

app.get('/home',function (req,res) {
    res.sendFile(path.join(__dirname,'home.js'));
});

board.on('ready',function(){
    let led=five.Led(13);
    led.on();

    app.get('/:state',function (req,res) {
        let state=req.params.state;
        if(state==='on'){
            led.stop();
            led.on();
        }
        else if(state==='off'){
            led.stop();
            led.off();
        }

        else if(state==='blink'){
            led.blink(1000);
            //state='blinking';
        }

        //else(res.send('wrong path: /'+state));

        res.send('Led is: '+state);
    });

    this.on('exit',function () {
        led.off();
    })


});

app.listen(15462);

