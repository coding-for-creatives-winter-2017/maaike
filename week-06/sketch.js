var y = 0;
var x = 0;
var yspeed = 3;
var xspeed = 3;
var windowheight = 900;
var width = 1800;


function setup () {
		createCanvas (1800, 900);
		background (149, 209, 197);
	}

function draw () {
		
	    strokeWeight (1)
	    stroke (227, 213, 184)
	
		fill (random(300, 500), random(200, 250), random(200, 250));


		ellipse(x, y, 40, 40);


		
	  x = x + xspeed;

		 	 if (x > width || x < 0)  {
		    xspeed = -xspeed;
		  }

	  y = y + yspeed;

		  if (y > windowHeight || y < 0) {
		    yspeed = -yspeed;
		  }  
	  
 }


	
