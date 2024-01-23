document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.navbar a');

    menu.addEventListener('click', function () {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (innerLink) {
                innerLink.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});


// <!-- typed js effect starts -->
var typed = new Typed(".typing", {
    strings: ["Frontend Developer", "PHP developer", "Flutter Developer", "Android Developer", "Web developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// function scrollHeader() {
//     const header=document.getElementById('header');
//     this.scrollY >=20? header.classList.add('active'):header.classList.remove('active');
    
// }

// window.addEventListener('scroll',scrollHeader);

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}


// window.onload = function() {
//   displaySection('home');
// };

function displaySection(sectionId, event) {
  // Prevent the default action (e.g., scrolling)
  event.preventDefault();

  // Hide all sections
  var sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });

// Display the selected section and set the top margin
var selectedSection = document.getElementById(sectionId);
if (selectedSection) {
  selectedSection.style.marginTop = '60px';

  // Additional condition for section1
  if (sectionId === 'home') {
    selectedSection.style.display = 'flex';
    // Add any specific styles for section1 here
  } else {
    selectedSection.style.display = 'block';
  }
}
}


  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
