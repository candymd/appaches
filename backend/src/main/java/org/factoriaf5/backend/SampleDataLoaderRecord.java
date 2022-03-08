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

    private RecordRepository recordRepository;

    @PostConstruct
    public void loadSampleData() {
        recordRepository.saveAll(List.of(
                new Record("Candy", "date", "amount"),
                new Record("Sonia", "date", "amount" ),
                new Record("Sandra", "date", "amount"),
                new Record("Faby", "date", "amounth"),
                new Record("Valentina", "date","amount")
        ));
    }
}
