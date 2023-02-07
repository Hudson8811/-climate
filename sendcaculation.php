<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('From');
	//Кому отправить
	$mail->addAddress('Address');
	//Тема письма
	$mail->Subject = 'Расчет стоимости проектирования"';

	//Тело письма
	$body = '<h1>Расчет стоимости проектирования!</h1>';
	if(trim(!empty($_POST['room_type']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['room_type'].'</p>';
	}
	if(trim(!empty($_POST['cond_type']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['cond_type'].'</p>';
	}
	if(trim(!empty($_POST['vent_type']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['vent_type'].'</p>';
	}
	if(trim(!empty($_POST['area']))){
		$body.='<p><strong>Площадь:</strong> '.$_POST['area'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>