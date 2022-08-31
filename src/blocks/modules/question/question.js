$(document).ready(function() {
	$('input[type="file"].form-question__file-input').change(function(){
		var question_file = $("input[type='file'].form-question__file-input").val();
		$('.js-form-question__file-span').text(question_file);
	});
});


document.addEventListener('DOMContentLoaded', function () {
	const form_question = document.querySelector('.form-question');
	form_question.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDataQuestion = new FormData(form_question);

		form_question.classList.add('_sending');

		let responseQuestion = await fetch('sendquestion.php', {
			method: 'POST',
			body: formDataQuestion
		});

		if (responseQuestion.ok) {
			let result = await responseQuestion.json();
			alert(result.message);
			form_question.reset();
			form_question.classList.remove('_sending');
		} else {
			alert("Ошибка");
			form_question.classList.remove('_sending');
		}
	}
})