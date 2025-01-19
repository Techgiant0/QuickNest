$(document).ready(function () {
  // Get DOM elements
  const $loginForm = $('#loginForm')
  const $signInBtn = $('#signInBtn')
  const $errorMessage = $('#errorMessage')
  const $passwordInput = $('#password')
  const $passwordToggle = $('#passwordToggle')

  // Toggle password visibility
  $passwordToggle.on('click', function () {
    const type =
      $passwordInput.attr('type') === 'password' ? 'text' : 'password'
    $passwordInput.attr('type', type)
    $passwordToggle.text(type === 'password' ? '👁️' : '👁️‍🗨️')
  })

  // Handle form submission
  $loginForm.on('submit', function (e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    // Disable button and show loading state
    $signInBtn.prop('disabled', true).text('Signing in...')
    $errorMessage.hide().text('')

    // Make API call using AJAX
    $.ajax({
      url: 'https://backend-capstone-group-7.onrender.com/api/users/login',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, password: password }),
      success: function (data) {
        if (data.error) {
          throw new Error(data.error)
        }
        // Handle successful login
        console.log('Login successful:', data)
        showSuccessMessage(data.message)
        // Handle successful login
        console.log('Login successful:', data)
        // Redirect or handle success case here
        window.location.href = 'https://techgiant0.github.io/QuickNest/'
      },
      error: function (xhr) {       
        showErrorMessage(xhr.responseJSON?.error)
      },
      complete: function () {
        // Reset button state
        $signInBtn.prop('disabled', false).text('Sign in')
      }
    })
  })
})
function showErrorMessage (message) {
  const messageBox = document.createElement('div')
  messageBox.classList.add('message-box', 'error')
  messageBox.textContent = message
  document.querySelector('.form-containers').appendChild(messageBox)
  setTimeout(() => {
    messageBox.remove()
  }, 3000)
}
function showSuccessMessage (message) {
  const messageBox = document.createElement('div')
  messageBox.classList.add('message-box', 'success')
  messageBox.textContent = message
  document.querySelector('.form-container').appendChild(messageBox)
  setTimeout(() => {
    messageBox.remove()
  }, 3000)
}
