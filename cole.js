


function agregarEstudiante() {
  // Obtener los valores del formulario
  let nombre = document.getElementById("nombre").value;
  let apellido1 = document.getElementById("apellido1").value;
  let apellido2 = document.getElementById("apellido2").value;
  let rol = document.getElementById("dropdownMenuButton").value;
  let curso = document.getElementById("curso").value;
  let clase = document.getElementById("clase").value;
  let email = document.getElementById("e-mail").value;
  

  // Crear una fila para la tabla
  let row = document.createElement("tr");

  // Crear celdas con los datos del estudiante
  let cellNombre = document.createElement("td");
  cellNombre.textContent = nombre;
  row.appendChild(cellNombre);

  let cellApellido1 = document.createElement("td");
  cellApellido1.textContent = apellido1;
  row.appendChild(cellApellido1);

  let cellApellido2 = document.createElement("td");
  cellApellido2.textContent = apellido2;
  row.appendChild(cellApellido2);

  let cellRol = document.createElement("td");
  cellRol.textContent = rol;
  row.appendChild(cellRol);

  let cellCurso = document.createElement("td");
  cellCurso.textContent = curso;
  row.appendChild(cellCurso);

  let cellClase = document.createElement("td");
  cellClase.textContent = clase;
  row.appendChild(cellClase);

  let cellEmail = document.createElement("td");
  cellEmail.textContent = email;
  row.appendChild(cellEmail);

  // Crear celda para el botón de eliminar
  let cellEliminar = document.createElement("td");
  let btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";
  btnEliminar.className = "eliminar-button";
  btnEliminar.onclick = function() {
    eliminarEstudiante(row);
  };
  cellEliminar.appendChild(btnEliminar);
  row.appendChild(cellEliminar);

  // Agregar la fila a la tabla
  document.getElementById("studentTableBody").appendChild(row);

  document.getElementById('studentForm').reset();

  selectRol('Rol');
}

function selectRol(rol) {
  document.getElementById("dropdownMenuButton").value = rol;
  document.getElementById("dropdownMenuButton").textContent = rol;

}

function eliminarEstudiante(row) {
  // Obtener la referencia a la tabla y eliminar la fila
  document.getElementById("studentTableBody").removeChild(row);
}

function delet() {
  // Obtener la referencia de la tabla
  let table = document.getElementById("studentTableBody");

  // Obtener la cantidad de filas en la tabla
  let rowCount = table.rows.length;

  // Eliminar las filas una por una (empezando desde el final para evitar problemas con los índices)
  for (let i = rowCount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
}





