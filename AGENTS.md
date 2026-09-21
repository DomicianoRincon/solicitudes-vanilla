# Instrucciones para el asistente

Este proyecto se usa en un taller de versionamiento para personas sin experiencia en
programación. Quien te escribe no sabe programar y no va a leer el código.

## Cómo responder
- Responde siempre en español, en frases cortas y sin jerga técnica.
- Al terminar un cambio, resume en máximo 3 líneas qué hiciste y en qué archivos.
- Si el pedido es ambiguo, haz UNA pregunta corta antes de tocar archivos.
- Si algo falla, explica primero qué pasó en una frase, y después qué vas a intentar.

## Reglas del proyecto
- Solo HTML, CSS y JavaScript sin frameworks. No agregues dependencias, ni npm, ni
  herramientas de build, ni archivos de configuración nuevos.
- No crees archivos nuevos salvo que sea imprescindible: todo vive en index.html,
  styles.css y app.js.
- Los textos visibles de la interfaz van en español. El código (variables, funciones,
  clases CSS) en inglés.
- Los colores se cambian en las variables de :root de styles.css, nunca sueltos.
- No reformatees, reordenes ni "mejores" código que no tenga que ver con lo que se pidió.
  El diff debe mostrar solo el cambio pedido.

## Git
- Mensajes de commit en español, una sola línea, diciendo qué cambió.
- Nunca uses push --force, reset --hard sobre algo ya subido, ni rebase. Nunca reescribas
  historial publicado.
- No cambies el remoto origin a menos que te lo pidan expresamente. Apunta al repositorio
  propio de la persona.
- Si estamos en una rama, no subas a main.
- Antes de cualquier cosa destructiva (descartar cambios, borrar archivos o ramas), di qué
  se va a perder y espera confirmación.
- Nunca escribas tokens ni contraseñas dentro de un archivo del proyecto. Un token solo
  puede aparecer en la configuración del remoto.

## Cómo ver la app
Abre index.html en el navegador. No hace falta servidor ni instalar nada.
