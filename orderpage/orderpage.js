const wallpapers = ['steve-harvey-U4wcrDteZ2Y-unsplash.jpg', 'nathan-dumlao-gOn7dKcCWKg-unsplash.jpg', 'mae-mu-m9pzwmxm2rk-unsplash.jpg', 'joshua-hoehne-30-l5M0v_m8-unsplash.jpg'];

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

//Opening the cart
let cart = document.getElementById('cart');
let cartButton = document.getElementById('cart-button');

cartButton.addEventListener('click', openCart)

function openCart(){
    if(cart.style.left = '1400px'){
        cart.style.left = '700px';
    };
};

//Closing the cart
let closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', closeCart);

function closeCart(){
    if(cart.style.left = '700px'){
        cart.style.left = '1400px';
    };
};

//GETTING DATA

//
let puffButton = document.getElementById('puff');
let buttons = document.querySelectorAll('.button');

//Object containing products data
let orderData = {}; 

//orderData object gets filled with product data
buttons.forEach(button => {
    button.addEventListener('click', () => {
        orderData['productName'] = document.getElementById(`${button.getAttribute('id')}-name`).innerText;
        orderData['productPrice'] = `${document.getElementById(`${button.getAttribute('id')}-price`).innerText}`;
    
        console.log(orderData);
    })
});


buttons.forEach(button => {
    button.addEventListener('click', createCartContent);
})

function createCartContent(){
    let cartContents = document.getElementById('cart-contents');

    //created the background of the cart content 
    let cartContent = document.createElement('div');
    cartContent.classList.add('cart-content');

    cartContents.appendChild(cartContent);

    //added image of product to the content box
    let img = document.createElement('img');
    img.src = '../bakery_images/puff.jpg';

    cartContent.appendChild(img);

    //created container that will contain the name of the product
    let label = document.createElement('div');
    label.classList.add('label');

    cartContent.appendChild(label);

    //added name of product and quantity to the label container
    let cartProductName = document.createElement('h2');
    cartProductName.textContent = 'Puff Puff';

    let cartProductQuantity = document.createElement('h5');
    cartProductQuantity.textContent = 'Qty 1';

    label.appendChild(cartProductName);
    label.appendChild(cartProductQuantity);

    //added pric tag to the cart content box
    let price = document.createElement('h2');
    price.textContent = '250.00';

    cartContent.appendChild(price);
}