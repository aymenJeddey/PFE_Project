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
public class CountryDTO {

    private Long id;
    private String areaPhoneCode;
    private String name;
    private String numericCode;
    private String translatedName;
    private String nationality;
    private Boolean taxConvention;
    private Boolean embargo;
}
