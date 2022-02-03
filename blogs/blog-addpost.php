<?php


    $host="localhost";
    $username="root";
    $pass="";
    $db="uwb";
    $conn=mysqli_connect($host,$username,$pass,$db);
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }

$a_title = $_POST["a_title"];
$a_desc = $_POST["a_desc"];
$a_story = $_POST["a_story"];
$a_tags = $_POST["a_tags"];
$date = date("Y-m-d");

 $sql = "insert into blog(bid,uid,uname,btitle, bdescription, bstory, btags,bstatus,bviewed,comment,date) values('','11','test1','$a_title','$a_desc','$a_story','$a_tags','0','0','','$date')";

 if(mysqli_query($conn,$sql)){
     echo 1;
 } else{
     echo 0;
     
 }

?>