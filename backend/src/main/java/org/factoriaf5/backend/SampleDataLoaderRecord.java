package org.factoriaf5.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class SampleDataLoaderRecord {

    @Autowired
    public SampleDataLoaderRecord(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

    private final RecordRepository recordRepository;

    @PostConstruct
    public void loadSampleData() {
        recordRepository.saveAll(List.of(
                new Record("Cena", "08/03/2022", 50.00,3, true),
                new Record("Cine", "25/02/2022", 20.00,2, true),
                new Record("Zoo", "10/01/2022", 60.00,4, false)

        ));
    }
}
