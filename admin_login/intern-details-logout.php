<?php
    session_start();
    echo"<script language='javascript'>
                 alert('You are logged out successfully...Please Visit Again');
            </script>";
    session_unset();
    session_destroy();
    header('location: admin-login.html');
?>