export function sumar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: ambos valores deben ser números.";
    }
    return a + b;
}
