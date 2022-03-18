package org.factoriaf5.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="registries")
public class Registry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "registry_id")
    private Long id;
    private String name;
    private String date;
    private Double amount;
    private int numberFriends;
    private boolean paidByMe;


    @OneToMany(mappedBy = "registry")
    @JsonIgnore
    List<Logs> logs;


    /*@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "logs",
            joinColumns = { @JoinColumn(name = "registry_id") },
            inverseJoinColumns = { @JoinColumn(name = "friend_id") })
    private final List<Friend> friends = new ArrayList<Friend>();
*/
    public Registry(String name, String date, Double amount, int numberFriends, boolean paidByMe) {
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.numberFriends = numberFriends;
        this.paidByMe = paidByMe;
    }

    public Registry() {

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

   /* public List<Friend> getFriends() {
        return friends;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Registry registry = (Registry) o;
        return numberFriends == registry.numberFriends && paidByMe == registry.paidByMe && Objects.equals(id, registry.id) && Objects.equals(name, registry.name) && Objects.equals(date, registry.date) && Objects.equals(amount, registry.amount) && Objects.equals(friends, registry.friends);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, date, amount, numberFriends, paidByMe, friends);
    }

    @Override
    public String toString() {
        return "Registry{" +
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