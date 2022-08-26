package com.example.reactspringstarter;

import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class SampleControllerTest {

    @Test
    void sampleControllerTest() throws Exception {
        MockMvc mvc = MockMvcBuilders.standaloneSetup(new SampleController()).build();

        mvc.perform(get("/api/sample"))
            .andExpect(status().isOk())
            .andExpect(content().string("This sentence came from the server"));
    }
}
