const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');

const img = ['brett-jordan-U15Q9FIhsjE-unsplash.jpg', 'keesha-s-kitchen-_y325luZNUs-unsplash.jpg', 'sanju-m-gurung-WX-wxGHFTzA-unsplash.jpg', 'tabitha-turner-PSqT-lQAt7A-unsplash.jpg'];

let id = 0;

function slide(id){
    slider.style.backgroundImage = `url(./bakery_images/${img[id]})`
    slider.classList.add(document.querySelector('.image-fade'));
    setTimeout(() => {
        slider.classList.remove(document.querySelector('.image-fade'));
    }, 550);
}

arrRight.addEventListener('click', () => {
    id++;
    if(id > 3){
        id = 0;
    }
    slide(id);
});

arrLeft.addEventListener('click', () => {
    id--;
    if(id < 0){
        id = img.length - 1;
    }
    slide(id);
})