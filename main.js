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
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
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
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWHenScroll(){    
    if(window.scrollY >= navHeight) {
        // scroll e maior que a altura do header
        header.classList.add('scroll')
    } else {
        // scroll e MENOR que a altura do header
        header.classList.remove('scroll')
    }
}


/* botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}


/* menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpoitnEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpoitnEnd) {
            document
            .querySelector('nav ul li a[href*='+ sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*='+ sectionId + ']')
            .classList.remove('active')
        }
    }
}

/** When Scroll */
window.addEventListener('scroll', function(){
    changeHeaderWHenScroll()  
    backToTop()
    activateMenuAtCurrentSection()
  })