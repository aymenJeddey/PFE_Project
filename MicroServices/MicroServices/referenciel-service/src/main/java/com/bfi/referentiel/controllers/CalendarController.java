package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.AnnualDTO;
import com.bfi.referentiel.common.dto.CalendarDTO;
import com.bfi.referentiel.common.dto.ExceptionalDTO;
import com.bfi.referentiel.common.dto.WeeklyDTO;
import com.bfi.referentiel.service.AnnualService;
import com.bfi.referentiel.service.CalendarService;
import com.bfi.referentiel.service.ExceptionalService;
import com.bfi.referentiel.service.WeeklyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Calendars")
public class CalendarController {

    private final CalendarService calendarService;
    private final AnnualService annualService;
    private final ExceptionalService exceptionalService;
    private final WeeklyService weeklyService;

    public CalendarController(CalendarService calendarService, AnnualService annualService, ExceptionalService exceptionalService, WeeklyService weeklyService) {
        this.calendarService = calendarService;
        this.annualService = annualService;
        this.exceptionalService = exceptionalService;
        this.weeklyService = weeklyService;
    }

    @GetMapping
    public ResponseEntity<List<CalendarDTO>> getCalendars(){
        return ResponseEntity.ok(calendarService.getAllCalendars());
    }

    @GetMapping("/{id}/Annuals")
    public ResponseEntity<List<AnnualDTO>> getAnnualsByCalendarId(@PathVariable Long id){
        return ResponseEntity.ok(annualService.findAnnualsByCalendarId(id));
    }

    @GetMapping("/{id}/Exceptionals")
    public ResponseEntity<List<ExceptionalDTO>> getExceptionalByCalendarId(@PathVariable Long id){
        return ResponseEntity.ok(exceptionalService.findExceptionalsByCalendarId(id));
    }

    @GetMapping("/{id}/Weeklys")
    public ResponseEntity<List<WeeklyDTO>> getWeeklyByCalendarId(@PathVariable Long id){
        return ResponseEntity.ok(weeklyService.findWeeklysByCalendarId(id));
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody CalendarDTO calendar){
        calendarService.addCalendar(calendar);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idCalendar}")
    public void delete(@PathVariable Long idCalendar){ calendarService.deleteCalendar(idCalendar); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody CalendarDTO calendar){
        calendarService.updateCalendar(calendar);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
