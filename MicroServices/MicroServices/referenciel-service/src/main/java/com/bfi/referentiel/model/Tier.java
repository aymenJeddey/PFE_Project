package com.bfi.referentiel.model;

import com.bfi.referentiel.common.enumeration.CustomerType;
import com.bfi.referentiel.common.enumeration.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Tier implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String libcou;
    private String liblon;

    @Enumerated(EnumType.STRING)
    private CustomerType customerType;

    private Boolean resident;
    private String reference;

    //Person
    private String firstName;
    private String lastName;
    @Enumerated(value = EnumType.STRING)
    private Gender gender;
    private LocalDate birthday;

    //Bank
    private Boolean bqloc;
    private String codbct;
    private String agcent;

    @ManyToOne
    private Role role;

    @ManyToOne
    private Group group;

    @ManyToOne
    private Country country;

    @OneToMany(mappedBy = "tier", cascade = CascadeType.ALL)
    private List<Contact> contacts = new ArrayList<>();

    @OneToMany(mappedBy = "tier")
    private List<Account> accounts = new ArrayList<>();

}
