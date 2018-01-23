/////////////////////////////////////////////
//Vivian Tuong Nguyen
//Javascript code for Crystal Collector 
///////////////////////////////////////////////





//random number stored into specific array
var ran1=0, rand2=0, rand3=0, rand4=0;

//the random number for the user to calculate to
var num;
// sum of wins
var win;
//sum of loses
var lose;
//total score counter based on user's choce of item#
var totalScore;
//checks if game is over
var isDone;

//gets user to guess when the user presses a key

secret=getRandNum();
console.log(secret);

start();
//getButton();


document.onkeyup = function()
{
	//alert("hello");
	//test num here

}
//random number generator for the 4 items (values of 1-12)
function getRandItem()
{
	var num= Math.floor(Math.random() * 12) + 1 
	return num;
}
//random num generator for the secret number (values of 19-120)
function getRandNum()
{
	var num= Math.floor(Math.random() * (120-19+1)) + 19;
	$("#secretnum").prepend("<br>Secret Number: " + num); 
	return num;

}

function start()
{
	for(var x=0; x<4;x++)
	{
	rand=getRandItem();
	console.log("num1: "+rand);
	var btn = $("<button>");
	btn.addClass("badge");
	btn.attr("ran-num1", rand);
	btn.text(rand);
	$("#items").append(rand);
	console.log("btn1: "+btn);
	}

	/*
	console.log("btn1")
	rand2=getRandItem();
	console.log("num2: "+rand2);
	rand3=getRandItem();
	console.log("num3: "+rand3);
	rand4=getRandItem();
	console.log("num4: "+rand4);
	*/

	
	
	
}

function getButton()
{
	

}

$("#button1").on("click", function()
{
	
});

$("#button2").on("click", function()
{

	console.log("you click on 2")
});

$("#button3").on("click", function()
{

	console.log("you click on 3")
});

$("#button4").on("click", function()
{

	console.log("you click on 4")
});



//need to create buttons


//function begin