// variables para almacenar el estado del formulario
let formularioValido = false;
let categoriasSeleccionadas = false;
let reglasAceptadas = false;

// elementos del DOM
const nombreEstudiante = document.getElementById('nombreEstudiante');
const apellidoEstudiante = document.getElementById('apellidoEstudiante');
const año = document.getElementById('año');
const carrera = document.getElementById('carrera');
const emailPersonal = document.getElementById('emailPersonal');
const nombreProyecto = document.getElementById('nombreProyecto');
const docenteACargo = document.getElementById('docenteACargo');
const area = document.getElementById('area');
const aceptoReglas = document.getElementById('aceptoReglas');
const botonRegistrar = document.getElementById('registrarEquipo');
const botonBorrar = document.getElementById('borrarFormulario');
const botonAgregarEstudiante = document.getElementById('agregarEstudiante');
const contenedorEstudiantes = document.getElementById('contenedorEstudiantes');

// elementos de error
const errornombreEstudiante = document.getElementById('errornombreEstudiante');
const errorapellidoEstudiante = document.getElementById('errorapellidoEstudiante');
const erroremailPersonal = document.getElementById('erroremailPersonal');
const errornombreProyecto = document.getElementById('errornombreProyecto');
const errordocenteACargo = document.getElementById('errordocenteACargo');
const errorReglas = document.getElementById('errorReglas');


// evento que se activa cuando la pagina termina de cargar
document.addEventListener('DOMContentLoaded', function() {
    // inicializar validaciones
    verificarFormulario();
    
    // event listeners para validaciones en tiempo real
    nombreEstudiante.addEventListener('input', validarNombreEstudiante);
    apellidoEstudiante.addEventListener('input', validarApellidoEstudiante);
    emailPersonal.addEventListener('input', validarEmailPersonal);
    nombreProyecto.addEventListener('input', validarNombreProyecto);
    docenteACargo.addEventListener('input', validardocenteACargo);
    
  
    
    // event listener para reglas
    aceptoReglas.addEventListener('change', function() {
        reglasAceptadas = this.checked;
        if (!reglasAceptadas) {
            errorReglas.textContent = "Debes aceptar los terminos para participar";
        } else {
            errorReglas.textContent = "";
        }
        verificarFormulario();
    });
    
});

function validarNombreEstudiante() {
    const valor = nombreEstudiante.value.trim();
    
    if (valor === '') {
        errornombreEstudiante.textContent = "El nombre del equipo es obligatorio";
        return false;
    } else if (valor.length > 30) {
        errornombreEstudiante.textContent = "El nombre no puede tener más de 30 caracteres";
        return false;
    } else {
        errornombreEstudiante.textContent = "";
        return true;
    }
}
function validarApellidoEstudiante() {
    const valor = apellidoEstudiante.value.trim();
    
    if (valor === '') {
        errorapellidoEstudiante.textContent = "El apellido  es obligatorio";
        return false;
    } else if (valor.length > 30) {
        errorapellidoEstudiante.textContent = "El apellido no puede tener más de 30 caracteres";
        return false;
    } else {
        errorapellidoEstudiante.textContent = "";
        return true;
    }
}
function validarNombreProyecto() {
    const valor = nombreProyecto.value.trim();
    
    if (valor === '') {
        errornombreProyecto.textContent = "El nombre del proyecto es obligatorio";
        return false;
    } else if (valor.length > 60) {
        errornombreProyecto.textContent = "El nombre del proyecto no puede tener más de 60 caracteres";
        return false;
    } else {
        errornombreProyecto.textContent = "";
        return true;
    }
}
function validardocenteACargo() {
    const valor = docenteACargo.value.trim();
    
    if (valor === '') {
        errordocenteACargo.textContent = "El nombre completo del docente  es obligatorio";
        return false;
    } else if (valor.length > 60) {
        errordocenteACargo.textContent = "El nombre completo del docente no puede tener más de 60 caracteres";
        return false;
    } else {
        errordocenteACargo.textContent = "";
        return true;
    }
}
function validarEmailPersonal() {
    const valor = emailPersonal.value.trim();
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (valor === '') {
        erroremailPersonal.textContent = "El email es obligatorio";
        return false;
    } else if (!patronEmail.test(valor)) {
        erroremailPersonal.textContent = "Ingresa un email válido";
        return false;
    } else {
        // validar dominios aceptados 
        const dominio = valor.split('@')[1];
        if (dominio && (dominio.includes('edu.ar') || dominio.includes('escuela') || dominio.includes('gmail.com'))) {
            erroremailPersonal.textContent = "";
            return true;
        } else {
            erroremailPersonal.textContent = "Por favor usa un email institucional o personal válido";
            return false;
        }
    }
}

function verificarFormulario() {
    const nombreValido = validarNombreEstudiante();
    const ApellidoEstudiante = validarApellidoEstudiante();
    const nombreProyectoValido = validarNombreProyecto();
    const docenteACargoValido = validardocenteACargo();
    const emailPersonalValidas = validarEmailPersonal();
    
    

    // actualizar estado del formulario
    formularioValido = nombreValido && 
    ApellidoEstudiante && 
    nombreProyectoValido && 
    docenteACargoValido && 
    emailPersonalValidas;
                     
  
    // habilitar o deshabilitar botón de registro
    botonRegistrar.disabled = !formularioValido;
}


// funcion para sanitizar texto 
function sanitizarTexto(texto) {
    if (!texto) return "";
    return texto.trim()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}