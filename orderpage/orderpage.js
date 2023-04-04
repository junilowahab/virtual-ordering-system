const wallpapers = ['jakub-dziubak-XtUd5SiX464-unsplash.jpg', 'nathan-dumlao-gOn7dKcCWKg-unsplash.jpg', 'mae-mu-m9pzwmxm2rk-unsplash.jpg', 'joshua-hoehne-30-l5M0v_m8-unsplash.jpg'];

function automaticSlider(){
    console.log('Page has loaded');
    let id = 0;
    var timer;
timer = setInterval(() => {
    body.style.backgroundImage = `url(../bakery_images/${wallpapers[id]})`;
    console.log(id);
    id++;
    if(id === 4){
        id = 0;
    };
}, 4000);
}

window.addEventListener('load', automaticSlider)