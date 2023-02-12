package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.CalendarDTO;

import java.util.List;

public interface CalendarService {

    void addCalendar(CalendarDTO calendar);

    void updateCalendar(CalendarDTO calendar);

    void deleteCalendar(Long id);

    List<CalendarDTO> getAllCalendars();
}
