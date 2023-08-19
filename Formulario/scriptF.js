// Selecciona los elementos HTML con los IDs correspondientes para obtener los valores de los campos de entrada y otros elementos.
const archivo = document.getElementById("img");
const nombre = document.getElementById("name");
const numero = document.getElementById("number");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const boton = document.getElementById("button");
const titulo_form = document.getElementById("title-form");
const titulo_web = document.getElementById("title-web");
const acceso = document.getElementById("access");

// Selecciona los elementos de etiqueta "label" para futura referencia.
const label1 = document.getElementById("nombre");
const label2 = document.getElementById("telefono");
const label3 = document.getElementById("correo");
const label4 = document.getElementById("contrasena");

// Agrega un evento de escucha al formulario para la validación cuando se envía.
form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";

    // Condiciones para validar los datos ingresados.
    if (nombre.value.length < 6) {
        warnings += `El nombre es muy corto, ingrese otro <br>`;
        entrar = true;
    }

    if (numero.value.length != 10) {
        warnings += `El número no es válido <br>`;
        entrar = true;
    }

    if (!regexEmail.test(email.value)) {
        warnings += 'El Email no es válido, ingrese otro <br>';
        entrar = true;
    }

    if (pass.value.length < 8) {
        warnings += `La contraseña no es segura <br>`;
        entrar = true;
    }

    // Si hay problemas de validación, muestra los mensajes de advertencia.
    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        // Si los datos son válidos, realiza las siguientes acciones:
        // Establece los atributos "readonly" y "hidden" en los campos y elementos correspondientes.
        nombre.setAttribute('readonly', '');
        numero.setAttribute('readonly', '');
        email.setAttribute('readonly', '');
        pass.setAttribute('readonly', '');
        archivo.setAttribute('hidden', '');
        label1.setAttribute('hidden', '');
        label2.setAttribute('hidden', '');
        label3.setAttribute('hidden', '');
        label4.setAttribute('hidden', '');
        
        // Oculta el botón.
        boton.style.display = "none";

        // Cambia el contenido y estilo del título.
        titulo_form.innerHTML = "";
        titulo_form.innerHTML = `DATOS VALIDADOS CORRECTAMENTE`;
        titulo_form.style.color = "#0f0";

        // Muestra el elemento con el ID "access" (probablemente un mensaje de acceso).
        acceso.removeAttribute("hidden");
    }
});

// Función para previsualizar una imagen seleccionada por el usuario.
function previewImage(event, querySelector) {
    const input = event.target;
    $imgPreview = document.querySelector(querySelector);
    if (!input.files.length) return;
    file = input.files[0];
    objectURL = URL.createObjectURL(file);
    $imgPreview.src = objectURL;
}



