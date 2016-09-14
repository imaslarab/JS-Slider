var slider=document.getElementById("image-wrapper");


var j=0;
var temp = function(){
        slider.style["margin-left"]=j+'px'; 
        j=j-10;
}

var id= window.setInterval(temp, 20);
