package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.CountryDTO;
import com.bfi.referentiel.model.Country;
import com.bfi.referentiel.repositories.CountryRepository;
import com.bfi.referentiel.service.CountryService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;
    private final ModelMapper modelMapper;

    public CountryServiceImpl(CountryRepository countryRepository, ModelMapper modelMapper) {
        this.countryRepository = countryRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CountryDTO> getAllCountries() {
        return countryRepository.findAll()
                .stream()
                .map(country -> modelMapper.map(country, CountryDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addCountry(CountryDTO country) {
        countryRepository.save(modelMapper.map(country, Country.class));
    }

    @Override
    public void updateCountry(CountryDTO country) {
        if (country != null && country.getId() != null){
            Optional<Country> countryFromDB = countryRepository.findById(country.getId());
            Country country1 = modelMapper.map(country, Country.class);
            if (countryFromDB.isPresent()){ countryRepository.save(country1);}
        }
    }

    @Override
    public void deleteCountry(Long id) {
        countryRepository.deleteById(id);
    }
}
