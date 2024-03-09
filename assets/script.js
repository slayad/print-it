const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); 

let position = 0;

function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); 
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
}

//fonction mise a jour dots, images et texte
function updateCarousel(direction) {
    if (position === -1 && direction === 'left') {
        position = slides.length - 1;
    } else if (position === slides.length && direction === 'right') {
        position = 0;
    }

    //mise en place images
  const img = `assets/images/slideshow/${slides[position].image}`;
  bannerImg.src = img;
  bannerImg.alt = `Slide ${position + 1}`;

  //texte
  const tagLine = slides[position].tagLine;
  document.querySelector('p').innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

arrowLeft.addEventListener('click', function () {
    position = (position - 1);
    updateCarousel('left');
    updateDots(position); 
});


arrowRight.addEventListener('click', function () {
    position = (position + 1) ;
    updateCarousel('right');
    updateDots(position); 
});
