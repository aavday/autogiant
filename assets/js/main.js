// Burger

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Modal

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const signUpLink = document.querySelectorAll('.sign-up-link');

signUpLink.forEach(tag => {
  tag.addEventListener('click', () => {
    body.classList.toggle('lock');
    modal.classList.toggle('active');
  });
});

modalClose.addEventListener('click', () => {
  body.classList.toggle('lock');
  modal.classList.toggle('active');
});

// Sliders

$('.before-after__slider').owlCarousel({
  loop: true,
  dots: true,
  items: 1
});
