<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

	if($_GET){
        $sql = "INSERT INTO tb10_controle_acessos (tb10_nome, tb10_numero, tb10_cidade, tb10_nome_estabelecimento, tb10_data)
        VALUES ('".$_GET[nome]."', '".$_GET[numero]."', '".$_GET[cidade]."', '".$_GET[estabelecimento]."', NOW())";
    }
    
    mysqli_set_charset($conn,'utf8'); 
    
    $rs = mysqli_query($conn, $sql);
?>