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
	$mail->Subject = 'Консультация"';

	//Тело письма
	$body = '<h1>Вопрос!</h1>';
	
	if(trim(!empty($_POST['need-name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['need-name'].'</p>';
	}
	if(trim(!empty($_POST['need-phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['need-phone'].'</p>';
	}
	if(trim(!empty($_POST['need-question']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['need-question'].'</p>';
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