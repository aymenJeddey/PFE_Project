package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.CurrencyDTO;
import com.bfi.referentiel.model.Calendar;
import com.bfi.referentiel.model.Currency;
import com.bfi.referentiel.repositories.CalendarRepository;
import com.bfi.referentiel.repositories.CurrencyRepository;
import com.bfi.referentiel.service.CurrencyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CurrencyServiceImpl implements CurrencyService {

    private final CurrencyRepository currencyRepository;
    private final CalendarRepository calendarRepository;
    private final ModelMapper modelMapper;

    public CurrencyServiceImpl(CurrencyRepository currencyRepository, CalendarRepository calendarRepository, ModelMapper modelMapper) {
        this.currencyRepository = currencyRepository;
        this.calendarRepository = calendarRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CurrencyDTO> getAllCurrencies() {
        return currencyRepository.findAll()
                .stream()
                .map(currency -> modelMapper.map(currency, CurrencyDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addCurrency(CurrencyDTO currency) {
        Calendar calendarFromDB = calendarRepository.findById(currency.getCalendar().getId()).orElse(null);
        Currency currency1 = modelMapper.map(currency, Currency.class);
        currency1.setCalendar(calendarFromDB);
        currencyRepository.save(currency1);
    }

    @Override
    public void updateCurrency(CurrencyDTO currency) {
        if (currency != null && currency.getId() != null){
            //Calendar calendarFromDB = calendarRepository.findById(currency.getCalendar().getId()).orElse(null);
            Currency currency1 = modelMapper.map(currency, Currency.class);
            /*if (calendarFromDB != null){
                currency1.setCalendar(calendarFromDB);
                }*/
            currencyRepository.save(currency1);
        }
    }

    @Override
    public void deleteCurrency(Long id) { if (id != null) { currencyRepository.deleteById(id); }}
}
