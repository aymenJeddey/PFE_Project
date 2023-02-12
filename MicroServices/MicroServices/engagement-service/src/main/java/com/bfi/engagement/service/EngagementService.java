package com.bfi.engagement.service;

import com.bfi.engagement.model.Engagement;
import com.bfi.engagement.model.enumeration.ContractState;

import java.util.List;

public interface EngagementService {

  Engagement previewEngagement(Engagement engagement);

  void saveEngagement(Engagement engagement);

  List<Engagement> getAllEngagements();

    void updateContractStatus(Long id, ContractState contracttStatus);
}
