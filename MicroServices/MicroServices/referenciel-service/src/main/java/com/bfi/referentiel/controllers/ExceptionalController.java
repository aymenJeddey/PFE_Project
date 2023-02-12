package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.ExceptionalDTO;
import com.bfi.referentiel.service.ExceptionalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Exceptionals")
public class ExceptionalController {

    private final ExceptionalService exceptionalService;

    public ExceptionalController(ExceptionalService exceptionalService) {
        this.exceptionalService = exceptionalService;
    }

    @GetMapping
    public ResponseEntity<List<ExceptionalDTO>> getExceptionals(){
        return ResponseEntity.ok(exceptionalService.getAllExceptionals());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody ExceptionalDTO exceptional){
        exceptionalService.addExceptional(exceptional);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idExceptional}")
    public void delete(@PathVariable Long idExceptional){
        exceptionalService.deleteExceptional(idExceptional);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody ExceptionalDTO exceptional){
        exceptionalService.updateExceptional(exceptional);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
