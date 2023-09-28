package com.Hursarior.Alura.ToDoApp.Persistence.Entity.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Hursarior.Alura.ToDoApp.Persistence.Entity.Task;
import com.Hursarior.Alura.ToDoApp.Persistence.Entity.task_status;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query("SELECT t FROM Task t WHERE t.status = :status")
    public List<Task> findallByStatus(@Param("status") task_status status);
}
