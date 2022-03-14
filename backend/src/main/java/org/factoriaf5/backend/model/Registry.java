package org.factoriaf5.backend.model;

import javax.persistence.*;

@Entity
@Table(name="registries")
public class Registry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String date;
    private Double amount;
    private int numberFriends;
    private boolean paidByMe;


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
}