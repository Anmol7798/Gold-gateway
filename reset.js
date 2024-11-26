// Handle password reset form submission
document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById('email').value;

    if (!email) {
        alert('Please enter your Email or User ID.');
    } else {
        // Perform password reset action here (e.g., send email or user ID to backend)
        console.log(`Password reset link will be sent to: ${email}`);
        alert('A password reset link has been sent to your email.');
        // Send reset request to the backend
    }
});
