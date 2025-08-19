document.querySelector('form').addEventListener('submit', function (e) {
e.preventDefault(); 

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (name === '' || email === '' || password === '') {
alert('Please fill out all fields.');
return;
}

const message = document.createElement('p');
message.textContent = 'Submit done';
message.style.color = 'green';
message.style.fontWeight = 'bold';

if (!document.querySelector('.submit-message')) {
message.classList.add('submit-message');
document.querySelector('.form-side').appendChild(message);
}

e.target.reset();
});
