package org.factoriaf5.backend.repositories;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Bills;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.factoriaf5.backend.model.Event;
import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Set;

@Component
public class SampleDataLoader {

    private final EventRepository eventRepository;
    private final FriendRepository friendRepository;
    private final BillsRepository billsRepository;

    @Autowired
    public SampleDataLoader(EventRepository eventRepository, FriendRepository friendRepository, BillsRepository billsRepository) {
        this.eventRepository = eventRepository;
        this.friendRepository = friendRepository;
        this.billsRepository = billsRepository;
    }


    @PostConstruct
    @Profile("!prod")
    public void loadSampleData() {

        Friend candy = new Friend("Candy", "candy@factoriaf5.org");
        Friend sonia = new Friend("Sonia", "sonia@factoriaf5.org");
        Friend faby = new Friend("Faby", "faby@factoriaf5.org");
        Friend valentina = new Friend("Valentina", "valentina@factoriaf5.org");
        Friend sandra = new Friend("Sandra", "sandra@factoriaf5.org");
        Friend joseManuel = new Friend("Jose Manuel", "josemanuel@factoriaf5.org");
        Friend evaMaria = new Friend("Eva Maria", "evamaria@factoriaf5.org");


        Set<Friend> friends = Set.of(
                candy,
                sonia,
                faby,
                valentina,
                sandra,
                joseManuel,
                evaMaria
        );

        List<Friend> cenaFriends = List.of(
                candy,
                sonia,
                faby
        );

        List<Friend> mariscadaFriends = List.of(
                candy,
                sonia,
                faby,
                valentina
        );

        List<Friend> cineFriends = List.of(
                sonia,
                faby,
                evaMaria,
                joseManuel
        );

        List<Friend> cervezasFriends = List.of(
                sonia,
                faby,
                evaMaria,
                joseManuel,
                candy,
                valentina,
                sandra
        );


        friendRepository.saveAll(friends);

        Event cena = new Event("Cena", "08/03/2022", 50.00, 3, true);
        Event cervezas = new Event("Cervezas", "09/03/2022", 40.00, 3, true);
        Event mariscada = new Event("Mariscada", "16/03/2022", 100.00, 3, false);
        Event cine = new Event("Entradas al cine", "10/03/2022", 40.00, 2, false);
        Event concierto = new Event("Entradas a concierto Alejandro Sanz", "09/03/2022", 150.00, 3, true);

        Bills eventCena = new Bills();
        Bills eventConcierto = new Bills();
        Bills eventMariscada = new Bills();
        Bills eventCervezas = new Bills();
        Bills eventCine = new Bills();


        eventConcierto.setFriends(cenaFriends);
        eventConcierto.setEvent(concierto);
        eventCena.setFriends(cenaFriends);
        eventCena.setEvent(cena);
        eventMariscada.setFriends(mariscadaFriends);
        eventMariscada.setEvent(mariscada);
        eventMariscada.setPaidBy(candy);
        eventCine.setEvent(cine);
        eventCine.setFriends(cineFriends);
        eventCine.setPaidBy(faby);
        eventCervezas.setEvent(cervezas);
        eventCervezas.setFriends(cervezasFriends);


        eventRepository.saveAll(List.of(
                cena,
                cervezas,
                cine,
                concierto,
                mariscada
        ));

        billsRepository.saveAll( List.of(

                        eventCena, eventMariscada, eventConcierto, eventCine, eventCervezas
                )
        );


    }
}
