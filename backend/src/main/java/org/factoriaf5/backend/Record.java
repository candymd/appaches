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
    private Long amount;


    public Record(String name, String date, Long amount) {
        this.name = name;
        this.date = date;
        this.amount = amount;
    }

    public Record() {

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDate() {
        return date;
    }

    public Long getAmount() {
        return amount;
    }
}