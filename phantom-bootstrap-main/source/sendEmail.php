<?php
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php' ; 

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// récupération des information du formulaire


if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $nomExpediteur = $_POST['name'] ; 
    $emailExpediteur = $_POST['email'] ; 
    $objet = $_POST['subject'] ; 
    $message = $_POST['message'] ; 
    $header = "From: $emailExpediteur" ; 

    $myEmail = "evan.ma.maljoku@gmail.com" ; 
    // recup var .env
    $mdp = $_ENV['MPD'] ; 

        // utilisation d ela fonction mail() car compatible avec laragon 
    if(mail($myEmail, $objet, $message, $header)){
        echo "Votre message a été envoyé avec succès." ;
    } else {
        "Une erreur est survenue lors de l'envoi du message." ;
    }
}





// $mail = new PHPMailer(true) ; 

// try {
//     //Server settings
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
//     $mail->isSMTP();                                            //Send using SMTP
//     $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
//     $mail->Username   = 'evan.ma.maljoku@gmail.com';                     //SMTP username
//     $mail->Password   = $mdp ;                               //SMTP password
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
//     $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//     //Recipients
//     $mail->setFrom($emailExpediteur, $nomExpediteur);
//     $mail->addAddress('evan.ma.maljoku@gmail.com', 'Evan');     //Add a recipient
//     // $mail->addReplyTo('info@example.com', 'Information');
//     // $mail->addCC('cc@example.com');
//     // $mail->addBCC('bcc@example.com');

//     //Content
//     $mail->isHTML(true);                                  //Set email format to HTML
//     $mail->Subject = $objet ;
//     $mail->Body    = $message ;

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }
