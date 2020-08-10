<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select * from tb04_ondecomprar where tb04_titulo = none ";

            
    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select * from tb04_ondecomprar where tb04_titulo = '".$_GET["titulo"] . "'";

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


        $stringJSON .='{"id":"'.$row["tb04_id"].'",';
        $stringJSON .='"titulo":"'.$row["tb04_titulo"].'",';
        $stringJSON .='"plano": "'.$row["tb04_plano"].'",';
        $stringJSON .='"descricao":"'.$row["tb04_descricao"].'",';
        $stringJSON .='"imagem":"'.$row["tb04_imagem"].'",';
        $stringJSON .='"imagem2":"'.$row["tb04_imagem2"].'",';
        $stringJSON .='"imagem3":"'.$row["tb04_imagem3"].'",';
        $stringJSON .='"imagem4":"'.$row["tb04_imagem4"].'",';
        $stringJSON .='"imagem5":"'.$row["tb04_imagem5"].'",';
        $stringJSON .='"facebook":"'.$row["tb04_facebook"].'",';
        $stringJSON .='"instagram":"'.$row["tb04_instagram"].'",';
        $stringJSON .='"telefone":"'.$row["tb04_telefone"].'",';
        $stringJSON .='"site":"'.$row["tb04_site"].'",';
        $stringJSON .='"endereco":"'.$row["tb04_endereco"].'",';
        $stringJSON .='"servicos":"'.$row["tb04_servicos"].'",';
        $stringJSON .='"mapa":"'.$row["tb04_mapa"].'"}';

    }

    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
