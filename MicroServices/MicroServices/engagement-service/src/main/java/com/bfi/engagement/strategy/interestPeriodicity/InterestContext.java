package com.bfi.engagement.strategy.interestPeriodicity;

import com.bfi.engagement.model.Amortissement;
import com.bfi.engagement.model.Engagement;

import java.util.Calendar;

public class InterestContext {

    private InterestPeriodicityStrategy interestPeriodicityStrategy;

    public void execute(Calendar calendar, Amortissement amortissement, Engagement engagement) {
        switch (engagement.getPeriodiciteInteret()) {
            case Mensuelle:
                interestPeriodicityStrategy = new InterestMonthlyStrategy();
                interestPeriodicityStrategy.execute(calendar, amortissement, engagement);
                break;
            case Trimestrielle:
                interestPeriodicityStrategy = new InterestQuarterlyStrategy();
                interestPeriodicityStrategy.execute(calendar, amortissement, engagement);
                break;
            case Semestrielle:
                interestPeriodicityStrategy = new InterestHalfYearlyStrategy();
                interestPeriodicityStrategy.execute(calendar, amortissement, engagement);
                break;
            case Annuelle:
                interestPeriodicityStrategy = new InterestAnnualStrategy();
                interestPeriodicityStrategy.execute(calendar, amortissement, engagement);
                break;
        }
    }
}
