<?php
    session_start();
    if(isset($_POST['usignbtn'])){
        include '../conn.php';
        $usignem = $_POST['usignem'];
        $usignpw = $_POST['usignpw'];
        $sql = mysqli_query($conn,"select * from `usermain` where `Email-Id` = '$usignem' and `Password` = '$usignpw'");
        $row = mysqli_fetch_array($sql);
        if($row){
            $loginstat = 1;
            $_SESSION['loginstat'] = $loginstat;
            $_SESSION['usignem'] = $usignem;
            $_SESSION['usignpw'] = $usignpw;
            $usignnm = $row['Username'];
            $_SESSION['usignnm'] = $row['Username'];
            $usignnm = $_SESSION['usignnm'];
            $usignem = $_SESSION['usignem'];
            echo "
            <script>
                window.location.href = '../blogs/userdb.php';
            </script>
            ";
        }
        else{
            session_unset();
            session_destroy();
            echo "
                <script>
                    alert('Please Enter Correct Login Credentials...');
                    window.location.href = 'user-signup.html';
                </script>
            
            ";
        }
    }
    else{
        echo "
        <script>
            alert('No User Signed In');
            window.location.href = 'user-signup.html';
        </script>
        ";
    }
?>