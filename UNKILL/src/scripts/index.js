// Burger Menu

const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerWrraper = document.querySelector('.burger-wrraper');
const burgerLinks = document.querySelectorAll('.burger-menu__link');

const hideBurgerMenu = () => {
  document.body.style.overflow = '';
  burgerWrraper.classList.remove('flex');
  burgerMenu.classList.remove('show');
  burgerBtn.classList.remove('active');
}
const showBurgerMenu = () => {
  document.body.style.overflow = 'hidden';
  burgerWrraper.classList.add('flex');
  burgerMenu.classList.add('show');
  burgerBtn.classList.add('active');
}

const toggleBurgerMenu = () => {
  if (burgerMenu.classList.contains('show')) {
    hideBurgerMenu()
  } else {
    showBurgerMenu()
  }
};

burgerBtn.addEventListener('click', toggleBurgerMenu);

burgerLinks.forEach(link => {
  link.addEventListener('click', toggleBurgerMenu);
})

