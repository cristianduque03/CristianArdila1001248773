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

// Export para futuras pruebas o uso modular (CommonJS por ahora)
if (typeof module !== "undefined" && module.exports) {
    module.exports = { saludar, mostrarSaludo };
}

// Ejecución si se corre directo
if (require.main === module) {
    mostrarSaludo("Cristian - Commit 1");
}
