/////////////////////////////////////////////
//Vivian Tuong Nguyen
//Javascript code for Crystal Collector 
///////////////////////////////////////////////





//random number stored into specific array
var ran1=0, rand2=0, rand3=0, rand4=0;

//keeping running total on user's number
var mytotal=0;
// sum of wins
var win=0;
//sum of loses
var lose;
//total score counter based on user's choce of item#
var totalScore=0;
//checks if game is over
var isDone;
var secret;

//gets user to guess when the user presses a key



start();



document.onkeyup = function()
{

	//alert("hello");
	//test num here

}
//random number generator for the 4 items (values of 1-12)
function getRandItem()
{
	var num=1;
	//var num= Math.floor(Math.random() * 12) + 1 
	return num;
}
//random num generator for the secret number (values of 19-120)
function getRandNum()
{
	var num= 5;
	//var num= Math.floor(Math.random() * (120-19+1)) + 19;
	$("#secretnum").prepend("<br>Secret Number: " + num); 
	return parseInt(num);

}

function checkwin(secret, mytotal)
{
	console.log("secret inside: "+secret);
	console.log("my total inside: "+mytotal);
	if(secret== mytotal)
	{
		//display win
		console.log("you are a winner");
		$("#status").html("You are a winner!")
		mytotal=0;
		win++;
		console.log("total score needs to be 0: "+mytotal);
		$("#totalscore").html("Total Score: "+mytotal);
		$("#wins").html("Wins: "+win);
		//total.empty();
		
		start();
	}
}

function start()
{
	secret=getRandNum();
	console.log(secret);
	rand1=getRandItem();
	console.log("num1: "+rand1);
	rand2=getRandItem();
	console.log("num2: "+rand2);
	rand3=getRandItem();
	console.log("num3: "+rand3);
	rand4=getRandItem();
	//rand4=secret;
	console.log("num4: "+rand4);	
}

$("#button-1").on("click", function()
	{
		$("#button-1").attr("value", rand1);
		console.log(rand1);
		mytotal +=  parseInt($("#button-1").val());
		console.log(mytotal);
		checkwin(secret,mytotal);
		$("#totalscore").html("Total Score: "+checkwin.mytotal);

	});

$("#button-2").on("click", function()
	{
		$("#button-2").attr("value", rand2);
		console.log(rand2);
		mytotal +=  parseInt($("#button-2").val());
		console.log(mytotal);
		checkwin(secret,mytotal);

	});

$("#button-3").on("click", function()
	{
		$("#button-3").attr("value", rand3);
		console.log(rand3);
		mytotal +=  parseInt($("#button-3").val());
		console.log(mytotal);
		checkwin(secret,mytotal);

	});

$("#button-4").on("click", function()
	{
		$("#button-4").attr("value",rand4);
		console.log(rand4);
		mytotal +=  parseInt($("#button-4").val());
		console.log(mytotal);
		checkwin(secret,mytotal);

	});




//need to create buttons


//function begin