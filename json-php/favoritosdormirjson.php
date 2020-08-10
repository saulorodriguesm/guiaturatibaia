<?php header("Access-Control-Allow-Origin: *");

    include ('connect.php');
    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');


    if($_GET){
        $sql = "SELECT * FROM tb02_ondedormir WHERE tb02_titulo=".$_GET["titulos"]." ORDER BY tb02_plano desc, tb02_data asc, tb02_titulo asc";
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
        $stringJSON .= ' "imagem": "'.$row["tb02_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
