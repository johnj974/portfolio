<?php

if (isset($_POST["submit"])){
    $name = $_POST["user_name"];
    $eMail = $_POST["e_mail"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailTo = "jjdug@hotmail.com";
    $headers = "From: ".$eMail;
    $txt = "You have received an e-mail from ".$name."\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}