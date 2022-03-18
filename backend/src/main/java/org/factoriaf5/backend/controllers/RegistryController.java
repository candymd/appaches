package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Registry;
import org.factoriaf5.backend.model.Logs;
import org.factoriaf5.backend.repositories.RegistryRepository;
import org.factoriaf5.backend.repositories.LogsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin (origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public class RegistryController {

    private final RegistryRepository registryRepository;
    private final LogsRepository logsRepository;

    @Autowired
    public RegistryController(RegistryRepository registryRepository, LogsRepository logsRepository) {
        this.registryRepository = registryRepository;
        this.logsRepository = logsRepository;
    }

    @GetMapping("/registries")
    public List<Registry> allRecord() {
       return registryRepository.findAll();
    }

    @PostMapping("/registries/add")
    public Registry createRegistry(@RequestBody Registry registry) {
        return registryRepository.save(registry);
    }

    @GetMapping("/registries/{id}")
    public Registry findRegistry(@PathVariable Long id) {
        return registryRepository.findById(id).orElseThrow(null);
    }

    @GetMapping("/registries/edit/{id}")
    public Registry updateRegistryById(@RequestBody Registry registry) {
        registryRepository.findById(registry.getId());
        return registryRepository.save(registry);
    }

    @GetMapping("/registries/delete/{id}")
    public Registry deleteRegistryById(@PathVariable Long id) {
        Registry registry = registryRepository.findById(id).get();
        registryRepository.deleteById(id);
        return registry;
    }

    @GetMapping("/registries/{id}/friends")
    public List<List<Friend>> registriesByFriend(@PathVariable Long id) {
        return logsRepository.findAllByRegistryId(id)
                .stream()
                .map(Logs::getFriends)
                .collect(Collectors.toList());
    }
}










