document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const messageSentLabel = document.getElementById('messageSent');

  messageSentLabel.classList.add('visible');
  this.reset();

  setTimeout(() => {
    messageSentLabel.classList.remove('visible');
  }, 3000);
});
