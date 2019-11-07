let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
mainNav.classList.toggle('active');
});


//make modal 

 

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



// Get the modal
let modal= document.getElementById("myModal");

let btn = document.getElementById("myModalBtn");

// Get the <span> element that closes the modal

let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onmouseover = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
  modal.style.display ="none";
}
// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if(event.target == modal){
    modal.style.display = "none";
  }
}
 
