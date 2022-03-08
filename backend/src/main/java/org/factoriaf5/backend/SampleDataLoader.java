package org.factoriaf5.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class SampleDataLoader {

    @Autowired
    public SampleDataLoader(FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    private FriendRepository friendRepository;

    @PostConstruct
    public void loadSampleData() {
        friendRepository.saveAll(List.of(
                new Friend("Candy", "candy@factoriaf5.org"),
                new Friend("Sonia", "sonia@factoriaf5.org"),
                new Friend("Sandra", "sandra@factoriaf5.org"),
                new Friend("Faby", "faby@factoriaf5.org"),
                new Friend("Valentina", "valentina@factoriaf5.org")
        ));
    }
}


