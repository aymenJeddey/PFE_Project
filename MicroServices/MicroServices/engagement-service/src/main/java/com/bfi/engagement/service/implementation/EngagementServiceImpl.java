package com.bfi.engagement.service.implementation;

import com.bfi.engagement.model.Engagement;
import com.bfi.engagement.model.enumeration.ContractState;
import com.bfi.engagement.repositories.EngagementRepository;
import com.bfi.engagement.service.EngagementService;
import com.bfi.engagement.strategy.engagement.EngagementContext;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EngagementServiceImpl implements EngagementService {

    private final EngagementRepository engagementRepository;

    @Override
    public Engagement previewEngagement(Engagement engagement) {
        EngagementContext engagementContext = new EngagementContext();
        engagementContext.executeStrategy(engagement);
        return engagement;
    }

    @Override
    public void saveEngagement(Engagement engagement) {
        engagement.getAmortissement().forEach(amortissement -> {
            amortissement.setEngagement(engagement);
        });
        engagementRepository.save(engagement);
    }

    @Override
    public List<Engagement> getAllEngagements() {
        return engagementRepository.findAll();
    }

    @Override
    public void updateContractStatus(Long id, ContractState contracttStatus) {

        engagementRepository.findById(id).ifPresent(engagement -> {
                        engagement.setValid(contracttStatus);
                    engagementRepository.save(engagement);
                    }
            );

    }

}
