package com.bfi.referentiel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity @NoArgsConstructor @AllArgsConstructor
public class Currency implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer decimal;
    private String decimalName;
    private String name;
    private String translatedName;
    private Integer quantity;
    private Boolean certain;
    private String internalName;

    @OneToMany(mappedBy = "currency")
    private List<Account> accounts = new ArrayList<>();

    /*
    @ManyToOne
    private CrossParity crossParity;

    @ManyToOne
    private CurrencyPrice sellingCurrency;

    @ManyToOne
    private CurrencyPrice purchaseCurrency;
     */

    @ManyToOne
    private Calendar calendar;
}
