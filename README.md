# Prueba-Codex

Esta es una prueba de repositorio para usar con Codex. Incluye un ejemplo sencillo de aplicación web que cuenta el número de veces que se pulsa un botón.

## Cómo probar

Abre el archivo `touch_counter.html` en un navegador web. Cada vez que presiones el botón "Toca aquí", el contador se incrementará.

## Calculadora

Se añadió una pequeña aplicación de calculadora accesible en `calculator.html`. Para utilizar la calculadora y almacenar un historial de operaciones se necesita ejecutar el servidor incluido.

### Ejecutar servidor

```bash
npm install
npm start
```

El servidor se inicia en `http://localhost:3000` y sirve la página de la calculadora. Las operaciones realizadas se guardan en una base de datos SQLite llamada `history.db` y pueden consultarse en la misma interfaz.

# TO-DO
- [x] Crear UI de la calculadora
- [x] Hacer una calculadora que permita sumar y restar numeros
- [x] Hacer que la calculadora permita multiplicar y dividir
- [x] Hacer que la calculadora permita borrar numeros
- [x] Hacer guardar los resultados en un historico en un SQL-Lite
- [x] Generame cuando se termine la documentacion en el repositorio
