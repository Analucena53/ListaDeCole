
function dataCorrect(nombre, apellido1, apellido2, rol, curso, clase, email) {

  if (!nombre || !apellido1 || !apellido2 || !rol || !curso || !clase || !email) {
    alert("Por favor, complete todos los campos.");
    return false;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, introduzca una dirección de correo electrónico válida.");
    return false;
  }




  return true;
}

function addStudent() {

  let nombre = document.getElementById("nombre").value;
  let apellido1 = document.getElementById("apellido1").value;
  let apellido2 = document.getElementById("apellido2").value;
  let rol = document.getElementById("dropdownMenuButton").value;
  let curso = document.getElementById("curso").value;
  let clase = document.getElementById("clase").value;
  let email = document.getElementById("e-mail").value;

  if (!dataCorrect(nombre, apellido1, apellido2, rol, curso, clase, email)) {
    return;
  }


  let row = document.createElement("tr");


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


  let cellEliminar = document.createElement("td");
  let btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";
  btnEliminar.className = "delete-button";
  btnEliminar.onclick = function () {
    deletStudent(row);
  };
  cellEliminar.appendChild(btnEliminar);
  row.appendChild(cellEliminar);


  document.getElementById("studentTableBody").appendChild(row);

  document.getElementById('studentForm').reset();

  selectRol('Rol');
}

function selectRol(rol) {
  document.getElementById("dropdownMenuButton").value = rol;
  document.getElementById("dropdownMenuButton").textContent = rol;

}

function deletStudent(row) {

  document.getElementById("studentTableBody").removeChild(row);
}

function delet() {

  let table = document.getElementById("studentTableBody");


  let rowCount = table.rows.length;


  for (let i = rowCount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
  alert("Lista Eliminada");
}

function delettable() {

  let table = document.getElementById("studentTableBody");


  let rowCount = table.rows.length;


  for (let i = rowCount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
  document.getElementById('List').value = "";

  alert("Lista guardada con éxito");
}

function addList() {

  let table = document.getElementById("studentTableBody");


  let rowCount = table.rows.length;


  for (let i = rowCount - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
  document.getElementById('List').value = "";

  alert("Nueva Lista");
}

function editList() {

  let currentList = document.getElementById("List").value;

  alert("Lista Editada: " + currentList);
}





