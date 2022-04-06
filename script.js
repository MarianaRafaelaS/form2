function pegarDados(){
    document.querySelector(".esconder").style.display = "block";

	let valor = document.getElementById("op1").value;
	let result = valor.includes('Enfermagem','Administração','Informática');

	document.getElementById("texto").innerHTML = valor;

	let check2a = document.getElementById("op2a");
    let check2b = document.getElementById("op2b");
    let check2c = document.getElementById("op2c");
    let check2d = document.getElementById("op2d");

    if (check2a.checked){
        document.getElementById("check2a").innerHTML = ("Sistema Octal");
    } if (check2b.checked){
         document.getElementById("check2b").innerHTML = ("Sistema Binário");
    } if (check2c.checked){
        document.getElementById("check2c").innerHTML = ("Sistema Decimal");
    } if (check2d.checked){
        document.getElementById("check2d").innerHTML = ("Sistema Hexadecimal");
    } 

    if (document.getElementById("op3a").checked) {
    	document.getElementById("q03").innerHTML = ("Álcool Isopropílico");
    } if (document.getElementById("op3b").checked) {
    	document.getElementById("q03").innerHTML = ("Limpa Contato");
    } if(document.getElementById("op3c").checked) {
    	document.getElementById("q03").innerHTML = ("Álcool 70%");
    } if(document.getElementById("op3d").checked) {
    	document.getElementById("q03").innerHTML = ("Água");
    }

	
    if (document.getElementById("op4a").checked) {
        document.getElementById("q04").innerHTML = ("Verdadeiro");
    } else if(document.getElementById("op4b").checked){
        document.getElementById("q04").innerHTML = ("Falso");
    }

}