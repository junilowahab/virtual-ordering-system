//Linking the DOM
const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');

//Created an array containing the different background images
const img = ['brett-jordan-U15Q9FIhsjE-unsplash.jpg', 'keesha-s-kitchen-_y325luZNUs-unsplash.jpg', 'sanju-m-gurung-WX-wxGHFTzA-unsplash.jpg', 'tabitha-turner-PSqT-lQAt7A-unsplash.jpg'];

//This represents the index of the image array
let id = 0;

//function that shows the different images in each slide
function slide(id){
    slider.style.backgroundImage = `url(./bakery_images/${img[id]})`
    //this creates the fadein/fadeout effect
    slider.classList.add(document.querySelector('.image-fade'));
    setTimeout(() => {
        slider.classList.remove(document.querySelector('.image-fade'));
    }, 550);
}

//This changes index of the image array when right arrow clicked
arrRight.addEventListener('click', () => {
    id++;
    if(id > 3){
        id = 0;
    }
    slide(id);
});

//This changes index of the image array when left arrow clicked
arrLeft.addEventListener('click', () => {
    id--;
    if(id < 0){
        id = img.length - 1;
    }
    slide(id);
})