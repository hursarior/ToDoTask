package com.Hursarior.Alura.ToDoApp.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Hursarior.Alura.ToDoApp.Persistence.Entity.Task;
import com.Hursarior.Alura.ToDoApp.Persistence.Entity.task_status;
import com.Hursarior.Alura.ToDoApp.Persistence.Entity.Repository.TaskRepository;
import com.Hursarior.Alura.ToDoApp.Service.DTO.TaskDTO;

@Service
public class TaskService {
    
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task CrearTask(TaskDTO taskDTO){
         return this.repository.save(new Task(taskDTO));
        
    }

    public List<Task> ObtenerTask(){
        return this.repository.findAll();
        
    }

    public void DeleteTask(Long id){

       Task task = this.repository.getReferenceById(id);
       this.repository.delete(task);
    }

    public List<Task> filtrarStatus(task_status status){
        return this.repository.findallByStatus(status);

    }
}
