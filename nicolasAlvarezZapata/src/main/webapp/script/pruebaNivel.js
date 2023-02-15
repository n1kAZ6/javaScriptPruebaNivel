//Alumno: Nicolá Álvarez Zapata
function calculaLetraDni(){
	let dni=30242873;
	
	if(dni<0 || dni>99999999){
		alert("** Error el DNI introducido es incorrecto **");
	}
	else{
		alert("DNI introducido es correcto");
		var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
		let posicion=dni%23;
		
		let letraDni=letras[posicion];
		console.log(dni);
		console.log(letraDni);
		document.write(dni+"-"+letraDni);
	}
}
function calculaLetraDniMal(){
	let dni=302428739;
	
	if(dni<0 || dni>99999999){
		alert("** Error el DNI introducido es incorrecto **");
	}
	else{
		alert("DNI introducido es correcto");
		var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
		let posicion=dni%23;
		
		let letraDni=letras[posicion];
		console.log(dni);
		console.log(letraDni);
		document.write(dni+"-"+letraDni);
	}
}