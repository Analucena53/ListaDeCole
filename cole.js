function selectRol(rol) {
    document.getElementById('dropdownMenuButton').innerText = rol + '';
  }


  function agregarEstudiante() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var rol = document.getElementById("dropdownMenuButton").textContent.trim();
    var curso = document.getElementById("curso").value;
    var clase = document.getElementById("clase").value;
    var email = document.getElementById("e-mail").value;

    // Crear una fila para la tabla
    var row = document.createElement("tr");

    // Crear celdas con los datos del estudiante
    var cellNombre = document.createElement("td");
    cellNombre.textContent = nombre;
    row.appendChild(cellNombre);

    var cellApellido1 = document.createElement("td");
    cellApellido1.textContent = apellido1;
    row.appendChild(cellApellido1);

    var cellApellido2 = document.createElement("td");
    cellApellido2.textContent = apellido2;
    row.appendChild(cellApellido2);

    var cellCurso = document.createElement("td");
    cellCurso.textContent = curso;
    row.appendChild(cellCurso);

    var cellClase = document.createElement("td");
    cellClase.textContent = clase;
    row.appendChild(cellClase);

    var cellEmail = document.createElement("td");
    cellEmail.textContent = email;
    row.appendChild(cellEmail);

    // Agregar la fila a la tabla
    document.getElementById("studentTableBody").appendChild(row);
}

function selectRol(rol) {
    // Actualizar el texto del botón de rol
    document.getElementById("dropdownMenuButton").textContent = "Rol " + rol;
}
