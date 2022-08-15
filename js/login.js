document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'bank@new.com' && password === 'secret') {
        console.log('valid password')
    }
    else {
        console.log('invalid password')
    }
})