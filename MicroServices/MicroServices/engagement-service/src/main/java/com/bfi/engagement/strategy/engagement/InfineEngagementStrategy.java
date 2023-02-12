package com.bfi.engagement.strategy.engagement;

import com.bfi.engagement.model.Amortissement;
import com.bfi.engagement.model.Engagement;
import com.bfi.engagement.strategy.interestPeriodicity.InterestContext;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class InfineEngagementStrategy implements EngagementStrategy {

    @Override
    public void execute(Engagement engagement) {
        InterestContext interestContext = new InterestContext();

        Calendar dateValeur = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        dateValeur.setTime(engagement.getDateValeur());
        Calendar dateEcheance = Calendar.getInstance();
        dateEcheance.setTime(engagement.getDateEch());
        int nbJoursRestant = engagement.getNbrJour();
         while (nbJoursRestant > 0) {
             Amortissement amortissement = new Amortissement();
             amortissement.setDebut(Date.valueOf(sdf.format(dateValeur.getTime())));
             interestContext.execute(dateValeur, amortissement, engagement);
             amortissement.setFin(Date.valueOf(sdf.format(dateValeur.getTime())));

             if (nbJoursRestant > amortissement.getNbJours()) {
                 System.out.println("Nombre des jours restant : " + nbJoursRestant);
                 amortissement.setCapitalInvestiValue(engagement.getMontant());
                 amortissement.setCapitalRestantValue(engagement.getMontant());
                 amortissement.setTauxInteret(engagement.getTauxInteret());

                 amortissement.setInteret(Math.round((amortissement.getNbJours() * amortissement.getCapitalRestantValue() * amortissement.getTauxInteret() / (365 * 100)) * 1000) / 1000.0);
                 amortissement.setAmortissement(0L);
                 amortissement.setAnnuite(amortissement.getInteret() + amortissement.getAmortissement());

                 engagement.getAmortissement().add(amortissement);
                 System.out.println("engagement = " + sdf.format(dateValeur.getTime()));
             } else {
                 System.out.println("Nombre des jours restant : " + nbJoursRestant);
                 amortissement.setNbJours(nbJoursRestant);
                 amortissement.setCapitalInvestiValue(engagement.getMontant());
                 amortissement.setCapitalRestantValue(engagement.getMontant());
                 amortissement.setTauxInteret(engagement.getTauxInteret());
                 amortissement.setInteret(Math.round((nbJoursRestant * amortissement.getCapitalRestantValue() * amortissement.getTauxInteret() / (365 * 100)) * 1000) / 1000.0);
                 amortissement.setAmortissement(amortissement.getCapitalInvestiValue());
                 amortissement.setAnnuite((Math.round((amortissement.getInteret() + amortissement.getAmortissement()) * 1000) / 1000.0));

                 //amortissement.setDebut(Date.valueOf(sdf.format(dateValeur.getTime())));
                 amortissement.setFin(Date.valueOf(sdf.format(dateEcheance.getTime())));
                 engagement.getAmortissement().add(amortissement);
             }
             //Nombre des jours restant
             nbJoursRestant -= amortissement.getNbJours();
         }
    }
}
