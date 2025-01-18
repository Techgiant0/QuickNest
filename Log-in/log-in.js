// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    const loginForm = document.getElementById('loginForm')
    const signInBtn = document.getElementById('signInBtn')
    const errorMessage = document.getElementById('errorMessage')
    const passwordInput = document.getElementById('password')
    const passwordToggle = document.getElementById('passwordToggle')
  
    // Toggle password visibility
    passwordToggle.addEventListener('click', function () {
      const type =
        passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
      passwordInput.setAttribute('type', type)
      passwordToggle.textContent = type === 'password' ? '👁️' : '👁️‍🗨️'
    })
  
    // Handle form submission
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault()
  
      const email = document.getElementById('email').value
      const password = passwordInput.value
  
      // Disable button and show loading state
      signInBtn.disabled = true
      signInBtn.textContent = 'Signing in...'
      errorMessage.style.display = 'none'
  
      // Make API call
      fetch('https://backend-capstone-group-7.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            throw new Error(data.error)
          }
          // Handle successful login
          console.log('Login successful:', data)
          // Redirect or handle success case here
          // window.location.href = '/dashboard';
        })
        .catch(err => {
          // Show error message
          errorMessage.textContent =
            err.message || 'An error occurred during login'
          errorMessage.style.display = 'block'
        })
        .finally(() => {
          // Reset button state
          signInBtn.disabled = false
          signInBtn.textContent = 'Sign in'
        })
    })
  })
  