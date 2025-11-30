export function saludar(nombre) {
    if (!nombre || typeof nombre !== "string") {
        return "Error: el nombre debe ser un texto válido.";
    }
    return `Hola ${nombre}, este es un mensaje desde el módulo de saludos.`;
}
