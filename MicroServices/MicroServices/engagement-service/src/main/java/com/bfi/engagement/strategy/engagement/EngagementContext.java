package com.bfi.engagement.strategy.engagement;

import com.bfi.engagement.model.Engagement;

public class EngagementContext {

    private EngagementStrategy engagementStrategy;

    public void executeStrategy(Engagement strategy) {

        switch(strategy.getTypeAnnuite()) {
            case InFine:
                engagementStrategy = new InfineEngagementStrategy();
                engagementStrategy.execute(strategy);
                break;
            case Constante:
                engagementStrategy = new ConstantEngagementStrategy();
                engagementStrategy.execute(strategy);
                break;
            case Variable:
                engagementStrategy = new VariableEngagementStrategy();
                engagementStrategy.execute(strategy);
                break;

        }
    }
}
