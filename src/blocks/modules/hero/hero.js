$(document).ready(function() {
	$(document).on('click', '.hero__btn, .js-modal-like-hero', function(event) {
		var title=$(this).text();
		if(!(typeof(title)!=='undefined' && title.length>0)){
			title='Задать вопрос';
		}

		var modal=$('.popap-hero');
		modal.find('.modals-title').html(title);
		modal.find('.js-theme').val(title);

		$('.popap-hero, .popap-hero-back').addClass('_active');
		$('body').addClass('overflow-hidden');
	});
	$(document).on('click', '.popap-hero-back, .popap-hero__close', function(event) {
		$('.popap-hero, .popap-hero-back').removeClass('_active');
		$('body').removeClass('overflow-hidden');
	});
});


document.addEventListener('DOMContentLoaded', function () {
	const form_hero = document.querySelector('.popap-hero__form');
	form_hero.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDatahero = new FormData(form_hero);

		form_hero.classList.add('_sending');

		let responsehero = await fetch('sendhero.php', {
			method: 'POST',
			body: formDatahero
		});

		if (responsehero.ok) {
			let result = await responsehero.json();
			alert(result.message);
			form_hero.reset();
			form_hero.classList.remove('_sending');
		} else {
			alert("Ошибка");
			form_hero.classList.remove('_sending');
		}
	}
})


var swiper = new Swiper(".hero__swiper", {
	allowTouchMove: false,
	effect: 'fade',
	autoHeight: true,
	autoplay: {
		delay: 4000,
	}
});