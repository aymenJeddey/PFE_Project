package com.bfi.referentiel.common.dto;

import com.bfi.referentiel.common.enumeration.AccountStatus;
import com.bfi.referentiel.common.enumeration.AccountType;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class AccountDTO {

    private Long id;
    private Boolean cloture;
    private LocalDate dateCloture;
    private String rib;
    private String description;
    private Double solde;
    private String numCpt;
    private Boolean active;
    private AccountType typeAccount;
    private AccountStatus accountStatus;
    private AgencyDTO agency;
    private CurrencyDTO currency;
    private TierDTO Tier;
}
