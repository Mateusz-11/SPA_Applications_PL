const score = document.getElementById("score");
const mark = document.getElementById("mark");
const result = document.getElementById("result");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");

console.log(score);
console.log(mark);
console.log(result);
console.log(firstNumber);
console.log(secondNumber);

function firstCheck() {
	if (isNaN(parseInt(firstNumber.value))) {
		result.textContent = "Only numbers!";
		this.value = "";
	}
}
function secondCheck() {
	if (isNaN(parseInt(secondNumber.value))) {
		result.textContent = "Only numbers!";
		this.value = "";
	}
}

function addition() {
	let first = parseInt(firstNumber.value);
	let second = parseInt(secondNumber.value);
	if (!isNaN(first) && !isNaN(second)) {
		score.textContent = first + second;
		mark.textContent = "+";
	} else {
		result.textContent = "Please put some numbers in the given fields!";
	}
}

function substraction() {
	let first = parseInt(firstNumber.value);
	let second = parseInt(secondNumber.value);
	if (!isNaN(first) && !isNaN(second)) {
		score.textContent = first - second;
		mark.textContent = "-";
	} else {
		result.textContent = "Please put some numbers in the given fields!";
	}
}

function exponentiation() {
	let first = parseInt(firstNumber.value);
	let second = parseInt(secondNumber.value);
	if (!isNaN(first) && !isNaN(second)) {
		let result = first;
		if (second == 0) {
			result = 1;
		} else {
			for (let i = 1; i < second; i++) {
				result = result * first;
			}
			score.textContent = result;
			mark.textContent = "^";
		}
	} else {
		result.textContent = "Please put some numbers in the given fields!";
	}
}

function multiplication() {
	let first = parseInt(firstNumber.value);
	let second = parseInt(secondNumber.value);
	if (!isNaN(first) && !isNaN(second)) {
		score.textContent = first * second;
		mark.textContent = "*";
	} else {
		result.textContent = "Please put some numbers in the given fields!";
	}
}

function division() {
	let first = parseInt(firstNumber.value);
	let second = parseInt(secondNumber.value);
	if (!isNaN(first) && !isNaN(second)) {
		if (second !== 0) {
			score.textContent = first / second;
			mark.textContent = "/";
		} else {
			result.textContent = "Second number have to be a greater then 0!";
		}
	} else {
		result.textContent = "Please put some numbers in the given fields!";
	}
}
