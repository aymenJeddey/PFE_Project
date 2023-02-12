package com.bfi.referentiel.common.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class CurrencyDTO {

    private Long id;
    private Integer decimal;
    private String decimalName;
    private String name;
    private String translatedName;
    private Integer quantity;
    private Boolean certain;
    private String internalName;
    private CalendarDTO calendar;
}
