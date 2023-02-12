package com.bfi.engagement.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.bfi.engagement.common.enumeration.AnnuityType;
import com.bfi.engagement.common.enumeration.EngagementType;
import com.bfi.engagement.common.enumeration.Periodicity;
import com.bfi.engagement.model.enumeration.ContractState;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Engagement implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Enumerated(EnumType.STRING)
	private EngagementType typeEngagement;
	private Date dateValeur;
	private Date dateEch;
	private int nbrJour;

	@Enumerated(EnumType.STRING)
	private AnnuityType typeAnnuite;

	@Enumerated(EnumType.STRING)
	private Periodicity periodiciteCapital;

	@Enumerated(EnumType.STRING)
	private Periodicity periodiciteInteret;

	private double tauxInteret;
	private Date premierPaymentCapital;
	private Date premierPaymentInteret;
	private Long montant;

	@OneToMany(mappedBy = "engagement", cascade = CascadeType.ALL)
	private List<Amortissement> amortissement = new ArrayList<>();

	@Enumerated(EnumType.STRING)
	private ContractState valid;

	private String devise;
	private String deviseId;

	private String tier;
	private String tierId;

	// private int agency;
	private String account;
	private String accountId;

}
