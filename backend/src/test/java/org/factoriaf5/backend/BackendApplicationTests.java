/*
package org.factoriaf5.backend;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Bills;
import org.factoriaf5.backend.model.Event;
import org.factoriaf5.backend.repositories.FriendRepository;
import org.factoriaf5.backend.repositories.BillsRepository;
import org.factoriaf5.backend.repositories.EventRepository;
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
    private EventRepository eventRepository;
    @Autowired
    private BillsRepository billsRepository;


    @Autowired
    private MockMvc api;

  @BeforeEach
    void setUp() {
        eventRepository.deleteAll();
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
    void aEventIncludesAListOfFriends() throws Exception {

        Friend candy = new Friend("Candy", "candy@factoriaf5.org");
        Friend sonia = new Friend("Sonia", "candy@factoriaf5.org");
        Event cena = new Event("Cena", "08/03/2022", 50.00, 3, true);

        billsRepository.saveAll( List.of(
                        new Bills(candy, cena),
                        new Bills(sonia, cena))
        );

        api.perform(get("/registries/1/friends"))
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Candy")))
                .andExpect(jsonPath("$[1].name", equalTo("Sonia")));

    }
    //
  @Test
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





    }
*/
