package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.AnnualDTO;
import com.bfi.referentiel.service.AnnualService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Annuals")
public class AnnualController {

    private final AnnualService annualService;

    public AnnualController(AnnualService annualService) {
        this.annualService = annualService;
    }

    @GetMapping
    public ResponseEntity<List<AnnualDTO>> getAnnuals(){
        return ResponseEntity.ok(annualService.getAllAnnuals());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody AnnualDTO annual){
        annualService.addAnnual(annual);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idAnnual}")
    public void delete(@PathVariable Long idAnnual){ annualService.deleteAnnual(idAnnual); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody AnnualDTO annual){
        annualService.updateAnnual(annual);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
