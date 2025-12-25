document.addEventListener('DOMContentLoaded', () => {
    // Password Toggle Logic
    const togglePasswordBtn = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (togglePasswordBtn && passwordInput && eyeIcon) {
        togglePasswordBtn.addEventListener('click', () => {
            // Toggle the type attribute
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle the eye icon
            if (type === 'text') {
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        });
    }

    // Username Clear Logic
    const usernameInput = document.getElementById('username');
    const clearUsernameBtn = document.querySelector('.clear-input');

    if (usernameInput && clearUsernameBtn) {
        // Show/Hide clear button based on input value
        usernameInput.addEventListener('input', () => {
            if (usernameInput.value.length > 0) {
                clearUsernameBtn.style.display = 'flex';
            } else {
                clearUsernameBtn.style.display = 'none';
            }
        });

        // Clear input when button is clicked
        clearUsernameBtn.addEventListener('click', () => {
            usernameInput.value = '';
            clearUsernameBtn.style.display = 'none';
            usernameInput.focus(); // Keep focus on input
        });
    }
});
