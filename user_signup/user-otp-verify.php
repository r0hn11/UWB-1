<?php
    session_start();
    include '../conn.php';
    if($conn === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
    if(isset($_POST['votp']))
    {
        $uname = $_SESSION['uname'];
        $uemail = $_SESSION['uemail'];
        $upw = $_SESSION['upw'];
        $uotp1 = strval($_POST['uotp1']);
        $uotp2 = strval($_POST['uotp2']);
        $uotp3 = strval($_POST['uotp3']);
        $uotp4 = strval($_POST['uotp4']);
        $uotp5 = strval($_POST['uotp5']);
        $uotp = "$uotp1"."$uotp2"."$uotp3"."$uotp4"."$uotp5";
        if(true){
            // print_r($_COOKIE);
            // echo $_COOKIE['otpcookie'];
            // unset($_COOKIE['otpcookie']);
            // setcookie('otpcookie',null,-1,'/');
            $query = "select * from `user` where `Email-Id` = '$uemail' and `OTP` = '$uotp' ";
            $value = mysqli_query($conn,$query);
            $row = mysqli_fetch_array($value);
            if($row){
                $usql = mysqli_query($conn,"DELETE FROM `user` WHERE `user`.`Email-Id` = '$uemail'");
                $sql = "INSERT INTO `usermain` (`Username`, `Email-Id`, `Password`,`Location`,`User-Bio`) VALUES ('$uname', '$uemail', '$upw', '', '')";
                $run = mysqli_query($conn,$sql);
                // print_r($_COOKIE);
                session_unset();
                session_destroy();
                echo "
                    <script language='javascript'>
                        alert('OTP Verification Successfull...');
                        window.location.href = 'user-signup.html';
                    </script> ";
            }
            else{
                $usql = mysqli_query($conn,"DELETE FROM `user` WHERE `user`.`Email-Id` = '$uemail'");
                session_unset();
                session_destroy();
                echo "
                    <script language='javascript'>
                        alert('You entered incorrect OTP..Signup Again');
                        window.location.href = 'user-signup.html';
                    </script> ";
            }
        }
        else{
            $usql = mysqli_query($conn,"DELETE FROM `user` WHERE `user`.`Email-Id` = '$uemail'");
            // unset($_COOKIE['otpcookie']);
            // setcookie('otpcookie',null,-1,'/');
            session_unset();
            session_destroy();
            echo "
            <script language='javascript'>
                alert('Time Expired ..Please Verify your email again');
                window.location.href = 'user-signup.html';
            </script> ";
        }
}
else{
    echo "
    <script>
        alert('No response submitted');
        window.location.href = 'user-signup.html';
    </script>
    ";
}
?>
