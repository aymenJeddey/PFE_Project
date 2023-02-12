package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.CountryDTO;
import com.bfi.referentiel.service.CountryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Countries")
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public ResponseEntity<List<CountryDTO>> getCalendars(){
        return ResponseEntity.ok(countryService.getAllCountries());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody CountryDTO country){
        countryService.addCountry(country);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idCountry}")
    public void delete(@PathVariable Long idCountry){ countryService.deleteCountry(idCountry); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody CountryDTO country){
        countryService.updateCountry(country);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
