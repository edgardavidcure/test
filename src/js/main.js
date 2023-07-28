import { centerItem, getDataFromJson} from "./utils.mjs";
import { fadeInSection, sendEmail } from "./utils.mjs";
const transitionElement = document.querySelector('.transition3');
const lastTypeEffect = document.querySelector(".typewriter-h1")
const circles = document.querySelectorAll(".circle");

window.onload = function addClass(){
    for (let circle of circles ) {
        circle.classList.add("move")
    }
}



// function aftertypeeffect(){ setTimeout(() => {
//   const headerLinks = document.querySelectorAll(".transition4");
//   for (let item of headerLinks){
//       item.style.opacity = "1"
//   }
// }, 2100);
// }


function headerLinksTransition(){ setTimeout(() => {
  const headerLinks = document.querySelectorAll(".transition5");
  const scrollButton = document.querySelector(".floating-button")
  for (let item of headerLinks){
      item.style.opacity = "1"
  }
  setTimeout(() => {
    scrollButton.classList.add("scroll-button")
    
  }, 1000);
  }, 5000);
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
  const othersImages = images.others
  const automotiveContainer = document.querySelector(".automotiveContainer")
  const portraitContainer = document.querySelector(".portraitContainer")
  const landscapesContainer = document.querySelector(".landscapesContainer")
  const othersContainer = document.querySelector(".othersContainer")
  createImageElements(automotiveImages, automotiveContainer)
  createImageElements(portraitImages, portraitContainer)
  createImageElements(landscapeImages, landscapesContainer)
  createImageElements(othersImages, othersContainer)
  // const intersectionObserver = new IntersectionObserver(intersectionCallback, options);

  // Start observing each image container
  // imageContainers.forEach(container => intersectionObserver.observe(container));
  observeImages()
}
displayLandingImages()

function createImageElements(imageType, element){
  
  
  imageType.forEach( image => {
    const imageElement = `<img src="${image.path}" alt="Photo taken by Terry Mcbride" class="imageStack">`
    element.insertAdjacentHTML("beforeend", imageElement)
  });
}

function loadTypedText(){
  setTimeout(() => { const typedParag = new Typed('.typewriter-p', {
              strings: ['A Gallery By Terry McBride'],
              typeSpeed: 40,
              showCursor: false,
            });
        
  }, 3200);
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
    
}, 2600);



setTimeout(() => {
    const links = document.querySelectorAll(".transition3");
    for (let item of links){
        item.style.opacity = "1"
    }
}, 2100);


setTimeout(() => {
  const links = document.querySelectorAll(".animated");
  for (let item of links){
      item.classList.add("fadeInDown")
      item.style.display = "block"
      console.log(item)
  }
}, 2500);


getLandingImages()





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



// // Function to remove the grayscale filter from an image
// function removeGrayscaleFromImage(image) {
//   image.style.filter = 'none';
// }
// function addGrayscaleFromImage(image) {
//   image.style.filter = 'grayScale(1)';
// }
// // Intersection Observer callback function
// function intersectionCallback(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const images = entry.target.querySelectorAll(".imageStack")
//       console.log(images)
//       images.forEach(image => removeGrayscaleFromImage(image));
//       // Unobserve the target once the grayscale filter is removed (optional)
//       // observer.unobserve(entry.target);
//     } else{
//       const images = entry.target.querySelectorAll(".imageStack")
//       images.forEach(image => addGrayscaleFromImage(image));
//       // observer.unobserve(entry.target);


//     }
//   });
// }

// // Creating the Intersection Observer
// const imageContainers = document.querySelectorAll('.imageContainer');
// const options = {
//   root: null, // Use the viewport as the root
//   rootMargin: '0px', // No margin
//   threshold: 0.6, // 50% visible is enough to trigger the callback
// };


function randomlyRemoveGrayscale(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageToShow = images[randomIndex];
  
  imageToShow.style.filter = "none";
  
  setTimeout(() => {
    imageToShow.style.filter = 'grayscale(1)';
    randomlyRemoveGrayscale(images);
  }, 3000); 
}

function observeImages() {
  const images = document.querySelectorAll('.imageStack');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        randomlyRemoveGrayscale(images);
      }
    });
  });

  images.forEach((image) => observer.observe(image));
}

fadeInSection(".imageContainer")


const contact = document.getElementById("emailButton");
contact.addEventListener("click", sendEmail)