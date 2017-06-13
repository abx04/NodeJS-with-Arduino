const on=document.getElementById('on');
const blink=document.getElementById('blink');
const brighten=document.getElementById('brighten');
const submit_brightness=document.getElementById('submit_brightness');

let connect=function(url){
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.send(null);

};

on.onclick=function () {
    connect('/on');
    
};

off.onclick=function () {
    connect('/off');

};

blink.onclick=function () {
    connect('/blink');

};

submit_brightness.onclick=function(){
    connect('/brightness?value='+brighten.value);
};