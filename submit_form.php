<?php
if (_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "josiahmbaomc@gmail.com";

    $subject = "From Personal Website";

    $headers = "From: $email";

    $body = "name: $name\nemail: $email\n\nmessage: \n$message";

    mail($to, $subject, $body, $headers);
}
?>