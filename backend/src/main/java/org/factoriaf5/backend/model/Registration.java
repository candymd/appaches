package org.factoriaf5.backend.model;

import javax.persistence.*;

@Entity
@Table(name="registrations")
public class Registration {

    public Registration() {

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
    @JoinColumn(name = "friend_id")
    Friend friend;

    @ManyToOne
    @JoinColumn(name = "record_id")
    Record record;

    public Registration(Friend friend, Record record) {
        this.friend = friend;
        this.record = record;
    }

    public Friend getFriend() {
        return friend;
    }

    public Record getRecord() {
        return record;
    }
}
