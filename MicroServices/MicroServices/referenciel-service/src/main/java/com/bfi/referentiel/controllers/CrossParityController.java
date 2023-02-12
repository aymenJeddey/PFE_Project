package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.CrossParityDTO;
import com.bfi.referentiel.service.CrossParityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/CrossParities")
public class CrossParityController {

    private final CrossParityService crossParityService;

    public CrossParityController(CrossParityService crossParityService) {
        this.crossParityService = crossParityService;
    }

    @GetMapping
    public ResponseEntity<List<CrossParityDTO>> getCrossParities(){
        return ResponseEntity.ok(crossParityService.getAllCrossParities());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody CrossParityDTO crossParity){
        crossParityService.addCrossParity(crossParity);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idCrossParity}")
    public void delete(@PathVariable Long idCrossParity){ crossParityService.deleteCrossParity(idCrossParity); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody CrossParityDTO crossParity){
        crossParityService.updateCrossParity(crossParity);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
