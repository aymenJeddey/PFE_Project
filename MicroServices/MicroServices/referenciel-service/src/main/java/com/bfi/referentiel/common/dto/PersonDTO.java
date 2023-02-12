package com.bfi.referentiel.common.dto;

import com.bfi.referentiel.common.enumeration.Gender;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class PersonDTO{

    private String firstName;
    private String lastName;
    private Gender gender;
    private LocalDate birthday;
}
