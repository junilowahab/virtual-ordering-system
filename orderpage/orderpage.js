const body = document.getElementById('body');
const wallpapers = ['jakub-dziubak-XtUd5SiX464-unsplash.jpg', 'nathan-dumlao-gOn7dKcCWKg-unsplash.jpg', 'puffsyrup.jpg'];

function automaticSlider(){
    let id = 0;
    var timer;
timer = setInterval(() => {
    body.style.backgroundImage = `url(../bakery_images/${wallpapers[id]})`;
    console.log(id);
    id++;
    if(id === 3){
        id = 0;
    };
}, 4000);
}

body.addEventListener('', automaticSlider)