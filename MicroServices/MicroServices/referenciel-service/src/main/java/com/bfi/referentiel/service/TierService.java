package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.TierDTO;
import com.bfi.referentiel.common.enumeration.CustomerType;

import java.util.List;

public interface TierService {

    void addTier(TierDTO tier);

    void updateTier(TierDTO tier);

    void deleteTier(Long id);

    List<TierDTO> getAllTiers();

    List<TierDTO> getByCustomerType(CustomerType customerType);

    List<TierDTO> getTierById(Long idTier);
}
