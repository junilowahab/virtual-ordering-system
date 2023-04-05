const wallpapers = ['jakub-dziubak-XtUd5SiX464-unsplash.jpg', 'nathan-dumlao-gOn7dKcCWKg-unsplash.jpg', 'mae-mu-m9pzwmxm2rk-unsplash.jpg', 'joshua-hoehne-30-l5M0v_m8-unsplash.jpg'];

function automaticSlider(){
    let id = 0;
    var timer;
timer = setInterval(() => {
    body.style.backgroundImage = `url(../bakery_images/${wallpapers[id]})`;
    id++;
    if(id === 4){
        id = 0;
    };
}, 4000);
}

window.addEventListener('load', automaticSlider);

//GETTING DATA

//
let puffButton = document.getElementById('puff');
let buttons = document.querySelectorAll('.button')

//Object containing products data
let orderData = {}; 

//orderData object gets filled with product data
buttons.forEach(button => {
    button.addEventListener('click', () => {
        orderData['productName'] = document.getElementById(`${button.getAttribute('id')}-name`).innerText;
        orderData['productPrice'] = `${document.getElementById(`${button.getAttribute('id')}-price`).innerText} each`;
    
        console.log(orderData);
    })
});