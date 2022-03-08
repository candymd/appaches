package org.factoriaf5.backend;

import javax.persistence.*;

@Entity
@Table(name="Record")
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String date;
    private Double amount;
    private int numberfriends;


    public Record(String name, String date, Double amount, int numberfriends) {
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.numberfriends = numberfriends;
    }

    public Record() {

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

    public int getNumberfriends() {
        return numberfriends;
    }

    public void setNumberfriends(int numberfriends) {
        this.numberfriends = numberfriends;
    }
}