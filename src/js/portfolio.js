import { getDataFromJson } from "./utils.mjs"


const portraitsContainer = document.querySelector("#portraits")
const automotiveContainer = document.querySelector("#automotive")
const landscapesContainer = document.querySelector("#landscapes")
const imgContainer = document.querySelector(".imageContainer")

const modalContainer = document.querySelector(".modal-content")


let slideIndex = 1;



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


setTimeout(() => {
    const elements = document.querySelectorAll(".transition3");
    for (let item of elements){
        item.style.opacity = "1"
    }
}, 1000);
getImages();