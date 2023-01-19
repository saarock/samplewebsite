// const { default: mongoose } = require("mongoose");





let logo = document.getElementsByClassName('logoClass')[0];
const header = document.querySelector(['header']);
const box = document.getElementsByClassName('box4')[0];
const hoverImage = document.getElementsByClassName('image1Div');
let navs = document.getElementsByClassName('nav');
// console.log(hoverImage);
// let me = document.getElementsByClassName('meAndmy')[0];
const ch = document.getElementsByClassName('ch');
const showNav = document.getElementsByClassName('g')[0];
// import { showError } from '../../backend/router';


// const showError = require('/backend');
// import { showError } from '../../backend/router';

let navOld = document.getElementsByClassName('navbars')[0]; //i have to some things.









let boxPosition = box.getBoundingClientRect().top;

let position = logo.offsetTop;
let scrolled;


let boxP = box.offsetTop-1000;
// console.log(boxP)

const obj = {
position : position,



makeSticky: function() {
    let he = window.scrollY
    // console.log(he)
if( this.position = scrolled) {
header.classList.add('color');

} 
else {

    header.classList.remove('color')
}








},



}




window.addEventListener('scroll', function(e) {
    scrolled = this.scrollY
  
    obj.makeSticky()

})






let option = {threshold: 0.3}
const ovserver = new IntersectionObserver((entries, observe) => {
  entries.forEach((entry) => {
    console.log(entry)
   if(entry.isIntersecting) {
    console.log('done');
// alert('done')
// me.classList.add('show');
[...ch].forEach(current => {
    current.classList.add('show')
});





   }
   })


  

}, option)

ovserver.observe(box)




// show the responsive navbar for small devices
showNav.addEventListener('click', function() {
navOld.classList.toggle('showNavBar');
})



// }  


//To fetch the data from backend






