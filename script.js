// update link active class berdasarkan id
function updateActiveLink() {
    var currentHash = window.location.hash;
  
    // menghilangkan active class
    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
      link.classList.remove("active");
    });
  
    // menambahkan active class
    var currentNavLink = document.querySelector(
      '.navbar-nav .nav-link[href="' + currentHash + '"]'
    );
    if (currentNavLink) {
      currentNavLink.classList.add("active");
    }
  }
  
  // update active class link berdasarkan posisi scroll
  function updateActiveLinkOnScroll() {
    // mendapatkan posisi scroll
    var scrollPosition = window.scrollY;
  
    // mendefiniskan section berdasarkan id
    var sectionMap = {
      "#home": document.querySelector('.navbar-nav .nav-link[href="#home"]'),
      "#about": document.querySelector('.navbar-nav .nav-link[href="#about"]'),
      "#menu": document.querySelector('.navbar-nav .nav-link[href="#menu"]'),
      "#faq": document.querySelector('.navbar-nav .nav-link[href="#faq"]'),
      "#testimoni": document.querySelector(
        '.navbar-nav .nav-link[href="#testimoni"]'
      ),
      "#contact": document.querySelector(
        '.navbar-nav .nav-link[href="#contact"]'
      ),
    };
  
    // pengulangan section object dan update link active berdasarkan posisi scroll
    Object.keys(sectionMap).forEach(function (sectionId) {
      var sectionOffsetTop = document.querySelector(sectionId).offsetTop;
      if (
        scrollPosition >= sectionOffsetTop &&
        scrollPosition <
          sectionOffsetTop + document.querySelector(sectionId).offsetHeight
      ) {
        // menambahkan active class berdasarkan section yang dilihat
        sectionMap[sectionId].classList.add("active");
      } else {
        // menghilangkan active class di luar section
        sectionMap[sectionId].classList.remove("active");
      }
    });
  }
  
  // Update active link when the hash changes
  window.addEventListener("hashchange", function () {
    updateActiveLink();
    updateActiveLinkOnScroll(); // Also update active link on hash change
  });
  
  // Update active link on page load
  updateActiveLink();
  updateActiveLinkOnScroll(); // Also update active link on page load
  
  // Update active link on scroll
  window.addEventListener("scroll", updateActiveLinkOnScroll);
  
  document.addEventListener("DOMContentLoaded", function () {
    feather.replace();
    
    const accordionItems = document.querySelectorAll(".accordion-button");
  
    accordionItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Toggle active class on button
        this.classList.toggle("active");
  
        // Toggle display of content
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
  
  // Get all slides
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  
  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    // Show the slide at the given index
    slides[index].classList.add("active");
  }
  
  // Previous slide button click event
  document.getElementById("prevSlide").addEventListener("click", function () {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
  });
  
  // Next slide button click event
  document.getElementById("nextSlide").addEventListener("click", function () {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  });
  
  
  // about
  const secondParagraph = document.getElementById('secondParagraph');
      const thirdParagraph = document.getElementById('thirdParagraph');
      const showMoreBtn = document.getElementById('showMoreBtn');
      let isExpanded = false;
  
      showMoreBtn.addEventListener('click', function() {
        if (isExpanded) {
          secondParagraph.classList.add('hidden');
          thirdParagraph.classList.add('hidden');
          showMoreBtn.textContent = 'Show More';
        } else {
          secondParagraph.classList.remove('hidden');
          thirdParagraph.classList.remove('hidden');
          showMoreBtn.textContent = 'Show Less';
        }
        isExpanded = !isExpanded;
      });
  
  
  
  // about end
  
  // faq
  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector(".icon");
    answer.classList.toggle("open");
    icon.setAttribute(
      "data-feather",
      answer.classList.contains("open") ? "chevron-up" : "chevron-down"
    );
    element.parentElement.classList.toggle("active");
    feather.replace();
  }
  
  
  // faq end
  
  // testimoni
  document.addEventListener('DOMContentLoaded', function () {
      let isDown = false;
      let startX;
      let scrollLeft;
  
      const testimonialsContainer = document.querySelector('.testimonials');
  
      
      testimonialsContainer.innerHTML += testimonialsContainer.innerHTML;
  
      testimonialsContainer.addEventListener('mousedown', function (e) {
          isDown = true;
          startX = e.pageX - this.offsetLeft;
          scrollLeft = this.scrollLeft;
      });
      testimonialsContainer.addEventListener('mouseleave', function () {
          isDown = false;
      });
      testimonialsContainer.addEventListener('mouseup', function () {
          isDown = false;
      });
      testimonialsContainer.addEventListener('mousemove', function (e) {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - this.offsetLeft;
          const walk = (x - startX) * 1; 
          this.scrollLeft = scrollLeft - walk;
  
         
          if (this.scrollLeft >= this.scrollWidth / 2) {
              this.scrollLeft = 0; 
          } else if (this.scrollLeft <= 0) {
              this.scrollLeft = this.scrollWidth / 2; 
          }
      });
  });
  // testimoni end
  
  
  
  //   new carousel img
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" on", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " on";
    setTimeout(showSlides, 4000); 
  }
   
    