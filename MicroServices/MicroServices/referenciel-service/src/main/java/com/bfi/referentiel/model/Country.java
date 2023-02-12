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
public class Country implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String areaPhoneCode;
    private String name;
    private String numericCode;
    private String translatedName;
    private String nationality;
    private Boolean taxConvention;
    private Boolean embargo;

    @OneToMany(mappedBy = "country")
    private List<Tier> tiers = new ArrayList<>();
}
