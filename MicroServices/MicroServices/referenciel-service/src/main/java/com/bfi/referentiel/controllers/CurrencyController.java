package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.CurrencyDTO;
import com.bfi.referentiel.service.CurrencyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Currencies")
public class CurrencyController {

    private final CurrencyService currencyService;

    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping
    public ResponseEntity<List<CurrencyDTO>> getCurrencies(){
        return ResponseEntity.ok(currencyService.getAllCurrencies());
    }
    @PostMapping
    public ResponseEntity<Void> add(@RequestBody CurrencyDTO currency){
        currencyService.addCurrency(currency);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idCurrency}")
    public void delete(@PathVariable Long idCurrency){ currencyService.deleteCurrency(idCurrency); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody CurrencyDTO currency){
        currencyService.updateCurrency(currency);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
