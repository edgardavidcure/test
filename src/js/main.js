import { centerItem, getDataFromJson} from "./utils.mjs";
const transitionElement = document.querySelector('.transition3');
const lastTypeEffect = document.querySelector(".typewriter-h1")
const circles = document.querySelectorAll(".circle");

window.onload = function addClass(){
    for (let circle of circles ) {
        circle.classList.add("move")
    }
}



function aftertypeeffect(){ setTimeout(() => {
  const headerLinks = document.querySelectorAll(".transition4");
  for (let item of headerLinks){
      item.style.opacity = "1"
  }
}, 4100);
}


function headerLinksTransition(){ setTimeout(() => {
  const headerLinks = document.querySelectorAll(".transition5");
  const scrollButton = document.querySelector(".floating-button")
  for (let item of headerLinks){
      item.style.opacity = "1"
  }
  setTimeout(() => {
    scrollButton.classList.add("scroll-button")
    
  }, 1000);
  }, 8500);
}

async function getLandingImages(){
  const data = await getDataFromJson();
  const[landingImages] = data.landing;
  return landingImages;
  
}

async function displayLandingImages(){
  const images = await getLandingImages();
  const automotiveImages = images.automotive
  const portraitImages = images.portraits 
  const landscapeImages = images.landscapes 
  const automotiveContainer = document.querySelector(".automotiveContainer")
  const portraitContainer = document.querySelector(".portraitContainer")
  const landscapesContainer = document.querySelector(".landscapesContainer")
  createImageElements(automotiveImages, automotiveContainer)
  createImageElements(portraitImages, portraitContainer)
  createImageElements(landscapeImages, landscapesContainer)


}
displayLandingImages()

function createImageElements(imageType, element){
  
  
  imageType.forEach( image => {
    const imageElement = `<img src="${image.path}" alt="Photo taken by Terry Mcbride" class="imageStack">`
    element.insertAdjacentHTML("beforeend", imageElement)
  });
}

function loadTypedText(){
  setTimeout(() => {
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
  }, 4000);
}  
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
    const links = document.querySelectorAll(".transition3");
    for (let item of links){
        item.style.opacity = "1"
    }
}, 3300);









document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.querySelector('.floating-button');

  scrollButton.addEventListener('click', function(event) {
    event.preventDefault();

    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
    
  });

  headerLinksTransition()
  window.addEventListener('load', centerItem);
  loadTypedText()






});


getLandingImages()