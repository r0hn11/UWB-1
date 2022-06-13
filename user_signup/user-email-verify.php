<?php
    $expression = $_POST['signupbtn'];
    if(isset($expression))
    {
        session_start();
        include '../conn.php';
        // echo "hello";
        $uname = $_POST['uname'];
        $uemail = $_POST['uemail'];
        $upw = $_POST['upw'];
        $ucpw = $_POST['ucpw'];

        if($upw == $ucpw){
            $to = "$uemail";
            $subject = "OTP Verification Mail";
            $otp = rand(11111,99999);
            // setcookie('otpcookie', $otp, time() + (60*5), '/');
            // echo $_COOKIE['otpcookie'];
            $message = "Hello $uname, your email verification otp is . $otp";
            $from = "assassineshan3004@gmail.com";
            $headers = "From: $from";

            if(mail($to,$subject,$message,$headers)){
                if($conn === false){
                    die("ERROR: Could not connect. " . mysqli_connect_error());
                }
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
    <title>UWB | Authenticate</title>
    <link rel="shortcut icon" type="image/x-icon" href="../common_images/favicon.png">
    <link rel="stylesheet" href="../common_styles/navbar.css">
    <link rel="stylesheet" href="otp-style.css">
</head>
<body>
    <main>
        <form class="wrapper flex-col" action="user-otp-verify.php" method="post">
            <div class="icon">
                <img src="images/mail2.png" alt="mail_icon">
                <div class="indicator"></div>
            </div>
            <div class="txt1 flex-col">
                <h4>Thank you for Signing up</h3>
                <div class="msg">An OTP has been sent to <span id="usr_mail"><?php $uemail ?></span>.<br>Please check your inbox/spam and verify</div>
            </div>
            <div class="otp_boxes flex-row">
                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==1) return false;" name="uotp1" required/>
                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==1) return false;" name="uotp2" required/>
                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==1) return false;" name="uotp3" required/>
                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==1) return false;" name="uotp4" required/>
                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==1) return false;" name="uotp5" required/>
            </div>
            <div class="re">Didn't recieve yet? <a class="links" href="resend-otp.php?uemail=<?php echo $uemail; ?>" name="reotp">Resend OTP</a></div>
            <button type="submit" name="votp">Submit</button>
        </form>
    </main>
</body>
<script src="otp.js"></script>
</html>