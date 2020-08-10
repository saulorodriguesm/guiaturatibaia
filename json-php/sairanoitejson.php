<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select  tb03_associado, tb03_id, tb03_titulo, tb03_plano, tb03_descricao, tb03_imagem, tb03_imagem2, tb03_imagem3, tb03_imagem4, tb03_imagem5 from tb03_sairanoite order by tb03_plano desc, tb03_data asc, tb03_titulo asc ";

    
           if ($_GET) {
                
                if($_GET["tipo"] == "bar" || $_GET["tipo"] == "clube" || $_GET["tipo"] == "entretenimento" || $_GET["tipo"] == "pub"){
                
                  $sql = "select * from tb03_sairanoite where tb03_tipo like '%".$_GET["tipo"] . "%' order by tb03_plano desc, tb03_data asc, tb03_titulo asc";
                
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

        $stringJSON .= '{"id": "'.$row["tb03_id"].'", ';
        $stringJSON .= ' "titulo": "'.$row["tb03_titulo"].'", ';
        $stringJSON .= ' "plano": "'.$row["tb03_plano"].'", ';
        $stringJSON .= ' "descricao": "'.$row["tb03_descricao"].'", ';
        $stringJSON .= ' "associado": "'.$row["tb03_associado"].'", ';
        $stringJSON .= ' "imagem": "'.$row["tb03_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
