<?php
    session_start();
    include("../conn.php");
    if($conn)
    {
        $data = $_POST['data'];
        $obj = json_decode($data);
        if(!empty($obj->name) && !empty($obj->mobile) && !empty($obj->email) && !empty($obj->age) && !empty($obj->city) && !empty($obj->occupation) && !empty($obj->emergencyContact) && !empty($obj->gender) && !empty($obj->therapyHistory) && !empty($obj->suicidalThoughts) && !empty($obj->prefferedLanguange) && !empty($obj->selectedReasons) && !empty($obj->describe))
        {
            $name = $obj->name;
            $mobile = $obj->mobile;
            $email = $obj->email;
            $age = $obj->age;
            $city = $obj->city;
            $occupation = $obj->occupation;
            $emergencycontact = $obj->emergencyContact;
            $gender = $obj->gender;
            $therapyhistory = $obj->therapyHistory;
            $suicidalthoughts = $obj->suicidalThoughts;
            $prefferedlanguange = $obj->prefferedLanguange;
            $reasons = implode(", ",$obj->selectedReasons);
            $describesituation = $obj->describe;
            $query = "INSERT INTO `gethelp` (`id`, `name`, `mobile`, `email`, `age`, `city`, `occupation`, `emergency-contact`, `gender`, `therapy-history`, `suicidal-thoughts`, `preffered-languange`, `reasons`, `describe-situation`) VALUES(NULL,'$name','$mobile','$email','$age','$city','$occupation','$emergencycontact','$gender','$therapyhistory','$suicidalthoughts','$prefferedlanguange','$reasons','$describesituation')";
            $sql = mysqli_query($conn,$query);
            $email_to = "shoxiedaking30@gmail.com";
            $email_subject = "New Get Help Form submissions";

            $email_message = "Get Help Form details below.\n\n";

            function clean_string($string)
            {
                $bad = array("content-type", "bcc:", "to:", "cc:", "href");
                return str_replace($bad, "", $string);
            }

            $email_message .= "Name: " . clean_string($name) . "\n";
            $email_message .= "Mobile No.: " . clean_string($mobile) . "\n";
            $email_message .= "Email: " . clean_string($email) . "\n";
            $email_message .= "Age: " . clean_string($age) . "\n";
            $email_message .= "City: " . clean_string($city) . "\n";
            $email_message .= "Education/Occupation: " . clean_string($occupation) . "\n";
            $email_message .= "Emergency Contact: " . clean_string($emergencycontact) . "\n";
            $email_message .= "Gender: " . clean_string($gender) . "\n";
            $email_message .= "How you been to therapy before or tried any other alternatives? : " . clean_string($therapyhistory) . "\n";
            $email_message .= "How you ever had any suicidal thoughts? : " . clean_string($suicidalthoughts) . "\n";
            $email_message .= "Preferred Language: " . clean_string($prefferedlanguange) . "\n";
            $email_message .= "What brought you here? : " . clean_string($reasons) . "\n";
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
                $query = "DELETE FROM `gethelp` WHERE `gethelp`.`email` = '$email'";
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