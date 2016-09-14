var slider=document.getElementById("image-wrapper");
var style = window.getComputedStyle(slider);

//console.log("Current marginLeft: " + style.marginLeft);

var j=0;
var check=0;

var imageWidth=1000;
var divWidth=3000;
var interval;

function slide(){
    j-=10;
    check=j*-1;
    slider.style["margin-left"]=j+'px'; 
    if(check%imageWidth==0){
        stopInterval();
        
        setTimeout(function(){
            startInterval();
        },1000);
    }
    
    if(check%divWidth==0){
        j=0;
    }
  
}

function startInterval() {
    interval=setInterval(slide,100);
}

function stopInterval(){
    clearInterval(interval);
}

var start= document.getElementById("start");
var stop= document.getElementById("stop");

start.addEventListener("click", function(){
    startInterval(interval);
    
});

stop.addEventListener("click", function(){
    clearInterval(interval);
    
});
//var temp = function(){
//    
//    
//        left=style.marginLeft;
//        check = -1* left;
////        console.log("left",left);
//        if(check==2000){
//            slider.style["margin-left"]=0+'px';
//        }
//        slider.style["margin-left"]=j+'px'; 
//        j=j-10;
//}
//
//
//
//var id= window.setInterval(temp, 20);