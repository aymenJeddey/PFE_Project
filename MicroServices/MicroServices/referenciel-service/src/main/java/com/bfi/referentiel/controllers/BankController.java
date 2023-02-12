package com.bfi.referentiel.controllers;


import com.bfi.referentiel.common.dto.BankDTO;
import com.bfi.referentiel.service.BankService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Banks")
public class BankController {

    private final BankService bankService;

    public BankController(BankService bankService) {
        this.bankService = bankService;
    }

    @GetMapping
    public ResponseEntity<List<BankDTO>> getBanks(){
        return ResponseEntity.ok(bankService.getAllBanks());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody BankDTO bank){
        bankService.addBank(bank);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idBank}")
    public void delete(@PathVariable Long idBank){ bankService.deleteBank(idBank); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody BankDTO bank){
        bankService.updateBank(bank);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
