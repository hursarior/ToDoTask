package com.Hursarior.Alura.ToDoApp.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Hursarior.Alura.ToDoApp.Persistence.Entity.Task;
import com.Hursarior.Alura.ToDoApp.Persistence.Entity.task_status;
import com.Hursarior.Alura.ToDoApp.Persistence.Entity.Repository.TaskRepository;
import com.Hursarior.Alura.ToDoApp.Service.DTO.TaskDTO;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task CrearTask(TaskDTO taskDTO) {
        return this.repository.save(new Task(taskDTO));

    }

    public List<Task> ObtenerTask() {
        return this.repository.findAll();

    }

    public void DeleteTask(Long id) {
        if (this.repository.existsById(id)) {
            Task task = this.repository.getReferenceById(id);
            this.repository.delete(task);
        } else {
            throw new EntityNotFoundException();
        }

    }

    public List<Task> filtrarStatus(task_status status) {
        if (this.repository.existsByStatus(status)) {
            return this.repository.findallByStatus(status);
        }
        throw new EntityNotFoundException();
    }

    @Transactional
    public boolean UpdateTaskFinished(Long id) {
        if (this.repository.existsById(id)) {
            this.repository.markTaskFinish(id);
            return true;
        } else {
            return false;
        }

    }


    public  List<Task> filtrarTareasHechas(boolean finished){

        if (this.repository.existsByFinished(finished)) {
            return this.repository.findallByfinished(finished);
        }
        throw new EntityNotFoundException();
  
    }

}
