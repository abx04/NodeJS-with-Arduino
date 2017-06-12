var onn=document.getElementById('on');
var on=document.getElementById('on');
var on=document.getElementById('blink');

var connect=function(url){
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.send(null);

};

onn.onclick=function () {
    connect('/on');
    
};

off.onclick=function () {
    connect('/off');

};

blink.onclick=function () {
    connect('/blink');

};