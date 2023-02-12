package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.RoleDTO;

import java.util.List;

public interface RoleService {

    void addRole(RoleDTO role);

    void updateRole(RoleDTO role);

    void deleteRole(Long id);

    List<RoleDTO> getAllRoles();
}
