package com.bfi.engagement.strategy.engagement;

import com.bfi.engagement.model.Engagement;
import com.bfi.engagement.strategy.interestPeriodicity.InterestContext;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class ConstantEngagementStrategy implements EngagementStrategy {

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
        //double annuiteAmount = (engagement.getMontant() + (engagement.getTauxInteret() * engagement.getNbrJour())) / nbIncrement;
        double x = Math.pow((1+(engagement.getTauxInteret() / 1200)),(-nbIncrement));
        double annuiteAmount = (engagement.getMontant() * (engagement.getTauxInteret() / 1200) )/ (1-x);
        System.out.println(annuiteAmount);


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
