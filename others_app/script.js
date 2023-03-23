const score = document.getElementById("score");
const mark = document.getElementById("mark");
const result = document.getElementById("result");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");

const errorMsg = document.getElementById("errormsg");
const resultMsg = document.getElementById("result2");
const xA = document.getElementById("xa");
const yA = document.getElementById("ya");
const xB = document.getElementById("xb");
const yB = document.getElementById("yb");

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

function firstCheckA() {
	if (isNaN(parseInt(xA.value))) {
		errorMsg.textContent = "Only numbers!";
		this.value = "";
	}
}
function secondCheckA() {
	if (isNaN(parseInt(yA.value))) {
		errorMsg.textContent = "Only numbers!";
		this.value = "";
	}
}
function firstCheckB() {
	if (isNaN(parseInt(firstNumber.value))) {
		errorMsg.textContent = "Only numbers!";
		this.value = "";
	}
}
function secondCheckB() {
	if (isNaN(parseInt(secondNumber.value))) {
		errorMsg.textContent = "Only numbers!";
		this.value = "";
	}
}

function count() {
	let xaNumber = parseInt(xa.value);
	let yaNumber = parseInt(ya.value);
	let xbNumber = parseInt(xb.value);
	let ybNumber = parseInt(yb.value);
	if (
		!isNaN(xaNumber) &&
		!isNaN(yaNumber) &&
		!isNaN(xbNumber) &&
		!isNaN(ybNumber)
	) {
		let deltaX = xbNumber - xaNumber;
		let deltaY = ybNumber - yaNumber;
		// resultMsg.style.color = "yellow";
		resultMsg.textContent = `Odległość to ${Math.round(
			(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 73) / 1.852
		)} mil morskich`;
	} else {
		errorMsg.textContent = "Please put some numbers in the given fields!";
	}
}
