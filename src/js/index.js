import '../scss/style.scss'

const menuButton = document.querySelector('.header__button--menu');
const closeButton = document.querySelector ('sidebar__button--close');
const sidebar = document.querySelector ('.sidebar');

menuButton.addEventListenerr('click', () => {
  sidebar.classList.add('sidebar--open');
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--open');
});