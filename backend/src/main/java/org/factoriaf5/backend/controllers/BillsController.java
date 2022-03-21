package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.model.Bills;
import org.factoriaf5.backend.model.Event;
import org.factoriaf5.backend.repositories.BillsRepository;
import org.factoriaf5.backend.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public class BillsController {


    private final BillsRepository billsRepository;
    private final EventRepository eventRepository;

    @Autowired
    public BillsController(BillsRepository billsRepository, EventRepository eventRepository) {
        this.billsRepository = billsRepository;
        this.eventRepository = eventRepository;
    }

    @GetMapping("/bills")
    public List<Bills> allBills() {
        return billsRepository.findAll();
    }

    @PostMapping("/bills")
    public Bills addNewBill(@RequestBody Bills bill) {
        if (bill.getEvent().getId() == null) {
            Event event =  eventRepository.save(bill.getEvent());
            bill.setEvent(event);
        }
        return billsRepository.save(bill);
     }

    @PutMapping("/bills/edit/{id}")
    public Bills updateBillsById(@RequestBody Bills bills) {
        billsRepository.findById(bills.getId());
        return billsRepository.save(bills);
    }

    @GetMapping("/bills/delete/{id}")
    public Bills deleteBillsById(@PathVariable Long id) {
        Bills bills = billsRepository.findById(id).get();
        billsRepository.deleteById(id);
        return bills;
    }
}
