$(document).ready(function () {
    const $passwordInput = $('#password');
    const $passwordToggle = $('#passwordToggle');
    const $signInBtn = $('#signInBtn');
    const $errorMessage = $('#errorMessage');
  
    // Toggle password visibility
    $passwordToggle.on('click', function () {
      const type = $passwordInput.attr('type') === 'password' ? 'text' : 'password';
      $passwordInput.attr('type', type);
      $passwordToggle.text(type === 'password' ? '👁️' : '👁️‍🗨️');
    });
  
    // Handle form submission
    $('#loginForm').on('submit', function (e) {
      e.preventDefault();
  
      const email = $('#email').val();
      const password = $passwordInput.val();
  
      // Disable button and show loading state
      $signInBtn.prop('disabled', true).text('Signing in...');
      $errorMessage.hide();
  
      // Make AJAX call
      $.ajax({
        url: 'https://backend-capstone-group-7.onrender.com/api/users/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email: email, password: password }), // Ensure data is stringified
        success: function (data) {
          if (data.error) {
            throw new Error(data.error);
          }
          // Handle successful login
          console.log('Login successful:', data);
          // Redirect or handle success case here
          // window.location.href = '/dashboard';
        },
        error: function (xhr) {
          // Show error message
          const error = xhr.responseJSON?.error || 'An error occurred during login';
          $errorMessage.text(error).show();
        },
        complete: function () {
          // Reset button state
          $signInBtn.prop('disabled', false).text('Sign in');
        }
      });
    });
  });