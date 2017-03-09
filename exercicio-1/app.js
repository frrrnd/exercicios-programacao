var a, b, c;


function verificar() {

	a = document.getElementById('valor-a').value;
	b = document.getElementById('valor-b').value;
	c = document.getElementById('valor-c').value;
	
	var resultado1 = a / c;
	var resultado2 = b / c;

	// Resultado 1
	if (Number.isInteger(resultado1)) {
		console.log("O A é divisivel por C")
	} else {
		console.log("O A não é divisivel por C")
	}

	// Resultado 2
	if (Number.isInteger(resultado2)) {
		console.log("O B é divisivel por C")
	} else {
		console.log("O B não é divisivel por C")
	}

	if(Number.isInteger(resultado1) && Number.isInteger(resultado2)) {
		console.log("o C é divisivel")
		document.getElementById("resposta").innerHTML = "O Valor C é divisor"
	} else {
		document.getElementById("resposta").innerHTML = "O Valor C não é divisor"
	}



	// Resultado Geral
	// if (resultado / c == parseInt(resultado) && resultado2 / c == parseInt(resultado2)) {
	// 	console.log("resposta 3")
	// }
}

document.getElementById("verificar").addEventListener("click", verificar);

// verificar se o valor é inteiro
// verificar se o a / c
// verificar se o b / c