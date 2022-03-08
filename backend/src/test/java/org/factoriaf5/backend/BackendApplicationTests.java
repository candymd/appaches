package org.factoriaf5.backend;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTests {

    @Autowired
    private AmigoRepository amigoRepository;

    @Autowired
    private MockMvc api;

    @BeforeEach
    void setUp() {
        amigoRepository.deleteAll();
    }

    @Test
    void returnsExistingAmigos() throws Exception {

        amigoRepository.saveAll(
                List.of(new Amigo("Sandra", "sandra@factoriaf5.org"),
                        new Amigo("Candy", "candy@factoriaf5.org"))
        );

        api.perform(get("/amigos"))
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Sandra")))
                .andExpect(jsonPath("$[0].email", equalTo("sandra@factoriaf5.org")))
                .andExpect(jsonPath("$[1].name", equalTo("Candy")))
                .andExpect(jsonPath("$[1].email", equalTo("candy@factoriaf5.org"))) ;


    }
    @Test
    void returnsTheExistingAmigos() throws Exception {
        Amigo amigo = amigoRepository.save(new Amigo("Sandra","sandra@factoria5.org" ));

        MockMvc.perform(get("/amigos"))
                .andExpect(status().isOk())
                .andExpect(view().name("amigos/all"))
                .andExpect(model().attribute(  "amigos", hasItem(amigo)));
    }




    @Test
    void returnsAddAmigo() throws Exception{
        MockMvc.perform(get("/amigos/new"))
                .andExpect(status().isOk())
                .andExpect(view().name("amigos/edit"))
                .andExpect(model().attributeExists("amigo"))
                .andExpect(model().attribute("title", "Create new amigo"));
    }




    }
