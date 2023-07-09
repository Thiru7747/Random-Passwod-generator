const generatButton = document.getElementById('btn');
const pwdLabel = document.getElementById('pwdtxt');


generatButton.addEventListener('click', function () {
    const randomPwdString = generateRandomString(12);
    pwdLabel.value = randomPwdString;
});

function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }

    return result;
}
