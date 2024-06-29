document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (email && password) {
            // Redirect to result.html if both fields are filled
            window.location.href = 'result.html';
        } else {
            alert('Please fill in both email and password.');
        }
    });
});
