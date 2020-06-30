color="#0000CC"
<?php    
header("Content-type: image/png"); 
$im = imagecreatefrompng("1by1.PNG"); 
imagecolortransparent ( $im,imagecolorallocate($im, 255, 255, 255)); 
imagepng($im); 
imagedestroy($im); 
$hostname=gethostbyaddr($_SERVER['REMOTE_ADDR']); 
$QUERY_STRING = preg_replace("%[^/a-zA-Z0-9@,_]%", '', $_SERVER['QUERY_STRING']); 
//Write Log 
    $filename = 'webbug.csv'; 
    $fp = fopen($filename, "a"); 
    $string ='"'.$QUERY_STRING.'","' 
        .$_SERVER['REMOTE_ADDR'].'","' 
        .$hostname.'","' 
        .$_SERVER['HTTP_USER_AGENT'].'","' 
        .$_SERVER['HTTP_REFERER'].'","' 
        .date("D dS M,Y h:i a").'"'."\n"; 
    $write = fputs($fp, $string); 
    fclose($fp); 
//end Write Log 
?> 



