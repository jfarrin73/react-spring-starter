package com.example.reactspringstarter.todo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class ToDoController {
    private final ToDoService toDoService;
    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping
    public List<ToDo> fetchToDos(){
        return toDoService.fetchToDos();
    }

    @PostMapping
    public ResponseEntity<ToDo> createToDo(@RequestBody ToDo newToDo){
        return new ResponseEntity<>(toDoService.createToDo(newToDo), HttpStatus.CREATED);
    }
}
