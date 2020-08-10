<?php header("Access-Control-Allow-Origin: *");

    include ('connect.php');
    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');


    if($_GET){
        $sql = "SELECT * FROM tb05_oquevisitar WHERE tb05_titulo=".$_GET["titulos"]." ORDER BY tb05_plano desc, tb05_data asc, tb05_titulo asc";
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

        $stringJSON .= '{"id": "'.$row["tb05_id"].'", ';
        $stringJSON .= ' "titulo": "'.$row["tb05_titulo"].'", ';
        $stringJSON .= ' "plano": "'.$row["tb05_plano"].'", ';
        $stringJSON .= ' "descricao": "'.$row["tb05_descricao"].'", ';
        $stringJSON .= ' "imagem": "'.$row["tb05_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
