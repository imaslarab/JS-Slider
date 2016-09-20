function Slider(container) {
    var incrementor = 0;
    var check = 0;
    var interval;
    
    var imageWidth = parseInt(window.getComputedStyle(container.parentNode, null).getPropertyValue('width'));
    console.log(imageWidth);
    
    var nosOfImages = container.getElementsByTagName("img").length;
    console.log(nosOfImages);

    var divWidth = imageWidth * nosOfImages;
    
    
    function slide() {
        incrementor -= 10;
        check = incrementor * -1;
        container.style["margin-left"] = incrementor + 'px'; 
        if (check % imageWidth == 0) {
            stopInterval();

            setTimeout(function() {
                startInterval();
            },500);
        }

        if(check % (divWidth-imageWidth) == 0) {
            incrementor = 0;
        }

    }

    function startInterval() {
        interval = setInterval( slide , 20 );
    }

    function stopInterval() {
        clearInterval( interval );
    }
    

    var start = document.getElementById( "start" );
    var stop = document.getElementById( "stop" );

    start.addEventListener( "click", function() {
        clearInterval( interval);
        startInterval( interval);

    });

    stop.addEventListener("click", function(){
        clearInterval(interval);    
    });
    
}
