
//toggle main menu
let toggler = document.querySelector(".toggler");
 
window.addEventListener("click", event => {
  if(event.target.className == "toggler" || event.target.className == "toggle") {
    document.body.classList.toggle("show-nav");
  } else if (event.target.className == "overlay") {
    document.body.classList.remove("show-nav");
  }
  // Change Toggler Icon
  if(document.body.className == "show-nav") {
    toggler.innerHTML = "&laquo";
  } else {
    toggler.innerHTML = "&raquo";
  }
});
//javascript for slides
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-carousel-button]");
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentSlide = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slidesContainer = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
//function for keyboard scrolling
      const activeSlide = slidesContainer.querySelector("[data-active]");
      let newIndex = [...slidesContainer.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slidesContainer.children.length - 1;
      if (newIndex >= slidesContainer.children.length) newIndex = 0;

      slidesContainer.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });

  // Keyboard navigation event listener
  document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      const offset = event.key === "ArrowRight" ? 1 : -1;
      const slidesContainer = document.querySelector("[data-slides]");
      
      const activeSlide = slidesContainer.querySelector("[data-active]");
      let newIndex = [...slidesContainer.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slidesContainer.children.length - 1;
      if (newIndex >= slidesContainer.children.length) newIndex = 0;
      
      slidesContainer.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    }
  });
});

//function for recipe cards
const containers = document.querySelectorAll('.closed');

containers.forEach(container => {
  const header = container.querySelector('.toggle1');

  let isOpen = false;

  header.addEventListener('click', () => {
    const article = container.querySelector('article');
    isOpen = !isOpen;

    if (isOpen) {
      article.style.maxHeight = '340px'; 
      article.style.padding = '25px';
      container.querySelector('.title').style.zIndex = '0'; 
    } else {
      article.style.maxHeight = '0';
      article.style.padding = '0';
      container.querySelector('.title').style.zIndex = '1'; 
    }
  });
});