package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.RoleDTO;
import com.bfi.referentiel.service.RoleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Roles")
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping
    public ResponseEntity<List<RoleDTO>> getRoles(){
        return ResponseEntity.ok(roleService.getAllRoles());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody RoleDTO role){
        roleService.addRole(role);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idRole}")
    public void delete(@PathVariable Long idRole){
        roleService.deleteRole(idRole);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody RoleDTO role){
        roleService.updateRole(role);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
