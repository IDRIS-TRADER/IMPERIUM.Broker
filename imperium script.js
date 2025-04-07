const burgerButton = document.querySelector('.header__menu--burger')
const menuList = document.querySelector('.header__menu--list--is-aktive')

document.addEventListener('click', (event) => {
   if (event.target.closest('.header__menu--burger')) {
    menuList.style.display = 'inline';
   }else {
    menuList.style.display = 'none';
   }
})

function animationScroll (element, animation) {
  window.addEventListener('scroll', () => {
  const scrollAnimation = () => {
  const windowCentr = (window.innerHeight / 2) + window.scrollY;
  const scrollItem = document.querySelector(`${element}`)
  const scrollOfset = scrollItem.getBoundingClientRect().top + window.scrollY;
  if (windowCentr >= scrollOfset) {
    scrollItem.classList.add(`${animation}`)
  }
}
  scrollAnimation()
})   
}

animationScroll('.content-second__blok-first--img', 'animation-scroll__content-second__blok-first--img')
animationScroll('.content-second__blok-first--wrapper', 'animation-scroll__content-second__blok-first--wrapper')
animationScroll('.content-second__blok-second--wrapper', 'animation-scroll__content-second__blok-first--img')
animationScroll('.content-second__blok-second--img', 'animation-scroll__content-second__blok-first--wrapper')
animationScroll('.box-first', 'animation-scroll__box-first')
animationScroll('.box-second', 'animation-scroll__box-second')
animationScroll('.box-third', 'animation-scroll__box-third')
animationScroll('.arrol-first', 'animation-scroll__arrol-first')
animationScroll('.arrol-second', 'animation-scroll__arrol-second')
animationScroll('.content-second__blok-fourth--img', 'animation-scroll__content-second__blok-first--img')
animationScroll('.content-third__blok-first--img', 'animation-scroll__content-second__blok-first--img')
animationScroll('.content-third__blok-first--wrapper', 'animation-scroll__content-second__blok-first--wrapper')
animationScroll('.content-third__blok-second--wrapper', 'animation-scroll__content-second__blok-first--img')
animationScroll('.content-third__blok-second--img', 'animation-scroll__content-second__blok-first--wrapper')
animationScroll('.content-third__blok-fourth--img', 'animation-scroll__content-second__blok-first--img')
animationScroll('.box-first-second', 'animation-scroll__box-first')
animationScroll('.box-second-second', 'animation-scroll__box-second')
animationScroll('.box-third-second', 'animation-scroll__box-third')
animationScroll('.arrol-first-second', 'animation-scroll__arrol-first')
animationScroll('.arrol-second-second', 'animation-scroll__arrol-second')
animationScroll('.content-fourth__block__column', 'animation-scroll__content-second__blok-first--wrapper')







