$(document).ready(function() {
	$('.options-calculation__select1').select2();
});
$(document).ready(function() {
	$('.options-calculation__select2').select2();
});
$(document).ready(function() {
	$('.options-calculation__select3').select2();
});

let defaultValue = 'S²';

const input = document.querySelector(".options-calculation__input-range input");
const value = document.querySelector(".options-calculation__value");

value.innerHTML = defaultValue;

input.addEventListener("input", () => {
	value.value = input.value + 'м²';
})

$(document).ready(function() {
	/*var swiper = new Swiper(".tabs-calculation__swiper", {
		pagination: {
			el: ".tabs-calculation__pag",
			clickable: true,
		},
		allowTouchMove: false,
		effect: 'fade',
		//autoHeight: true,
	});
	window.tabsCalculationSwiper=swiper;
*/



});


document.addEventListener('DOMContentLoaded', function () {
	const form_calc = document.querySelector('#form-calculation__tabs');
	form_calc.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDatastages = new FormData(form_calc);

		console.log(formDatastages);

		form_calc.classList.add('_sending');

		let responsestages = await fetch('sendcalculation.php', {
			method: 'POST',
			body: formDatastages
		});

		if (responsestages.ok) {
			let result = await responsestages.json();
			alert(result.message);
			form_calc.reset();
			form_calc.classList.remove('_sending');
		} else {
			alert("Ошибка");
			form_calc.classList.remove('_sending');
		}
	}
})