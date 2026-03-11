<?php
  $ime = $_POST['ime'];
  $email = $_POST['email'];
  $poruka = $_POST['poruka'];

  $to = "page6301@gmail.com";
  $subject = "Poruka sa kontakt forme";
  $message = "Ime: " . $ime . "\nEmail: " . $email . "\nPoruka: " . $poruka;
  $headers = "From: " . $email;

  mail($to, $subject, $message, $headers);
  header("Location: shop.html");
?>


