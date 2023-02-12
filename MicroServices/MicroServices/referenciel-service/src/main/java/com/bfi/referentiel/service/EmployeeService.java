package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {

    void addEmployee(EmployeeDTO employee);

    void updateEmployee(EmployeeDTO employee);

    void deleteEmployee(Long id);

    List<EmployeeDTO> getAllEmployee();

    List<EmployeeDTO> findEmployeesByAgencyId(Long id);
}
