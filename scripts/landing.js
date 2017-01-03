var animatePoints = function() {
 
    var points = document.getElementsByClassName('point');
    
                 var revealPoint = function (num1) {
                        
                        points[num1].style.opacity = 1;
                        points[num1].style.transform = "scaleX(1) translateY(0)";
                        points[num1].style.msTransform = "scaleX(1) translateY(0)";
                        points[num1].style.WebkitTransform = "scaleX(1) translateY(0)";
                    
                };
    
    for(var i=0; i < points.length; i++) {
                        revealPoint(i);
                    }
    
                 


 };
 
        