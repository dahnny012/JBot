

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
	this.questionsAsked =[];
   
   return this;
}

/*function main()
{
	loop();
}*/


function loop()
{
	msgList = $("#messages-list").children();
	var convoPointer = checkForUpdate();
	if(convoPointer)
	{
		if(checkSignIn(convoPointer))
		{
			convoManager.push(new person(getName(convoPointer)));
		}
	}
   
   for(i=0; i<convoManager.length; i++)
   {
      conversate(convoManager[i]);
   }
   
   setTimeout(loop,1000);
	
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


function send(text)
{
	// load text into message box
	$("#input-message").val(text);
	$("#button-send").click();
}

function createFakeEvent()
{
   $("#messages-list").append(fakeEvent());
}

function createText()
{
   $("#messages-list").append(fakeText());
}
function fakeEvent(){
   return "<li id='mdl-chat-entry-20000' class='mdl-chat-my-entry'><div class='chat-event course-theme'>"+
   "<span class='time'>03:58</span>" +
   "<a target='_blank' href='https://ay14.moodle.umn.edu/user/view.php?id=25658&amp;course=1983'>Danh Nguyen</a>" +
   "<span class='event'>Danh Nguyen has just entered this chat</span>" + 
   "</div></li>";
}

function fakeText(){
   return "<li id='mdl-chat-entry-20000' class='mdl-chat-my-entry'><div class='chat-event course-theme'>"+
   "<span class='time'>03:58</span>" +
   "<a target='_blank' href='https://ay14.moodle.umn.edu/user/view.php?id=25658&amp;course=1983'>Danh Nguyen</a>" +
   "<span class='text'>Some random Chat</span>" + 
   "</div></li>";
}


var convoManager = [];
var msgList = $("#messages-list").children();
var questionBank = [];
var msgPointer = 0;

function loadJQuery()
{	var jNode = document.createElement("script");
	jNode.src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
	document.body.appendChild(jNode);
}

function bot()
{
	this.convoManager =[];
	this.msgList = $("#messages-list").children();
	this.questionBank = [];
	this.msgPointer = 0;
}

function debug()
{
	
}

function person(name){
	var nameSplit = name.split(" ");
	this.name = name;
	this.fname = nameSplit[0];
	this.lname = nameSplit[1];
	this.convoState = 'Signed In';
	this.responses =[];
	this.questionsAsked =[];
   
   return this;
}

/*function main()
{
	loop();
}*/


function loop()
{
	msgList = $("#messages-list").children();
	var convoPointer = checkForUpdate();
	if(convoPointer)
	{
		if(checkSignIn(convoPointer))
		{
			convoManager.push(new person(getName(convoPointer)));
		}
	}
   
   for(i=0; i<convoManager.length; i++)
   {
      conversate(convoManager[i]);
   }
   
   setTimeout(loop,1000);
	
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


function send(text)
{
	// load text into message box
	$("#input-message").val(text);
	$("#button-send").click();
}

debug.prototype.createFakeEvent = function()
{
   $("#messages-list").append(fakeEvent());
}

debug.prototype.createText = function()
{
   $("#messages-list").append(fakeText());
}
debug.prototype.fakeEvent = function(){
   return "<li id='mdl-chat-entry-20000' class='mdl-chat-my-entry'><div class='chat-event course-theme'>"+
   "<span class='time'>03:58</span>" +
   "<a target='_blank' href='https://ay14.moodle.umn.edu/user/view.php?id=25658&amp;course=1983'>Danh Nguyen</a>" +
   "<span class='event'>Danh Nguyen has just entered this chat</span>" + 
   "</div></li>";
}

debug.prototype.fakeText = function(){
   return "<li id='mdl-chat-entry-20000' class='mdl-chat-my-entry'><div class='chat-event course-theme'>"+
   "<span class='time'>03:58</span>" +
   "<a target='_blank' href='https://ay14.moodle.umn.edu/user/view.php?id=25658&amp;course=1983'>Danh Nguyen</a>" +
   "<span class='text'>Some random Chat</span>" + 
   "</div></li>";
}




//test


