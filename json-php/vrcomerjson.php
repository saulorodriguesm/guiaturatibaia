<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select tb01_360 from tb01_ondecomer where tb01_360 = none ";

    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select tb01_360 from tb01_ondecomer where tb01_titulo = '".$_GET["titulo"] . "'";

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


        $stringJSON .='{"titulo":"'.$row["tb01_titulo"].'",';
        $stringJSON .='"vr":"'.$row["tb01_titulo"].'"}';

    }
    
    $stringJSON .= ']';

    echo $stringJSON;

?>
