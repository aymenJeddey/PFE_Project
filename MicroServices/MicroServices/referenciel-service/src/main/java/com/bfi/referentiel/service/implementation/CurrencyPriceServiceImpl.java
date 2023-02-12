package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.CurrencyPriceDTO;
import com.bfi.referentiel.model.CurrencyPrice;
import com.bfi.referentiel.repositories.CurrencyPriceRepository;
import com.bfi.referentiel.service.CurrencyPriceService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CurrencyPriceServiceImpl implements CurrencyPriceService {

    private final CurrencyPriceRepository currencyPriceRepository;
    private final ModelMapper modelMapper;

    public CurrencyPriceServiceImpl(CurrencyPriceRepository currencyPriceRepository, ModelMapper modelMapper) {
        this.currencyPriceRepository = currencyPriceRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CurrencyPriceDTO> getAllCurrencyPrices() {
        return currencyPriceRepository.findAll()
                .stream()
                .map(currencyPrice -> modelMapper.map(currencyPrice, CurrencyPriceDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addCurrencyPrice(CurrencyPriceDTO currencyPrice) {
        currencyPriceRepository.save(modelMapper.map(currencyPrice, CurrencyPrice.class));
    }

    @Override
    public void updateCurrencyPrice(CurrencyPriceDTO currencyPrice) {
        if (currencyPrice != null && currencyPrice.getId() != null){
            Optional<CurrencyPrice> currencyPriceFromDB = currencyPriceRepository.findById(currencyPrice.getId());
            CurrencyPrice currency1 = modelMapper.map(currencyPrice, CurrencyPrice.class);
            if (currencyPriceFromDB.isPresent()){ currencyPriceRepository.save(currency1);}
        }
    }

    @Override
    public void deleteCurrencyPrice(Long id) {
        currencyPriceRepository.deleteById(id);
    }
}
