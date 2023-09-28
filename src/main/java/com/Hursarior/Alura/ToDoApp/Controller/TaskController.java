package com.Hursarior.Alura.ToDoApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hursarior.Alura.ToDoApp.Persistence.Entity.Task;
import com.Hursarior.Alura.ToDoApp.Persistence.Entity.task_status;
import com.Hursarior.Alura.ToDoApp.Service.TaskService;
import com.Hursarior.Alura.ToDoApp.Service.DTO.TaskDTO;

@RestController
@RequestMapping("/Tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Task>TaskCreate(@RequestBody TaskDTO taskDTO){
        return ResponseEntity.ok(taskService.CrearTask(taskDTO));
    }

    @GetMapping
    public List<Task> ObtenerTask(){
        return taskService.ObtenerTask();
        
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> DeleteTask(@PathVariable Long id){
        taskService.DeleteTask(id);
        return ResponseEntity.noContent().build();

    }

    @GetMapping("status/{status}")
    public List<Task> FiltrarTask(@PathVariable task_status status ){
        return taskService.filtrarStatus(status);
        
    }


}
