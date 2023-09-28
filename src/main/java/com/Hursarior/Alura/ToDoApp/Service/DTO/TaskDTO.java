package com.Hursarior.Alura.ToDoApp.Service.DTO;

import java.time.LocalDateTime;

public record TaskDTO(    
    
    String titulo,
    String descripcion,
    LocalDateTime eta){

    
}
