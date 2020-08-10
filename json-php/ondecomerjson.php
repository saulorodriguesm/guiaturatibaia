<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select  tb01_associado, tb01_id, tb01_titulo, tb01_plano, tb01_descricao, tb01_imagem, tb01_imagem2, tb01_imagem3, tb01_imagem4, tb01_imagem5 from tb01_ondecomer order by tb01_plano desc, tb01_data asc, tb01_titulo asc ";

    if ($_GET) {
                
        if($_GET["tipo"] == "bar" || $_GET["tipo"] == "churrascaria" || $_GET["tipo"] == "comida mineira" || $_GET["tipo"] == "doceria" || $_GET["tipo"] == "fast food" || $_GET["tipo"] == "hamburgueria" || $_GET["tipo"] == "pizzaria" || $_GET["tipo"] == "lanchonete" || $_GET["tipo"] == "padaria cafeteria" || $_GET["tipo"] == "pamonharia" || $_GET["tipo"] == "restaurante" || $_GET["tipo"] == "sorveteria" || $_GET["tipo"] == "esfirraria"){
                
            $sql = "select * from tb01_ondecomer where tb01_tipo like '%".$_GET["tipo"] ."%' order by tb01_plano desc, tb01_data asc, tb01_titulo asc";
                
                }
            }

    

    mysqli_set_charset($conn,'utf8'); 
            
    if (!mysqli_query($conn, $sql)){ 

         echo("Error description: " . mysqli_error($conn)); 
     
         die;
     
    }else {$rs = mysqli_query($conn, $sql);} 

    $count = mysqli_num_rows($rs);
    $cont=0;

    $stringJSON = '[';

    while ($row = mysqli_fetch_array($rs)){
        
        if ($stringJSON != "[") {
                $stringJSON .= ",";
        }

        $stringJSON .= '{"id": "'.$row["tb01_id"].'", ';
        $stringJSON .= ' "titulo": "'.$row["tb01_titulo"].'", ';
        $stringJSON .= ' "plano": "'.$row["tb01_plano"].'", ';
        $stringJSON .= ' "descricao": "'.$row["tb01_descricao"].'", ';
        $stringJSON .= ' "associado": "'.$row["tb01_associado"].'", ';
        $stringJSON .= ' "imagem": "'.$row["tb01_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
