<?php
    date_default_timezone_set("Asia/Kolkata");
    session_start();
    $host="localhost";
    $username="root";
    $pass="";
    $db="uwb";
    $conn=mysqli_connect($host,$username,$pass,$db);
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
    $usignnm = $_SESSION["usignnm"];
    $a_title = mysqli_real_escape_string($conn,$_POST["a_title"]);
    $a_desc =  mysqli_real_escape_string($conn,$_POST["a_desc"]); 
    $a_story = mysqli_real_escape_string($conn,$_POST["a_story"]); 
    $a_tags =  mysqli_real_escape_string($conn,$_POST["a_tags"]); 
    $date = date("Y-m-d");
    $sql = 'insert into blog(bid,uid,uname,btitle,bdescription,bstory,btags,bstatus,bviewed,comment,date) values("","","'.$usignnm.'","'.$a_title.'","'.$a_desc.'","'.$a_story.'","'.$a_tags.'","0","0","","'.$date.'")';
    if(mysqli_query($conn,$sql)){
        echo 1;
    }
    else{
        echo 0;
    }
?>
