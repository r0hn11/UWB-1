<?php
    date_default_timezone_set("Asia/Kolkata");
    session_start();
    include '../conn.php';
    if($conn){
        $usignnm = $_SESSION["usignnm"];
        $a_title = mysqli_real_escape_string($conn,$_POST["atcl_title"]);
        $a_desc =  mysqli_real_escape_string($conn,$_POST["atcl_desc"]); 
        $a_story = mysqli_real_escape_string($conn,$_POST["atcl_story"]); 
        $a_tags =  mysqli_real_escape_string($conn,$_POST["atcl_tags"]); 
        $date = date("Y-m-d");
        $sql = 'insert into blog(bid,uid,uname,btitle,bdescription,bstory,btags,bstatus,bviewed,comment,date) values("","","'.$usignnm.'","'.$a_title.'","'.$a_desc.'","'.$a_story.'","'.$a_tags.'","0","0","","'.$date.'")';
        if(mysqli_query($conn,$sql)){
            echo"<script language='javascript'>
                    alert('Blog succesfully inserted');
                    window.location.href='userdb.php';
                </script>";
        }
        else{
            echo"<script language='javascript'>
                    alert('Blog insertion failed');
                    window.location.href='userdb.php';
                </script>";
        }
    }    
?>
