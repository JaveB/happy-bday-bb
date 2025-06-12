// Create floating hearts
const hearts = ['💖', '💗', '💓', '💕', '❤️'];

function sprinkleHearts() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Sprinkle hearts continuously
setInterval(sprinkleHearts, 200);

//slidewhos
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
function showNextSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}

// Show the first slide immediately
showNextSlide();

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
