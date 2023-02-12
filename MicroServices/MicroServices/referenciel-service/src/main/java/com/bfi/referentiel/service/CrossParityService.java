package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.CrossParityDTO;

import java.util.List;

public interface CrossParityService {

    void addCrossParity(CrossParityDTO crossParity);

    void updateCrossParity(CrossParityDTO crossParity);

    void deleteCrossParity(Long id);

    List<CrossParityDTO> getAllCrossParities();
}
