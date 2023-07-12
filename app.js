// For NavBar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


// NavBar Sticky Scroll Effect
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Slide Show Container For News 
