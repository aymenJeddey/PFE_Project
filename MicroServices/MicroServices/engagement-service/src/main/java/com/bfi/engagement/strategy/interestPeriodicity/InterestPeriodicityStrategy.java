package com.bfi.engagement.strategy.interestPeriodicity;

import com.bfi.engagement.model.Amortissement;
import com.bfi.engagement.model.Engagement;

import java.util.Calendar;

public interface InterestPeriodicityStrategy {

    void execute(Calendar calendar, Amortissement amortissement, Engagement engagement);
}
