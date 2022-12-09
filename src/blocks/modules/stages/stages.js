$(document).ready(function() {

	$(document).on('click', '.stages__item-btn, .js-open-stages-modal', function(event) {
		var title=$(this).text();
		if(!(typeof(title)!=='undefined' && title.length>0)){
			title='Задать вопрос';
		}

		var modal=$('.popap-stages');
		modal.find('.modals-title').html(title);
		modal.find('.js-theme').val(title);


		$('.popap-stages, .popap-stages-back').addClass('_active');
		$('body').addClass('overflow-hidden');

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 700,
			easing: "linear"
		});

		return false;
	});
	$(document).on('click', '.popap-stages-back, .popap-stages__close', function(event) {
		$('.popap-stages, .popap-stages-back').removeClass('_active');
		$('body').removeClass('overflow-hidden');
	});
});



document.addEventListener('DOMContentLoaded', function () {
	const form_stages = document.querySelector('.popap-stages__form');
	form_stages.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDatastages = new FormData(form_stages);

		form_stages.classList.add('_sending');

		let responsestages = await fetch('sendstages.php', {
			method: 'POST',
			body: formDatastages
		});

		if (responsestages.ok) {
			let result = await responsestages.json();
			alert(result.message);
			form_stages.reset();
			form_stages.classList.remove('_sending');
		} else {
			alert("Ошибка");
			form_stages.classList.remove('_sending');
		}
	}
})