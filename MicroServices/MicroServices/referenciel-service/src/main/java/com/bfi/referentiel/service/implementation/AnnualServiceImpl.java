package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.AnnualDTO;
import com.bfi.referentiel.model.Annual;
import com.bfi.referentiel.model.Calendar;
import com.bfi.referentiel.repositories.AnnualRepository;
import com.bfi.referentiel.repositories.CalendarRepository;
import com.bfi.referentiel.service.AnnualService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnnualServiceImpl implements AnnualService {

    private final AnnualRepository annualRepository;
    private final CalendarRepository calendarRepository;
    private final ModelMapper modelMapper;

    public AnnualServiceImpl(AnnualRepository annualRepository, CalendarRepository calendarRepository, ModelMapper modelMapper) {
        this.annualRepository = annualRepository;
        this.calendarRepository = calendarRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<AnnualDTO> getAllAnnuals() {
        return annualRepository.findAll()
                .stream()
                .map(annual -> modelMapper.map(annual, AnnualDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<AnnualDTO> findAnnualsByCalendarId(Long id) {
        return annualRepository.findAnnualsByCalendar_Id(id)
                .stream()
                .map(annual -> modelMapper.map(annual, AnnualDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addAnnual(AnnualDTO annual) {
        Calendar calendarFromDB = calendarRepository.findById(annual.getCalendar().getId()).orElse(null);
        Annual annual1 = modelMapper.map(annual, Annual.class);
        annual1.setCalendar(calendarFromDB);
        annualRepository.save(annual1);
    }

    @Override
    public void updateAnnual(AnnualDTO annual) {
        if (annual != null && annual.getId() != null){
            Calendar calendarFromDB = calendarRepository.findById(annual.getCalendar().getId()).orElse(null);
            Annual annual1 = modelMapper.map(annual, Annual.class);
            if (calendarFromDB != null){
                annual1.setCalendar(calendarFromDB);
                }
            annualRepository.save(annual1);
        }
    }

    @Override
    public void deleteAnnual(Long id) {
        annualRepository.deleteById(id);
    }
}
