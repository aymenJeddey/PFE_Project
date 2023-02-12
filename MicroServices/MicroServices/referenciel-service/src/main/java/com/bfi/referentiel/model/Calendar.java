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
public class Calendar implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String description;

    @OneToMany(mappedBy = "calendar")
    private List<Currency> currency = new ArrayList<>();

    @OneToMany(mappedBy = "calendar", cascade = CascadeType.ALL)
    private List<Annual> annuals = new ArrayList<>();

    @OneToMany(mappedBy = "calendar", cascade = CascadeType.ALL)
    private List<Exceptional> exceptions = new ArrayList<>();

    @OneToMany(mappedBy = "calendar", cascade = CascadeType.ALL)
    private List<Weekly> days = new ArrayList<>();
}
