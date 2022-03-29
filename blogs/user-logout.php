<?php
    session_start();
    $usignnm = $_SESSION['usignnm'];
    echo"<script language='javascript'>
                 alert('$usignnm you are logged out successfully...Please Visit Again');
            </script>";
    session_unset();
    session_destroy();
    header('location: ../user_signup/user-signup.html');
?>