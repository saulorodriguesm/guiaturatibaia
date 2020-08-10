<?php 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    $count = 0;   

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "";

    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select tb06_titulo, tb06_site, tb06_telefone, tb06_endereco, tb06_mapa, tb06_descricao, tb06_plano, tb06_facebook, tb06_instagram, tb07_titulo_lugar, tb07_titulo_empresa, tb07_preco from tb06_oquevisitar_empresa inner join tb07_oquevisitar_servico on tb06_titulo = tb07_titulo_empresa where tb07_titulo_lugar='".$_GET["titulo"]."' order by tb06_plano desc, tb06_data asc, tb06_titulo asc";

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


        $stringJSON .='{"titulo":"'.$row["tb06_titulo"].'",';
        $stringJSON .='"plano": "'.$row["tb06_plano"].'",';
        $stringJSON .='"descricao":"'.$row["tb06_descricao"].'",';
        $stringJSON .='"facebook":"'.$row["tb06_facebook"].'",';
        $stringJSON .='"instagram":"'.$row["tb06_instagram"].'",';
        $stringJSON .='"telefone":"'.$row["tb06_telefone"].'",';
        $stringJSON .='"site":"'.$row["tb06_site"].'",';
        $stringJSON .='"endereco":"'.$row["tb06_endereco"].'",';
        $stringJSON .='"preco":"'.$row["tb07_preco"].'",';
        $stringJSON .='"mapa":"'.$row["tb06_mapa"].'"}';

    }

    $stringJSON .= ']';
                    
    echo $stringJSON;

?>
