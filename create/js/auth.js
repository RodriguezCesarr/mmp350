const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');
const loginMessage = document.getElementById('login-message')
const userName = document.getElementById('user-name');

loginButton.onclick= function() {
	fb.login(loginEmail.value, loginPassword.value);
};

function onError(errorMessae){
	loginMessage.textContent = errorMessae;
}

function userLoggedIn(uid, displayName){
	userName.tectContemt = "welcome" + displayName;
}