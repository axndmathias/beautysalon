//DOM Document Object Model

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

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


