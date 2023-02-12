package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.WeeklyDTO;

import java.util.List;

public interface WeeklyService {

    void addEWeekly(WeeklyDTO weekly);

    void updateWeekly(WeeklyDTO weekly);

    void deleteWeekly(Long id);

    List<WeeklyDTO> getAllWeeklys();

    List<WeeklyDTO> findWeeklysByCalendarId(Long id);
}
