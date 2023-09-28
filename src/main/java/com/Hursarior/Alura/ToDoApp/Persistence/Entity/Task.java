package com.Hursarior.Alura.ToDoApp.Persistence.Entity;

import java.time.LocalDateTime;

import com.Hursarior.Alura.ToDoApp.Service.DTO.TaskDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "TAREA")
@NoArgsConstructor
@AllArgsConstructor
public class Task {


    

    public Task(TaskDTO taskDTO) {

        this.titulo = taskDTO.titulo();
        this.descripcion = taskDTO.descripcion();
        this.eta =taskDTO.eta();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private String descripcion;

    private LocalDateTime  fecha = LocalDateTime.now();

    private LocalDateTime eta;

    private boolean finished;

    private task_status status = task_status.ON_TIME;



}
