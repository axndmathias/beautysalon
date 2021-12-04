//DOM Document Object Model

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


/* abre e fecha o menu toggle */
for (const element of toggle) {
    element.addEventListener('click', function(){
       nav.classList.toggle('show')
    })

}

/* fecha o menu ao clickar num item */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}



/* Testimonials slider swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})


/* scrollreveal: Mostar elementos scroll na pagina*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`, 
{
interval: 100
})


/* mudar o Header da pagina quando fizer scroll */
function changeHeaderWHenScroll(){
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        // scroll e maior que a altura do header
        header.classList.add('scroll')
    } else {
        // scroll e MENOR que a altura do header
        header.classList.remove('scroll')
    }
}


/* botão voltar para o topo */
function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}



/** When Scroll */
window.addEventListener('scroll', function(){
  changeHeaderWHenScroll()  
  backToTop()
})