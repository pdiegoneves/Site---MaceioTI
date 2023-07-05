const menuMobile = document.getElementById('menu-mobile')
const linkWhats = document.querySelector('.link-mobile-whats')


linkWhats.addEventListener('mouseover', (e) => {
    menuMobile.classList.add('hover')
})

linkWhats.addEventListener('mouseout', (e) => {
    menuMobile.classList.remove('hover')
})