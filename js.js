const burger = document.querySelector('.burger-img')
const menu = document.querySelector('.menu__burger')
const banner = document.querySelector('.banner')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    banner.classList.toggle('active')
})