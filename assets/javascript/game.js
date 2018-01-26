//randomly generated number
var secret;
//win counter
var win=0;
//lost counter
var lost=0;
//point counter
var total=0;

//array of images for the buttons
var image= ['assets/images/button1.png', 'assets/images/button2.png', 'assets/images/button3.png', 'assets/images/button4.png']

//start the game function is called to generated the 
//secret number and create the 4 buttons with random values
//please go to the start function to see the logic
start();

//clear function
//clears out the items/ 4 buttons once the turn is over
function clear()
{
	$(".items").empty();
}

//start function
//first clears out the screen and creates a generated number and 4 buttons that have 4 random values
function start()
{
//calling clear function
clear();

//generating the random number 
secret= Math.floor((Math.random()*99)+1);
$("#secret").html("<h2>Points: </h2>"+secret);

//creating 4 buttons with 4 random values
for( var x=0; x<4; x++)
{
	var ranItem=Math.floor((Math.random()*12)+1);
	console.log(ranItem);
	var crystal= $("<div>");
	crystal.attr({"class": 'crystal', "data":ranItem});

	crystal.css({"background-image":"url('" +(image[x]) + "')","background-size:":"cover"

	});
	$(".items").append(crystal);
}

}

//on click function for the crystal button point system.
//once user clicks on a specific button points are tabulated
//function also checks if there is a win or lost
$(document).on('click', ".crystal", function()
{

	var num=parseInt($(this).attr('data'));
	console.log(num);
	total+=num;
	$("#total").html("<h2>TOTAL: </h2>"+total);
	//console.log("total: "+ total);

	//if the total is greated than the number generated 
	//then you have lost. 
	//the user get a lost point, and a display message shows for user
	//points are set back to zero and calls the start() function.
	if(total>secret)
	{
		lost++;
		total=0;
		$("#win").html("Win: "+win);
		$("#lose").html("Lose: "+lost);
		$(".banner").html("YOU LOST!!");
		start();
	}
	//if the total is the same as the number generated
	//then you have won. 
	//the user get a win point, and a display message shows for user
	//then calls the start() function.
	else if(total== secret)
	{
		win++;
		total=0;
		$("#win").html("Win: "+win);
		$("#lose").html("Lose: "+lost);
		$(".banner").html("YOU WIN!!");
		start();

	}
	//this gives more time for the user to see the 
	//banner for a longer time/ until user interacts at the next turn
	//and makes sure the banner is cleared as needed.
	else if(total<secret)
	{
		$(".banner").empty();
	}
});
