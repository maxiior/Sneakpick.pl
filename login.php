<?php
	session_start();
    
	require_once "connect.php";
	
	if((!isset($_POST['email'])) || (!isset($_POST['password'])) || empty($_POST['email']) || empty($_POST['password']))
	{
		header('Location: home.php');
		exit();
	}
	
	$polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);

	if($polaczenie->connect_errno!=0)
	{
        //problem z serwerem
		echo "Error: ".$polaczenie->connect_errno;
	}
	else
	{
		$email = $_POST['email'];
		$password = $_POST['password'];
		
		$email = htmlentities($email, ENT_QUOTES, "UTF-8");
		
		if ($rezultat = @$polaczenie->query(sprintf("SELECT * FROM users WHERE user='%s'", mysqli_real_escape_string($polaczenie, $login))))
		{
			$ilu_userow = $rezultat->num_rows;
			
			if($ilu_userow>0)
			{
				$wiersz = $rezultat->fetch_assoc();
				
				if(password_verify($haslo, $wiersz['pass']))
				{
					$_SESSION['login'] = true;
					
					//$_SESSION['id']= $wiersz['id'];
					
					unset($_SESSION['blad']);
					
					$rezultat->free_result();
					header('Location: home.php');
				}
				else
				{
					$_SESSION['blad']='<span style="color:red"> Nieprawidłowy login lub hasło! </span>';
					header('Location: index.php');
				}
			}
			else
			{
				$_SESSION['blad']='<span style="color:red"> Nieprawidłowy login lub hasło! </span>';
				header('Location: index.php');
			}
		}
		$polaczenie->close();
	}
?>