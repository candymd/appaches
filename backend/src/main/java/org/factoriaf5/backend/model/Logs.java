package org.factoriaf5.backend.model;

import javax.persistence.*;

@Entity
@Table(name="logs")
public class Logs {

    public Logs() {

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
    @JoinColumn(name = "registry_id")
    Registry registry;

    public Logs(Friend friend, Registry registry) {
        this.friend = friend;
        this.registry = registry;
    }

    public Friend getFriend() {
        return friend;
    }

    public Registry getRegistry() {
        return registry;
    }
}
