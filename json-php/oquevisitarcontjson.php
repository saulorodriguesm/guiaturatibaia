<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select * from tb05_oquevisitar where tb05_titulo = none ";

    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select * from tb05_oquevisitar where tb05_titulo = '".$_GET["titulo"]."'";

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


        $stringJSON .='{"id":"'.$row["tb05_id"].'",';
        $stringJSON .='"titulo":"'.$row["tb05_titulo"].'",';
        $stringJSON .='"plano": "'.$row["tb05_plano"].'",';
        $stringJSON .='"descricao":"'.$row["tb05_descricao"].'",';
        $stringJSON .='"imagem":"'.$row["tb05_imagem"].'",';
        $stringJSON .='"imagem2":"'.$row["tb05_imagem2"].'",';
        $stringJSON .='"imagem3":"'.$row["tb05_imagem3"].'",';
        $stringJSON .='"imagem4":"'.$row["tb05_imagem4"].'",';
        $stringJSON .='"imagem5":"'.$row["tb05_imagem5"].'",';
        $stringJSON .='"facebook":"'.$row["tb05_facebook"].'",';
        $stringJSON .='"instagram":"'.$row["tb05_instagram"].'",';
        $stringJSON .='"telefone":"'.$row["tb05_telefone"].'",';
        $stringJSON .='"site":"'.$row["tb05_site"].'",';
        $stringJSON .='"endereco":"'.$row["tb05_endereco"].'",';
        $stringJSON .='"servicos":"'.$row["tb05_servicos"].'",';
        $stringJSON .='"mapa":"'.$row["tb05_mapa"].'"}';

    }

    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
