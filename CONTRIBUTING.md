# 🤝 Guías de Contribución para Unidepot

¡Gracias por considerar contribuir a **Unidepot**! 🎉

Tu ayuda es muy valiosa para hacer de Unidepot la mejor plataforma de apuntes universitarios para los estudiantes de la Universidad de Granada. Sigue estas guías para que tu contribución sea lo más fluida y efectiva posible.

---

## 💡 ¿Cómo Puedes Contribuir?

Hay muchas formas de contribuir a Unidepot, sin importar tu nivel de experiencia:

* **Reportando Bugs:** Si encuentras un error o algo no funciona como debería, por favor, ¡háznoslo saber!
* **Sugiriendo Mejoras:** ¿Tienes ideas para nuevas funcionalidades, mejoras en la interfaz o cualquier otra cosa que pueda hacer Unidepot mejor?
* **Escribiendo Código:** Ayúdanos a implementar nuevas características, corregir errores existentes o mejorar el rendimiento.
* **Mejorando la Documentación:** Una buena documentación es clave. Ayúdanos a mantener este `CONTRIBUTING.md`, el `README.md` y cualquier otra documentación clara y actualizada.
* **Compartiendo Contenido:** Si eres estudiante de la UGR, tu contribución más directa puede ser subir tus propios apuntes y materiales de estudio.

---

## 🐛 Reportar un Bug

Si encuentras un bug, por favor, sigue estos pasos:

1.  **Busca Issues Existentes:** Antes de abrir un nuevo *issue*, revisa si ya existe uno similar. Tal vez alguien más ya lo reportó o incluso ya se está trabajando en una solución.
2.  **Abre un Nuevo Issue:** Si no encuentras un *issue* existente, abre uno nuevo [aquí](https://github.com/tu-usuario/Unidepot/issues/new).
3.  **Proporciona Detalles Claros:**
    * **Título Descriptivo:** Un título corto y claro que resuma el problema (ej: "Error al subir archivos PDF").
    * **Pasos para Reproducir:** Describe los pasos exactos para que podamos reproducir el bug.
    * **Comportamiento Esperado:** Describe lo que esperabas que ocurriera.
    * **Comportamiento Actual:** Describe lo que realmente ocurrió.
    * **Capturas de Pantalla (Opcional):** Adjunta imágenes o GIFs si ayudan a ilustrar el problema.
    * **Información del Entorno:** Incluye tu navegador, sistema operativo y cualquier otra información relevante.

---

## ✨ Sugerir una Mejora

¿Tienes una idea genial para Unidepot? Nos encantaría escucharla:

1.  **Busca Issues Existentes:** Al igual que con los bugs, revisa si la sugerencia ya ha sido propuesta.
2.  **Abre un Nuevo Issue:** Si es una idea nueva, abre un *issue* en la sección de [issues](https://github.com/tu-usuario/Unidepot/issues/new).
3.  **Describe tu Sugerencia:**
    * **Título Descriptivo:** Un título claro que resuma la mejora.
    * **Descripción Detallada:** Explica tu idea en detalle. ¿Por qué es útil? ¿Qué problema resuelve?
    * **Casos de Uso:** Si es posible, proporciona ejemplos de cómo se usaría la nueva característica.

---

## 💻 Contribuir con Código (Pull Requests)

¡Bienvenido al equipo de desarrollo! Si quieres escribir código, por favor, sigue el siguiente flujo de trabajo:

1.  **Haz un Fork del Repositorio:** Primero, haz un "fork" de nuestro repositorio a tu cuenta de GitHub.
2.  **Clona tu Fork:** Clona tu repositorio bifurcado a tu máquina local.
    ```bash
    git clone [https://github.com/tu-usuario/Unidepot.git](https://github.com/tu-usuario/Unidepot.git)
    cd Unidepot
    ```
    *(Asegúrate de reemplazar `tu-usuario` con tu nombre de usuario de GitHub).*
3.  **Crea una Nueva Rama:** Crea una rama específica para tu contribución. Usa un nombre descriptivo para la rama (ej: `feature/añadir-busqueda-avanzada` o `fix/bug-login`).
    ```bash
    git checkout -b nombre-de-tu-rama
    ```
4.  **Realiza Tus Cambios:** Escribe tu código, corrige el bug o implementa la nueva característica.
    * Asegúrate de seguir las **guías de estilo de código** del proyecto (si las hay, añádelas aquí o crea un `CODE_OF_CONDUCT.md`).
    * Escribe **tests** para tus cambios siempre que sea posible.
5.  **Haz Commit de Tus Cambios:**
    * Escribe mensajes de *commit* claros y concisos.
    * Utiliza el presente y el imperativo (ej: "feat: Añadir funcionalidad X", "fix: Corregir bug Y").
    ```bash
    git add .
    git commit -m "feat: Describe tu nueva característica o arreglo"
    ```
6.  **Sincroniza con el Repositorio Original (Opcional pero Recomendado):** Antes de enviar tu Pull Request, asegúrate de que tu rama esté actualizada con los últimos cambios del repositorio principal.
    ```bash
    git fetch upstream
    git rebase upstream/main # o upstream/master, según la rama principal
    ```
7.  **Sube tus Cambios a GitHub:**
    ```bash
    git push origin nombre-de-tu-rama
    ```
8.  **Abre un Pull Request (PR):**
    * Ve a la página de tu repositorio *forkeado* en GitHub.
    * Verás un botón para "Compare & pull request" o "New pull request".
    * Asegúrate de que la rama base sea `main` (o `master`) de `Unidepot` y la rama de comparación sea tu rama.
    * **Describe tu PR:** Proporciona un título claro y una descripción detallada de los cambios. Explica por qué son necesarios y qué problema resuelven.
    * **Referencia Issues:** Si tu PR cierra un *issue*, añade `Closes #XYZ` en la descripción (donde `XYZ` es el número del *issue*).
9.  **Revisión del Código:** El equipo de Unidepot revisará tu PR. Es posible que te pidan hacer algunos cambios. ¡No te desanimes, es parte del proceso colaborativo!

---

## ⚖️ Código de Conducta

Para asegurar un ambiente acogedor y abierto, todos los participantes en el proyecto Unidepot se comprometen a seguir nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Por favor, léelo.

---

¡Gracias de nuevo por tu interés en Unidepot! ¡Esperamos tus contribuciones!
