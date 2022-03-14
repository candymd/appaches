package org.factoriaf5.backend.model;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="friends")
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    public Friend(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Friend() {

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}