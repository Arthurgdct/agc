<?php
require 'Models/Db.php';
require 'Models/Message.php';
$errors = [];
$_SESSION['errors'] = [];
$message = new Message;

if (isset($_POST['contact'])) {
    if (!empty($_POST['name'])) {
        $name = htmlspecialchars($_POST['name']);
        $message->name = $name;
    } else {
        $errors['name'] = 'Merci d\'entrer un nom.';
    }
    if (!empty($_POST['email'])) {
        $email = htmlspecialchars($_POST['email']);
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $message->email = $email;
        } else {
            $errors['email'] = 'Merci d\'entrer un adresse mail valide.';
        }
    } else {
        $errors['email'] = 'Merci d\'entrer une adresse mail.';
    }
    if (!empty($_POST['message'])) {
        $msg = htmlspecialchars($_POST['message']);
        $message->message = $msg;
    }else {
        $errors['message'] = 'Merci d\'entrer un message.';
    }
    if (empty($errors)) {
        $message->contact();
    }
} ?>