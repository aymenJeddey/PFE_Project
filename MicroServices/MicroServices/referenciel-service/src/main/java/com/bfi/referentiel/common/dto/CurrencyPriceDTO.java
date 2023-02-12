package com.bfi.referentiel.common.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class CurrencyPriceDTO {

    private Long id;
    private Date priceDate;
    private Long buyPrice;
    private Long sellPrice;
    private Boolean status;
    private Long fourchette;
    private String commen;
    private Long envoi;

}
