// TOGGLE SIMPLE - MÍNIMO CÓDIGO POSIBLE
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Aplicar tema guardado
const saved = localStorage.getItem('theme');
if (saved === 'light') {
    body.classList.add('light-theme');
}

// Click en toggle
toggle.onclick = function() {
    body.classList.toggle('light-theme');
    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
};

// DATOS DEL ACORDEÓN
const cursos = [
    {
        nombre: "Primer Curso",
        semestres: [
            {
                nombre: "Primer Semestre",
                asignaturas: ["Cálculo", "Fundamentos Físicos y Tecnológicos", "Fundamentos de Programación", "Fundamentos del Software", "Álgebra Lineal y Estructuras Matemáticas"]
            },
            {
                nombre: "Segundo Semestre", 
                asignaturas: ["Estadística", "Ingeniería, Empresa y Sociedad", "Lógica y Métodos Discretos", "Metodología de la Programación", "Tecnología y Organización de Computadores"]
            }
        ]
    },
    {
        nombre: "Segundo Curso",
        semestres: [
            {
                nombre: "Primer Semestre",
                asignaturas: ["Estructura de Computadores", "Estructura de Datos", "Programación y Diseño Orientado a Objetos", "Sistemas Concurrentes y Distribuidos", "Sistemas Operativos"]
            },
            {
                nombre: "Segundo Semestre",
                asignaturas: ["Algorítmica", "Arquitectura de Computadores", "Fundamentos de Bases de Datos", "Fundamentos de Ingeniería del Software", "Inteligencia Artificial"]
            }
        ]
    },
    {
        nombre: "Tercer Curso",
        semestres: [
            {
                nombre: "Primer Semestre",
                asignaturas: ["Diseño y Análisis de Algoritmos", "Sistemas de Información", "Redes de Computadores", "Programación de Sistemas", "Seguridad en Sistemas Informáticos"]
            },
            {
                nombre: "Segundo Semestre",
                asignaturas: ["Interfaces de Usuario", "Gestión de Proyectos Informáticos", "Sistemas Web", "Computación Paralela", "Minería de Datos"]
            }
        ]
    },
    {
        nombre: "Cuarto Curso",
        semestres: [
            {
                nombre: "Primer Semestre",
                asignaturas: ["Arquitecturas Software", "Métodos Formales", "Verificación y Validación", "Sistemas Distribuidos Avanzados", "Computación en la Nube", "Tolerancia a Fallos"]
            }
        ]
    }
];

// GENERAR ACORDEÓN
function generarAcordeon() {
    const container = document.getElementById('accordion-container');
    let html = '';
    
    cursos.forEach(curso => {
        html += `<details>
            <summary>${curso.nombre}</summary>`;
        
        curso.semestres.forEach(semestre => {
            html += `<details>
                <summary>${semestre.nombre}</summary>`;
            
            semestre.asignaturas.forEach(asignatura => {
                html += `<div class="subject-item" onclick="mostrarAsignatura('${asignatura}')">
                    <span class="subject-name">${asignatura}</span>
                </div>`;
            });
            
            html += '</details>';
        });
        
        html += '</details>';
    });
    
    container.innerHTML = html;
}

// MOSTRAR ASIGNATURA EN PANEL DERECHO
function mostrarAsignatura(nombre) {
    const panel = document.getElementById('resources-panel');
    panel.innerHTML = `
        <div class="subject-resources">
            <div class="subject-header">
                <h2 class="subject-title">${nombre}</h2>
                <button class="close-btn" onclick="cerrarAsignatura()">×</button>
            </div>
            <p style="color: #9ca3af; margin-bottom: 2rem;">Selecciona el tipo de recurso:</p>
            
            <div class="resource-type-grid">
                <div class="resource-type-btn" onclick="mostrarRecursos('${nombre}', 'Apuntes')">
                    <span class="resource-type-icon">📚</span>
                    <span>Apuntes</span>
                </div>
                <div class="resource-type-btn" onclick="mostrarRecursos('${nombre}', 'Ejercicios')">
                    <span class="resource-type-icon">✏️</span>
                    <span>Ejercicios</span>
                </div>
                <div class="resource-type-btn" onclick="mostrarRecursos('${nombre}', 'Exámenes')">
                    <span class="resource-type-icon">📝</span>
                    <span>Exámenes</span>
                </div>
            </div>
            
            <div id="resource-options"></div>
        </div>
    `;
}

// MOSTRAR RECURSOS ESPECÍFICOS
function mostrarRecursos(asignatura, tipo) {
    // Quitar active de todos
    document.querySelectorAll('.resource-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Añadir active al clickeado
    event.target.closest('.resource-type-btn').classList.add('active');
    
    const opciones = document.getElementById('resource-options');
    const iconos = {'Apuntes': '📚', 'Ejercicios': '✏️', 'Exámenes': '📝'};
    
    opciones.innerHTML = `
        <h3 style="color: #38bdf8; margin-bottom: 1rem;">
            ${iconos[tipo]} ${tipo} - ${asignatura}
        </h3>
        <div class="resource-list">
            <div class="resource-option">
                <h4>${tipo} Principal</h4>
                <p>Recurso principal de ${tipo.toLowerCase()} para ${asignatura}.</p>
                <a href="#" class="resource-link">Próximamente disponible</a>
            </div>
            <div class="resource-option">
                <h4>${tipo} Complementario</h4>
                <p>Material adicional de ${tipo.toLowerCase()} para complementar el estudio.</p>
                <a href="#" class="resource-link">Próximamente disponible</a>
            </div>
        </div>
    `;
}

// CERRAR ASIGNATURA
function cerrarAsignatura() {
    const panel = document.getElementById('resources-panel');
    panel.innerHTML = `
        <div class="panel-placeholder">
            <div class="disclaimer-box">
                <h4>📋 Disclaimer</h4>
                <p>Todos los contenidos de aquí son apuntes y recursos públicos usados y desarrollados por alumnos del grado de informática de la UGR. Por ello, si existe la problemática entre un profesor y nuestros recursos, nos vemos totalmente abiertos a retirar los apuntes de inmediato, siempre que esos apuntes tengan claramente autoría en dicho profesor.</p>
            </div>
            
            <div class="selection-message">
                <h3>Selecciona una asignatura</h3>
                <p>Elige una asignatura del menú de la izquierda para ver los recursos de informática disponibles.</p>
            </div>
        </div>
    `;
}

// INICIALIZAR CUANDO CARGUE LA PÁGINA
window.onload = function() {
    generarAcordeon();
};
