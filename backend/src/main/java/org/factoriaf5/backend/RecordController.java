package org.factoriaf5.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/record")
public class RecordController {
    private RecordRepository recordRepository;

    @Autowired
    public RecordController(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

    @GetMapping("/")
    public List<Record> allRecord() {
        return recordRepository.findAll();
    }

    @PostMapping ("/add")
    public List<Record> addRecord() { return recordRepository.saveAll();}



    @PutMapping("/edit/{id}")
    public List<Record> editRecord() { return recordRepository.saveAll();}

    @DeleteMapping("/deleted/{id}")
    public List<Record> deleteRecord() { return recordRepository.saveAll();}

}

