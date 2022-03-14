package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Registry;
import org.factoriaf5.backend.model.Logs;
import org.factoriaf5.backend.repositories.FriendRepository;

import org.factoriaf5.backend.repositories.LogsRepository;
import org.factoriaf5.backend.repositories.RegistryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class FriendController {
    private final FriendRepository friendRepository;
    private final LogsRepository logsRepository;

    @Autowired
    public FriendController(FriendRepository friendRepository, RegistryRepository registryRepository, LogsRepository logsRepository) {
        this.friendRepository = friendRepository;
        this.logsRepository = logsRepository;
    }

    @GetMapping("/friends")
    public List<Friend> allFriend() {
        return friendRepository.findAll();
    }

    @GetMapping("/friends/{id}")
    public Optional<Friend> friendById(@PathVariable Long id) {
        return friendRepository.findById(id);
    }

    @PostMapping("/friends/add")
    public Friend createNewFriend(@RequestBody Friend friend) {
        return friendRepository.save(friend);
    }

    @GetMapping("/friends/{id}/registries")
    public List<Registry> registryByFriend(@PathVariable Long id) {
        return logsRepository.findAllByFriendId(id)
                .stream()
                .map(Logs::getRegistry)
                .collect(Collectors.toList());
    }
}


