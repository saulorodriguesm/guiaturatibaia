<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select  tb04_associado, tb04_id, tb04_titulo, tb04_plano, tb04_descricao, tb04_imagem, tb04_imagem2, tb04_imagem3, tb04_imagem4, tb04_imagem5 from tb04_ondecomprar order by tb04_plano desc, tb04_data asc, tb04_titulo asc ";

    
            if ($_GET) {
                
                if($_GET["tipo"] == "loja" || $_GET["tipo"] == "supermercado" || $_GET["tipo"] == "conveniência" || $_GET["tipo"] == "petshop" ){
                
                  $sql = "select * from tb04_ondecomprar where tb04_tipo like '%".$_GET["tipo"]."%' order by tb04_plano desc, tb04_data asc, tb04_titulo asc";
                
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

        $stringJSON .= '{"id": "'.$row["tb04_id"].'", ';
        $stringJSON .= ' "titulo": "'.$row["tb04_titulo"].'", ';
        $stringJSON .= ' "plano": "'.$row["tb04_plano"].'", ';
        $stringJSON .= ' "descricao": "'.$row["tb04_descricao"].'", ';
        $stringJSON .= ' "associado": "'.$row["tb04_associado"].'", ';
        $stringJSON .= ' "imagem": "'.$row["tb04_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
