document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const messageSentLabel = document.getElementById('messageSent');

  // Show message sent label with fade-in effect
  messageSentLabel.classList.add('visible');

  // Clear form inputs
  this.reset();

  // Hide the message after 3 seconds
  setTimeout(() => {
    messageSentLabel.classList.remove('visible');
  }, 3000);
});
