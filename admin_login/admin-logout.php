<?php
    session_start();
    session_unset();
    session_destroy();
    echo "
        <script language='javascript'>
            alert('You are Logged out successfully...');
            window.location.href = 'admin-login.html';
        </script> ";
?>