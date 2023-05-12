const elmResult = document.querySelector(".result");
const elmLength = document.getElementById("inputLength");
const elmUpper = document.getElementById("inputUppercase");
const elmLower = document.getElementById("inputLowercase");
const elmNumber = document.getElementById("inputNumbers");
const elmSymbols = document.getElementById("inputSymbols");
const btnGenerate = document.getElementById("btnGenerate");
const elmClipboard = document.getElementById("clipboard");

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

console.log(randomFunc);

// console.log(`generatePassword: ${generatedPassword}`);

elmClipboard.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	alert("copied!");
});

btnGenerate.addEventListener("click", () => {
	console.log("Botão Ativo");

	const length = elmLength.value;
	const hasLower = elmLower.checked;
	const hasUpper = elmUpper.checked;
	const hasNumber = elmNumber.checked;
	const hasSymbol = elmSymbols.checked;

	console.log(hasUpper, hasLower, hasNumber, hasSymbol);

	elmResult.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
	// console.log(`generatePassword: ${generatedPassword}`);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = "";

	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0]
	);

	if (typesCount === 0) {
		return "";
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = "!@#$%^&*()_+-={}[]:\";'<>?,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
