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

        List<Friend> canchaFriends = List.of(
                faby,
                joseManuel,
                valentina,
                sandra
        );

        List<Friend> comprasFriends = List.of(
                valentina,
                evaMaria,
                candy

        );

        List<Friend> facturaFriends = List.of(
                evaMaria

        );

        List<Friend> taxiFriends = List.of(
               valentina

        );



        friendRepository.saveAll(friends);

        Event cena = new Event("Cena", "08/03/2022", 50.00, "comida", 3, true);
        Event cervezas = new Event("Cervezas", "09/03/2022", 40.00, "bar", 3, true);
        Event mariscada = new Event("Mariscada", "16/03/2022", 100.00, "comida", 3, false);
        Event cine = new Event("Entradas al cine", "10/03/2022", 40.00, "entretenimiento", 2, false);
        Event concierto = new Event("Entradas a concierto Alejandro Sanz", "09/03/2022", 150.00,"entretenimiento", 3, true);
        Event facturaLuz = new Event("Factura de electricidad", "23/03/2022", 23.00,"hogar", 3, true);
        Event taxi = new Event("Taxi a aeropuerto", "13/03/2022", 32.00,"transporte", 3, false);
        Event diaDeCompras = new Event("Dia de compras", "01/02/2022", 18.00,"compras", 3, true);
        Event alquilerCancha = new Event("Alquiler cancha de futbol", "19/02/2022", 40.00,"entretenimiento", 3, false);



        Bills eventCena = new Bills();
        Bills eventConcierto = new Bills();
        Bills eventMariscada = new Bills();
        Bills eventCervezas = new Bills();
        Bills eventFactura = new Bills();
        Bills eventTaxi = new Bills();
        Bills eventCompras = new Bills();
        Bills eventAlquilerCancha = new Bills();
        Bills eventCine = new Bills();



        eventFactura.setEvent(facturaLuz);
        eventFactura.setFriends(facturaFriends);
        eventAlquilerCancha.setEvent(alquilerCancha);
        eventAlquilerCancha.setFriends(canchaFriends);
        eventAlquilerCancha.setPaidBy(joseManuel);
        eventCompras.setEvent(diaDeCompras);
        eventCompras.setFriends(comprasFriends);
        eventTaxi.setEvent(taxi);
        eventTaxi.setFriends(taxiFriends);
        eventTaxi.setPaidBy(valentina);
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
                mariscada,
                diaDeCompras,
                alquilerCancha,
                taxi,
                facturaLuz
        ));

        billsRepository.saveAll( List.of(

                        eventCena, eventMariscada, eventConcierto, eventCine, eventCervezas,
                eventAlquilerCancha, eventFactura, eventTaxi, eventCompras
                )
        );


    }
}
