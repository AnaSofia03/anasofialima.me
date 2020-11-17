const contactButton = document.querySelector('.contact-btn');
const container = document.querySelector('.contact-hide')

contactButton.addEventListener('click', function() {
  if (container.style.display == 'block') {
    container.style.display = 'none';
  } else container.style.display = 'block';
})

