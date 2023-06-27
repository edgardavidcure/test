const circles = document.querySelectorAll(".circle");
const portraitsContainer = document.querySelector("#portraits")
const automotiveContainer = document.querySelector("#automotive")
const landscapesContainer = document.querySelector("#landscapes")
const imgContainer = document.querySelector(".imageContainer")

const modalContainer = document.querySelector(".modal-content")


let slideIndex = 1;
window.onload = function addClass(){
    for (let circle of circles ) {
        circle.classList.add("move")
    }
}

window.addEventListener('load', centerItem);



function centerItem() {
  let items = document.querySelectorAll('.move');
  let viewportWidth = window.innerWidth;
  for (let item of items){
    let itemWidth = item.offsetWidth + 7;
    let leftPosition = (viewportWidth - itemWidth) / 2;
    let rightPosition = (viewportWidth - itemWidth) / 2;
    items[0].style.left = leftPosition + 'px';
    items[1].style.right = rightPosition + 'px';
  } 
}

async function getDataFromJson(){
    let jsonData = await fetch("/json/images.json");
    let data = await jsonData.json();
    return data;
}

async function getImages(){
    let data = await getDataFromJson();
        displayImages(data.portraits, portraitsContainer);
          
        displayImages(data.automotive, automotiveContainer);
          
        displayImages(data.landscapes, landscapesContainer);
    
    setTimeout(() => {
        const headerLinks = document.querySelectorAll(".align-image");
        for (let item of headerLinks){
            item.style.opacity = "1"
        }
    }, 500);
    
}

const displayImages = (types, container) => {

    types.forEach((type, i) => {
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", type.path);
        imageElement.setAttribute("alt", `${type} by Terry McBride`);
        imageElement.classList.add("align-image");
        imageElement.classList.add("transition3");
        imageElement.setAttribute("onclick", `openModal(); currentSlide(${i+1})`);
        imageElement.loading = "lazy";

        let div = document.createElement("div");
        div.classList.add("column")

        div.insertAdjacentElement("afterbegin", imageElement);

        container.insertAdjacentElement("beforeend", div)
    });
}

function cleanContent(){

    const divElements = modalContainer.getElementsByTagName('div');

    // Convert the HTMLCollection to an array for easier manipulation
    const divArray = Array.from(divElements);

    // Remove each div element
    divArray.forEach((div) => {
        div.remove();
    });

    const modalDivElements = modalContainer.getElementsByTagName('div');
    const modalDivArray = Array.from(modalDivElements);

    // Remove each div element
    modalDivArray.forEach((div) => {
        div.remove();
    });
}
const displayModalImages = (types) => {
    types.forEach((type, i) => {
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", type.path)
        imageElement.setAttribute("alt", `${type} by Terry McBride`);
        //imageElement.classList.add("align-image");
        //imageElement.classList.add("transition3");
        //imageElement.setAttribute("onclick", `openModal();currentSlide(${i+1})`);

        let div = document.createElement("div");
        div.classList.add("mySlides");

        div.insertAdjacentElement("afterbegin", imageElement);

        modalContainer.insertAdjacentElement("beforeend", div)
    });
}
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    cleanContent();

}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function plusGallery(n, selector) {
    const pixels = n + 200;
    document.querySelector(selector).scrollBy(pixels, 0);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
}
async function pickRandomImg(){
    const data = await getDataFromJson();
    const randomPortraitEl = document.getElementById("randomPortrait");
    const randomAutomotiveEl = document.getElementById("randomAutomotive");
    const randomLandscapeEl = document.getElementById("randomLandscape");
    const randomPortraitIndex = Math.floor(Math.random() * data.portraits.length);
    const randomAutomotiveIndex = Math.floor(Math.random() * data.automotive.length);
    const randomLandscapeIndex = Math.floor(Math.random() * data.landscapes.length);
    const main = document.querySelectorAll(".main");
    main.forEach(element => {
        element.style.opacity = 1
    });

    randomPortraitEl.setAttribute("src", data.portraits[randomPortraitIndex].path)
    randomAutomotiveEl.setAttribute("src", data.automotive[randomAutomotiveIndex].path )
    randomLandscapeEl.setAttribute("src", data.landscapes[randomLandscapeIndex].path)
}
setTimeout(() => {
    const firstCircle = document.querySelector(".first");
    const secondCircle =  document.querySelector(".last");
    const logo = document.querySelector(".fixed img");
    firstCircle.style.opacity = "0";
    secondCircle.style.opacity = "0";
    logo.style.opacity = "1";
    
}, 4000);

setTimeout(() => {
    const headerLinks = document.querySelectorAll(".transition3");
    for (let item of headerLinks){
        item.style.opacity = "1"
    }
}, 5000);

//let timeoutId;

// function start(){
//     const main = document.querySelectorAll(".main")
//     main.forEach(element => {
//         element.style.opacity = 0
//     });
//     timeoutId = setTimeout(function() {
//         pickRandomImg()
//         setTimeout(pickRandomImg, 5000) 
        
//         start()
//     }, 5000);
// }
// start()
getImages()


