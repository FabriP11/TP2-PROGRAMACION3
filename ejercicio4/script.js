const boton = document.getElementById("calcular-imc");

boton.addEventListener("click", (evento) => {
    evento.preventDefault();

    const inputAltura = document.getElementById("altura");
    const inputPeso = document.getElementById("peso");

    let estatura = Number(inputAltura.value);
    let peso = Number(inputPeso.value);

    if (estatura <= 0 || peso <= 0 || isNaN(estatura) || isNaN(peso)) {
        alert("Por favor ingrese valores válidos.");
        return;
    }

    let imc = calculoIMC(estatura, peso);
    let categoria = clasificarIMC(imc);

    alert(`Tu IMC es de ${imc.toFixed(1)}\n${categoria}`);

    inputAltura.value = '';
    inputPeso.value = '';
});

function calculoIMC(estatura, peso) {
    return peso / (estatura * estatura);
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Tenes bajo peso";
    } else if (imc < 25) {
        return "Tenes un peso normal";
    } else if (imc < 30) {
        return "Tenes sobrepeso";
    } else if (imc < 35) {
        return "Tenes obesidad grado 1";
    } else if (imc < 40) {
        return "Tenes obesidad grado 2";
    } else {
        return "Tenes obesidad grado 3 o mórbida";
    }
}