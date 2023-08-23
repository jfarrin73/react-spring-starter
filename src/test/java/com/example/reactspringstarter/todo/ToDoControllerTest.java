package com.example.reactspringstarter.todo;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ToDoController.class)
class ToDoControllerTest {

    @Autowired
    MockMvc mvc;

    @MockBean
    ToDoService toDoService;

    @Test
    void shouldAcceptGetRequestToFetchToDos() throws Exception {
        when(toDoService.fetchToDos()).thenReturn(List.of());
        mvc.perform(get("/api/todos"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
        verify(toDoService, times(1)).fetchToDos();
    }

    @Test
    void shouldAcceptPostRequestsToCreateAToDo() throws Exception {
        ToDo newToDo = new ToDo(null, "new task", "active");
        ToDo savedToDo = new ToDo(1L, "new task", "active");
        when(toDoService.createToDo(any())).thenReturn(savedToDo);
        String newToDoJson = new ObjectMapper().writeValueAsString(newToDo);
        String savedToDoJson = new ObjectMapper().writeValueAsString(savedToDo);
        mvc.perform(post("/api/todos")
                        .contentType(APPLICATION_JSON)
                        .content(newToDoJson))
                .andExpect(status().isCreated())
                .andExpect(content().json(savedToDoJson));
        ArgumentCaptor<ToDo> captor = ArgumentCaptor.forClass(ToDo.class);
        verify(toDoService, times(1)).createToDo(captor.capture());
        assertThat(captor.getValue()).usingRecursiveComparison().isEqualTo(newToDo);
    }
}