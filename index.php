<?php 
session_start();

// require_once dirname(__FILE__)."/PDO4YOU/PDO4You.load.php";

// PDO4You::getAvailableDrivers();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="author" content="Fabian Carlos" />
	<meta name="reply-to" content="fabian.pow@gmail.com" />
	<title>Lightweight Chat</title>

	<link rel="stylesheet" href="media/css/style.css" type="text/css" media="screen" />

	<!-- jQuery 1.7.2 -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="media/js/jquery-1.7.2.min.js"><\/script>')</script>

	<script type="text/javascript" src="media/js/application.js"></script>
</head>
<body>

<div id="todo">
	<h1>Lightweight Chat</h1>

	<p>...developing, yet! </p>

	<br><br>
	<a href="javascript:void(0)" id="start_chat">START CHAT</a>

</div>

<!-- LOGIN BOX -->
<div id="login-box">

	<h2>Login to chat <a href="" class="close" id="close_login_box" >x</a></h2>

	<form action="" method="post" id="form_call_chat">

		<input type="text" name="client_name" id="client_name" placeholder="nome...">

		<input type="text" name="client_subject" id="client_subject" placeholder="assunto...">

		<a href="javascript:void(0)" id="call-ticket">GET TICKET</a>
	</form>
</div>

<!-- CHAT BOX -->
<div id="chat-box">
	<div id="client_info_box">
		<div class="info">
			<span class="name">Someone</span> to "<span class="internal_user">Someone</span>" - <span class="subject">Something</span> - <span class="ticket">Ticket: 323</span>
		</div>
		<div class="status_chat">Status: <b class="green">ONLINE</b> </div>
		<a class="close_chat_btn" href="javascript:void(0)" id="close_chat_box">X</a>
	</div>

	<div class="content_box">
		<!-- <span class="chat_msg"> 
			<span class="from">Fabian Carlos: 
			<span class="content">The value "inherit" is not supported in IE7 and earlier. IE8 requires a !DOCTYPE. IE9 supports "inherit".</span> 
			</span> 
		</span> -->
		
	</div>

	<textarea class="message_box" onkeydown="app.send_chat_msg( event , '.message_box', '.content_box', 'Fabian Carlos', 323);"></textarea>
</div>


</body>
</html>
