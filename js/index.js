function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const password = document.getElementById('password');

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        password.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        password.type = 'password';
    }
};