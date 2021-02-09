<?php
	session_start();
	
	if(isset($_POST['email']))
	{ 
		$allGood=true;
		
		$firstName = $_POST['firstName'];
		if(!preg_match("/^[a-zA-ZąęćżźńłóśĄĆĘŁŃÓŚŹŻ\s]{3,15}$/", $firstName))
		{
			$allGood = false;
			$_SESSION['e_firstName']="Wprowadzono niepoprawne imię!";
		}

		$lastName = $_POST['lastName'];
		if(!preg_match("/^[a-zA-ZąęćżźńłóśĄĆĘŁŃÓŚŹŻ\s]{2,30}$/", $lastName))
		{
			$allGood = false;
			$_SESSION['e_lastName']="Wprowadzono niepoprawne nazwisko!";
		}

		$city = $_POST['city'];
		if(!preg_match("/^[a-zA-ZąęćżźńłóśĄĆĘŁŃÓŚŹŻ\s]{2,30}$/", $city))
		{
			$allGood = false;
			$_SESSION['e_city']="Wprowadzono niepoprawne nazwisko!";
		}
	
		$email = $_POST['email'];
		$emailB = filter_var($email, FILTER_SANITIZE_EMAIL);	
		if((filter_var($emailB, FILTER_VALIDATE_EMAIL)==false) || ($emailB!=$email))
		{
			$allGood = false;
			$_SESSION['e_email'] = "Wprowadzono niepoprawny adres e-mail!";
		}
		
		$password1 = $_POST['password1'];
		$password2 = $_POST['password2'];
		if((strlen($password1)<8) || (strlen($password1)>20))
		{
			$allGood = false;
			$_SESSION['e_password'] = "Hasło musi posiadać od 8 do 20 znaków!";
		}
		if($password1!=$password2)
		{
			$allGood = false;
			$_SESSION['e_password'] = "Podane hasła nie są identyczne!";
		}
		$password_hash = password_hash($password1, PASSWORD_DEFAULT);
		
		if(isset($_POST['regulations'])==false)
		{
			$allGood = false;
			unset($_SESSION['fr_regulations']);
			$_SESSION['e_regulations'] = "Podwierdź akceptację regulaminu!";
		}
	
		/*$sekret="6LdjR5IUAAAAAG_0Tr7p6Xc8-bO0BAI8nCa9nP5H";
		$sprawdz = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$sekret.'&response='.$_POST['g-recaptcha-response']);
		$odpowiedz = json_decode($sprawdz);
		if($odpowiedz->success==false)
		{
			$allGood = false;
			$_SESSION['e_bot'] = "Potwierdź, że nie jesteś botem!";
		}*/
		
		$_SESSION['fr_firstName'] = $firstName;
		$_SESSION['fr_lastName'] = $lastName;
		$_SESSION['fr_city'] = $city;
		$_SESSION['fr_email'] = $email;
		$_SESSION['fr_password1'] = $password1;
		$_SESSION['fr_password2'] = $password2;
		if(isset($_POST['regulations'])) $_SESSION['fr_regulations'] = true;
		
		require_once "connect.php";
		mysqli_report(MYSQLI_REPORT_STRICT);
		
		try
		{
			$connection = new mysqli($host, $db_user, $db_password, $db_name);

			if($connection->connect_errno!=0) throw new Exception(mysqli_connect_errno());
			else
			{
				$result = $connection->query("SELECT id FROM users WHERE email='$email'");	
				if(!$result) throw new Exception($connection->error);
				
				$numberOfEmails = $result->num_rows;
				if($numberOfEmails>0)
				{
					$allGood = false;
					$_SESSION['e_email'] = "Istnieje już konto przypisane do tego adresu email!";
				}
				
				if($allGood==true)
				{
					if($connection->query("INSERT INTO users VALUES (NULL, '$firstName', '$lastName', '$city', '$email', '$password_hash')"))
					{
						$_SESSION['udanarejestracja']=true;	//nie wiem po co to
						
						unset($_SESSION['fr_firstName']);
						unset($_SESSION['fr_lastName']);
						unset($_SESSION['fr_city']);
						unset($_SESSION['fr_email']);
						unset($_SESSION['fr_password1']);
						unset($_SESSION['fr_password2']);
						unset($_SESSION['fr_regulations']);
					}
					else throw new Exception($connection->error);
				}
				$connection->close();
			}
		}
		catch(Exception $e)
		{
			echo '<span style="color: red;">Błąd serwera! Przepraszamy za niedogodności i prosimy o rejestrację w innym terminie! </span>';
			//echo '<br /> Informacja developerska: '.$e;
		}
		header('Location: home.php');
	}
?>