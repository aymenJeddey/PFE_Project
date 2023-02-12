package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.ExceptionalDTO;

import java.util.List;

public interface ExceptionalService {

    void addExceptional(ExceptionalDTO exceptional);

    void updateExceptional(ExceptionalDTO exceptional);

    void deleteExceptional(Long id);

    List<ExceptionalDTO> getAllExceptionals();

    List<ExceptionalDTO> findExceptionalsByCalendarId(Long id);
}
