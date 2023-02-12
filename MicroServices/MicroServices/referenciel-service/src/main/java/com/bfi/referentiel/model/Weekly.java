package com.bfi.referentiel.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.DayOfWeek;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Weekly implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private DayOfWeek day;

    @ManyToOne
    private Calendar calendar;
}
