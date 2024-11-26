// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (!userId || !password) {
        alert('Please enter both User ID and Password.');
    } else {
        // Perform login action here (e.g., send data to backend for validation)
        console.log(`User ID: ${userId}, Password: ${password}`);
        // Redirect to dashboard or handle login response
    }
});

// Show/Hide password functionality
const showPasswordBtn = document.querySelector('.show-password');
const passwordInput = document.getElementById('password');

showPasswordBtn.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    showPasswordBtn.textContent = type === 'password' ? '👁️' : '🙈'; // Toggle eye icon
});
