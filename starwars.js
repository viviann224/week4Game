$(document).ready(function()
{

var test=true;
var charPicked=true;
var enemyKilled=0;

var rest1=0;
var rest2=0;
var rest3=0;
var rest4=0;

//when charactered pick, move to yourchar position
$(".char1").on("click", function()
{
	if(charPicked)
	{
		$(this).addClass(".yourchar");
		console.log($(this).attr('health'));
		rest1++;
		//$(".char1").appendTo(".yourchar");
		$(".char2").appendTo("#enemys");
		$(".char3").appendTo("#enemys");
		$(".char4").appendTo("#enemys");
		charPicked=false;
	}
	else if(charPicked==false && rest1==0)
	{
		//$(this).addClass(".attackpos");
		$(".char1").appendTo(".attackpos").addClass("attackpos");
		rest1++;

	}
});
//when charactered pick, move to yourchar position
$(".char2").on("click", function()
{
	if(charPicked)
	{
		$(this).addClass(".yourchar");
		console.log($(this).attr('health'));
		rest2++;
		//$(".char2").appendTo(".yourchar");
		$(".char1").appendTo("#enemys");
		$(".char3").appendTo("#enemys");
		$(".char4").appendTo("#enemys");
		charPicked=false;
	}
	else if(charPicked==false && rest2==0)
	{
		//$(this).addClass(".attackpos");
		$(".char2").appendTo(".attackpos").addClass("attackpos");
		rest2++;

	}
});

 //when charactered pick, move to yourchar position
$(".char3").on("click", function()
{
	if(charPicked)
	{
		$(this).addClass(".yourchar");
		console.log($(this).attr('health'));
		console.log(typeof $(this).attr('health'));
		rest3++;
		console.log(this);
		//$(".char3").appendTo(".yourchar");
		$(".char1").appendTo("#enemys");
		$(".char2").appendTo("#enemys");
		$(".char4").appendTo("#enemys");
		charPicked=false;
	}
	else if(charPicked==false && rest3==0)
	{
		//$(this).addClass(".attackpos");
		$(".char3").appendTo(".attackpos").addClass("attackpos");
		rest3++;

	}
});

//when charactered pick, move to yourchar position
$(".char4").on("click", function()
{
	if(charPicked)
	{
		$(this).addClass(".yourchar");
		console.log($(this).attr('health'));
		rest4++;
		$(".char4").appendTo("#enemys");
		$(".char1").appendTo("#enemys");
		$(".char3").appendTo("#enemys");
		$(".char2").appendTo("#enemys");
		charPicked=false;
	}
	else if(charPicked==false && rest4==0)
	{
		//$(this).addClass(".attackpos");
		$(".char4").appendTo(".attackpos").addClass("attackpos");
		rest4++;

	}
});


$(".attackbutton").on("click", function()
{
	alert("Attack!");
	console.log("check: "+ $(this).attr('health'));
	//once the button is click, your character will get the attributes
	var myChar= $(".yourchar").attr('charName');
	
	var myHealth=$(".yourchar").attr('health');
	//console.log($(".yourchar").attr('health'));
	var myAttack=$(".yourchar").attr('attack');
	console.log(myChar);
	console.log(myHealth);
	console.log(myAttack);
	// character's health defender
	var myHD=$(".yourchar").attr('health');
	var myCounterAttack=$(".yourchar").attr('attack');
	var myHD=$(".yourchar").attr('counterAttack'); 
	//once button is clicked, get the current enemy's attributes
	var enChar= $(".attackpos").attr('charName');
	var enHealth=$(".attackpos").attr('health');
	var enAttack=$(".attackpos").attr('attack');
	console.log(enChar);
	console.log(enHealth);
	console.log(enAttack);
	//when user attack, mychar health is lost
	var myPost=myHealth-myCounterAttack;
	//displays the changes
	$(".yourchar p").html($(".yourchar").attr('health'));
	//when attack enemy's health is lost
	var enPost= enHealth-enAttack;
	//displays the changes
	$(".attackpos p").html($(".attackpos").attr('health'));
	console.log("mypost: "+myPost);
	console.log("enpost: "+enPost);
});




});