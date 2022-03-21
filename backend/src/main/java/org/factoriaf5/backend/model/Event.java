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
    private int numberFriends;
    private boolean paidByMe;


    // debería ser one to one???
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    @JsonIgnore
    List<Bills> bills;

    public Event(String name, String date, Double amount, int numberFriends, boolean paidByMe) {
        this.name = name;
        this.date = date;
        this.amount = amount;
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


        /* public List<Friend> getFriends() {
        return friends;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event event = (Event) o;
        return numberFriends == event.numberFriends && paidByMe == event.paidByMe && Objects.equals(id, event.id) && Objects.equals(name, event.name) && Objects.equals(date, event.date) && Objects.equals(amount, event.amount) && Objects.equals(friends, event.friends);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, date, amount, numberFriends, paidByMe, friends);
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date='" + date + '\'' +
                ", amount=" + amount +
                ", numberFriends=" + numberFriends +
                ", paidByMe=" + paidByMe +
                ", friends=" + friends +
                '}';
    }*/
}