$(document).ready(function () {
  const $signupForm = $('#signupForm');
  const $errorMessageDiv = $('#error-message');
  const $passwordInput = $('#password');  
  const $eyeToggle = $('#eye-toggle');
  const $submitButton = $signupForm.find('button[type="submit"]');
  const $spinner = $submitButton.find('.spinner');
  const $buttonText = $submitButton.find('.button-text');
  const API_URL = "https://backend-capstone-group-7.onrender.com/api/users/signup";

  // Toggle password visibility
  $eyeToggle.on('click', function () {
    const type = $passwordInput.attr('type') === 'password' ? 'text' : 'password';
    $passwordInput.attr('type', type);
    $eyeToggle.attr('class', `fa fa-eye${type === 'password' ? '-slash' : ''}`);
  });

  // Form submission
  $signupForm.on('submit', function (event) {
    event.preventDefault();

    // Extract field values
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Reset error message
    $errorMessageDiv.hide().text('');

    // Show loading state
    $submitButton.prop('disabled', true);
    $spinner.show();
    $buttonText.text('Signing up...');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $errorMessageDiv.text('Please enter a valid email address.').show();
      resetButtonState();
      return;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      $errorMessageDiv.text('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.').show();
      resetButtonState();
      return;
    }

    // Submit data using AJAX
    $.ajax({
      url: API_URL,
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      success: function (data) {
        alert('Signup successful!');
        window.location.href = '../Log-in/log-in.html';
      },
      error: function (xhr) {
        const errorMessage = xhr.responseJSON?.message || 'Signup failed';
        $errorMessageDiv.text(errorMessage).show();
        console.error('Error during signup:', errorMessage);
      },
      complete: function () {
        // Reset button state
        resetButtonState();
      }
    });
  });

  // Reset button state
  function resetButtonState() {
    $submitButton.prop('disabled', false);
    $spinner.hide();
    $buttonText.text('Sign Up now');
  }
});
