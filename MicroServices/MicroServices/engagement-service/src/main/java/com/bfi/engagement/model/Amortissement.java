package com.bfi.engagement.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//@JsonInclude(NON_NULL)
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Amortissement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date debut;
    private Date fin;
    private int nbJours;

    //private String capitalInvestiString;
    private Long capitalInvestiValue;

    //private String capitalRestantString;
    private Long capitalRestantValue;

    private double tauxInteret;
    private Long amortissement;
    private double interet;
    private double annuite;

    @ManyToOne
    private Engagement engagement;
}
