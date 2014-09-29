

function loadJQuery()
{	var jNode = document.createElement("script");
	jNode.src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
	document.body.appendChild(jNode);
	console.log("JQUery loaded");
}
loadJQuery();

function makePerson(name){
	var nameSplit = name.split(" ");
	this.name = name;
	this.fname = nameSplit[0];
	this.lname = nameSplit[1];
	this.convoState = 'Signed In';
	this.responses = new Array();
	this.msgPointer = -1;
	this.questionsAsked = new Array();
	
	return this;
}


makePerson.prototype.checkForUpdate = function(){
		if( this.responses[this.msgPointer + 1] != undefined)
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
	updateList();
	var convoPointer = checkForUpdate();
	if(convoPointer)
	{
		if(checkSignIn(convoPointer))
		{
			var signee = new makePerson(getName(convoPointer));
			convoManager.push(signee);
		}
		var message =  checkRespond(convoPointer);
		if(!checkEmpty(message))
		{
			var name = getName(convoPointer);
			var person = findPerson(name);
			if(person != null)
			{
				person.responses.push(message);
			}
		}
	}
   
   for(var i=0; i<convoManager.length; i++)
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
			console.log("Hajimemashite" + person.name);
			person.convoState = "Start Intro";
		}
		break;
		case 'Start Intro':
			//send()
			console.log(person.name);
			console.log("Watashi no namae wa Hachiko desu.");
			console.log("O-namae wa nan desuka?");
			person.convoState = "Asked for name";
		break;
		case 'Asked for name':
		if(person.checkForUpdate())
		{
			if(evaluate(person))
			{
				console.log("Yoroshiku Onegaishimasu");
			}
			else
			{
				log("Sumimasen , mochido kitte kudasai");
			}
		}
		break;
		//evalute(person);
		default:
		if(person.checkForUpdate())
		{
			log("Sumimasen , mochido kitte kudasai");
		}
		// do nothing	
		
	}
	
}

function checkForUpdate()
{
	if(msgList[msgPointer + 1] != null)
	{
		msgPointer++;
		log("update found");
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
	if(message.match(/has just entered this chat/) != null) // subject to change after analyzing structure.
	{	
		log("someone signed in");
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
	return message;
}

// from a sign in event
function getName(event)
{
	return $.trim($(msgList[event]).find('a[target="_blank"]').text());
}

function checkEmpty(string)
{
	return string == "";
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

function evaluate(person)
{
	switch(person.convoState)
	{
		case 'Asked for name':
			var findName = new RegExp(person.name + ".desu");
			for(i=0; i<person.responses.length; i++)
			{
				var response = person.responses[i];
				if(response.match(findName))
				{
					person.convoState("I havent thought this far ahead");
					return true;
				}
				
			}
			return false;
		break
		default:
		log("Sumimasen , mochido kitte kudasai");
	}
}



function send(text)
{
	msgPointer++;
	$("#input-message").val(text);
	$("#button-send").click();
}

function createFakeEvent(user)
{
	if(typeof(user) === 'undefined') 
		user = "X-san";
   $("#messages-list").append(fakeEvent(user));
}

function createText(string,user)
{
   $("#messages-list").append(fakeText(string,user));
}
function fakeEvent(user)
{
   return "<li id='mdl-chat-entry-20000' class='mdl-chat-my-entry'><div class='chat-event course-theme'>"+
   "<span class='time'>03:58</span>" +
   "<a target='_blank' href='https://ay14.moodle.umn.edu/user/view.php?id=25658&amp;course=1983'>"+user+"</a>" +
   "<span class='event'>"+user+" has just entered this chat</span>" + 
   "</div></li>";
}

function fakeText(string,user){
   return "<li class=\"mdl-chat-my-entry\" id= mdl-chat-entry-23251\"><div id=\"yui_3_13_0_3_1411828399980_13\" class=\"chat-message course-theme\">"
    + "<div class=\"chat-message-meta\">"
      +  "<span class=\"time\">09:51</span>"
        + "<span class=\"user\"><a href=\"\" target=\"_blank\">" + user + "</a></span>"
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

function getPerson(number)
{
	return convoManager[number];
}

function resetConvo()
{
	convoManager = [];
	
}

function reboot()
{
	stopBot();
	resetConvo();
}

function updateList()
{
	msgList = $("#messages-list").children();
}

function log(string)
{
	console.log(string);
}

function updatePointer()
{
	msgPointer = msgList.length - 1;
}


//globals
var cancel = 0;
var convoManager = new Array();
var msgList = $("#messages-list").children();
var questionBank = new Array();
var msgPointer = 0;



//test


