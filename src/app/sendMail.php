<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS": 
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        http_response_code(200);
        exit;
    case "POST":
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'edgarstroh@gmail.com';  
        $subject = "Contact From <$email>";
        $message = "From:" . $name . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        http_response_code(200);
        echo "Mail sent";
        break;
    default: 
        header("Allow: POST, OPTIONS", true, 405);
        exit;
}
