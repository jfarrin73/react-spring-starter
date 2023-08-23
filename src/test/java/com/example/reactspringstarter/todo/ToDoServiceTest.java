package com.example.reactspringstarter.todo;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class ToDoServiceTest {

    @Autowired
    ToDoRepository toDoRepository;

    @Autowired
    ToDoService toDoService;

    @Test
    void fetchToDosShouldReturnExistingToDos() {
        ToDo toDo1 = toDoService.createToDo(new ToDo(null, "abc", "active"));
        ToDo toDo2 = toDoService.createToDo(new ToDo(null, "def", "active"));
        ToDo toDo3 = toDoService.createToDo(new ToDo(null, "ghi", "complete"));

        assertThat(toDoService.fetchToDos())
                .containsAll(List.of(toDo1, toDo2, toDo3));
    }

    @Test
    void createToDoShouldSaveAndReturnToDos() {
        ToDo toDo = toDoService.createToDo(new ToDo(null, "my task", "active"));
        assertThat(toDo.getId()).isNotNull();
        assertThat(toDo.getText()).isEqualTo("my task");
        assertThat(toDo.getStatus()).isEqualTo("active");
    }
}
