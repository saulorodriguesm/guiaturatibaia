<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select * from tb03_sairanoite where tb03_titulo = none ";

            
    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select * from tb03_sairanoite where tb03_titulo = '".$_GET["titulo"] . "'";

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


        $stringJSON .='{"id":"'.$row["tb03_id"].'",';
        $stringJSON .='"titulo":"'.$row["tb03_titulo"].'",';
        $stringJSON .='"plano": "'.$row["tb03_plano"].'",';
        $stringJSON .='"descricao":"'.$row["tb03_descricao"].'",';
        $stringJSON .='"imagem":"'.$row["tb03_imagem"].'",';
        $stringJSON .='"imagem2":"'.$row["tb03_imagem2"].'",';
        $stringJSON .='"imagem3":"'.$row["tb03_imagem3"].'",';
        $stringJSON .='"imagem4":"'.$row["tb03_imagem4"].'",';
        $stringJSON .='"imagem5":"'.$row["tb03_imagem5"].'",';
        $stringJSON .='"facebook":"'.$row["tb03_facebook"].'",';
        $stringJSON .='"instagram":"'.$row["tb03_instagram"].'",';
        $stringJSON .='"telefone":"'.$row["tb03_telefone"].'",';
        $stringJSON .='"site":"'.$row["tb03_site"].'",';
        $stringJSON .='"endereco":"'.$row["tb03_endereco"].'",';
        $stringJSON .='"servicos":"'.$row["tb03_servicos"].'",';
        $stringJSON .='"mapa":"'.$row["tb03_mapa"].'"}';

    }

    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
