const on=document.getElementById('on');
const blink=document.getElementById('blink');
const brighten=document.getElementById('brighten');
const submit_brightness=document.getElementById('submit_brightness');
const status=document.getElementById('status');

let connect=function(url){
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.send(null);

    xhr.onreadystatechange=function () {
        if(xhr.readyState===XMLHttpRequest.DONE){
            if(xhr.status===200){
                status.innerHTML=xhr.responseText;
            }
            else{
                status.innerHTML="Some error occured";
            }
        }

        
    }

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