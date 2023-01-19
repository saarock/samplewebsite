

let logo = document.getElementsByClassName('logoClass')[0];
const header = document.querySelector(['header']);
const box = document.getElementsByClassName('box4')[0];
const hoverImage = document.getElementsByClassName('image1Div');
let navs = document.getElementsByClassName('nav');
// console.log(hoverImage)
// let me = document.getElementsByClassName('meAndmy')[0];
const ch = document.getElementsByClassName('ch');
const showNav = document.getElementsByClassName('g')[0];

let navOld = document.getElementsByClassName('navbars')[0];



// window.addEventListener('DOMContentLoaded', () => {














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
header.classList.add('color')

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
navOld.classList.toggle('showNavBar')
})





// for image slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setInterval(showSlides,1000) 
}
setInterval(showSlides,1000)