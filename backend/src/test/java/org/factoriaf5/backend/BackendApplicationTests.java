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
    private FriendRepository amigoRepository;

    @Autowired
    private MockMvc api;

    @BeforeEach
    void setUp() {
        amigoRepository.deleteAll();
    }

    @Test
    void returnsExistingFriends() throws Exception {

        amigoRepository.saveAll(
                List.of(new Friend("Sandra", "sandra@factoriaf5.org"),
                        new Friend("Candy", "candy@factoriaf5.org"))
        );

        api.perform(get("/friends"))
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Sandra")))
                .andExpect(jsonPath("$[0].email", equalTo("sandra@factoriaf5.org")))
                .andExpect(jsonPath("$[1].name", equalTo("Candy")))
                .andExpect(jsonPath("$[1].email", equalTo("candy@factoriaf5.org"))) ;


    }
    //
  /*  @Test
    void returnsTheExistingFriends() throws Exception {
        Friend friend = FriendRepository.save(new Friend("Sandra","sandra@factoria5.org" ));

        MockMvc.perform(get("/friends"))
                .andExpect(status().isOk())
                .andExpect(view().name("friends/all"))
                .andExpect(model().attribute(  "friends", hasItem(friend)));
    }




    @Test
    void returnsAddFriend() throws Exception{
        MockMvc.perform(get("/friends/new"))
                .andExpect(status().isOk())
                .andExpect(view().name("friends/edit"))
                .andExpect(model().attributeExists("friend"))
                .andExpect(model().attribute("title", "Create new friend"));
    }
*/



    }
