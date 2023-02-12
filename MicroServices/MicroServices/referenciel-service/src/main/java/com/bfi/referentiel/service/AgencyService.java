package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.AgencyDTO;

import java.util.List;

public interface AgencyService {

    void addAgency(AgencyDTO agency);

    void updateAgency(AgencyDTO agency);

    void deleteAgency(Long id);

    List<AgencyDTO> getAllAgency();

   // List<AgencyDTO> findAgencyByTierId(Long id);
}
