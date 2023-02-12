package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.EmployeeDTO;
import com.bfi.referentiel.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getEmployees(){
        return ResponseEntity.ok(employeeService.getAllEmployee());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody EmployeeDTO employee){
        employeeService.addEmployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idEmployee}")
    public void delete(@PathVariable Long idEmployee){
        employeeService.deleteEmployee(idEmployee);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody EmployeeDTO employee){
        employeeService.updateEmployee(employee);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
