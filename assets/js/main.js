const showMenu = () => {
    const toggle = document.getElementById('nav-toggle'),
        nav = document.getElementById('nav-menu')
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('');

const navLink = document.querySelectorAll('.nav-link')
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset:true

})

sr.reveal(`.home-title`)
sr.reveal(`.button`, { delay: 200 })
sr.reveal(`.home-img`, { delay: 400 })
sr.reveal(`.home-social-icon`,{delay:200})



/*Scroll skills*/
sr.reveal(`.about-img`)
sr.reveal(`.about-subtitle`, { delay: 200 })
sr.reveal(`.about-text`, { delay: 400 })
