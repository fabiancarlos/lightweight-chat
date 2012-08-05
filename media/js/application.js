/*! author: Fabian Carlos :: email: Fabian.pow@gmail.com :: Lightweight Chat */

var internal_user = "Son Goku";
var external_msg = "yow man!";

var chat_box = "";
var user_info_box = "";

// nome do cliente
var client_name = "";

// ticket de chamada
var ticket = "";

// client message
var client_message = "";

// the block containing the messages
var content_box = "";

jQuery(function($){

	// Bloco do chat que será utitlizado
	chat_box = '#chat-box';
	content_box = '.content_box';

	$('.internal_user').text(internal_user);

	// star the chat
	// opin the login box
	$('#start_chat').click(function(event){
		event.preventDefault();

		$('#login-box').css('display', 'block');
	});

	// Open Chat box
	// and get name and subject to create a new user client 
	// and create a new ticket
	$('#call-ticket').click(function(event){
		event.preventDefault();

		app.open_chat_box($('form#form_call_chat'));

		$('#chat-box').css('display', 'block');

		$('#login-box').css('display', 'none');
	});

	// Close login to Chat
	$('#close_login_box').click(function(event){
		event.preventDefault();

		$('#login-box').css('display', 'none');
	});

	// Close Chat box
	$('#close_chat_box').click(function(event){
		event.preventDefault();

		$('#chat-box').css('display', 'none');
	});

	// app.get_chat_msg();

});

var app = {

	// manter foco do scroll da caixa de mensagens sempre no final
	scroll_bottom_focus: function(content_box){

		$("#chat-box "+content_box).scrollTop($("#chat-box "+content_box)[0].scrollHeight);
	},
	open_chat_box: function(){

		console.log("GET CHAT MSG");

		$.ajax({
            url: 'create_user.php',
            dataType: 'json',
            type: 'GET',
            cache: 'false',
            contentType: "application/json; charset=utf-8",
            success: function(data) {

            	console.log(data.length);

            	if (data.length === 0) {

            		app.append_chat_error('teste' , message, '...não foi enviado');
            	}else{ 

            		for(i in data){
			        	if (data.hasOwnProperty(i)) {

			        		console.log(data[i]);
			        		
			        		app.append_chat_content(data[i].from , data[i].message);

			        	}
			        }

            	}


            },
            error: function(jqXHR, textStatus, errorThrown){

            	console.log(jqXHR + textStatus + errorThrown);
            }

        });

	},
	close_chat_box: function(chat_box){

		var chat_box = $(chat_box);

		chat_box.css('display', 'none');

		// ENVIAR AVISANDO QUE O CHAT FOI FECHADO
	},
	send_chat_msg: function(event, textareabox, content_box, user, ticket){

		if(event.keyCode == 13 && event.shiftKey == 0)  {

			client_message = $(textareabox).val();

			// Remove os scripts html
			client_message = client_message.replace(/^\s+|\s+$/g,"");
			client_name = user;

			ticket = ticket;

			$(textareabox).val('');
			$(textareabox).focus();
			$(textareabox).css('height','50px');

			// Verifica se mensagem não esta vazia
			// e envia para banco
			if (client_message !== '') {
				
				// to 'id 1' user
				app.create_msg_bd(1, client_name, client_message, ticket);
			}	

			// Manter foco do scroll da caixa de mensagens sempre no final
			app.scroll_bottom_focus('.content_box');

			event.preventDefault();
		}

	},
	append_chat_content: function(user, message){

		// Append to chat content, the msg
		var content_msg = "<span class='chat_msg'>  <span class='from'>"+user+": <span class='content'>"+message+"</span></span> </span>";
		$(content_box).append(content_msg);

		// Manter foco do scroll da caixa de mensagens sempre no final
		app.scroll_bottom_focus('.content_box');
	},
	append_chat_error: function(user, message, error){

		// Append to chat content, the msg
		var content_msg = "<span class='chat_msg'>  <span class='from, red'> "+user+": <span class='content_error'>"+message+"</span> "+error+"</span> </span>";
		$(content_box).append(content_msg);

		// Manter foco do scroll da caixa de mensagens sempre no final
		app.scroll_bottom_focus('.content_box');
	},
	get_chat_msg: function(){

		console.log("GET CHAT MSG");

		$.ajax({
            url: 'teste.php',
            dataType: 'json',
            type: 'GET',
            cache: 'false',
            contentType: "application/json; charset=utf-8",
            success: function(data) {

            	console.log(data.length);

            	if (data.length === 0) {

            		app.append_chat_error('teste' , message, '...não foi enviado');
            	}else{ 

            		for(i in data){
			        	if (data.hasOwnProperty(i)) {

			        		console.log(data[i]);
			        		
			        		app.append_chat_content(data[i].from , data[i].message);

			        	}
			        }

            	}


            },
            error: function(jqXHR, textStatus, errorThrown){

            	console.log(jqXHR + textStatus + errorThrown);
            }

        });

	},
	// Send the message via GET
	// Insert the message into databases
	create_msg_bd: function(to, from, message, ticket){

		$.ajax({
            url: 'teste.php',
            dataType: 'json',
            type: 'GET',
            data: {to: to, from: from, message: message, ticket: ticket},
            cache: 'false',
            contentType: "application/json; charset=utf-8",
            success: function(data) {
              
            	console.log(data.length);

            	if (data.length === 0) {

            		app.append_chat_error(from, message, '...não foi enviado');
            	}else{ 

            		for(i in data){
			        	if (data.hasOwnProperty(i)) {

			        		console.log(data[i]);
			        		
			        		app.append_chat_content(data[i].from , data[i].message);

			        	}
			        }

            	}
            }

        });
	}



}
