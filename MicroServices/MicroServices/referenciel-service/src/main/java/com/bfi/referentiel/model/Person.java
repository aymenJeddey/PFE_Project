package com.bfi.referentiel.model;

import com.bfi.referentiel.common.enumeration.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;
    private LocalDate birthday;
}
