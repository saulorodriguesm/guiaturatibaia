<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select  tb05_id, tb05_titulo, tb05_plano, tb05_descricao, tb05_imagem, tb05_imagem2, tb05_imagem3, tb05_imagem4, tb05_imagem5 from tb05_oquevisitar order by tb05_plano desc, tb05_data asc, tb05_titulo asc ";

    
            if ($_GET) {

                if($_GET["tipo"] == "arquitetonico" || $_GET["tipo"] == "cultural" || $_GET["tipo"] == "esportivo" || $_GET["tipo"] == "rural" || $_GET["tipo"] == "urbano"|| $_GET["tipo"] == "religioso " ){
                
                  $sql = "select * from tb05_oquevisitar where tb05_tipo like '%".$_GET["tipo"] . "%' order by tb05_plano desc, tb05_data asc, tb05_titulo asc";
                
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

        $stringJSON .= '{"id": "'.$row["tb05_id"].'", ';
        $stringJSON .= ' "titulo": "'.$row["tb05_titulo"].'", ';
        $stringJSON .= ' "plano": "'.$row["tb05_plano"].'", ';
        $stringJSON .= ' "descricao": "'.$row["tb05_descricao"].'", ';
        $stringJSON .= ' "imagem": "'.$row["tb05_imagem"].'"}';

    }
    
    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
