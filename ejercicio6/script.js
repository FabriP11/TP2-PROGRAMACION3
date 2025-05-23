const boton = document.getElementById("enviar");
const mensaje = document.getElementById("mensaje-validacion");

boton.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = Number(document.getElementById("edad").value);
    const altura = Number(document.getElementById("altura").value);
    const correo = document.getElementById("correo").value.trim();

    let errores = [];

    if (nombre === "") {
        errores.push("El nombre no puede estar vacío");
    }
     if (nombre.length > 50) {
        errores.push("El nombre no puede superar los 50 caracteres.");
    }

    if (apellido === "") {
        errores.push("El apellido no puede estar vacío");
    }
        if (apellido.length > 50) {
        errores.push("El apellido no puede superar los 50 caracteres.");
    }

    if (isNaN(edad) || edad < 0) {
        errores.push("La edad no puede ser negativa.");
    } else if (edad < 18) {
        errores.push("Debe ser mayor de edad.");
    }

    if (isNaN(altura) || altura < 0 || altura > 230) {
        errores.push("La altura debe estar entre 0 y 230 cm.");
    }

    if (correo === "" || !correo.includes("@")) {
        errores.push("El correo no puede estar vacío y debe contener '@'.");
    }

    if (errores.length === 0) {
    mensaje.textContent = "Todos los datos son válidos. ¡El formulario se envió exitosamente!";
    mensaje.classList.remove("invalido");
    mensaje.classList.add("valido");
    } else {
    mensaje.innerHTML = errores.join("<br>");
    mensaje.classList.remove("valido");
    mensaje.classList.add("invalido");
}
});
