package com.bfi.referentiel.common.dto;

import com.bfi.referentiel.common.enumeration.CustomerType;
import com.bfi.referentiel.common.enumeration.Gender;
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
public class TierDTO {

    private Long id;
    private String libcou;
    private String liblon;
    private CustomerType customerType;
    private Boolean resident;
    private String reference;

    //Person
    private String firstName;
    private String lastName;
    private Gender gender;
    private LocalDate birthday;

    //Bank
    private Boolean bqloc;
    private String codbct;
    private String agcent;

    private GroupDTO group;
    private RoleDTO role;

}
