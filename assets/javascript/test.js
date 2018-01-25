/////////////////////////////////////////////
//Vivian Tuong Nguyen
//Javascript code for Crystal Collector 
///////////////////////////////////////////////

 $(document).ready(function() 
 {

//random number stored into specific array
var rand1=1;
var rand2=1;
var rand3=1;
var rand4=1;
var secret=3;
var total=0;
var win=0;

var bt1, bt2,bt3,bt4, bt;

//var secret=0;
start();
//random number generator for the 4 items (values of 1-12)
function getRandItem()
{
	//var num=1;
	rand1= parseInt(Math.floor(Math.random() * 12) + 1);
	console.log("rand1 "+rand1);
	rand2= parseInt(Math.floor(Math.random() * 12) + 1);
	console.log("rand2 "+rand2); 
	rand3= parseInt(Math.floor(Math.random() * 12) + 1); 
	console.log("rand3 "+rand3);
	rand4= parseInt(Math.floor(Math.random() * 12) + 1); 
	console.log("rand4 "+rand4);
	//return num;
}
//random num generator for the secret number (values of 19-120)
function getRandNum()
{
	var num= 5;
	//num= Math.floor(Math.random() * (120-19+1)) + 19;
	secret= parseInt(num);
	$("#secretnum").prepend("<br>Secret Number: " + secret); 
	//return parseInt(secret);

}

function start()
{
	getRandItem();
	getRandNum();

}
/*
$("#button-1").on("click", function()
	{
		$("#button-1").attr("value", rand1);
		console.log(rand1);
		//mytotal +=  parseInt($("#button-1").val());
		//console.log(mytotal);
		//checkwin(secret,mytotal);
		//$("#totalscore").html("Total Score: "+checkwin.mytotal);

	});
*/


$(".number").on("click", function()
{
	if(total==secret)
	{
		win++;
		console.log("win: "+win);
		start();

	}
	else if(total>secret)
	{
		lose++;
		console.log("lose: "+lose);
	}
	else
	{
		
		if(bt==rand1)
		{
			total+=rand1;
		}
		else if( bt==rand2)
		{
			total+=rand2;
		}
		else if (bt==rand3)
		{
			total+=rand3;
		}
		else if(bt==rand4)
		{
			total+=rand4;
		}

		console.log("new total: "+total);
	}
	

	$("#button-1").on("click", function()
	{
		$("#button-1").attr("value", rand1);
		console.log(rand1);
		bt=rand1;

	});

$("#button-2").on("click", function()
	{
		$("#button-2").attr("value", rand2);
		console.log(rand2);
		bt=rand2;

	});

$("#button-3").on("click", function()
	{
		$("#button-3").attr("value", rand3);
		console.log(rand3);
		bt=rand3;

	});

$("#button-4").on("click", function()
	{
		$("#button-4").attr("value",rand4);
		console.log(rand4);
		bt=rand4;

	});
});





});

