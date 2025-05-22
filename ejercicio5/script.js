const boton = document.getElementById("calcular-area");

boton.addEventListener("click", (evento) => {
    evento.preventDefault();
    const ladoA = Number(document.getElementById("ladoA").value);
    const ladoB = Number(document.getElementById("ladoB").value);
    const ladoC = Number(document.getElementById("ladoC").value);

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        alert("Por favor ingresar valores que sean válidos");
        return;
    }
    if (ladoA < ladoC) {
        alert("El lado A no puede ser menor que el lado C");
        return;
    }
    
    const area = calcularArea(ladoA, ladoB, ladoC);
    alert(`El área total es ${area}.`);
    document.getElementById("ladoA").value = '';
    document.getElementById("ladoB").value = '';
    document.getElementById("ladoC").value = '';
});

function calcularArea(a, b, c) {
    const alturaTriangulo = a - c; const baseTriangulo = b;
    const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
    const areaRectangulo = b * c;

    return areaTriangulo + areaRectangulo;
}
