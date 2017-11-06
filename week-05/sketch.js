var y = 0
var x = 0
var yspeed = 2
var xspeed = 3
var windowheight = 900
var width = 1800


function setup () {
		createCanvas (1800, 900);
		background (149,209,197);
	}

function draw () {
	    strokeWeight (1)
		stroke (227,213,184)



		ellipse(mouseX, y,300,300)
		rect(x, mouseY, 200, 200)


	    
	    y = y + yspeed;
	    x = x + xspeed;
	   

	    if (y > windowheight || y < 0) {
	    	yspeed =  - yspeed;
	    
	    }
	    if (x > width || x < 0 ) {
	    	xspeed = -xspeed;
	    }
 
	 
	}

	
