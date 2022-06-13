<?php
    session_start();
    if(isset($_POST['login'])){
        include '../conn.php';
    }
    else{
        echo "Error in button";
    }
    if($conn){
        $aname=$_POST['aname'];
        $apw=$_POST['apw'];
        $departments = $_POST['departments'];
        $_SESSION['aname'] = $_POST['aname'];
        $_SESSION['apw'] = $_POST['apw'];
        $_SESSION['departments'] = $_POST['departments'];
        if($departments == "data_entry"){
            header("location: admin-login-validate.php");
        }
        if($departments == "blog"){
            header("location: ../blogs/blog-dashboard.php");
        }
    }
?>