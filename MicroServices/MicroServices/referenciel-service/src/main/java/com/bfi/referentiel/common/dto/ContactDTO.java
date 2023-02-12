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
public class ContactDTO {

    private Long id;
    private String translatedAddress;
    private String phone;
    private String mobile;
    private String fax;
    private String email;
    private String zipCode;
    private String freeText;
    private String contactFunction;
    private String contactName;
    private String language;
    private String formulePolitesse;
    private TierDTO tier;
}
