import { getDataFromJson, sendEmail, fadeInSection } from "./utils.mjs";

const portraitsContainer = document.querySelector("#portraits");
const automotiveContainer = document.querySelector("#automotive");
const landscapesContainer = document.querySelector("#landscapes");
const othersContainer = document.querySelector("#others");
const imgContainer = document.querySelector(".imageContainer");

const modalContainer = document.querySelector(".modal-content");
const modalTypes = {
  automotive: [],
  landscapes: [],
  portraits: [],
};
let currentModalType = null;
let slideIndex = 1;

async function getImages() {
  let data = await getDataFromJson();
  modalTypes.automotive = data.automotive;
  modalTypes.landscapes = data.landscapes;
  modalTypes.portraits = data.portraits;
  modalTypes.others = data.others;
  displayImages(data.portraits, "portraits", portraitsContainer);
  displayImages(data.automotive, "automotive", automotiveContainer);
  displayImages(data.landscapes, "landscapes", landscapesContainer);
  displayImages(data.others, "others", othersContainer);
  displayModalImages(data.portraits, "portraits");
  displayModalImages(data.automotive, "automotive");
  displayModalImages(data.landscapes, "landscapes");
  displayModalImages(data.others, "others");
  addModalListeners();

  setTimeout(() => {
    const headerLinks = document.querySelectorAll(".align-image");
    for (let item of headerLinks) {
      item.style.opacity = "1";
    }
  }, 500);
  observeCarousels();
}

const displayImages = (types, typeKey, container) => {
  types.forEach(async (type, i) => {
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
  let container = document.createElement("div");
  container.classList.add(typeKey);
  types.forEach((type) => {
    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", type.path);
    imageElement.setAttribute("alt", `${type} by Terry McBride`);

    let div = document.createElement("div");

    div.classList.add("mySlides");

    div.insertAdjacentElement("afterbegin", imageElement);

    container.insertAdjacentElement("beforeend", div);
  });
  modalContainer.insertAdjacentElement("beforeend", container);
};

function openModal(type) {
  if (currentModalType !== null) {
    let prevCategory = document.querySelector(`.${currentModalType}`);
    let prevSlides = prevCategory.getElementsByClassName("mySlides");
    prevCategory.style.display = "none";
    for (let i = 0; i < prevSlides.length; i++) {
      prevSlides[i].style.display = "none";
    }
  }
  currentModalType = type;
  let modal = document.querySelector(`.${currentModalType}`);
  modal.style.display = "block";
  document.getElementById("myModal").style.display = "block";
  showSlides(slideIndex, type);
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function addModalListeners() {
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", closeModal);
  const prevButton = modalContainer.querySelector(".prev");
  const nextButton = modalContainer.querySelector(".next");

  prevButton.addEventListener("click", function () {
    plusSlides(-1, currentModalType);
  });
  nextButton.addEventListener("click", function () {
    plusSlides(1, currentModalType);
  });
}
// Next/previous controls
function plusSlides(n, type) {
  showSlides((slideIndex += n), type);
}
function currentSlide(n, type) {
  showSlides((slideIndex = n), type);
}
function plusGallery() {
  const nextButtons = document.querySelectorAll(".next");
  const prevButtons = document.querySelectorAll(".prev");

  prevButtons.forEach((element) => {
    element.addEventListener("click", function () {
      let container = element.parentNode;
      container.scrollBy(-300, 0);
      setTimeout(() => setActiveImage(container), 400);
    });
  });
  nextButtons.forEach((element) => {
    element.addEventListener("click", function () {
      let container = element.parentNode;
      container.scrollBy(+300, 0);
      setTimeout(() => setActiveImage(container), 400);
    });
  });
}

function showSlides(n, type) {
  let i;
  let modalCategory = document.querySelector(`.${type}`);
  let slides = modalCategory.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

function headerLinksTransition() {
  setTimeout(() => {
    const headerLinks = document.querySelectorAll(".transition5");
    for (let item of headerLinks) {
      item.style.opacity = "1";
    }
  }, 800);
}

function setActiveImage(carousel) {
  const carouselRect = carousel.getBoundingClientRect();

  let minDistance = Infinity;
  let activeColumn = null;
  const columns = carousel.querySelectorAll(".column");
  columns.forEach((column) => {
    const columnRect = column.getBoundingClientRect();
    const distance = columnRect.left - carouselRect.left;
    if (distance >= 0 && distance < minDistance) {
      minDistance = distance;
      activeColumn = column;
    }
  });

  columns.forEach((column) => column.classList.remove("active"));
  if (activeColumn && carousel.classList.contains("intersecting")) {
    activeColumn.classList.add("active");
  }
}

function observeCarousels() {
  const carousels = document.querySelectorAll(".imageContainer");
  carousels.forEach((carousel) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            carousel.classList.add("intersecting");
            setActiveImage(carousel);
            window.addEventListener("scroll", () => setActiveImage(carousel));
            window.addEventListener("touchend", () => setActiveImage(carousel));
            carousel.addEventListener("scroll", () => setActiveImage(carousel));
          } else {
            carousel.classList.remove("intersecting");
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(carousel);
  });
}
const contact = document.getElementById("emailButton");
contact.addEventListener("click", sendEmail);

getImages();
headerLinksTransition();
plusGallery();
fadeInSection(".transition3");
