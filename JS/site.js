questions = [
	{
		id: 1,
		question:
			"4 জন ছেলেকে এবং 2 জন মেয়েকে এক সারিতে কতভাবে বসানো সম্ভব যেন 2 জন মেয়ে পাশাপাশি থাকে? ",
		answer: "o3",
		options: ["$$60$$", "$$120$$", "$$240$$", "$$360$$"],
	},
	{
		id: 2,
		question:
			"100 সংখ্যক ভিন্ন ভিন্ন সংখ্যার সেট থেকে কতটি সংখ্যা নিলে বিন্যাস এবং সমাবেশ সংখ্যা সমান হবে? ",
		answer: "o1",
		options: ["$$1$$", "$$2$$", "$$99$$", "$$100$$"],
	},
	{
		id: 3,
		question: "10 থেকে 30 পর্যন্ত মৌলিক অথবা 5 দ্বারা বিভাজ্য সংখ্যা কয়টি? ",
		answer: "o2",
		options: ["$$6$$", "$$11$$", "$$5$$", "$$13$$"],
	},
	{
		id: 4,
		question: " একই ধরনের 7টি লাল ও 4টি সবুজ বলকে কতভাবে সাজানো যায়? ",
		answer: "o2",
		options: ["$$35$$", "$$320$$", "$$210$$", "$$120$$"],
	},
	{
		id: 5,
		question: " nC4 = 15 এবং (n+1)C5 = 21 হলে nP5 =?  ",
		answer: "o1",
		options: ["$$6!$$", "$$5$$", "$$5!$$", "$$6$$"],
	},
	{
		id: 6,
		question: "0,1,2,6  অঙ্কগুলি দ্বারা 1000 অপেক্ষা ছোট 3 দ্বারা বিভাজ্য কতটি সংখ্যা আছে?  ",
		answer: "o2",
		options: ["$$12$$", "$$14$$", "$$15$$", "$$16$$"],
	},
];

let question_count = 0;
let points = 0;

window.onload = function () {
	show();
};

function next() {
	sessionStorage.setItem("time", time);
	clearInterval(mytime);
	location.href = "end.html";

	let user_answer = document.getElementsByClassName("active");

	for (let i = 0; i < user_answer.length; i++) {
		console.log(user_answer[i].classList[1]);
		// check if the answer is right or wrong
		id = parseInt(user_answer[i].parentElement.parentElement.parentElement.id);

		if (user_answer[i].classList[1] == questions[id - 1].answer) {
			points += 1;
			sessionStorage.setItem("points", points);
		}

		question_count++;
	}
	console.log(points);
}

function show() {
	let questionBox = document.getElementsByClassName("questionbox");

	for (let i = 0; i < questionBox.length; i++) {
		let optionArray = questions[i].options;

		for (let j = 0; j < 4; j++) {
			let temp = optionArray[j].slice(0, 2);
			let len = optionArray[j].length;
			if (temp == "$$") {
				optionArray[j] = katex.renderToString(optionArray[j].slice(2, len - 2));
			}
		}

		questionBox[i].innerHTML = `
		<div class="question ">
		<h4>Q${i + 1}. ${questions[i].question}</h5>
		<div class="options-container">
			<p class="options o1">
				${optionArray[0]}
			</p>
			<p class="options o2">
				${optionArray[1]}
			</p>
		</div>
		<div class="options-container">
			<p class="options o3">
				${optionArray[2]}
			</p>
			<p class="options o4">
				${optionArray[3]}
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
