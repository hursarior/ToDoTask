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
        card.className = 'col-sm-6 p-2 mb-3 mb-sm-0';
        card.innerHTML = `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${task.titulo}</h5>
                <p class="card-text">${task.descripcion}</p>
                <p class="card-text">${task.eta}</p>
                <p class="card-text">${task.finished}</p>
                <a href="#" class="btn btn-primary" onclick="MarcarHecho(${task.id})">Tarea hecha</a>
                <a href="#" class="btn btn-primary" onclick="EliminarTarea(${task.id})">Borrar Tarea</a>
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

  const url = '/Mask_as_finished/' + id;
  fetch(url)
    .then(res => res.status)
    .catch(error => {
      console.error('Hubo un error:', error);
    });

}

