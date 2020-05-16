
let headerSlider = () => {
    window.addEventListener('load', () => {
    let time = 5000;
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
    let navLinks = document.querySelector('.nav-links');
    let nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-background');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(e){   

        if (((!nav.contains(e.target)))){
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                nav.classList.remove('nav-background');
        } 
      });

}

let dropDownMenu = () => {
    let dropdown = document.querySelector('.dropdown');
    let dropdown_content = document.querySelector('.dropdown-content');
   
    dropdown.onmouseover = () => {
        dropdown_content.classList.add('dropdown-activte');
        console.log(dropdown_content);
    }
    dropdown.onmouseleave = () => {
        dropdown_content.classList.remove('dropdown-activte');
    }
}

let apps = () => {
    burgerMenu();
    headerSlider();
    dropDownMenu();
}

apps(); 