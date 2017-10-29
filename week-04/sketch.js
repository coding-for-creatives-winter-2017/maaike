var rectDOWN = 0
var rectUP = 300
var circleL = 900
var circleR = -100
var value = 0;


function setup () {
		createCanvas (800, 450)

		
}


function draw () {
		strokeWeight (10)
		stroke (230,132,147)


		background (137,109,147)

		rect(100,rectDOWN,100,100)
		rect(600,rectUP,100,100)

		ellipse(circleL,300, 100,100)
		ellipse(circleR, 100,100,100)

	    fill(value);
        rect(25, 25, 50, 50)
        rect(400, 300, 50, 50,)
        ellipse (700,mouseY, 30,30)
        ellipse (mouseX,400, 30,30)

	    rectDOWN = rectDOWN + 1
	    rectUP = rectUP - 1
	    circleR = circleR + 1
	    circleL = circleL - 1



	}

function mousePressed() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}






	

