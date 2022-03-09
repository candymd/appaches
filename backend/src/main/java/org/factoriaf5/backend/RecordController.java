package org.factoriaf5.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecordController {
    private RecordRepository recordRepository;

    @Autowired
    public RecordController(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

    @GetMapping("/record")
    public List<Record> allRecord() {
        return recordRepository.findAll();
    }

    @PostMapping ("/record/add")
    public List<Record> addRecord() { return recordRepository.saveAll();}

    @PutMapping("/record/edit/{id}")
    public List<Record> editRecord() { return recordRepository.saveAll();}

    @DeleteMapping("/record/deleted/{id}")
    public List<Record> deleteRecord() { return recordRepository.saveAll();}

}

