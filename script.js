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

