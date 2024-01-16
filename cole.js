function selectRol(rol) {
    document.getElementById('dropdownMenuButton').innerText = rol + '';
  }


function agregarEstudiante() {
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var curso = document.getElementById('curso').value;

    // Crear una nueva fila con los datos
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + nombre + '</td><td>' + apellido + '</td><td>' + curso + '</td>';

    // Agregar la nueva fila a la tabla
    document.getElementById('inputTable').getElementsByTagName('tbody')[0].appendChild(newRow);

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('curso').value = '';
}