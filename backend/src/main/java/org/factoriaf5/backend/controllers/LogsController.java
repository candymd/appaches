package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.model.Logs;
import org.factoriaf5.backend.model.Registry;
import org.factoriaf5.backend.repositories.LogsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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

     @PostMapping("/logs/add")
    public Logs addNewLog(@RequestBody Logs log) {
        return logsRepository.save(log);
     }

}
