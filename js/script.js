
let headerSlider = () => {
    window.addEventListener('load', () => {
    let time = 3000;
    let images = document.querySelectorAll('.slider div');
    let imageIndex = 0;

    setInterval(() => {
        images[imageIndex].classList.remove('selected');
        imageIndex++;
        if(imageIndex == images.length){
            imageIndex = 0;
        }
        images[imageIndex].classList.add('selected');
    }, time);
    });
}

let burgerMenu = () => {
    let burger = document.querySelector('.burger');
    let navlinks = document.querySelector('.nav-links');
    let nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        navlinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-background');
    });
}

let apps = () => {
    burgerMenu();
    headerSlider();    
}

apps();