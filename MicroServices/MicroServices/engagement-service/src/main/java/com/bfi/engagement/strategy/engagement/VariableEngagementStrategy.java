package com.bfi.engagement.strategy.engagement;

import com.bfi.engagement.model.Amortissement;
import com.bfi.engagement.model.Engagement;
import com.bfi.engagement.strategy.interestPeriodicity.InterestContext;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class VariableEngagementStrategy implements EngagementStrategy {

    @Override
    public void execute(Engagement engagement) {
        InterestContext interestContext = new InterestContext();

        Calendar dateValeur = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        dateValeur.setTime(engagement.getDateValeur());
        Calendar dateEcheance = Calendar.getInstance();
        dateEcheance.setTime(engagement.getDateEch());
        int nbJoursRestant = engagement.getNbrJour();
        int nbIncrement = getIncrementNbr(engagement);
        long capitalRestantDu = engagement.getMontant();
        long amortissementAmount = engagement.getMontant()  / nbIncrement;
        while (nbJoursRestant > 0) {
            Amortissement amortissement = new Amortissement();
            amortissement.setDebut(Date.valueOf(sdf.format(dateValeur.getTime())));
            interestContext.execute(dateValeur, amortissement, engagement);
            amortissement.setFin(Date.valueOf(sdf.format(dateValeur.getTime())));

            if (nbJoursRestant > amortissement.getNbJours()) {
                System.out.println("Nombre des jours restant : " + nbJoursRestant);
                amortissement.setCapitalInvestiValue(engagement.getMontant());
                if (nbJoursRestant ==  engagement.getNbrJour()) {amortissement.setCapitalRestantValue(engagement.getMontant());}
                else {
                    capitalRestantDu -= amortissementAmount;
                    amortissement.setCapitalRestantValue(capitalRestantDu);
                }
                amortissement.setTauxInteret(engagement.getTauxInteret());

                amortissement.setInteret(Math.round((amortissement.getNbJours() * amortissement.getCapitalRestantValue() * amortissement.getTauxInteret() / (365 * 100)) * 1000) / 1000.0);
                amortissement.setAmortissement(amortissementAmount);
                amortissement.setAnnuite(amortissement.getInteret() + amortissement.getAmortissement());

                engagement.getAmortissement().add(amortissement);
                System.out.println("engagement = " + sdf.format(dateValeur.getTime()));
            } else {
                System.out.println("Nombre des jours restant : " + nbJoursRestant);
                amortissement.setNbJours(nbJoursRestant);
                amortissement.setCapitalInvestiValue(engagement.getMontant());
                amortissement.setCapitalRestantValue(capitalRestantDu - amortissementAmount);
                amortissement.setTauxInteret(engagement.getTauxInteret());
                amortissement.setInteret(Math.round((nbJoursRestant * amortissement.getCapitalRestantValue() * amortissement.getTauxInteret() / (365 * 100)) * 1000) / 1000.0);
                amortissement.setAmortissement(amortissementAmount);
                amortissement.setAnnuite((Math.round((amortissement.getInteret() + amortissement.getAmortissement()) * 1000) / 1000.0));

                //amortissement.setDebut(Date.valueOf(sdf.format(dateValeur.getTime())));
                amortissement.setFin(Date.valueOf(sdf.format(dateEcheance.getTime())));
                engagement.getAmortissement().add(amortissement);
            }
            //Nombre des jours restant
            nbJoursRestant -= amortissement.getNbJours();
        }
    }


    public int getIncrementNbr(Engagement engagement) {
        int nbJoursRestant = engagement.getNbrJour();
        Calendar dateInit = Calendar.getInstance();
        dateInit.setTime(engagement.getDateValeur());
        int increment = 0;
        while (nbJoursRestant > 0){
            increment++;
            nbJoursRestant -= dateInit.getActualMaximum(Calendar.DAY_OF_MONTH);
            dateInit.add(Calendar.MONTH, 1);
        }
        return increment;
    }
}
