package com.bfi.referentiel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class CurrencyPrice implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date priceDate;
    private Long buyPrice;
    private Long sellPrice;
    private Boolean status;
    private Long fourchette;
    private String commen;
    private Long envoi;

    /*
    @OneToMany(mappedBy = "sellingCurrency")
    private List<Currency> sellingCurrency = new ArrayList<>();

    @OneToMany(mappedBy = "purchaseCurrency")
    private List<Currency> purchaseCurrency = new ArrayList<>();
     */


}
