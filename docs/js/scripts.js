const universityData = [
    {
        courseName: "Primer Curso",
        semesters: [
            {
                semesterName: "Primer Semestre",
                subjects: [
                    { name: "Cálculo", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Fundamentos Físicos y Tecnológicos", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Fundamentos de Programación", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Fundamentos del Software", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Álgebra Lineal y Estructuras Matemáticas", resources: { apuntes: "https://github.com/unidepot/unidepot.github.io/blob/b3578ee19a1c5896b9662c25e9474eb8ebd016a4/Inform%C3%A1tica/Primero/1%C2%BACuatrimestre/ALEM/Apuntes.pdf?raw=true", ejercicios: "#", examenes: "#" }}
                ]
            },
            {
                semesterName: "Segundo Semestre",
                subjects: [
                    { name: "Estadística", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Ingeniería, Empresa y Sociedad", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Lógica y Métodos Discretos", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Metodología de la Programación", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Tecnología y Organización de Computadores", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }}
                ]
            }
        ]
    },
    {
        courseName: "Segundo Curso",
        semesters: [
            {
                semesterName: "Primer Semestre",
                subjects: [
                    { name: "Estructura de Computadores", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Estructura de Datos", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Programación y Diseño Orientado a Objetos", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Sistemas Concurrentes y Distribuidos", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Sistemas Operativos", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }}
                ]
            },
            {
                semesterName: "Segundo Semestre",
                subjects: [
                    { name: "Algorítmica", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Arquitectura de Computadores", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Fundamentos de Bases de Datos", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Fundamentos de Ingeniería del Software", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Inteligencia Artificial", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }}
                ]
            }
        ]
    },
    {
        courseName: "Tercer Curso",
        groups: [ 
            {
                groupName: "Primer Semestre (Obligatorias Comunes)",
                type: "semester", 
                subjects: [
                    { name: "Diseño y Desarrollo de Sistemas de Información", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Fundamentos de Redes", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Informática Gráfica", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Ingeniería de Servidores", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }},
                    { name: "Modelos de Computación", resources: { apuntes: "#", ejercicios: "#", examenes: "#" }}
                ]
            },
            {
                groupName: "Segundo Semestre (Especialidades)",
                type: "specialization_container", 
                specializations: [
                    { name: "Esp. Sistemas de Información", subjects: [{ name: "Administración de Bases de Datos", resources:{a:"#",e:"#",x:"#"}}, { name: "Ingeniería de Sistemas de Información", resources:{a:"#",e:"#",x:"#"}}, { name: "Programación Web", resources:{a:"#",e:"#",x:"#"}}, { name: "Sistemas Multidimensionales", resources:{a:"#",e:"#",x:"#"}}, { name: "Sistemas de Información para Empresas", resources:{a:"#",e:"#",x:"#"}} ] },
                    { name: "Esp. Computación y Sist. Inteligentes", subjects: [{ name: "Aprendizaje Automático", resources:{a:"#",e:"#",x:"#"}}, { name: "Ingeniería del Conocimiento", resources:{a:"#",e:"#",x:"#"}}, { name: "Metaheurísticas", resources:{a:"#",e:"#",x:"#"}}, { name: "Modelos Avanzados de Computación", resources:{a:"#",e:"#",x:"#"}}, { name: "Técnicas de los Sistemas Inteligentes", resources:{a:"#",e:"#",x:"#"}} ] },
                    { name: "Esp. Ingeniería de Computadores", subjects: [{ name: "Arquitectura de Sistemas", resources:{a:"#",e:"#",x:"#"}}, { name: "Arquitectura y Computación de Altas Prestaciones", resources:{a:"#",e:"#",x:"#"}}, { name: "Desarrollo de Hardware Digital", resources:{a:"#",e:"#",x:"#"}}, { name: "Diseño de Sistemas Electrónicos", resources:{a:"#",e:"#",x:"#"}}, { name: "Sistemas con Microprocesadores", resources:{a:"#",e:"#",x:"#"}} ] },
                    { name: "Esp. Tecnologías de la Información", subjects: [{ name: "Computación Ubicua e Inteligencia Ambiental", resources:{a:"#",e:"#",x:"#"}}, { name: "Servidores Web de Altas Prestaciones", resources:{a:"#",e:"#",x:"#"}}, { name: "Sistemas Multimedia", resources:{a:"#",e:"#",x:"#"}}, { name: "Tecnologías Web", resources:{a:"#",e:"#",x:"#"}}, { name: "Transmisión de Datos y Redes de Computadores", resources:{a:"#",e:"#",x:"#"}} ] },
                    { name: "Esp. Ingeniería del Software", subjects: [{ name: "Desarrollo de Sistemas Distribuidos", resources:{a:"#",e:"#",x:"#"}}, { name: "Desarrollo de Software", resources:{a:"#",e:"#",x:"#"}}, { name: "Diseño de Interfaces de Usuario", resources:{a:"#",e:"#",x:"#"}}, { name: "Sistemas Gráficos", resources:{a:"#",e:"#",x:"#"}}, { name: "Sistemas de Información Basados en Web", resources:{a:"#",e:"#",x:"#"}} ] }
                ]
            }
        ]
    },
    {
        courseName: "Cuarto Curso",
        groups: [
            {
                groupName: "Primer Semestre (Especialidades)",
                type: "specialization_container",
                specializations: [
                    { name: "Esp. Sistemas de Información", subjects: [{ name: "Bases de Datos Distribuidas", resources:{a:"#",e:"#",x:"#"}}, { name: "Inteligencia de Negocio", resources:{a:"#",e:"#",x:"#"}}, { name: "Recuperación de Información", resources:{a:"#",e:"#",x:"#"}}] },
                    { name: "Esp. Ingeniería de Computadores", subjects: [{ name: "Centros de Procesamiento de Datos", resources:{a:"#",e:"#",x:"#"}}, { name: "Sistemas Empotrados", resources:{a:"#",e:"#",x:"#"}}, { name: "Tecnologías de Red", resources:{a:"#",e:"#",x:"#"}}] },
                    { name: "Esp. Ingeniería del Software", subjects: [{ name: "Desarrollo Basado en Agentes", resources:{a:"#",e:"#",x:"#"}}, { name: "Dirección y Gestión de Proyectos", resources:{a:"#",e:"#",x:"#"}}, { name: "Metodologías de Desarrollo Ágil", resources:{a:"#",e:"#",x:"#"}}] },
                    { name: "Esp. Tecnologías de la Información", subjects: [{ name: "Desarrollo de Aplicaciones para Internet", resources:{a:"#",e:"#",x:"#"}}, { name: "Infraestructura Virtual", resources:{a:"#",e:"#",x:"#"}}, { name: "Seguridad y Protección de Sistemas Informáticos", resources:{a:"#",e:"#",x:"#"}}] },
                    { name: "Esp. Computación y Sistemas Inteligentes", subjects: [{ name: "Nuevos Paradigmas de Interacción", resources:{a:"#",e:"#",x:"#"}}, { name: "Procesadores de Lenguajes", resources:{a:"#",e:"#",x:"#"}}, { name: "Programación Técnica y Científica", resources:{a:"#",e:"#",x:"#"}}, { name: "Simulación de Sistemas", resources:{a:"#",e:"#",x:"#"}}, { name: "Teoría de la Información y la Codificación", resources:{a:"#",e:"#",x:"#"}}, { name: "Visión por Computador", resources:{a:"#",e:"#",x:"#"}}] }
                ]
            },
            {
                groupName: "Segundo Semestre",
                type: "specialization_container", 
                specializations: [ 
                    { name: "TFG y Prácticas", subjects: [{ name: "Proyecto Fin de Grado", resources:{a:"#",e:"#",x:"#"}}, { name: "Prácticas de Empresa", resources:{a:"#",e:"#",x:"#"}}] },
                    { name: "Optativas Generales", subjects: [{ name: "Creación de Empresas y Gestión Emprendedora", resources:{a:"#",e:"#",x:"#"}}, { name: "Derecho Informático", resources:{a:"#",e:"#",x:"#"}}, { name: "Ética Informática y Sociedad de la Información", resources:{a:"#",e:"#",x:"#"}}] },
                    { name: "Optativas (Esp. Computación y Sist. Inteligentes)", subjects: [{ name: "Criptografía y Computación", resources:{a:"#",e:"#",x:"#"}}, { name: "Programación Lúdica", resources:{a:"#",e:"#",x:"#"}}, { name: "Robótica Industrial", resources:{a:"#",e:"#",x:"#"}}] }
                ]
            }
        ]
    }
];

