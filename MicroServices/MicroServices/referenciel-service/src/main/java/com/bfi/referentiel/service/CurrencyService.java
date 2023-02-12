package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.CurrencyDTO;

import java.util.List;

public interface CurrencyService {

    void addCurrency(CurrencyDTO currency);

    void updateCurrency(CurrencyDTO currency);

    void deleteCurrency(Long id);

    List<CurrencyDTO> getAllCurrencies();
}
