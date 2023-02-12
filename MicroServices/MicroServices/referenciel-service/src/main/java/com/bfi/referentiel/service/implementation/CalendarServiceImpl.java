package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.CalendarDTO;
import com.bfi.referentiel.model.Calendar;
import com.bfi.referentiel.repositories.CalendarRepository;
import com.bfi.referentiel.service.CalendarService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CalendarServiceImpl implements CalendarService {

    private final CalendarRepository calendarRepository;
    private final ModelMapper modelMapper;

    public CalendarServiceImpl(CalendarRepository calendarRepository, ModelMapper modelMapper) {
        this.calendarRepository = calendarRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CalendarDTO> getAllCalendars() {
        return calendarRepository.findAll()
                .stream()
                .map(calendar -> modelMapper.map(calendar, CalendarDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addCalendar(CalendarDTO calendar) {
        calendarRepository.save(modelMapper.map(calendar, Calendar.class));
    }

    @Override
    public void updateCalendar(CalendarDTO calendar) {
        if (calendar != null && calendar.getId() != null){
            Optional<Calendar> calendarFromDB = calendarRepository.findById(calendar.getId());
            Calendar calendar1 = modelMapper.map(calendar, Calendar.class);
            if (calendarFromDB.isPresent()){ calendarRepository.save(calendar1);}
        }
    }

    @Override
    public void deleteCalendar(Long id) {
        calendarRepository.deleteById(id);
    }
}
