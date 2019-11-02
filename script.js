let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
mainNav.classList.toggle('active');
});


 //Get the button
const mybutton = document.getElementById("myBtn");

window.onscroll = () => scrollFunction();

// When the user scrolls down 200px from the top of the document, show the button
const scrollFunction = () => {
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ?  mybutton.style.display = "block" : mybutton.style.display = "none";
}
// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// follow navigation

const triggers = document.querySelectorAll('.nav-list > li');
const background  = document.querySelector('.dropdownBackground');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
}

function handleLeave() {
  setTimeout(() => this.classList.remove('trigger-enter-active'));
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
