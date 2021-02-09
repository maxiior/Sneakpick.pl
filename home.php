<?php
    session_start();

    require_once 'lib/Twig/Autoloader.php';
    Twig_Autoloader::register();

    $loader = new Twig_Loader_Filesystem('temp');
    $twig = new Twig_Environment($loader);

    echo $twig->render('home.html', array(
        'fr_firstName' => isset($_SESSION['fr_firstName']) ? $_SESSION['fr_firstName'] : '',
        'fr_lastName' => isset($_SESSION['fr_lastName']) ? $_SESSION['fr_lastName'] : '',
        'fr_city' => isset($_SESSION['fr_city']) ? $_SESSION['fr_city'] : '',
        'fr_email' => isset($_SESSION['fr_email']) ? $_SESSION['fr_email'] : '',
        'fr_password1' => isset($_SESSION['fr_password1']) ? $_SESSION['fr_password1'] : '',
        'fr_password2' => isset($_SESSION['fr_password2']) ? $_SESSION['fr_password2'] : '',
        'fr_regulations' => isset($_SESSION['fr_regulations']) ? 'checked' : '',
    ));
?>