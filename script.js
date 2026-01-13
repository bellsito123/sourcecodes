document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso!');
    } else {
        alert('Error: API not working... try later.');
    }
});
