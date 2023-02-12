package com.bfi.referentiel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Agency implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String libcou;
    private String liblon;
    private String nbPerson;

    @OneToMany(mappedBy = "agency")
    private List<Account> accounts = new ArrayList<>();
    
    @OneToMany(mappedBy = "agency")
    private List<Employee> employees = new ArrayList<>();

}
