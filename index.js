    function saludar(nombre) {
    if (!nombre || typeof nombre !== "string") {
        return "Error: el nombre debe ser un texto válido.";
    }
    return `Hola ${nombre}, el CI/CD está funcionando correctamente.`;
}

function mostrarSaludo() {
    const resultado = saludar("Cristian - Commit inicial");
    console.log(resultado);
}

mostrarSaludo();
