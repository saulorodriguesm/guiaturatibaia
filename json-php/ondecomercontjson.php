<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select * from tb01_ondecomer where tb01_titulo = none ";

            
    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select * from tb01_ondecomer where tb01_titulo = '".$_GET["titulo"] . "'";

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


        $stringJSON .='{"id":"'.$row["tb01_id"].'",';
        $stringJSON .='"titulo":"'.$row["tb01_titulo"].'",';
        $stringJSON .='"plano": "'.$row["tb01_plano"].'",';
        $stringJSON .='"descricao":"'.$row["tb01_descricao"].'",';
        $stringJSON .='"imagem":"'.$row["tb01_imagem"].'",';
        $stringJSON .='"imagem2":"'.$row["tb01_imagem2"].'",';
        $stringJSON .='"imagem3":"'.$row["tb01_imagem3"].'",';
        $stringJSON .='"imagem4":"'.$row["tb01_imagem4"].'",';
        $stringJSON .='"imagem5":"'.$row["tb01_imagem5"].'",';
        $stringJSON .='"facebook":"'.$row["tb01_facebook"].'",';
        $stringJSON .='"instagram":"'.$row["tb01_instagram"].'",';
        $stringJSON .='"telefone":"'.$row["tb01_telefone"].'",';
        $stringJSON .='"site":"'.$row["tb01_site"].'",';
        $stringJSON .='"endereco":"'.$row["tb01_endereco"].'",';
        $stringJSON .='"servicos":"'.$row["tb01_servicos"].'",';
        $stringJSON .='"mapa":"'.$row["tb01_mapa"].'"}';

    }

    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
