<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select  tb02_associado, tb02_id, tb02_titulo, tb02_plano, tb02_descricao, tb02_imagem, tb02_imagem2, tb02_imagem3, tb02_imagem4, tb02_imagem5 from tb02_ondedormir order by tb02_plano desc, tb02_data asc, tb02_titulo asc ";

    
            if ($_GET) {
                
                if($_GET["tipo"] == "hotel" || $_GET["tipo"] == "hotel fazenda" || $_GET["tipo"] == "pousada camping" || $_GET["tipo"] == "pousada" || $_GET["tipo"] == "resort"){
                
                  $sql = "select * from tb02_ondedormir where tb02_tipo like '%".$_GET["tipo"] . "%' order by tb02_plano desc, tb02_data asc, tb02_titulo asc";
                
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

        $stringJSON .= '{"id": "'.$row["tb02_id"].'", ';
        $stringJSON .= ' "titulo": "'.$row["tb02_titulo"].'", ';
        $stringJSON .= ' "plano": "'.$row["tb02_plano"].'", ';
        $stringJSON .= ' "descricao": "'.$row["tb02_descricao"].'", ';
        $stringJSON .= ' "associado": "'.$row["tb02_associado"].'", ';
        $stringJSON .= ' "imagem": "'.$row["tb02_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
