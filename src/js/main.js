import { centerItem } from "./utils.mjs";

const circles = document.querySelectorAll(".circle");

window.onload = function addClass(){
    for (let circle of circles ) {
        circle.classList.add("move")
    }
}

window.addEventListener('load', centerItem);


setTimeout(() => {
    const firstCircle = document.querySelector(".first");
    const secondCircle =  document.querySelector(".last");
    const logo = document.querySelector(".fixed img");
    firstCircle.style.opacity = "0";
    secondCircle.style.opacity = "0";
    logo.style.opacity = "1";
    firstCircle.style.display = "none"
    secondCircle.style.display = "none"
    
}, 4000);



setTimeout(() => {
    const headerLinks = document.querySelectorAll(".transition3");
    for (let item of headerLinks){
        item.style.opacity = "1"
    }
}, 3300);


function aftertypeeffect(){setTimeout(() => {
    const headerLinks = document.querySelectorAll(".transition4");
    for (let item of headerLinks){
        item.style.opacity = "1"
    }
}, 800);
}
const transitionElement = document.querySelector('.transition3');
transitionElement.addEventListener('transitionend', function() {
    const typedHeader = new Typed('.typewriter-h1', {
        strings: ['Light and Shadows'],
        typeSpeed: 70,
        showCursor: false,
        onComplete: function() {
          const typedParag = new Typed('.typewriter-p', {
            strings: ['A Gallery By Terry McBride'],
            typeSpeed: 50,
            showCursor: false,
            onComplete: function(){
                aftertypeeffect()

            }
          });
        }
      });
});

  document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.scroll-button');
  
    scrollButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      const portfolioSection = document.querySelector('#portfolio');
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

