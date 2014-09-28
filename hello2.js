

function loadJQuery()
{	var jNode = document.createElement("script");
	jNode.src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
	document.body.appendChild(jNode);
}

function person(name){
	var nameSplit = name.split(" ");
	this.name = name;
	this.fname = nameSplit[0];
	this.lname = nameSplit[1];
	this.convoState = 'Signed In';
	this.responses =[];
	this.msgPointer = 0;
	this.questionsAsked =[];
   
   return this;
}
	person.prototype.checkForUpdate = function(){
		if( this.responses[this.msgPointer + 1] != null)
		{
			this.msgPointer++;
			return true;
		}
		else
		{
			return false;
		}
		
	};

/*function main()
{
	loop();
}*/


function loop()
{
	console.log("Working magic");	
	msgList = $("#messages-list").children();
	var convoPointer = checkForUpdate();
	if(convoPointer)
	{
		if(checkSignIn(convoPointer))
		{
			convoManager.push(new person(getName(convoPointer)));
		}
		if(var message = checkRespond(convoPointer))
		{
			var Name = getName(convoPointer));
			var person = getPerson(name);
			person.responses.push(message);
			//person.responsePointer += 1;
		}
	}
   
   for(i=0; i<convoManager.length; i++)
   {
      conversate(getPerson(i));
   }
   
   cancel = setTimeout(loop,1000);
	
}

function conversate(person)
{
	switch(person.convoState)
	{
		case 'Signed In':
		//greet(person.name);
		console.log("greeted");
		person.convoState = "greeted";
		break;
		case 'greeted':
		if(person.checkForUpdate())
		{
			//send();
			console.log("Hai Hai , Hajimemashite");
			person.convoState = "Start Intro";
		}
		case 'Start Intro':
			//send()
			console.log("Watashi no namae wa Hachiko desu.");
			console.log("O-namae wa nan desuka?");
		break;
		//evalute(person);
		default:
		if(person.checkForUpdate())
		{
			evaluate(person);
		}
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
	var message = $.trim($(msgList[event]).find(".event").text());
	if(message.search(/[*has just entered this chat$]/)) // subject to change after analyzing structure.
	{	
		return true;
	}
	else
	{
		return false
	}
}

function checkRespond(event)
{
	var message = $.trim($(msgList[event]).find(".text").text());
	if(message.search(/[*has just entered this chat$]/)) // subject to change after analyzing structure.
	{	
		return message
	}
	else
	{
		return false
	}
}

// from a sign in event
function getName(event)
{
	return $(msgList[event]).find('a[target="_blank"]').text()
}

function greet(name)
{
	var date = new Date();
	var greeting = '';
	time = date.getHours() + date.getMinutes()/100;
	
	if( (time <= 11.59)){
		greeting += "Ohayoo Gozaimasu " + name;
		send(greeting);
	}
	else if ((time >= 12.00 && time <= 16.59)){
		greeting += "Konichiwa " + name;
		send(greeting);
	}
	else{
		greeting += "Konbanwa " + name;
		send(greeting);
	}
}

for(var i)
function send(text)
{
	msgPointer++;
	$("#input-message").val(text);
	$("#button-send").click();
}

function createFakeEvent()
{
   $("#messages-list").append(fakeEvent());
}

function createText(string)
{
   $("#messages-list").append(fakeText(string));
}
function fakeEvent(){
   return "<li id='mdl-chat-entry-20000' class='mdl-chat-my-entry'><div class='chat-event course-theme'>"+
   "<span class='time'>03:58</span>" +
   "<a target='_blank' href='https://ay14.moodle.umn.edu/user/view.php?id=25658&amp;course=1983'>Danh Nguyen</a>" +
   "<span class='event'>Danh Nguyen has just entered this chat</span>" + 
   "</div></li>";
}

function fakeText(string){
   return "<li class=\"mdl-chat-my-entry\" id= mdl-chat-entry-23251\"><div id=\"yui_3_13_0_3_1411828399980_13\" class=\"chat-message course-theme\">"
    + "<div class=\"chat-message-meta\">"
      +  "<span class=\"time\">09:51</span>"
        + "<span class=\"user\"><a href=\"\" target=\"_blank\">X-san</a></span>"
    + "</div>"
    + "<div id=\"yui_3_13_0_3_1411828399980_12\" class=\"text\">"
    + string
    + "</div>"
+"</div></li>";
}
function stopBot()
{
	clearTimeout(cancel);
}

function getPerson(number)
{
	return convoManager[number];
}

function findPerson(name)
{
	for(i=0; i<convoManager.length; i++)
   {
      if(getPerson(i).name == name)
      {
		  return getPerson(i);
	  }
   }
   return null;
}

function evaluate(person)
{
	
}



var cancel = 0;
var convoManager = [];
var msgList = $("#messages-list").children();
var questionBank = [];
var msgPointer = 0;



//test


