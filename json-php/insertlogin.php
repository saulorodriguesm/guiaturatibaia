<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    if($_GET){
        $sql = "INSERT INTO tb09_controle_dados (tb09_nome, tb09_numero, tb09_cidade) VALUES ('".$_GET[nome]."', '".$_GET[numero]."', '".$_GET[cidade]."');"; 
    }
    
    mysqli_set_charset($conn,'utf8'); 
    
    $rs = mysqli_query($conn, $sql);
?>