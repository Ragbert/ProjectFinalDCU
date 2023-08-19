// Agrega un evento de escucha al botón con el id "login-btn".
// Cuando se haga clic en el botón, redirigirá a la página "estructura.html".
document.getElementById("login-btn").addEventListener("click", function() {
    window.location.href = "estructura.html";
});

// Agrega un evento de escucha al formulario con el id "formulario".
// Cuando se envíe el formulario, evita el comportamiento predeterminado (enviar y recargar la página).
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtiene los valores de los campos de entrada del formulario.
    var titleInput = document.getElementById("title").value;
    var SubjectInput = document.getElementById("subject").value;
    var dateInput = document.getElementById("date").value;
    var timeInput = document.getElementById("time").value;
    var descriptionInput = document.getElementById("description").value;

    // Selecciona el elemento tbody de la tabla con el id "tabla".
    var tbody = document.querySelector("#tabla tbody");

    // Crea una nueva fila y celdas para cada dato ingresado.
    var fila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");
    var celda5 = document.createElement("td");

    // Asigna los valores de los campos de entrada a las celdas correspondientes.
    celda1.textContent = titleInput;
    celda2.textContent = SubjectInput;
    celda3.textContent = dateInput;
    celda4.textContent = timeInput;
    celda5.textContent = descriptionInput;

    // Agrega las celdas a la fila.
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

    // Agrega la fila a la tabla.
    tbody.appendChild(fila);

    // Muestra la tabla estableciendo su estilo de visualización en "table".
    document.getElementById("tabla").style.display = "table";

    // Agrega un evento de escucha al botón con el id "limpiar".
    // Cuando se haga clic en el botón, restablece los valores del formulario.
    document.getElementById("limpiar").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("formulario").reset();
    });
});
