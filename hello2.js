var convoManager[];
var msgsList = $("#messages-list").children();
var questionBank[];
var msgPointer = 0;

function loadJQuery()
{	var jNode = document.createElement("script");
	jNode.src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
	document.body.appendChild(jNode);
}

function loadProgram()
{
	var jNode = document.createElement("script");
	jNode.src="https://shouttotheworld.net/codeSnippets/hello2.js";
	document.body.appendChild(jNode);
}

function person(name){
	var nameSplit = name.split(" ");
	this.name = name;
	this.fname = nameSplit[0];
	this.lname = nameSplit[1];
	this.convoState = 'Signed In';
	this.responses[];
	this.questionsAsked[];
}

function main()
{
	loop();
	setTimeout(loop(),100);
}

function loop()
{
	msgsList = $("#message-list").children();
	var convoPointer = checkForUpdate();
	if(convoPointer)
	{
		if(checkSignIn(convoPointer))
		{
			convoManager.push(person(getName(convoPointer)));
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

function checkForUpdate()
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
	message = $.trim($(msgList[event].find(".event").text()));
	if(message.search(/[*has just entered this chat$]/)) // subject to change after analyzing structure.
	{	
		return true;
	}
	else
	{
		return false
	}
}

// from a sign in event
function getName(event)
{
	return $(msgsList[event]).find('a[target="_blank"]').text()
}

function greet(name)
{
	var date = new Date();
	var greeting = '';
	time = date.getHours() + date.getMinutes()/100;
	switch(time){
	case time <= 11.59:
		greeting += "Ohayoo Gozaimasu";
		send(greeting);
		break;
	case time >= 12.00 && time <= 16.59:
		greeting += "Konichiwa";
		send(greeting);
		break;
	default:
		greeting += "Konbanwa";
		send(greeting);
		break;
	}
	
	return greeting + " " + name;
}


function send(text)
{
	// load text into message box
	$("#input-message").val(text);
	$("#button-send").click();
}

loadJQuery();
main();





