const text1 = 'Whoops! It looks like you forgot to add your email';
const text2= 'Please provide a valid email address';
const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');
const input= form.querySelector('[type="email"]');

const err = document.createElement('p');
err.classList.add('error_text');

function checkEmail (event) {
	event.preventDefault();
	const email = form["user-email"].value;

	if (email.length==0){
		err.textContent = text1;
		input.classList.add('error');
		form.insertBefore(err, button);
	}
	else{
		err.textContent = text2;
		if (!validateEmail(email)) {
			input.classList.add('error');
			form.insertBefore(err, button);
		} 
		else {
			form.removeChild(err);
			input.classList.remove('error');
		}
	}
}
function validateEmail (email) {
	const ex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return ex.test(String(email).toLowerCase());
}
form.addEventListener('submit', checkEmail);