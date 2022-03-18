package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.model.Logs;
import org.factoriaf5.backend.model.Logs;
import org.factoriaf5.backend.repositories.LogsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public class LogsController {

    private final LogsRepository logsRepository;

    @Autowired
    public LogsController(LogsRepository logsRepository) {
        this.logsRepository = logsRepository;
    }

    @GetMapping("/logs")
    public List<Logs> allLogs() {
        return logsRepository.findAll();
    }

     @PostMapping("/logs")
    public Logs addNewLog(@RequestBody Logs log) {
        return logsRepository.save(log);
     }

    @PutMapping("/logs/edit/{id}")
    public Logs updateLogsById(@RequestBody Logs logs) {
        logsRepository.findById(logs.getId());
        return logsRepository.save(logs);
    }

  /*  @GetMapping("/logs/delete/{id}")
    public Logs deleteLogsById(@PathVariable Long id) {
        Logs logs = logsRepository.findById(id).get();
        logsRepository.deleteById(id);
        return logs;
    }*/



    @DeleteMapping("/logs/{id}")
    public Logs deleteLogsById(@PathVariable Long id) {
        Logs logs = logsRepository.findById(id).get();
        logsRepository.deleteById(id);
        return logs;
    }
}
