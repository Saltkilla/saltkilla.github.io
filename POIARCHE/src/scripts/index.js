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

// modals

const allOrderBtn = document.querySelectorAll('.order-btn');
const allJobBtn = document.querySelectorAll('.job-btn');
const orderModal = document.getElementById('modal-order');
const jobModal = document.getElementById('modal-job');
const allCloseModal = document.querySelectorAll('.modal-order__close');

allOrderBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    orderModal.classList.add('block');
  })
})

allJobBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    jobModal.classList.add('block');
  })
})

allCloseModal.forEach(close => {
  close.addEventListener('click', () => {
    if(orderModal.classList.contains('block')) {
      orderModal.classList.remove('block');
    }
    if(jobModal.classList.contains('block')) {
      jobModal.classList.remove('block');
    }
  })
})
