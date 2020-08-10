<?php

   $db['server'] = 'localhost';
   $db['user']    = 'guiatura_tibaia';
   $db['password'] = '123Mudar2*';
   $db['dbname'] = 'guiatura_tibaiapp';

	$conn = mysqli_connect( $db['server'] ,$db['user'] ,$db['password']);

	mysqli_select_db($conn, $db['dbname']);

?>
