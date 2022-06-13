<?php
    session_start();
    include("../conn.php");
    if($conn)
    {
        $data = $_POST['data'];
        $obj = json_decode($data);
        if(!empty($obj->name) && !empty($obj->mobile) && !empty($obj->email) && !empty($obj->age) && !empty($obj->gender) && !empty($obj->designation) && !empty($obj->describe))
        {
            $name = $obj->name;
            $mobile = $obj->mobile;
            $email = $obj->email;
            $age = $obj->age;
            $gender = $obj->gender;
            $designation = $obj->designation;
            $describesituation = $obj->describe;
            $query = "INSERT INTO `complain` (`id`, `name`, `mobile`, `email`, `age`, `gender`, `designation`, `describe-situation`) VALUES(NULL,'$name','$mobile','$email','$age','$gender','$designation','$describesituation')";
            $sql = mysqli_query($conn,$query);
            $email_to = "shoxiedaking30@gmail.com";
            $email_subject = "Complain Form submissions";

            $email_message = "Complain Form details below.\n\n";

            function clean_string($string)
            {
                $bad = array("content-type", "bcc:", "to:", "cc:", "href");
                return str_replace($bad, "", $string);
            }

            $email_message .= "Name: " . clean_string($name) . "\n";
            $email_message .= "Mobile No.: " . clean_string($mobile) . "\n";
            $email_message .= "Email: " . clean_string($email) . "\n";
            $email_message .= "Age: " . clean_string($age) . "\n";
            $email_message .= "Gender: " . clean_string($gender) . "\n";
            $email_message .= "Designation : " . clean_string($designation) . "\n";
            $email_message .= "Describe the Situation: " . clean_string($describesituation) . "\n";

            // create email headers
            $headers = 'From: ' . $email . "\r\n" .
                'Reply-To: ' . $email . "\r\n" .
                'X-Mailer: PHP/' . phpversion();
            if(mail($email_to, $email_subject, $email_message, $headers))
            {
                echo "
                    <script language='javascript'>
                        alert('Your form is submitted. Thank you for contacting us. We will be in touch with you very soon.');
                        window.location.href = '../landing_page/index.html';
                    </script> ";
            }
            else{
                $query = "DELETE FROM `complain` WHERE `complain`.`email` = '$email'";
                $sql = mysqli_query($conn,$query);
                echo "
                    <script language='javascript'>
                        alert('Your form is not submitted. Try Again');
                        window.location.href = '../landing_page/index.html';
                    </script> ";
            }
        }
        else{
            echo "
            <script>
                window.location.href = 'index.html';
            </script>
            ";
        }
    }
?>