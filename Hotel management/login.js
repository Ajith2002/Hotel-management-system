let form = document.querySelecter('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  return false;
});

document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.querySelector('.login-form button:nth-of-type(2)');
    signInButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'index.html'; // Redirect to the index page
    });
});
