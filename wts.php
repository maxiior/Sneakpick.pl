<?php
    require_once 'lib/Twig/Autoloader.php';
    Twig_Autoloader::register();

    $loader = new Twig_Loader_Filesystem('temp');
    $twig = new Twig_Environment($loader);

    echo $twig->render('wts.html');
?>