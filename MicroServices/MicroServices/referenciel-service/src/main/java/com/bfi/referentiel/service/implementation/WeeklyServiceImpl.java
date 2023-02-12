package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.WeeklyDTO;
import com.bfi.referentiel.model.Calendar;
import com.bfi.referentiel.model.Weekly;
import com.bfi.referentiel.repositories.CalendarRepository;
import com.bfi.referentiel.repositories.WeeklyRepository;
import com.bfi.referentiel.service.WeeklyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeeklyServiceImpl implements WeeklyService {

    private final WeeklyRepository weeklyRepository;
    private final CalendarRepository calendarRepository;
    private final ModelMapper modelMapper;

    public WeeklyServiceImpl(WeeklyRepository weeklyRepository, CalendarRepository calendarRepository, ModelMapper modelMapper) {
        this.weeklyRepository = weeklyRepository;
        this.calendarRepository = calendarRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<WeeklyDTO> getAllWeeklys() {
        return weeklyRepository.findAll()
                .stream()
                .map(weekly -> modelMapper.map(weekly, WeeklyDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<WeeklyDTO> findWeeklysByCalendarId(Long id) {
        return weeklyRepository.findWeekliesByCalendar_Id(id)
                .stream()
                .map(weekly -> modelMapper.map(weekly, WeeklyDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addEWeekly(WeeklyDTO weekly) {
        Calendar calendarFromDB = calendarRepository.findById(weekly.getCalendar().getId()).orElse(null);
        Weekly weekly1 = modelMapper.map(weekly, Weekly.class);
        weekly1.setCalendar(calendarFromDB);
        weeklyRepository.save(weekly1);
    }

    @Override
    public void updateWeekly(WeeklyDTO weekly) {
        if (weekly != null && weekly.getId() != null){
            Calendar calendarFromDB = calendarRepository.findById(weekly.getCalendar().getId()).orElse(null);
            Weekly weekly1 = modelMapper.map(weekly, Weekly.class);
            if (calendarFromDB != null){
                weekly1.setCalendar(calendarFromDB);
                }
            weeklyRepository.save(weekly1);
        }
    }

    @Override
    public void deleteWeekly(Long id) {
        weeklyRepository.deleteById(id);
    }
}
