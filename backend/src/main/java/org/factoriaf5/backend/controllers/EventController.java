package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.model.Friend;
import org.factoriaf5.backend.model.Event;
import org.factoriaf5.backend.model.Bills;
import org.factoriaf5.backend.repositories.EventRepository;
import org.factoriaf5.backend.repositories.BillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin (origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public class EventController {

    private final EventRepository eventRepository;
    private final BillsRepository billsRepository;

    @Autowired
    public EventController(EventRepository eventRepository, BillsRepository billsRepository) {
        this.eventRepository = eventRepository;
        this.billsRepository = billsRepository;
    }

    @GetMapping("/events")
    public List<Event> allRecord() {
       return eventRepository.findAll();
    }

    @PostMapping("/events/add")
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @GetMapping("/events/{id}")
    public Event findEvent(@PathVariable Long id) {
        return eventRepository.findById(id).orElseThrow(null);
    }

    @GetMapping("/events/edit/{id}")
    public Event updateEventById(@RequestBody Event event) {
        eventRepository.findById(event.getId());
        return eventRepository.save(event);
    }

    @GetMapping("/events/delete/{id}")
    public Event deleteEventById(@PathVariable Long id) {
        Event event = eventRepository.findById(id).get();
        eventRepository.deleteById(id);
        return event;
    }

    @GetMapping("/events/{id}/friends")
    public List<List<Friend>> eventsByFriend(@PathVariable Long id) {
        return billsRepository.findAllByEventId(id)
                .stream()
                .map(Bills::getFriends)
                .collect(Collectors.toList());
    }
}










