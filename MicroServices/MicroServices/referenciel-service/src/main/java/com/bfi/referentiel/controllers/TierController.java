package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.TierDTO;
import com.bfi.referentiel.common.enumeration.CustomerType;
import com.bfi.referentiel.service.TierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Tiers")
public class TierController {

    private final TierService tierService;

    public TierController(TierService tierService) {
        this.tierService = tierService;
    }

    @GetMapping
    public ResponseEntity<List<TierDTO>> getTiers(){
        return ResponseEntity.ok(tierService.getAllTiers());
    }

    @GetMapping("/{idTier}")
    public ResponseEntity<List<TierDTO>> getTierbyId(@PathVariable Long idTier){
        return ResponseEntity.ok(tierService.getTierById(idTier));
    }

    @GetMapping("/Banks")
    public ResponseEntity<List<TierDTO>> getBanks(){
        return ResponseEntity.ok(tierService.getByCustomerType(CustomerType.moralCustomer));
    }

    @GetMapping("/Persons")
    public List<TierDTO> getPersons(){
        return tierService.getByCustomerType(CustomerType.physicalCustomer);
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody TierDTO tier){
        tierService.addTier(tier);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idTier}")
    public void delete(@PathVariable Long idTier){
        tierService.deleteTier(idTier);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody TierDTO tier){
        tierService.updateTier(tier);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
