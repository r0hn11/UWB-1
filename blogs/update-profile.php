<?php
    session_start();
    include '../conn.php';
    $usignnm = $_POST['usignnm'];
    $usignem = $_SESSION['usignem'];
    $usignloc = $_POST['usignloc'];
    $usignbio = $_POST['usignbio'];
    $query = mysqli_query($conn,"UPDATE `usermain` SET `Username`='$usignnm', `Location`='$usignloc', `User-Bio`='$usignbio' WHERE `Email-ID`='$usignem'");

    echo "
            <script language='javascript'>
                window.location.href = 'userdb.php';
            </script> ";
?>