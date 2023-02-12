package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.RoleDTO;
import com.bfi.referentiel.model.Role;
import com.bfi.referentiel.repositories.RoleRepository;
import com.bfi.referentiel.service.RoleService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;
    private final ModelMapper modelMapper;

    public RoleServiceImpl(RoleRepository roleRepository, ModelMapper modelMapper) {
        this.roleRepository = roleRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<RoleDTO> getAllRoles() {
        return roleRepository.findAll()
                .stream()
                .map(role -> modelMapper.map(role, RoleDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addRole(RoleDTO role) {
        roleRepository.save(modelMapper.map(role, Role.class));
    }

    @Override
    public void updateRole(RoleDTO role) {
        if (role != null && role.getId() != null){
            Optional<Role> roleFromDB = roleRepository.findById(role.getId());
            Role role1 = modelMapper.map(role, Role.class);
            if (roleFromDB.isPresent()){ roleRepository.save(role1);}
        }
    }

    @Override
    public void deleteRole(Long id) {
        roleRepository.deleteById(id);
    }
}
