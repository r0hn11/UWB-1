<?php
    if(isset($_POST['validate'])){
        include 'conn.php';
    }
    else{
        echo "Error in validate button button";
    }
    if($conn){
        $certificateId=(int)$_POST['certificateId'];
        if($certificateId==0){
            echo"<script language='javascript'>
                 alert('Enter integer values only');
                 window.location.href='certificate-home.html';
                </script>";
        }
        $result=mysqli_query($conn,"select * from details where cid=$certificateId") or die("Cant connect to server!");
         if(mysqli_num_rows($result)>0){
             while($row=mysqli_fetch_assoc($result)){
                 $name=$row['fname'];
                //  $email=$row['Email-Id'];
                //  $dob=$row['Date Of Birth'];
                 $department=$row['dept'];
                //  $pos=$row['Position'];
                //  $city=$row['City'];
                //  $tenure=$row['Tenure(In Months)'];
                 $doj=$row['doj'];
         }
         }
        else{
            echo"<script language='javascript'>
                 alert('Please enter a valid certificate id');
                 window.location.href='certificate-home.html';
                </script>";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UWB | Certificate</title>
    <link rel="shortcut icon" type="image/x-icon" href="../common_images/favicon.png">
    <link rel="stylesheet" href="certificate-style.css">
</head>
<body>
    <div id="top" class="flex" onclick="">
        <div id="logo"></div>
        <div id="dscr">Certificate</div>
    </div>
    <div id="details" class="flex-column">
        <div id="main" class="flex">
            <div id="cert_icon"></div>
            <div id="content">
                <div>Verified Certificate</div>
                <div>Certificate ID : <span id="cid"><?php echo $certificateId ?></span></div>
            </div>
        </div>
        <div id="cert_desc" class="flex">
            <div>
                <span id="username"><?php echo $name ?></span> successfully completed the 
                <span id="course"><?php echo $department ?></span> certification on 
                <span id="end_date"><?php echo $doj ?></span>.
            </div>
        </div>
    </div>
</body>
<script>
    let hght = 0;
    setInterval(function() {
        hght = window.innerHeight;
        (document.getElementsByTagName('body')[0]).style.height = hght+'px';
    }, 10);

</script>
<script src="https://kit.fontawesome.com/7c7b8993a0.js" crossorigin="anonymous"></script>
</html>