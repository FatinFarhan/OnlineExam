let questions = [
	{
		id: 1,
		question: "What is the full form of RAM ?",
		answer: "Random Access Memory",
		options: [
			"Random Access Memory",
			"Randomely Access Memory",
			"Run Aceapt Memory",
			"None of these",
		],
	},
	{
		id: 2,
		question: "What is the full form of CPU?",
		answer: "Central Processing Unit",
		options: [
			"Central Program Unit",
			"Central Processing Unit",
			"Central Preload Unit",
			"None of these",
		],
	},
	{
		id: 3,
		question: "What is the full form of E-mail",
		answer: "Electronic Mail",
		options: ["Electronic Mail", "Electric Mail", "Engine Mail", "None of these"],
	},
];

let question_count = 0;
let points = 0;

window.onload = function () {
	show();
};

function next() {
	// if the question is last then redirect to final page
	sessionStorage.setItem("time", time);
	clearInterval(mytime);
	location.href = "end.html";

	let user_answer = document.getElementsByClassName("active");

	for (let i = 0; i < user_answer.length; i++) {
		// check if the answer is right or wrong
		id = parseInt(user_answer[i].parentElement.parentElement.parentElement.id);

		if (user_answer[i].innerText == questions[id - 1].answer) {
			points += 1;
			sessionStorage.setItem("points", points);
		}

		question_count++;
	}
	console.log(points);
}

function show() {
	let x = document.getElementsByClassName("questionbox");
	for (let i = 0; i < x.length; i++) {
		let [first, second, third, fourth] = questions[i].options;
		x[i].innerHTML = `
		<div class="question ">
		<h4>Q${i + 1}. ${questions[i].question}</h5>
		<div class="options-container">
			<p class="options" onclick = "checkAnswer()">
				${first}
			</p>
			<p class="options" onclick = "checkAnswer()">
				${second}
			</p>
		</div>
		<div class="options-container">
			<p class="options" onclick = "checkAnswer()">
				${third}
			</p>
			<p class="options" onclick = "checkAnswer()">
				${fourth}
			</p>
		</div>
		</div>
		`;
		toggleActive();
	}
}
function toggleActive() {
	let option = document.getElementsByClassName("options");
	for (let i = 0; i < option.length; i++) {
		option[i].onclick = function () {
			option[i].parentElement.parentElement.parentElement.style.backgroundColor = "slateblue";
			if (option[i].classList.contains("active")) {
				option[i].classList.remove("active");
				option[i].style.backgroundColor = "dodgerblue";
			} else {
				option[i].classList.add("active");
				option[i].style.backgroundColor = "mediumseagreen";
			}
		};
	}
}
