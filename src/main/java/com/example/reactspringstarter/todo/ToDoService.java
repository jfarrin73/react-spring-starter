package com.example.reactspringstarter.todo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {

    private final ToDoRepository toDoRepository;

    public ToDoService(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }


    public List<ToDo> fetchToDos(){
        return toDoRepository.findAll();
    }

    public ToDo createToDo(ToDo newToDo) {
        return toDoRepository.save(newToDo);
    }
}
