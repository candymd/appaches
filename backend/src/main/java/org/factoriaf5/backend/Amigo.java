package org.factoriaf5.backend;


import javax.persistence.*;

@Entity
@Table(name="grupoAmigos")
public class Amigo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    public Amigo(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Amigo() {

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