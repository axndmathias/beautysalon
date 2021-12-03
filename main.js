//DOM Document Object Model

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

/* abre e fecha o menu toggle */
for (const element of toggle) {
    element.addEventListener('click', function(){
       nav.classList.toggle('show')
    })

}

/* fecha o menu ao clickar num item */
for (const link of links) {
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}

/* mudar o Header da pagina quando fizer scroll */
window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight) {
    // scroll e maior que a altura do header
    header.classList.add('scroll')
    } else {
    // scroll e MENOR que a altura do header
    header.classList.remove('scroll')
    }
})

/* Testimonials slider swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

