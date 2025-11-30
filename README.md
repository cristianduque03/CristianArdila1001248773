# Proyecto Final – CI/CD con GitHub Actions

## Descripción
Proyecto de prueba para la materia Aplicaciones y Servicios Web. El pipeline ejecuta `npm test` (que ejecuta `node index.js`) para validar que el código no genere errores.

## Estructura del proyecto
- index.js
- package.json
- /src
  - saludos.js
  - operaciones.js
- .github/workflows/ci.yml

## Commits importantes
- feat(core): commit inicial - estructura básica y validación
- feat(core): mejorar estructura y validación de entrada
- feat(utils): agregar función sumar con validaciones y pruebas rápidas
- refactor(architecture): modularizar código en /src y usar ES Modules
