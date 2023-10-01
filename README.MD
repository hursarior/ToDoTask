# To Do App 

## Introduccion 
API Centrada en Tasks, permite a los usuarios:

* Crear un nuevo tareas
* Mostrar todos las tareas creados
* Eliminar y marcar como realizada las tareas

 
## Tecnologías utilizadas

* Maven
* Spring boot 3
* Java 17
* Mysql
* HTML/CSS
* Javascript
* Bootstrap 

# Frontend TO DO APP

![Frontend](<To Do App - Google Chrome 2023-09-30 20-39-04.gif>)
  
# Descripcion de los EndPoints de la API

### POST /Tasks

Ruta: /Tasks
Descripción: Este endpoint permite crear una nueva tarea.
Método: POST
Parámetros de entrada: Un objeto TaskDTO en el cuerpo de la solicitud que contiene los detalles de la tarea a crear.
Respuesta exitosa: Devuelve un objeto Task que representa la tarea creada.
Código de respuesta exitosa: 200 OK

### GET /Tasks

Ruta: /Tasks
Descripción: Este endpoint permite obtener todas las tareas existentes.
Método: GET
Parámetros de entrada: No se requieren parámetros.
Respuesta exitosa: Devuelve una lista de objetos Task, que son todas las tareas existentes.
Código de respuesta exitosa: 200 OK

### DELETE /Tasks/{id}

Ruta: /Tasks/{id}
Descripción: Este endpoint permite eliminar una tarea por su ID.
Método: DELETE
Parámetros de entrada: El ID de la tarea que se desea eliminar se pasa como parte de la URL.
Respuesta exitosa: No se devuelve contenido en el cuerpo de la respuesta.
Código de respuesta exitosa: 204 No Content

### GET /Tasks/status/{status}

Ruta: /Tasks/status/{status}
Descripción: Este endpoint permite filtrar tareas por su estado (status).
Método: GET
Parámetros de entrada: El estado de la tarea (status) se pasa como parte de la URL.
Respuesta exitosa: Devuelve una lista de objetos Task que coinciden con el estado especificado.
Código de respuesta exitosa: 200 OK

### PATCH /Tasks/Mark_as_finished/{id}

Ruta: /Tasks/Mark_as_finished/{id}
Descripción: Este endpoint permite marcar una tarea como finalizada (completada).
Método: PATCH
Parámetros de entrada: El ID de la tarea que se desea marcar como finalizada se pasa como parte de la URL.
Respuesta exitosa: No se devuelve contenido en el cuerpo de la respuesta si la tarea se marca como finalizada con éxito. En caso contrario, se devuelve un error 404 si la tarea no se encuentra.
Código de respuesta exitosa: 204 No Content (si la tarea se marca como finalizada con éxito) o 404 Not Found (si la tarea no se encuentra).