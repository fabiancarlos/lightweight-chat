<?php 

// date_default_timezone_set('America/Cuiaba');

$user = 'root';
$pass = 'adminadmin';
$localhost = 'localhost';
$dbname = 'chat_bd';

// Quando via get, insere mensagem ao banco de dados e recupera o ultimo registro tipo json
// Sem get, recupera as ultimas 5 mensagens

if ($_GET) {
	$from = $_GET['from'];
	$to = $_GET['to'];
	$message = $_GET['message'];
	$ticket = $_GET['ticket'];

	try {
	    $db = new PDO('mysql:host='.$localhost.';dbname='.$dbname.'', $user, $pass);
		
		$db->query("INSERT INTO `messages` VALUES('', '".$from."', '".$to."', '".$message."', '2012-08-03', 1)");

	    // $db = new PDO('mysql:host=localhost;dbname=chat_bd', $user, $pass);
	    // $db->exec("SET CHARACTER SET utf8");
	   	
	   	// get last message to append-it
	    $query = $db->prepare('SELECT * FROM `client` ORDER BY id DESC LIMIT 1');
	   	$query->execute();
	   	$result = $query->fetchAll(PDO::FETCH_ASSOC);

	   	$db = null;

		echo json_encode($result);

	} catch (PDOException $e) {
	    print "Error!: " . $e->getMessage() . "<br/>";
	    die();
	}

}else{

	try {
	    $db = new PDO('mysql:host='.$localhost.';dbname='.$dbname.'', $user, $pass);
	    // $db->exec("SET CHARACTER SET utf8");
	   	
	   	// get
	    $query = $db->prepare('SELECT * FROM `client`,`messages` WHERE ORDER BY id DESC LIMIT 12');
	   	$query->execute();
	   	$result = $query->fetchAll(PDO::FETCH_ASSOC);

	    $db = null;

	    // aplica uma ordem inversa a os arrays, 
	    // para mensagens se posicionarem corretamente
	    $result = array_reverse($result);

		echo json_encode($result);

	} catch (PDOException $e) {
	    print "Error!: " . $e->getMessage() . "<br/>";
	    die();
	}
}

