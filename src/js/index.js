import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import '../scss/style.scss'

const menuButton = document.querySelector('.header__button--menu')
const closeButton = document.querySelector('.sidebar__button--close')
const sidebar = document.querySelector('.sidebar')

menuButton.addEventListener('click', () => {
  sidebar.classList.add('sidebar--open')
})

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--open')
})

const showMoreButtons = document.querySelectorAll(
  '.brands__show-more, .equipment__show-more'
)

showMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const list = button.previousElementSibling

    list.classList.toggle('list--expanded')

    button.textContent = list.classList.contains('list--expanded')
      ? 'Скрыть'
      : 'Показать все'
  })
})

const swiperElements = document.querySelectorAll('.swiper')

swiperElements.forEach((element) => {
  new Swiper(element, {
    modules: [Pagination],

    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
      el: element.querySelector('.swiper-pagination'),
      clickable: true
    },

    breakpoints: {
      768: {
        enabled: false
      },

      1366: {
        enabled: false
      }
    }
  })
})
