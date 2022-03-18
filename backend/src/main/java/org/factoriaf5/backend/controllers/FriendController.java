package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Event;
import org.factoriaf5.backend.model.Bills;
import org.factoriaf5.backend.repositories.FriendRepository;

import org.factoriaf5.backend.repositories.BillsRepository;
import org.factoriaf5.backend.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class FriendController {
    private final FriendRepository friendRepository;
    private final BillsRepository billsRepository;

    @Autowired
    public FriendController(FriendRepository friendRepository, EventRepository eventRepository, BillsRepository billsRepository) {
        this.friendRepository = friendRepository;
        this.billsRepository = billsRepository;
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

    @GetMapping("/friends/{id}/events")
    public List<Event> eventByFriend(@PathVariable Long id) {
        return billsRepository.findAllByFriendsId(id)
                .stream()
                .map(Bills::getEvent)
                .collect(Collectors.toList());
    }
}


