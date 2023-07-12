// For NavBar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

$('.toggle-button').click(function(e){
  e.preventDefault()
})


// NavBar Sticky Scroll Effect


