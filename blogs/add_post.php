<?php
    session_start();
    if(isset($_POST['publish'])){
        include '../conn.php';
        if($conn){
            date_default_timezone_set("Asia/Kolkata");
            //Fetching form data from front-end
            $usignnm = $_SESSION["usignnm"];
            $a_title = mysqli_real_escape_string($conn,$_POST["atcl_title"]);
            $a_desc =  mysqli_real_escape_string($conn,$_POST["atcl_desc"]); 
            $a_story = mysqli_real_escape_string($conn,$_POST["atcl_story"]); 
            $a_tags =  mysqli_real_escape_string($conn,$_POST["atcl_tags"]); 
            $date = date("Y-m-d");

            //Running SQL Query
            $sql = 'insert into blog(bid,uid,uname,btitle,bdescription,bstory,btags,bstatus,bviewed,comment,date) values("","","'.$usignnm.'","'.$a_title.'","'.$a_desc.'","'.$a_story.'","'.$a_tags.'","0","0","","'.$date.'")';
            if(mysqli_query($conn,$sql)){
                echo"<script language='javascript'>
                 alert('Blog succesfully inserted');
                 window.location.href='blog-dashboard.php';
                </script>";
            }
            else{
                echo"<script language='javascript'>
                alert('Blog insertion failed!!');
                window.location.href='blog-dashboard.php';
               </script>";
            }

        }
        else{
            echo"<script language='javascript'>
                alert('Database connection failed!!');
                window.location.href='blog-dashboard.php';
               </script>";
        }

    }
    else{
        echo "Error in submit button button";
    }
    
?>