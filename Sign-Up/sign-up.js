document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const errorMessageDiv = document.getElementById('error-message');
  const passwordInput = document.getElementById('password');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const eyeToggle = document.getElementById('eye-toggle');
  const submitButton = signupForm.querySelector('button[type="submit"]');
  const spinner = submitButton.querySelector('.spinner');
  const buttonText = submitButton.querySelector('.button-text');
  const API_URL = "https://backend-capstone-group-7.onrender.com/api/users/signup";

  // Toggle password visibility
  eyeToggle.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    eyeToggle.className = `fa fa-eye${type === 'password' ? '-slash' : ''}`;
  });

  // Form submission
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Extract field values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset error message
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.textContent = '';

    // Show loading state
    submitButton.disabled = true;
    spinner.style.display = 'inline-block';
    buttonText.textContent = 'Signing up...';

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
      }

      // Validate password strength
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!passwordRegex.test(password)) {
        throw new Error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
      }

      // Submit data
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:name,
         email: email,
         password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        window.location.href = '/';
      } else {
        throw new Error(data.message || `Signup failed with status: ${response.status}`);
      }
    } catch (error) {
      errorMessageDiv.textContent = error.message || 'An error occurred during signup.';
      errorMessageDiv.style.display = 'block';
      console.error('Error during signup:', error);
    } finally {
      // Reset button state
      submitButton.disabled = false;
      spinner.style.display = 'none';
      buttonText.textContent = 'Sign Up now';
    }
  });
});
