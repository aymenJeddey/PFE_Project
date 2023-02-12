package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.EmployeeDTO;
import com.bfi.referentiel.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


public class RestSpecController {

    private final EmployeeService employeeService;

    public RestSpecController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    /**
     * Controller per Resource <=> Data (Entities / DTO)
     *
     */


    //add update delete get
    @PostMapping("/")
    public ResponseEntity<Void> add(@RequestBody EmployeeDTO employeeDTO) {
        employeeService.addEmployee(employeeDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/")
    public void update(@RequestBody EmployeeDTO employeeDTO) {
        employeeService.addEmployee(employeeDTO);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
    }

    @GetMapping("/{id}/{name}")
    public ResponseEntity<EmployeeDTO> getEmployee() {
        return ResponseEntity.ok(null);
    }

    // GET AGENCY EMPLOYEES GIVEN BY AGENCY ID => Agency controller
    // /agencies
    // complete URL = localhost:8080/agencies/id/employees
    @GetMapping("/")
    public ResponseEntity<List<EmployeeDTO>> getEmployees(Long id) {
        return ResponseEntity.ok(employeeService.getAllEmployee());
    }
}
