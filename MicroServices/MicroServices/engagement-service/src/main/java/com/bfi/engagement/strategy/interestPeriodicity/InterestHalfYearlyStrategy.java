package com.bfi.engagement.strategy.interestPeriodicity;

import com.bfi.engagement.model.Amortissement;
import com.bfi.engagement.model.Engagement;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;

public class InterestHalfYearlyStrategy implements InterestPeriodicityStrategy {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    @Override
    public void execute(Calendar calendar, Amortissement amortissement, Engagement engagement) {
        System.out.println("InterestHalfYearlyStrategy");
        String inputString1 = sdf.format(calendar.getTime());
        calendar.add(Calendar.MONTH, 6);
        String inputString2 = sdf.format(calendar.getTime());

        LocalDate date1 = LocalDate.parse(inputString1);
        LocalDate date2 = LocalDate.parse(inputString2);
        long daysDiff = ChronoUnit.DAYS.between(date1, date2);
        System.out.println("date1 = " + daysDiff);
        amortissement.setNbJours((int) daysDiff);
    }
}
