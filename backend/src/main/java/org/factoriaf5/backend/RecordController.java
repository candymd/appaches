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

    @PostMapping("/record/add")
    public Record createRecord(@RequestBody Record record) {
        return recordRepository.save(record);
    }

    @GetMapping("/record/{id}")
    public Record findRecord(@PathVariable Long id) {
        return recordRepository.findById(id).orElseThrow(null);
    }

    @GetMapping("/record/edit/{id}")
    public Record updateRecordById(@RequestBody Record record) {
        recordRepository.findById(record.getId());
        return recordRepository.save(record);
    }

    @GetMapping("/record/delete/{id}")
    public Record deleteRecordById(@PathVariable Long id) {
        Record record = recordRepository.findById(id).get();
        recordRepository.deleteById(id);
        return record;
    }
}










