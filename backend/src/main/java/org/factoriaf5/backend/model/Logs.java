package org.factoriaf5.backend.model;

import javax.persistence.*;
import java.util.List;

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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "friends_id")
    private List<Friend> friends;

    @ManyToOne
    @JoinColumn(name = "registry_id")
    Registry registry;

    public List<Friend> getFriends() {
        return friends;
    }

    public void setFriends(List<Friend> friends) {
        this.friends = friends;
    }

    public void setRegistry(Registry registry) {
        this.registry = registry;
    }

    public Registry getRegistry() {
        return registry;
    }
}
