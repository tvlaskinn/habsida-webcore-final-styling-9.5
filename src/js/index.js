import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import '../scss/style.scss'



const menuButton = document.querySelector('.header__button--menu')
const closeButton = document.querySelector('.sidebar__button--close')
const sidebar = document.querySelector('.sidebar')

if (menuButton && sidebar) {
  menuButton.addEventListener('click', () => {
    sidebar.classList.add('sidebar--open')
  })
}

if (closeButton && sidebar) {
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--open')
  })
}


const servicesText = document.querySelector('.services__text')
const servicesMore = document.querySelector('.services__more')

if (servicesText && servicesMore) {
  servicesMore.addEventListener('click', () => {
    const isExpanded = servicesText.classList.toggle(
      'services__text--expanded'
    )

    servicesMore.textContent = isExpanded
      ? 'Скрыть'
      : 'Читать далее'

    servicesMore.setAttribute(
      'aria-expanded',
      isExpanded
    )
  })
}


const showMoreButtons = document.querySelectorAll(
  '.brands__more, .equipment__more'
)

showMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const list = button.parentElement.querySelector(
      '.brands__list, .equipment__list'
    )

    if (!list) return

    const isExpanded = list.classList.toggle('list--expanded')

    button.childNodes[0].textContent = isExpanded
      ? 'Скрыть '
      : 'Показать все '
  })
})

const mobileMediaQuery = window.matchMedia(
  '(max-width: 767px)'
)

let swipers = []

function initSwipers() {
  if (!mobileMediaQuery.matches) return

  const swiperElements = document.querySelectorAll(
    '.swiper'
  )

  swiperElements.forEach((element) => {
    const pagination = element.querySelector(
      '.swiper-pagination'
    )

    const swiper = new Swiper(element, {
      modules: [Pagination],

      slidesPerView: 1,
      spaceBetween: 16,

      pagination: pagination
        ? {
            el: pagination,
            clickable: true,
          }
        : undefined,
    })

    swipers.push(swiper)
  })
}

function destroySwipers() {
  swipers.forEach((swiper) => {
    swiper.destroy(true, true)
  })

  swipers = []
}

function updateSwiper() {
  if (mobileMediaQuery.matches) {
    if (swipers.length === 0) {
      initSwipers()
    }
  } else {
    destroySwipers()
  }
}

updateSwiper()

mobileMediaQuery.addEventListener(
  'change',
  updateSwiper
)