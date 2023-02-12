package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.AccountDTO;
import com.bfi.referentiel.common.dto.AgencyDTO;
import com.bfi.referentiel.common.dto.EmployeeDTO;
import com.bfi.referentiel.service.AccountService;
import com.bfi.referentiel.service.AgencyService;
import com.bfi.referentiel.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Agencies")
public class AgencyController {

    private final AgencyService agencyService;
    private final EmployeeService employeeService;
    private final AccountService accountService;

    public AgencyController(AgencyService agencyService, EmployeeService employeeService, AccountService accountService) {
        this.agencyService = agencyService;
        this.employeeService = employeeService;
        this.accountService = accountService;
    }

    @GetMapping
    public ResponseEntity<List<AgencyDTO>> getAgencies(){
        return ResponseEntity.ok(agencyService.getAllAgency());
    }

    @GetMapping("/{id}/Employees")
    public ResponseEntity<List<EmployeeDTO>> getEmployees(@PathVariable Long id){
        return ResponseEntity.ok(employeeService.findEmployeesByAgencyId(id));
    }

    @GetMapping("{id}/Accounts")
    public ResponseEntity<List<AccountDTO>> getAccountsByAgencyId(@PathVariable Long id){
        return ResponseEntity.ok(accountService.findAccountsByAgencyId(id));
    }

//    @GetMapping("{id}/Tier")
//    public ResponseEntity<List<AgencyDTO>> getAgencyByTierId(@PathVariable Long id){
//        return ResponseEntity.ok(agencyService.findAgencyByTierId(id));
//    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody AgencyDTO agency){
        agencyService.addAgency(agency);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idAgency}")
    public void delete(@PathVariable Long idAgency){ agencyService.deleteAgency(idAgency); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody AgencyDTO agency){
        agencyService.updateAgency(agency);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
