document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    // Password hashing
    var passwordHash = CryptoJS.SHA256(password).toString();

    // Input validation
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // Here you can send the username and passwordHash to your server for authentication
        console.log('Username:', username);
        console.log('Password Hash:', passwordHash);
    }
});