const container = document.getElementById('accordion-container');

container.innerHTML = universityData.map(curso => {
  const cursoNombre = curso.courseName || curso.nombre;
  const bloques = curso.semesters || curso.groups;

  return `
    <details>
      <summary>${cursoNombre}</summary>
      ${bloques.map(bloque => {
        const bloqueNombre = bloque.semesterName || bloque.groupName || bloque.nombre;
        if (bloque.subjects) {
          return `
            <details>
              <summary>${bloqueNombre}</summary>
              ${bloque.subjects.map(asig => `
                <details>
                  <summary>${asig.name}</summary>
                  <p>
                    <a href="${asig.resources.apuntes || asig.resources.a}">Apuntes</a> |
                    <a href="${asig.resources.ejercicios || asig.resources.e}">Ejercicios</a> |
                    <a href="${asig.resources.examenes || asig.resources.x}">Exámenes</a>
                  </p>
                </details>
              `).join('')}
            </details>
          `;
        }
        if (bloque.specializations || bloque.specializations) {
          const especialidades = bloque.specializations || bloque.specializations;
          return `
            <details>
              <summary>${bloqueNombre}</summary>
              ${especialidades.map(esp => `
                <details>
                  <summary>${esp.name}</summary>
                  ${esp.subjects.map(asig => `
                    <details>
                      <summary>${asig.name}</summary>
                      <p>
                        <a href="${asig.resources.apuntes || asig.resources.a}">Apuntes</a> |
                        <a href="${asig.resources.ejercicios || asig.resources.e}">Ejercicios</a> |
                        <a href="${asig.resources.examenes || asig.resources.x}">Exámenes</a>
                      </p>
                    </details>
                  `).join('')}
                </details>
              `).join('')}
            </details>
          `;
        }
        return '';
      }).join('')}
    </details>
  `;
}).join('');