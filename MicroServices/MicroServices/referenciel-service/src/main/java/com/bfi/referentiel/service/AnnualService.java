package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.AnnualDTO;

import java.util.List;

public interface AnnualService {

    void addAnnual(AnnualDTO annual);

    void updateAnnual(AnnualDTO annual);

    void deleteAnnual(Long id);

    List<AnnualDTO> getAllAnnuals();

    List<AnnualDTO> findAnnualsByCalendarId(Long id);
}
