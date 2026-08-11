# Users Lists

## Intent
Permitir agregar y eliminar nombres de usuario desde una lista simple en la UI.

## In scope
- Título visible para la tarea.
- Control con etiqueta y campo de texto para agregar un nuevo usuario.
- Lista de usuarios mostrada en pantalla.
- Botón para eliminar cada usuario.

## Out of scope
- Persistencia en servidor o almacenamiento local.
- Validación avanzada de nombres.

## Requirements
- El usuario puede escribir un nombre en el input.
- Al presionar el botón Agregar o Enter se agrega el usuario a la lista.
- Cada elemento de la lista muestra el nombre y un botón Eliminar.
- El campo no acepta valores vacíos.

## Acceptance criteria
- [ ] Al abrir la página se muestra el título "Users Lists".
- [ ] Existe un label "Nuevo usuario" junto al input.
- [ ] El usuario puede agregar nombres y verlos listados.
- [ ] Cada nombre tiene un botón para eliminarlo.
