package org.factoriaf5.backend.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="bills")
public class Bills {

    public Bills() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Friend paidBy;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "friends_id")
    private List<Friend> friends;

    @ManyToOne
    @JoinColumn(name = "event_id")
    Event event;

    public List<Friend> getFriends() {
        return friends;
    }

    public void setFriends(List<Friend> friends) {
        this.friends = friends;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Friend getPaidBy() {
        return paidBy;
    }

    public void setPaidBy(Friend paidBy) {
        this.paidBy = paidBy;
    }
}
