package com.bfi.referentiel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Contact implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @ManyToOne
    private Tier tier;
}
