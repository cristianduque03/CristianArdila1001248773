function saludar(nombre) {
    if (!nombre || typeof nombre !== "string") {
        return "Error: el nombre debe ser un texto válido.";
    }
    return `Hola ${nombre}, el CI/CD está funcionando correctamente.`;
}

function mostrarSaludo(nombre) {
    const resultado = saludar(nombre);
    console.log(resultado);
    return resultado;
}

function sumar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: ambos valores deben ser números.";
    }
    return a + b;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { saludar, mostrarSaludo, sumar };
}

if (require.main === module) {
    mostrarSaludo("Cristian - Commit 2");
    console.log("Suma 10 + 20 =", sumar(10, 20));
    console.log("Prueba suma inválida:", sumar("x", 5));
}
