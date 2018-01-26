var secret;
var win=0;
var lost=0;
var total=0;

var image= ['assets/images/button1.png', 'assets/images/button2.png', 'assets/images/button3.png', 'assets/images/button4.png']

start();

function clear()
{
	$(".items").empty();


}
function start()
{

clear();


secret= Math.floor((Math.random()*99)+1);
$("#secret").html("<h2>Points: </h2>"+secret);

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

$(document).on('click', ".crystal", function()
{

	var num=parseInt($(this).attr('data'));
	console.log(num);
	total+=num;
	$("#total").html("<h2>TOTAL: </h2>"+total);
	//console.log("total: "+ total);

	if(total>secret)
	{
		lost++;
		total=0;
		$("#win").html("Win: "+win);
		$("#lose").html("Lose: "+lost);
		$(".banner").html("YOU LOST!!");
	
		start();
		
	}
	else if(total== secret)
	{
		win++;
		total=0;
		$("#win").html("Win: "+win);
		$("#lose").html("Lose: "+lost);
		$(".banner").html("YOU WIN!!");

		start();

	}
	else if(total<secret)
	{
		$(".banner").empty();
	}
});
