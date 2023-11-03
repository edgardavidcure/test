export function centerItem() {
  let items = document.querySelectorAll(".move");
  let viewportWidth = window.innerWidth;
  for (let item of items) {
    let itemWidth = item.offsetWidth + 20;
    let leftPosition = (viewportWidth - itemWidth) / 2;
    let rightPosition = (viewportWidth - itemWidth) / 2;
    item.style.left = leftPosition + "px";
    item.style.right = rightPosition + "px";
  }
}

export async function getDataFromJson() {
  let jsonData = await fetch("/json/images.json");
  let data = await jsonData.json();
  return data;
}

export function cleanContent() {
  const divElements = modalContainer.getElementsByTagName("div");

  // Convert the HTMLCollection to an array for easier manipulation
  const divArray = Array.from(divElements);

  // Remove each div element
  divArray.forEach((div) => {
    div.remove();
  });

  const modalDivElements = modalContainer.getElementsByTagName("div");
  const modalDivArray = Array.from(modalDivElements);

  // Remove each div element
  modalDivArray.forEach((div) => {
    div.remove();
  });
}

export function fadeInSection(sectionClassName) {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'fade-in-visible' class to the intersecting section
        entry.target.classList.add("fade-in-visible");

        // Unobserve the section to avoid applying the effect multiple times
        observer.unobserve(entry.target);
      }
    });
  }

  function addFadeInEffect() {
    const fadeInSection = document.querySelectorAll(sectionClassName);
    const observerOptions = {
      threshold: 0.3, // Adjust the threshold as needed (0.5 means 50% visibility)
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    fadeInSection.forEach((section) => {
      observer.observe(section);
    });
  }
  addFadeInEffect();
}

export function sendEmail() {
  const email = "terrymcbrideimages@yahoo.com";
  const subject = "Hello from the website!";
  const body = "Hi Terry,\n\nI am reaching out through your website.";

  // Use the mailto link to open the user's default email client
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the email client
  window.location.href = mailtoLink;
}
