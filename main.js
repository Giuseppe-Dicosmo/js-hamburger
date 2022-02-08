let hamburger = document.querySelector('.hamburger-menu');
console.log(hamburger)

hamburger.addEventListener ('click',
function() {
  alert ('Ciao')
  document.classList.toggle('hamburger-menu')
  }
);