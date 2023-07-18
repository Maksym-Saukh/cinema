document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
  
    let currentSlide = Math.floor(slides.length / 2);
  
    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 20}%)`;
      slides.forEach((slide, i) => {
        slide.tabIndex = -1;
        slide.querySelector("img").style.transform = "";
        if (i === index) {
          slide.tabIndex = 0;
          slide.querySelector("img").style.transform = "scale(1.1)";
        }
      });
    }
  
    function getNextSlideIndex() {
      return (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    }
  
    function getPrevSlideIndex() {
      return (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    }
  
    prevButton.addEventListener("click", function() {
      currentSlide = getPrevSlideIndex();
      showSlide(currentSlide);
    });
  
    nextButton.addEventListener("click", function() {
      currentSlide = getNextSlideIndex();
      showSlide(currentSlide);
    });
  
    showSlide(currentSlide);
  });
  
