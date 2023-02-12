package com.bfi.referentiel.model;

import com.bfi.referentiel.common.enumeration.AccountStatus;
import com.bfi.referentiel.common.enumeration.AccountType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Account implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Boolean cloture;
    private LocalDate dateCloture;
    private String rib;
    private String description;
    private Double solde;
    private String numCpt;
    private Boolean active;

    @Enumerated(EnumType.STRING)
    private AccountType typeAccount;

    @ManyToOne
    private Tier tier;

    @ManyToOne
    private Agency agency;

    @ManyToOne
    private Currency currency;

    @Enumerated(EnumType.STRING)
    private AccountStatus accountStatus;

}
