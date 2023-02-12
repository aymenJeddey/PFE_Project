package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.CurrencyPriceDTO;
import com.bfi.referentiel.service.CurrencyPriceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/CurrencyPrices")
public class CurrencyPriceController {

    private final CurrencyPriceService currencyPriceService;

    public CurrencyPriceController(CurrencyPriceService currencyPriceService) {
        this.currencyPriceService = currencyPriceService;
    }

    @GetMapping
    public ResponseEntity<List<CurrencyPriceDTO>> getCurrencyPrices(){
        return ResponseEntity.ok(currencyPriceService.getAllCurrencyPrices());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody CurrencyPriceDTO currencyPrice){
        currencyPriceService.addCurrencyPrice(currencyPrice);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idCurrencyPrice}")
    public void delete(@PathVariable Long idCurrencyPrice){ currencyPriceService.deleteCurrencyPrice(idCurrencyPrice); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody CurrencyPriceDTO currencyPrice){
        currencyPriceService.updateCurrencyPrice(currencyPrice);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
