package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.CountryDTO;

import java.util.List;

public interface CountryService {

    void addCountry(CountryDTO country);

    void updateCountry(CountryDTO country);

    void deleteCountry(Long id);

    List<CountryDTO> getAllCountries();
}
