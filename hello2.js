var convoManager[];
var msgList = $(".message-list");
var questionBank[];
var msgPointer = 0;

function loadJQuery()
{	var jNode = document.createElement("script");
	jNode.src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
	document.body.appendChild(jNode);
}

function person(name){
	this.name = name;
	this.convoState = 'Signed In';
	this.responses[];
	this.questionsAsked[];
}

function main()
{
	setInterval(loop(),100);
}

function loop()
{
	event = checkForEvent();
	if(event)
	{
		if(checkSignIn(event))
		{
			convoManager.push(person(getName(event)));
		}
	}
	convoManager.foreach(function(entry){
	conversate(entry);
	})
	
}

function conversate(person)
{
	switch(person.convoState)
	{
		case 'Signed In':
		greet(person.name);
		break;
		default:
		// do nothing	
		
	}
	
}

function checkForEvent()
{
	if(msgList[msgPointer + 1] != null)
	{
		msgPointer++;
		return msgPointer;
	}
	else
	{
		return false;
	}
}

function checkSignIn(event)
{
	message = msgList[event];
	if(message.search(/[*has signed in.$]/)) // subject to change after analyzing structure.
	{	
			return true;
	}
}

// from a sign in event
function getName(event)
{
	var message = msgList[event];
	var index = message.search(/[^has$]/);
	var name = substr(0,index-1);
	return name;
}

function greet(name)
{
	var date = new Date();
	var greeting = '';
	time = date.getHours() + date.getMinutes()/100;
	switch(time){
	case time <= 11.59:
		greeting += "Ohayoo Gozaimasu";
		break;
	case time >= 12.00 && time <= 16.59:
		greeting += "Konichiwa";
		break;
	default:
		greeting += "Konbanwa";
		break;
	}
	
	return greeting + " " + name;
}






