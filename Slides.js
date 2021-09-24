var slideidx = -1;
var timer;
new SlideShow();
var isrun = false;


function SlideShow() {
    
   "use strict";
    isrun = true;
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot")
    for (i = 0; i < slides.length; i++) {
        
        slides[i].style.display = "none";
    }
    
    slideidx++;
    
    if (slideidx > slides.length) {slideidx = 1 }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    
    
    slides[slideidx-1].style.display = "block";
    dots[slideidx-1].className += " active";
    
    timer = setTimeout(SlideShow, 3000);
    
    
}

function End() {
    
    "use strict;"
    
    isrun = false;
    
    clearTimeout(timer);
   
}

function Start() {
    
   "use strict";
    
    if(isrun == true){
        
        return;
    } else {
        setTimeout(SlideShow, 3000); 
    }
    
    
}

