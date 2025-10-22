function handleRegistration() {
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const messageElement = document.getElementById('signupMessage');
    
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match!';
        messageElement.className = 'text-center mt-2 text-red-600';
        return;
    }
    if (password.length < 8) {
        messageElement.textContent = 'Password must be at least 8 characters.';
        messageElement.className = 'text-center mt-2 text-red-600';
        return;
    }

    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = users.some(user => user.email === email);
    
    if (userExists) {
        messageElement.textContent = "Error: This email is already registered.";
        messageElement.className = 'text-center mt-2 text-red-600';
        return;
    }

    const newUser = {
        email: email,
        password: password
    };

    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    messageElement.textContent = "Success: Registration complete! Redirecting to Login...";
    messageElement.className = 'text-center mt-2 text-green-600';
    
    setTimeout(() => {
        window.location.href = 'login.html'; 
    }, 1000);
}