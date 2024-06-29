document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;

        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                // Redirect to result.html if all fields are filled and passwords match
                window.location.href = 'result.html';
            } else {
                alert('Passwords do not match.');
            }
        } else {
            alert('Please fill in all the fields.');
        }
    });
});
