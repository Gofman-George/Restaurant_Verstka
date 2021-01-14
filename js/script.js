
let veganButton = document.querySelector('#veganButton');
let notVeganDishe = document.querySelectorAll('#notAVegan');
let veganButtonIndicator = document.querySelector('#showVeganIndicator');

veganButton.addEventListener('click', showVeganMenu);

function showVeganMenu() {
	veganButtonIndicator.content = 'circle';
	veganButtonIndicator.style.color = '#f1ac11';
	veganButton.addEventListener('click', showAllMenu);
	veganButton.removeEventListener('click', showVeganMenu);
	for (let i = 0; i < notVeganDishe.length; i++) {
		notVeganDishe[i].style.display = 'none';
	}
}

function showAllMenu() {
	veganButtonIndicator.type = 'circle';
	veganButtonIndicator.style.color = 'black';
	veganButton.removeEventListener('click', showAllMenu);
	veganButton.addEventListener('click', showVeganMenu);
	for (let i = 0; i < notVeganDishe.length; i++) {
		notVeganDishe[i].style.display = '';
	};
}

let nextOfferButton = document.querySelector('#nextOfferButton');
nextOfferButton.addEventListener('click', OfferSlider);

let randomDishesArr = Array.from(document.querySelectorAll('.main__random_dishes'));
let i = 0;
let randomDisheImgArr = Array.from(document.querySelectorAll('.main__picture'));
let imgArr = ['pasta.png', 'kipiatochec.jpg', 'ramen.jpg'];

function OfferSlider() {
		if (i == 2) {
			i = 0;
			randomDishesArr[2].style.display = 'none';
			randomDishesArr[i].style.display = '';
			randomDisheImgArr[i].style.backgroundImage = 'url(/img/' + imgArr[i] + ')';
			
		} else {
			randomDishesArr[i].style.display = 'none';
			randomDishesArr[i + 1].style.display = '';
			randomDisheImgArr[i + 1].style.backgroundImage = 'url(/img/' + imgArr[i + 1] + ')';
			i += 1;
		}
}
randomDisheImgArr[i + 1].style.backgroundImage = 'url(/img/' + imgArr[i + 1] + ')';
randomDisheImgArr[i].style.backgroundImage = 'url(/img/' + imgArr[i] + ')';