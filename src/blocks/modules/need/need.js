var swiper = new Swiper(".header-need-swiper", {
	slidesPerView: "auto",
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".content-need-swiper", {
	thumbs: {
		swiper: swiper,
	},
	effect: 'fade',
	autoHeight: true,
	allowTouchMove: false,
});


function playClipinstruction(media) {
	media.play();
}
function stopClipinstruction(media) {
	media.pause();
}

var need_player = document.getElementById("content-need__player");
const need_img = document.querySelector('.content-need__img');
const need_pause = document.querySelector('.content-need__pause');
const need__play = document.querySelector('.content-need__play-btn');

need_img.addEventListener("click", function(e) {
	playClipinstruction(need_player);
	this.classList.add('hide');
	need__play.classList.add('hide');
});
need_pause.addEventListener("click", function (e) {
	stopClipinstruction(need_player);
	need_img.classList.remove('hide');
	need__play.classList.remove('hide');
});


$(document).ready(function() {
	$(document).on('click', '.header-need__question', function(event) {
		$('.popap-need, .popap-need-back').addClass('_active');
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
	$(document).on('click', '.popap-need-back, .popap-need__close', function(event) {
		$('.popap-need, .popap-need-back').removeClass('_active');
		$('body').removeClass('overflow-hidden');
	});	
	
});


document.addEventListener('DOMContentLoaded', function () {
	const form_need = document.querySelector('.popap-need__form');
	form_need.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDataneed = new FormData(form_need);

		form_need.classList.add('_sending');

		let responseneed = await fetch('sendneed.php', {
			method: 'POST',
			body: formDataneed
		});

		if (responseneed.ok) {
			let result = await responseneed.json();
			alert(result.message);
			form_need.reset();
			form_need.classList.remove('_sending');
		} else {
			alert("Ошибка");
			form_need.classList.remove('_sending');
		}
	}
})