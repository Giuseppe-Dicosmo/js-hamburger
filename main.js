let hamburger = document.querySelector('.fas.fa-bars');
console.log(hamburger)

let hamburgerActive = document.querySelector('.hamburger-menu');
console.log(hamburgerActive)

hamburger.addEventListener ('click',
function() {
  hamburgerActive.classList.add('active')
  }
);

hamburgerActive.addEventListener ('click',
function() {
  hamburgerActive.classList.remove('active')
  }
);