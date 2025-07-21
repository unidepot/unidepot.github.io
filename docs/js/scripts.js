// JavaScript for UNIDEPOT site functionalities

// --- ESTRUCTURA DE DATOS DE LA UNIVERSIDAD ---
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

// --- FUNCIONES PARA GENERAR HTML DINÁMICAMENTE ---
function createSubjectAccordion(subjectData) {
    const li = document.createElement('li');
    li.className = 'subject-accordion-item border-t border-slate-200 first:border-t-0'; 

    const button = document.createElement('button');
    button.className = 'subject-name-toggle flex justify-between items-center w-full py-1.5 px-1.5 text-left font-medium text-sm text-sky-700 hover:bg-sky-50 transition-colors duration-150 focus:outline-none'; 
    button.innerHTML = `<span>${subjectData.name}</span><span class="sub-arrow transform transition-transform duration-300 text-sky-600 text-xs">▼</span>`; 

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'subject-options-list ml-2 pl-1.5 pr-1 border-l border-slate-200'; 
    const optionsUl = document.createElement('ul');
    optionsUl.className = 'space-y-px py-1'; 
    
    const resources = subjectData.resources || {};
    const resourceLinks = [
        { label: 'Apuntes', url: resources.apuntes || resources.a || '#' },
        { label: 'Ejercicios', url: resources.ejercicios || resources.e || '#' },
        { label: 'Exámenes', url: resources.examenes || resources.x || '#' }
    ];

    resourceLinks.forEach(linkInfo => {
        const optionLi = document.createElement('li');
        const optionLink = document.createElement('a');
        optionLink.href = linkInfo.url;
        optionLink.target = "_blank"; 
        optionLink.rel = "noopener noreferrer"; 
        optionLink.className = 'block py-0.5 px-1.5 rounded-md text-slate-500 hover:text-sky-700 hover:bg-sky-100 transition-all duration-150 text-xs'; 
        optionLink.textContent = linkInfo.label;
        optionLi.appendChild(optionLink);
        optionsUl.appendChild(optionLi);
    });
    optionsDiv.appendChild(optionsUl);

    li.appendChild(button);
    li.appendChild(optionsDiv);
    return li;
}

function createSubjectsList(subjectsArray) {
    const ul = document.createElement('ul');
    ul.className = 'space-y-0 pt-0.5 pb-0.5'; 
    subjectsArray.forEach(subjectData => { 
        ul.appendChild(createSubjectAccordion(subjectData));
    });
    return ul;
}

function createSubAccordionItem(title, actualContentElement, isSpecializationGroupTitle = false, isContainerOfMoreAccordions = false) {
    const itemDiv = document.createElement('div'); 
    itemDiv.className = `sub-accordion-item border-t border-slate-200 ${isSpecializationGroupTitle ? 'pt-0.5' : ''}`; 

    const button = document.createElement('button');
    const titlePadding = isSpecializationGroupTitle ? 'py-1.5 px-1.5' : 'py-2 px-1.5'; 
    const titleFontSize = isSpecializationGroupTitle ? 'text-xs font-medium' : 'text-sm font-semibold'; 
    const titleTextColor = isSpecializationGroupTitle ? 'text-slate-500' : 'text-slate-600';
    const arrowColor = isSpecializationGroupTitle ? 'text-slate-400' : 'text-slate-500';
    const arrowSize = isSpecializationGroupTitle ? 'text-xs' : 'text-xs'; 

    button.className = `sub-accordion-toggle flex justify-between items-center w-full ${titlePadding} text-left ${titleFontSize} ${titleTextColor} hover:bg-slate-100 transition-colors duration-150 focus:outline-none`;
    button.innerHTML = `<span>${title}</span><span class="sub-arrow transform transition-transform duration-300 ${arrowColor} ${arrowSize}">▼</span>`;
    
    const listContainerDiv = document.createElement('div'); 
    if (isContainerOfMoreAccordions) {
        listContainerDiv.className = 'sub-accordion-group-list';
    } else {
        listContainerDiv.className = 'sub-subject-list px-1' + (isSpecializationGroupTitle ? ' ml-1.5' : ''); 
    }

    listContainerDiv.appendChild(actualContentElement); 

    itemDiv.appendChild(button);
    itemDiv.appendChild(listContainerDiv);
    return itemDiv;
}

