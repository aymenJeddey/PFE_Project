package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.WeeklyDTO;
import com.bfi.referentiel.service.WeeklyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Weeklys")
public class WeeklyController {

    private final WeeklyService weeklyService;

    public WeeklyController(WeeklyService weeklyService) {
        this.weeklyService = weeklyService;
    }

    @GetMapping
    public ResponseEntity<List<WeeklyDTO>> getWeeklys(){
        return ResponseEntity.ok(weeklyService.getAllWeeklys());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody WeeklyDTO weekly){
        weeklyService.addEWeekly(weekly);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idWekkly}")
    public void delete(@PathVariable Long idWekkly){
        weeklyService.deleteWeekly(idWekkly);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody WeeklyDTO weekly){
        weeklyService.updateWeekly(weekly);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
