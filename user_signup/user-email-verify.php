<?php
    if(isset($_POST['signupbtn']))
    {
        session_start();
        include '../conn.php';
        // echo "hello";
        $uname = $_POST['uname'];
        $uemail = $_POST['uemail'];
        $upw = $_POST['upw'];
        $ucpw = $_POST['ucpw'];

        if($upw == $ucpw){
            echo "OTP Verification";
            echo "<br><br>";
            echo "Please check your email $uemail for otp";
            echo "<br><br>";
            $to = "$uemail";
            $subject = "OTP Verification Mail";
            $otp = rand(11111,99999);
            // setcookie('otpcookie', $otp, time() + (60*5), '/');
            // echo $_COOKIE['otpcookie'];
            $message = "Hello $uname, your email verification otp is . $otp";
            $from = "assassineshan3004@gmail.com";
            $headers = "From: $from";

            if(mail($to,$subject,$message,$headers)){
                echo "Mail Sent..";
                echo "<br><br>";
                // $conn = mysqli_connect("localhost","root","","uwb");
                if($conn === false){
                    die("ERROR: Could not connect. " . mysqli_connect_error());
                }
                echo "<br><br>";
                $query = "INSERT INTO `user` (`Email-Id`, `OTP`) VALUES ('$uemail', '$otp')";
                $sql = mysqli_query($conn,$query);
                $_SESSION['uname'] = $_POST['uname'];
                $_SESSION['uemail'] = $_POST['uemail'];
                $_SESSION['upw'] = $_POST['upw'];
            }
            else{
                echo "Mail not Sent...";
            }
        }
        else{
            echo "
            <script>
                alert('Please enter correct password');
                window.location.href = 'user-signup.html';
            </script>
            ";
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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
</head>
<body>
    <h1><b></b></h1>
    <form action="user-otp-verify.php" method="post">
        Enter otp:<input type="text" name="uotp">
        <input type="submit" name="votp" value="Verify OTP">
    </form>
</body>
</html>