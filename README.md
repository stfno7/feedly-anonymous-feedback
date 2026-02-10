# Feed.ly — Anonymous Feedback App
Feed.ly es una aplicación web que permite a cualquier usuario enviar feedback de forma anónima (sin registro), y a un administrador visualizar y gestionar los mensajes desde un panel protegido.
---
# ¿Cómo funciona?
**Feedback público:** El user puede enviar mensajes en el textarea de index.html, sin autenticarse.
**Panel administrador:** Acceso protegido mediante login.
**Credenciales de demo incluidas en login.html**
---
# Tecnologías
-- Frontend
* HTML5
* Tailwind CSS
* JavaScript (ES Modules)

-- Backend & Database

* Firebase Authentication
* Firebase Firestore
---
# USO
# Usuario https://anonymous-feedback-af7e8.web.app/
* Envío de feedback anónimo
* Validar formulario
  * Campos requeridos
  * Límite de caracteres textarea
  * Contador dinámico (10 min, 500 max)
# Para acceder al panel administrador y consultar el feedback: https://anonymous-feedback-af7e8.web.app/login.html
* Login protegido con Firebase Auth
* Visualización de feedback ordenado por fecha
* Eliminar feedback
* Logout sesión
---
## Estructura del proyecto
── index.html        # Formulario público
── login.html        # Login administrador
── admin.html        # Panel admin
── script.js         # Lógica feedback público
── login.js          # Autenticación admin
── admin.js          # Gestión de feedback
── README.md
---
## Seguridad
* Acceso al panel admin protegido con Firebase Authentication
* Reglas de Firestore configuradas para restringir acciones
