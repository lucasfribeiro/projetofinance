// Alterar email para telefone

const phoneInput = document.getElementById('phone_input');
const mailInput = document.getElementById('mail_input');

const phoneBtn = document.getElementById('phone_enter');
const mailBtn = document.getElementById('email_enter');

phoneBtn.addEventListener('click', () => {
    phoneInput.style.display = 'flex';
    mailInput.style.display = 'none';
})

mailBtn.addEventListener('click', () => {
    mailInput.style.display = 'flex';
    phoneInput.style.display = 'none';
})