// Función principal para construir el contenido de los cursos
function buildCoursesContent() {
    const coursesContainer = document.getElementById('courses-container');
    if (!coursesContainer) return;
    coursesContainer.innerHTML = '';
    
    universityData.forEach(course => {
        const courseItemDiv = document.createElement('div');
        courseItemDiv.className = 'course-item bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'; 

        const courseButton = document.createElement('button');
        courseButton.className = 'course-toggle flex justify-between items-center w-full p-3 text-left font-semibold text-md text-slate-700 hover:bg-slate-50 transition-colors duration-150 focus:outline-none'; 
        courseButton.innerHTML = `<span>${course.courseName}</span><span class="arrow transform transition-transform duration-300 text-slate-500 text-sm">▼</span>`; 

        const courseContentDiv = document.createElement('div');
        courseContentDiv.className = 'course-content-list px-1.5'; 
        
        const subAccordionContainerForCourse = document.createElement('div'); 
        subAccordionContainerForCourse.className = 'space-y-0.5 py-1 sub-accordion-container'; 

        if (course.semesters) { 
            course.semesters.forEach(semester => {
                const subjectsUl = createSubjectsList(semester.subjects); 
                subAccordionContainerForCourse.appendChild(createSubAccordionItem(semester.semesterName, subjectsUl, false, false));
            });
        } else if (course.groups) { 
            course.groups.forEach(group => {
                if (group.type === "semester") { 
                    const subjectsUl = createSubjectsList(group.subjects); 
                    subAccordionContainerForCourse.appendChild(createSubAccordionItem(group.groupName, subjectsUl, false, false));
                } else if (group.type === "specialization_container") {
                    const specializationsButtonContainerDiv = document.createElement('div'); 
                    specializationsButtonContainerDiv.className = 'space-y-0 sub-accordion-container'; 

                    group.specializations.forEach(spec => {
                        const subjectsUlForSpec = createSubjectsList(spec.subjects); 
                        specializationsButtonContainerDiv.appendChild(createSubAccordionItem(spec.name, subjectsUlForSpec, true, false));
                    });
                    subAccordionContainerForCourse.appendChild(createSubAccordionItem(group.groupName, specializationsButtonContainerDiv, false, true));
                }
            });
        }
        courseContentDiv.appendChild(subAccordionContainerForCourse);
        courseItemDiv.appendChild(courseButton);
        courseItemDiv.appendChild(courseContentDiv);
        coursesContainer.appendChild(courseItemDiv);
    });
}

// Script to update current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Accordion toggles for course content
    const mainContentArea = document.querySelector('main');
    mainContentArea.addEventListener('click', function(e) {
        const toggleButton = e.target.closest('.course-toggle, .sub-accordion-toggle, .subject-name-toggle');
        if (toggleButton) {
            const listElement = toggleButton.nextElementSibling;
            const arrowElement = toggleButton.querySelector('.arrow') || toggleButton.querySelector('.sub-arrow');
            const parentElement = toggleButton.parentElement;
            const parentContainer = parentElement.parentElement;
            const isAlreadyOpen = listElement.classList.contains('open');

            // Close sibling accordions
            if (parentContainer) {
                Array.from(parentContainer.children).forEach(siblingItem => {
                    if (siblingItem !== parentElement) {
                        const siblingToggle = siblingItem.querySelector('.course-toggle, .sub-accordion-toggle, .subject-name-toggle');
                        if (siblingToggle) {
                            const siblingList = siblingToggle.nextElementSibling;
                            if (siblingList && siblingList.classList.contains('open')) {
                                siblingList.classList.remove('open');
                                siblingToggle.classList.remove('open-active');
                                const siblingArrow = siblingToggle.querySelector('.arrow') || siblingToggle.querySelector('.sub-arrow');
                                if (siblingArrow) siblingArrow.classList.remove('rotate-180');
                            }
                        }
                    }
                });
            }

            // Toggle current
            if (listElement) listElement.classList.toggle('open', !isAlreadyOpen);
            toggleButton.classList.toggle('open-active', !isAlreadyOpen);
            if (arrowElement) arrowElement.classList.toggle('rotate-180', !isAlreadyOpen);
        }
    });

    // Build dynamic course content
    buildCoursesContent();
});
