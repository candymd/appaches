package org.factoriaf5.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class SampleDataLoader {

    @Autowired
    public SampleDataLoader(AmigoRepository amigoRepository) {
        this.amigoRepository = amigoRepository;
    }

    private AmigoRepository amigoRepository;

    @PostConstruct
    public void loadSampleData() {
        amigoRepository.saveAll(List.of(
                new Amigo("Candy", "candy@factoriaf5.org"),
                new Amigo("Sonia", "sonia@factoriaf5.org"),
                new Amigo("Sandra", "sandra@factoriaf5.org"),
                new Amigo("Faby", "faby@factoriaf5.org"),
                new Amigo("Valentina", "valentina@factoriaf5.org")
        ));
    }
}


