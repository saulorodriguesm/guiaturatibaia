<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=UTF-8');
    
    include ('connect.php');

    mysqli_query("SET NAMES 'utf8'");
    mysqli_query('SET character_set_connection=utf8');
    mysqli_query('SET character_set_client=utf8');
    mysqli_query('SET character_set_results=utf8');

    $sql = "select tb05_360 from tb05_oquevisitar where tb05_titulo = none ";

    if ($_GET) {

        if($_GET["titulo"]){

          $sql = "select tb05_360, tb05_titulo from tb05_oquevisitar where tb05_titulo = '".$_GET["titulo"] . "'";

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


        $stringJSON .='{"titulo":"'.$row["tb05_titulo"].'",';
        $stringJSON .='"vr":"'.$row["tb05_360"].'"}';

    }
    
    $stringJSON .= ']';

    echo $stringJSON;

?>
