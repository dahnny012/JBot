var convoManager = [];
var messageList = $(".message-list");
var messagePointer = 0;

function loadJQuery()
{	var jNode = document.createElement("script");
	jNode.src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
	document.body.appendChild(jNode);
}
//test
function sayHello()
{
	// var temp
	// get pointer 0
// if(!getclassevent() != null)
		// temp = event(Pointer)
		// var name = getName()
		// set message box html to (" ____ i am danh-bot")
		// test
}

function sendText(text)
{
	// load text into message box
	$("#input-message").val(text);
	$("#button-send").click();
}

function startConversation()
{
	sayHello();	
	// wait for response
	doIntroduction();
	askQuestion(conversationTree);
	//wait for response and loop;

}

function checkResponse(person)
{
	// check messageList for person.name
}


function main()
{
	loadJQuery();
	// run a timeout function
	if(checkForEvent == 'sign in')
	{
		startConversation();
	}
	if else(checkForEvent == 'replied')
	{
		convoManager.forEach(function(entry){
		
		});
	}
	else
	{
		// do nothing
	}

}



function Person(name){
	this.name = name;
	this.chatPos = 0;
	this.answered = false;
}


function checkForEvent()
{
	if(messageList[messagePointer + 1] != null)
	{
		messagePointer++;
		var message = messageList[messagePointer];
	
		// checks for sign in
		if(message.search(/[has signed in$]/))
		{	
			var name = getSignInName(message);
			sayHello(name);
			convoManager.push(Person(name));
			return 'sign in';
		}
		
	}
	else
	{
		return false;
	}
}


function getSignInName(message)
{
	var index = message.search(/[^has$]/);
	var name = substr(0,index);
	return name;
}


