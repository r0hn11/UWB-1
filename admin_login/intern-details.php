<?php
session_start();
// $host="localhost";
// $username="unitetrh_uwb";
// $pass="unitedwellbeing";
// $db="unitetrh_uwb";

// $conn=mysqli_connect($host,$username,$pass,$db);

include '../conn.php';

if(!$conn){
	die("Database connection error");
}

// insert query for register page

	$fname=$_POST['fname'];
    $lname=$_POST['lname'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
    $wnumber=$_POST['wnumber'];
    $qualification=$_POST['qualification'];
    $idtype=$_POST['idtype'];
    $idproof=$_POST['idproof'];
    $dept=$_POST['dept'];
    $position=$_POST['position'];
    $residence=$_POST['residence'];
    $tenure=$_POST['tenure'];
    $cid=$_POST['cid'];
	$dob=$_POST['dob'];
	$doj=$_POST['dob_j'];
	$end=$_POST['dob_e'];







	
	$query="INSERT INTO details VALUES ('$fname','$lname','$email','$phone','$wnumber','$dob','$qualification','$idtype','$idproof','$dept','$position','$residence','$doj','$tenure','$end','$cid')";
	
	$res=mysqli_query($conn,$query);
	if($res){
		echo"<script language='javascript'>
                 alert('Data inserted successfully');
                 window.location.href='intern-detail-form.php';
            </script>";
	}else{
		echo"<script language='javascript'>
                 alert('Data insertion unsuccessfull!!');
                 window.location.href='intern-detail-form.php';
            </script>";
	}
	




?>