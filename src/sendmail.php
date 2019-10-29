<?php
	$SITE_TITLE = 'StandardClimate';
	$SITE_DESCR = 'Письмо с сайта СтандартКлимат';
  $to = 'vorobeivladyslav@gmail.com';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$tel = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
		$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
		$organization = isset($_POST['organization']) ? htmlspecialchars(trim($_POST['organization'])) : '';
		$msg = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
    $subject = "Письмо с сайта СтандартКлимат";

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Имя: '.$name."<br>";
		$data .= 'Телефон: '.$tel."<br>";
    if ($email) {
      $data .= 'Емейл: '.$email."<br>";
    }
    if ($organization) {
      $data .= 'Организация: '.$organization."<br>";
    }
    if ($msg) {
      $data .= 'Сообщение: '.$msg."<br>";
    }


		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>
