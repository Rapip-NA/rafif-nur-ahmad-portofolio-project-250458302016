const menu = document.querySelector('.menu')
const hamburgermenu = document.querySelector('.hamburger-menu')
const iconbars = document.querySelector('.icon-bars')
const iconclose = document.querySelector('.icon-close')

hamburgermenu.addEventListener('click',displayMenu)
menu.addEventListener('click',displayMenu)

function displayMenu() {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconbars.style.display='inline';
        iconclose.style.display='none';
    }   else    {
        menu.classList.add('tampil');
        iconbars.style.display='none';
        iconclose.style.display='inline';
    }
}