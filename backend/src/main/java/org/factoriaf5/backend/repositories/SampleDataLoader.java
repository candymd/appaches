package org.factoriaf5.backend.repositories;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Logs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.factoriaf5.backend.model.Registry;
import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Set;

@Component
public class SampleDataLoader {

    private final RegistryRepository registryRepository;
    private final FriendRepository friendRepository;
    private final LogsRepository logsRepository;

    @Autowired
    public SampleDataLoader(RegistryRepository registryRepository, FriendRepository friendRepository, LogsRepository logsRepository) {
        this.registryRepository = registryRepository;
        this.friendRepository = friendRepository;
        this.logsRepository = logsRepository;
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

        friendRepository.saveAll(friends);

        Registry cena = new Registry("Cena", "08/03/2022", 50.00, 3, true);
        Registry cervezas = new Registry("Cervezas", "09/03/2022", 40.00, 3, true);
        Registry mariscada = new Registry("Mariscada", "16/03/2022", 100.00, 3, false);
        Registry cine = new Registry("Entradas al cine", "10/03/2022", 40.00, 2, false);
        Registry concierto = new Registry("Entradas a concierto Alejandro Sanz", "09/03/2022", 150.00, 3, false);


        registryRepository.saveAll(List.of(
                cena,
                cervezas,
                cine,
                concierto,
                mariscada
        ));


        logsRepository.saveAll( List.of(
               new Logs(sonia, cena),
               new Logs(faby, cena),
               new Logs(sonia, cervezas),
               new Logs(candy, cervezas),
               new Logs(valentina, cervezas),
                new Logs(sandra, cervezas),
               new Logs(evaMaria, mariscada),
               new Logs(joseManuel, mariscada),
               new Logs(candy, concierto),
               new Logs(joseManuel, concierto),
               new Logs(sonia, cine)

               )
       );

    }
}
