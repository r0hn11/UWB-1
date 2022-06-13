<?php 
    session_start();
    $_SESSION["admin-login"] = 0;
    include '../conn.php';
    if($conn){
        $aname = $_SESSION['aname'];
        $apw = $_SESSION['apw'];
        $departments = $_SESSION['departments'];
        $result=mysqli_query($conn,"select * from admin where aname='$aname' and apw='$apw' and departments='$departments'") or die("Cant connect to server!");
        if(mysqli_num_rows($result)>0){
            $_SESSION["admin-login"] = 1;
            header("location: intern-detail-form.php");
        }
        else{
            echo"<script language='javascript'>
                 alert('Please enter correct credentials!!');
                 window.location.href='admin-login.html';
            </script>";
        }
    }
?>  