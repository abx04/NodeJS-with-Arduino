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
    let led=five.Led(11);
    led.on();

    app.get('/:state',function (req,res) {
        let state=req.params.state;
        if(state==='on'){
            led.stop();
            led.on();
            response="Led is On"
        }
        else if(state==='off'){
            led.stop();
            led.off();
            response="Led is Off";
        }

        else if(state==='blink'){
            led.blink(1000);
            response="Led is Blinking";
        }

        else if(state==='brightness'){
            const value=req.query.value;
            led.brightness(value);
            response="Brightness set to: "+value+" (min:0, max:255)";
        }

        res.send(response);
    });

    this.on('exit',function () {
        led.off();
    })


});

app.listen(15462);

