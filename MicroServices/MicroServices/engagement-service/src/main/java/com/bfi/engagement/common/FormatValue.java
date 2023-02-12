package com.bfi.engagement.common;

import com.bfi.engagement.model.Amortissement;
import com.bfi.engagement.model.Engagement;

import java.math.RoundingMode;
import java.text.DecimalFormat;

public class FormatValue {

    public void toStringFormat(Amortissement amortissement, Engagement engagement) {
        DecimalFormat df = new DecimalFormat();
        df.setMaximumFractionDigits(3);
        df.setGroupingSize(3);
        //df.setMinimumFractionDigits(3);
        df.setRoundingMode(RoundingMode.HALF_UP);
        df.setDecimalSeparatorAlwaysShown ( true ) ;

//        amortissement.setCapitalInvestiString(df.format(engagement.getMontant()));
//        amortissement.setCapitalRestantString(df.format(engagement.getMontant()));
    }
}
