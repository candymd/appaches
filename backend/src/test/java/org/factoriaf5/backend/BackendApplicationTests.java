package org.factoriaf5.backend;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Logs;
import org.factoriaf5.backend.model.Registry;
import org.factoriaf5.backend.repositories.FriendRepository;
import org.factoriaf5.backend.repositories.LogsRepository;
import org.factoriaf5.backend.repositories.RegistryRepository;
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
    private FriendRepository friendRepository;
    @Autowired
    private RegistryRepository registryRepository;
    @Autowired
    private LogsRepository logsRepository;


    @Autowired
    private MockMvc api;

  @BeforeEach
    void setUp() {
        registryRepository.deleteAll();
        friendRepository.deleteAll();
    }

    @Test
    void returnsExistingFriends() throws Exception {

        friendRepository.saveAll(
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

    @Test
    void aRegistryIncludesAListOfFriends() throws Exception {

        Friend candy = new Friend("Candy", "candy@factoriaf5.org");
        Friend sonia = new Friend("Sonia", "candy@factoriaf5.org");
        Registry cena = new Registry("Cena", "08/03/2022", 50.00, 3, true);

        logsRepository.saveAll( List.of(
                        new Logs(candy, cena),
                        new Logs(sonia, cena))
        );

        api.perform(get("/registries/1/friends"))
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Candy")))
                .andExpect(jsonPath("$[1].name", equalTo("Sonia")));

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
