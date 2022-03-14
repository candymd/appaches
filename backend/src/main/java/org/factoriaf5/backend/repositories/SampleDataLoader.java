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


        Set<Friend> friends = Set.of(
                candy,
                sonia,
                faby
        );

        friendRepository.saveAll(friends);

        Registry cena = new Registry("Cena", "08/03/2022", 50.00, 3, true);
        Registry cervezas = new Registry("Cervezas", "09/03/2022", 40.00, 3, true);
        registryRepository.saveAll(List.of(
                cena,
                cervezas
        ));


       logsRepository.saveAll( List.of(
               new Logs(sonia, cena),
               new Logs(faby, cena),
               new Logs(sonia, cervezas),
               new Logs(candy, cervezas)
               )
       );

    }
}
