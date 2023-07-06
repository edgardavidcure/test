import { getDataFromJson } from "./utils.mjs"


const portraitsContainer = document.querySelector("#portraits")
const automotiveContainer = document.querySelector("#automotive")
const landscapesContainer = document.querySelector("#landscapes")
const imgContainer = document.querySelector(".imageContainer")

const modalContainer = document.querySelector(".modal-content")
const modalTypes = {
    automotive: [],
    landscapes: [],
    portraits: []
};
let currentModalType = null;
let slideIndex = 1;



async function getImages(){
    let data = await getDataFromJson();
    modalTypes.automotive = data.automotive;
    modalTypes.landscapes = data.landscapes;
    modalTypes.portraits = data.portraits;
  
    displayImages(data.portraits, "portraits", portraitsContainer);
    displayImages(data.automotive, "automotive", automotiveContainer);
    displayImages(data.landscapes, "landscapes", landscapesContainer);
    displayModalImages(data.portraits, "portraits");
    displayModalImages(data.automotive, "automotive");
    displayModalImages(data.landscapes, "landscapes");
    addModalListeners()

    setTimeout(() => {
        const headerLinks = document.querySelectorAll(".align-image");
        for (let item of headerLinks){
            item.style.opacity = "1"
        }
    }, 500);
    
}

const displayImages = (types, typeKey, container) => {
    types.forEach((type, i) => {
      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", type.path);
      imageElement.setAttribute("alt", `${type} by Terry McBride`);
      imageElement.classList.add("align-image");
      imageElement.classList.add("transition3");
      imageElement.addEventListener("click", function () {
        openModal(typeKey);
        currentSlide(i + 1, typeKey);

      });
      imageElement.loading = "lazy";
  
      let div = document.createElement("div");
      div.classList.add("column");
  
      div.insertAdjacentElement("afterbegin", imageElement);
  
      container.insertAdjacentElement("beforeend", div);
    });
  };

  const displayModalImages = (types, typeKey) => {
    let container = document.createElement("div")
    container.classList.add(typeKey)
    types.forEach((type) => {
      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", type.path);
      imageElement.setAttribute("alt", `${type} by Terry McBride`);
  
      let div = document.createElement("div");
      
      div.classList.add("mySlides");
  
      div.insertAdjacentElement("afterbegin", imageElement);
  
      container.insertAdjacentElement("beforeend", div);
    });
    modalContainer.insertAdjacentElement("beforeend", container)

  };

function openModal(type) {
    if (currentModalType !== null) {
        let prevCategory = document.querySelector(`.${currentModalType}`);
        let prevSlides = prevCategory.getElementsByClassName("mySlides");
        prevCategory.style.display = "none"
        for (let i = 0; i < prevSlides.length; i++) {
          prevSlides[i].style.display = "none";
        }
      }
    currentModalType = type;
    let modal = document.querySelector(`.${currentModalType}`)
    modal.style.display = "block"
    document.getElementById("myModal").style.display = "block";
    showSlides(slideIndex, type);
  }

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    

}

function addModalListeners(){
    const closeBtn = document.querySelector(".close")
    closeBtn.addEventListener("click", closeModal)
    const prevButton = modalContainer.querySelector(".prev")
    const nextButton = modalContainer.querySelector(".next")

    prevButton.addEventListener("click", function(){
        plusSlides(-1, currentModalType)
    } )
    nextButton.addEventListener("click", function(){
        plusSlides(1, currentModalType)
    } )
}
// Next/previous controls
function plusSlides(n, type) {
    showSlides(slideIndex += n, type);
}
function currentSlide(n, type) {
    showSlides(slideIndex = n, type);
}
function plusGallery() {
    
    const nextButtons = document.querySelectorAll(".next")
    const prevButtons = document.querySelectorAll(".prev")

    prevButtons.forEach(element => {
        element.addEventListener("click", function(){
            let container = element.parentNode
            container.scrollBy(-300, 0);

        })
    });
    nextButtons.forEach(element => {
        element.addEventListener("click", function(){
            let container = element.parentNode
            container.scrollBy(+300, 0);

        })
    });
}

function showSlides(n, type) {
    let i;
    let modalCategory = document.querySelector(`.${type}`)
    console.log(modalCategory)
    let slides = modalCategory.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
}

function headerLinksTransition(){ setTimeout(() => {
    const headerLinks = document.querySelectorAll(".transition5");
    for (let item of headerLinks){
        item.style.opacity = "1"
    }
    
    }, 800);
  }

setTimeout(() => {
    const elements = document.querySelectorAll(".transition3");
    for (let item of elements){
        item.style.opacity = "1"
    }
}, 1000);
getImages();
headerLinksTransition()
plusGallery()