const stars1 = document.querySelector('.stars1');
const moon2 = document.querySelector('.moon2');
const boat6 = document.querySelector('.boat6');

window.onscroll = function () {
  let value = scrollY;

  // Parallax effects
  stars1.style.right = value * 2 + 'px';
  moon2.style.top = value * 3 + 'px';
  boat6.style.left = value * 3 + 'px';

// Background change
if (value >= 92) {
  document.body.style.background = 'linear-gradient(#0487E2, #0463CA, #B0D6F5, #65C2F5, #09B1EC)';
} else {
  document.body.style.background = 'linear-gradient(#021B2F, #0B385A, #1C88C0, #2DBAE1, #90E6FF)';
}


  // Hide/show moon
  if (value > 107) {
    moon2.style.display = 'none';
  } else {
    moon2.style.display = 'block';
  }
}
