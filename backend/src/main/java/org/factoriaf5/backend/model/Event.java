package org.factoriaf5.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long id;
    private String name;
    private String date;
    private Double amount;
    private String category;
    private int numberFriends;
    private boolean paidByMe;


    // debería ser one to one???
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    @JsonIgnore
    List<Bills> bills;

    public Event(String name, String date, Double amount, String category, int numberFriends, boolean paidByMe) {
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.category = category;
        this.numberFriends = numberFriends;
        this.paidByMe = paidByMe;
    }

    public Event() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public int getNumberFriends() {
        return numberFriends;
    }

    public void setNumberFriends(int numberFriends) {
        this.numberFriends = numberFriends;
    }

    public boolean isPaidByMe() {
        return paidByMe;
    }

    public void setPaidByMe(boolean paidByMe) {
        this.paidByMe = paidByMe;
    }

    public List<Bills> getBills() {
        return bills;
    }

    public void setBills(List<Bills> bills) {
        this.bills = bills;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}