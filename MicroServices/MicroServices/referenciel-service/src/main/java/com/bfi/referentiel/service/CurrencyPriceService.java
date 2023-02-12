package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.CurrencyPriceDTO;

import java.util.List;

public interface CurrencyPriceService {

    void addCurrencyPrice(CurrencyPriceDTO currencyPrice);

    void updateCurrencyPrice(CurrencyPriceDTO currencyPrice);

    void deleteCurrencyPrice(Long id);

    List<CurrencyPriceDTO> getAllCurrencyPrices();
}
