const productWindows = document.querySelectorAll('.prod-window');
const overlays = document.querySelectorAll('.overlay');

//adds event listener to each of the product windows div with same class
productWindows.forEach(productWindow => {
    productWindow.addEventListener('mouseover', overlayFadesIn)
    productWindow.addEventListener('mouseout',overlayFadesOut)
});

//function that shows overlay effect
function overlayFadesIn(){
    overlays.forEach(overlay => {
        overlay.style.display = 'block';
        overlay.style.height = '200px'
    })
};

//function that removes overlay effect
function overlayFadesOut(){
    overlays.forEach(overlay => {
        overlay.style.display = 'none'
        overlay.style.height = '0px'
    })
};