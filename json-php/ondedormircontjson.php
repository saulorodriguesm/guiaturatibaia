<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select * from tb02_ondedormir where tb02_titulo = none ";

            
    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select * from tb02_ondedormir where tb02_titulo = '".$_GET["titulo"] . "'";

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


        $stringJSON .='{"id":"'.$row["tb02_id"].'",';
        $stringJSON .='"titulo":"'.$row["tb02_titulo"].'",';
        $stringJSON .='"plano": "'.$row["tb02_plano"].'",';
        $stringJSON .='"descricao":"'.$row["tb02_descricao"].'",';
        $stringJSON .='"imagem":"'.$row["tb02_imagem"].'",';
        $stringJSON .='"imagem2":"'.$row["tb02_imagem2"].'",';
        $stringJSON .='"imagem3":"'.$row["tb02_imagem3"].'",';
        $stringJSON .='"imagem4":"'.$row["tb02_imagem4"].'",';
        $stringJSON .='"imagem5":"'.$row["tb02_imagem5"].'",';
        $stringJSON .='"facebook":"'.$row["tb02_facebook"].'",';
        $stringJSON .='"instagram":"'.$row["tb02_instagram"].'",';
        $stringJSON .='"telefone":"'.$row["tb02_telefone"].'",';
        $stringJSON .='"site":"'.$row["tb02_site"].'",';
        $stringJSON .='"endereco":"'.$row["tb02_endereco"].'",';
        $stringJSON .='"servicos":"'.$row["tb02_servicos"].'",';
        $stringJSON .='"mapa":"'.$row["tb02_mapa"].'"}';

    }

    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
