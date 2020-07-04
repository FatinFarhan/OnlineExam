function submitForm(event) {
	event.preventDefault();

	let userName = document.forms["login_form"]["name"].value;
	let userPassword = document.forms["login_form"]["pass"].value;

	// console.log(userName, userPassword);

	sessionStorage.setItem("name", userName);

	location.href = "quiz.html";
}
