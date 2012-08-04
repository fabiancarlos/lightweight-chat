/*! author: Fabian Carlos :: email: Fabian.pow@gmail.com :: Lightweight Chat */

var external_user = "Son Goku";
var external_msg = "yow man!";

var chat_box = "";
var user_info_box = "";
var user = "";
var message = "";
var content_box = "";

jQuery(function($){

	// Bloco do chat que será utitlizado
	chat_box = '#chat-box';

	$('.external_user').text(external_user);

	$('#start_chat').click(function(){

		app.open_chat_box(chat_box);
	});


});

var app = {

	open_chat_box: function(chat_box){

		var chat_box = $(chat_box);

		chat_box.css('display', 'block');

	},
	close_chat_box: function(chat_box){

		var chat_box = $(chat_box);

		chat_box.css('display', 'none');

		// ENVIAR AVISANDO QUE O CHAT FOI FECHADO
	},
	send_chat_msg: function(event, textareabox, content_box, user){

		if(event.keyCode == 13 && event.shiftKey == 0)  {

			message = $(textareabox).val();

			// Remove os scripts html
			message = message.replace(/^\s+|\s+$/g,"");
			user = user;

			$(textareabox).val('');
			$(textareabox).focus();
			$(textareabox).css('height','50px');

			 // PARA TESTAR 
			 // Formata mensagem e enviada para tela do chat 
			var content_msg = "<span class='chat_msg'>  <span class='from'>"+user+": <span class='content'>"+message+"</span> </span> </span>";
			$(content_box).append(content_msg);

			// PARA TESTE
			// RESPOSTA DE TESTE
			setTimeout(function(){

				var content_msg = "<span class='chat_msg'>  <span class='from'>"+external_user+": <span class='content'>"+external_msg+"</span> </span> </span>";
				$(content_box).append(content_msg);
			}, 3000);


			// Verifica se mensagem não esta vazia
			if (message !== '' && message !== null) {

				// envia para banco
				app.send_json();
			}

			$("#chat-box .content_box").scrollTop($("#chat-box .content_box")[0].scrollHeight);

			// $("#chatbox_"+chatboxtitle+" .chatboxcontent").scrollTop($("#chatbox_"+chatboxtitle+" .chatboxcontent")[0].scrollHeight);

			return false;
		}

	},
	send_json: function(){

		return true;
	}

}
