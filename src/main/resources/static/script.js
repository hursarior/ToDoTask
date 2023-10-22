document.addEventListener("DOMContentLoaded", () => {
  const url = '/Tasks';

  // Obtener una referencia al elemento HTML donde deseas mostrar las tarjetas de tareas
  const cardContainer = document.getElementById("mesa_de_tareas");

  // Realizar la solicitud fetch
  fetch(url)
    .then(response => {
      // Verificar si la solicitud fue exitosa (código de respuesta 200)
      if (!response.ok) {
        throw new Error('No se pudo obtener la información');
      }
      // Convertir la respuesta a formato JSON
      return response.json();
    })
    .then(data => {
      // Iterar a través de los datos del backend y crear tarjetas para cada tarea
      data.forEach(task => {
        // Crear una tarjeta HTML para la tarea
        const card = document.createElement('div');
        card.className = 'col-sm-5 p-1 m-2 mb-sm-0';
        card.innerHTML = `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${task.titulo}</h5>
                <p class="card-text">${task.descripcion}</p>
                <p class="card-text">${task.eta}<br>
               <strong>Realizada;${task.finished}</strong></p>
                <a href="index.html" class="btn btn-primary" onclick="MarcarHecho(${task.id})">Tarea hecha</a>
                <a href="index.html" class="btn btn-primary" onclick="EliminarTarea(${task.id})">Borrar Tarea</a>
              </div>
            </div>
          `;
        // Agregar la tarjeta al contenedor
        cardContainer.appendChild(card);
      });
    })
    .catch(error => {
      // Manejar errores de solicitud o respuesta
      console.error('Hubo un error:', error);
    });
});

function EliminarTarea(id) {

  const url = '/Tasks/'+id;
  fetch(url, {method: 'DELETE'})
    .then(res => res.status)
    .catch(error => {
      console.error('Hubo un error:', error);
    });

}

function MarcarHecho(id) {

  const url = '/Tasks/Mask_as_finished/'+id;
  fetch(url, {method: 'PATCH'})
    .then(res => res.status)
    .catch(error => {
      console.error('Hubo un error:', error);
    });

}

function FiltrarHecho(){
  const cardContainer = document.getElementById("mesa_de_tareas");
  cardContainer.innerHTML = ``

  // Realizar la solicitud fetch
  fetch('/Tasks/true')
    .then(response => {
      // Verificar si la solicitud fue exitosa (código de respuesta 200)
      if (!response.ok) {
        throw new Error('No se pudo obtener la información');
      }
      // Convertir la respuesta a formato JSON
      return response.json();
    })
    .then(data => {
      // Iterar a través de los datos del backend y crear tarjetas para cada tarea
      data.forEach(task => {
        // Crear una tarjeta HTML para la tarea
        const card = document.createElement('div');
        card.className = 'col-sm-5 p-1 m-2 mb-sm-0';
        card.innerHTML = `
            <div class="card" ">
              <div class="card-body">
                <h5 class="card-title">${task.titulo}</h5>
                <p class="card-text">${task.descripcion}</p>
                <p class="card-text">${task.eta}<br>
               <strong>Realizada;${task.finished}</strong></p>
                <a href="index.html" class="btn btn-primary" onclick="MarcarHecho(${task.id})">Tarea hecha</a>
                <a href="index.html" class="btn btn-primary" onclick="EliminarTarea(${task.id})">Borrar Tarea</a>
              </div>
            </div>
          `;
        // Agregar la tarjeta al contenedor
        cardContainer.appendChild(card);
      });
    })
    .catch(error => {
      // Manejar errores de solicitud o respuesta
      console.error('Hubo un error:', error);
    });

}

document.getElementById("tareaForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtén los valores de los campos del formulario
  var titulo = document.getElementById("titulo").value;
  var descripcion = document.getElementById("descripcion").value;
  var fechaLimite = document.getElementById("fecha_limite").value;

  // Crea un objeto con los datos que deseas enviar
  var tareaData = {
      titulo: titulo,
      descripcion: descripcion,
      eta: fechaLimite+'T15:00:00'
  };
  ListarTareas(titulo);
  // Realiza la solicitud POST utilizando fetch
  fetch('/Tasks', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(tareaData) // Convierte los datos a JSON
  })
  .then(function(response) {
      if (response.status === 200) {
          // La solicitud se completó con éxito

          limpiarformulario();
          alert("Tarea agregada con éxito");
          
          // Puedes redirigir o hacer otras acciones aquí
      } else {
          // La solicitud no se completó con éxito
          alert("Hubo un error al agregar la tarea");
      }
  })
  .catch(function(error) {
      console.error("Error en la solicitud:", error);
  });
});

function limpiarformulario(){
  var titulo = document.getElementById("titulo").value = "";
  var descripcion = document.getElementById("descripcion").value = "";
  var fechaLimite = document.getElementById("fecha_limite").value = "";
}

function ListarTareas(titulo){

  const cardlista  = document.getElementById("listarTareas");
  const card = document.createElement('div');
  card.innerHTML =
  ' <li class="list-group-item active"  style=" border-bottom: solid 2px black; max-width: 470px;" aria-current="true"> ' + titulo + ' </li> ';
  cardlista.appendChild(card);

}