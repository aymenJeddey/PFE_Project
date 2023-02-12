package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.ExceptionalDTO;
import com.bfi.referentiel.model.Calendar;
import com.bfi.referentiel.model.Exceptional;
import com.bfi.referentiel.repositories.CalendarRepository;
import com.bfi.referentiel.repositories.ExceptionalRepository;
import com.bfi.referentiel.service.ExceptionalService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExceptionalServiceImpl implements ExceptionalService {

    private final ExceptionalRepository exceptionalRepository;
    private final CalendarRepository calendarRepository;
    private final ModelMapper modelMapper;

    public ExceptionalServiceImpl(ExceptionalRepository exceptionalRepository, CalendarRepository calendarRepository, ModelMapper modelMapper) {
        this.exceptionalRepository = exceptionalRepository;
        this.calendarRepository = calendarRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ExceptionalDTO> getAllExceptionals() {
        return exceptionalRepository.findAll()
                .stream()
                .map(exceptional -> modelMapper.map(exceptional, ExceptionalDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ExceptionalDTO> findExceptionalsByCalendarId(Long id) {
        return exceptionalRepository.findExceptionalsByCalendar_Id(id)
                .stream()
                .map(exceptional -> modelMapper.map(exceptional, ExceptionalDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addExceptional(ExceptionalDTO exceptional) {
        Calendar calendarFromDB = calendarRepository.findById(exceptional.getCalendar().getId()).orElse(null);
        Exceptional exceptional1 = modelMapper.map(exceptional, Exceptional.class);
        exceptional1.setCalendar(calendarFromDB);
        exceptionalRepository.save(exceptional1);
    }

    @Override
    public void updateExceptional(ExceptionalDTO exceptional) {
        if (exceptional != null && exceptional.getId() != null){
            Calendar calendarFromDB = calendarRepository.findById(exceptional.getCalendar().getId()).orElse(null);
            Exceptional exceptional1 = modelMapper.map(exceptional, Exceptional.class);
            if (calendarFromDB != null){
                exceptional1.setCalendar(calendarFromDB);
                }
            exceptionalRepository.save(exceptional1);
        }
    }

    @Override
    public void deleteExceptional(Long id) {
        exceptionalRepository.deleteById(id);
    }
}
