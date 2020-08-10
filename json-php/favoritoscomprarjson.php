<?php header("Access-Control-Allow-Origin: *");

    include ('connect.php');
    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');


    if($_GET){
        $sql = "SELECT * FROM tb04_ondecomprar WHERE tb04_titulo=".$_GET["titulos"]." ORDER BY tb04_plano desc, tb04_data asc, tb04_titulo asc";
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
        $stringJSON .= ' "imagem": "'.$row["tb04_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
