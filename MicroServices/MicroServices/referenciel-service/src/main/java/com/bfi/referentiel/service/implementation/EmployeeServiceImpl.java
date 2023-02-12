package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.EmployeeDTO;
import com.bfi.referentiel.model.Agency;
import com.bfi.referentiel.model.Employee;
import com.bfi.referentiel.repositories.AgencyRepository;
import com.bfi.referentiel.repositories.EmployeeRepository;
import com.bfi.referentiel.service.EmployeeService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final AgencyRepository agencyRepository;
    private final ModelMapper modelMapper;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, AgencyRepository agencyRepository, ModelMapper modelMapper) {
        this.employeeRepository = employeeRepository;
        this.agencyRepository = agencyRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public List<EmployeeDTO> getAllEmployee() {
        return employeeRepository.findAll()
                .stream()
                .map(employee -> modelMapper.map(employee, EmployeeDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addEmployee(EmployeeDTO employee) {
        Agency agencyFromDB = agencyRepository.findById(employee.getAgency().getId()).orElse(null);
        Employee emp = modelMapper.map(employee, Employee.class);
        emp.setAgency(agencyFromDB);
        employeeRepository.save(emp);
    }

    @Override
    public void updateEmployee(EmployeeDTO employee) {
        if(employee != null && employee.getId() != null){
            Agency agencyFromDB = agencyRepository.findById(employee.getAgency().getId()).orElse(null);
            Employee emp = modelMapper.map(employee, Employee.class);
            if (agencyFromDB != null) {
                emp.setAgency(agencyFromDB);
            }
            employeeRepository.save(emp);
        }
    }

    @Override
    public List<EmployeeDTO> findEmployeesByAgencyId(Long id) {
        return employeeRepository.findEmployeesByAgency_Id(id)
                .stream()
                .map(employee -> modelMapper.map(employee, EmployeeDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteEmployee(Long id) {
        if(id != null){ employeeRepository.deleteById(id); }
    }

//            ObjectMapper mapper = new ObjectMapper();
//            try {
//                System.out.println(mapper.writeValueAsString(employee));
//            } catch (JsonProcessingException e) {
//                e.printStackTrace();
//            }
}
