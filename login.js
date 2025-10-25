function handleLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    if (email === '' || password === '') {
        messageElement.textContent = 'Please fill out all fields.';
        messageElement.className = 'text-center mt-2 text-red-600';
        return;
    }
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const foundUser = registeredUsers.find(user => 
        user.email === email && user.password === password
    );

    if (foundUser) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUserName', email.split('@')[0]);
        localStorage.setItem('loggedInUser', email);
        
        messageElement.textContent = 'Login Successful! Redirecting...';
        messageElement.className = 'text-center mt-2 text-green-600';
        
        setTimeout(() => {
            window.location.href = 'student.html';
        }, 500);

    } else {
        messageElement.textContent = 'Invalid email or password.';
        messageElement.className = 'text-center mt-2 text-red-600';
    }
}}
