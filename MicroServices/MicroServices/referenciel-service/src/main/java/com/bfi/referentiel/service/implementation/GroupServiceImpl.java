package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.GroupDTO;
import com.bfi.referentiel.model.Group;
import com.bfi.referentiel.repositories.GroupRepository;
import com.bfi.referentiel.service.GroupService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;
    private final ModelMapper modelMapper;

    public GroupServiceImpl(GroupRepository groupRepository, ModelMapper modelMapper) {
        this.groupRepository = groupRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<GroupDTO> getAllGroups() {
        return groupRepository.findAll()
                .stream()
                .map(group -> modelMapper.map(group, GroupDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addGroup(GroupDTO group) {
        groupRepository.save(modelMapper.map(group, Group.class));
    }

    @Override
    public void updateGroup(GroupDTO group) {
        if (group != null && group.getId() != null){
            Optional<Group> groupFromDB = groupRepository.findById(group.getId());
            Group group1 = modelMapper.map(group, Group.class);
            if (groupFromDB.isPresent()){ groupRepository.save(group1);}
        }
    }

    @Override
    public void deleteGroup(Long id) {
        groupRepository.deleteById(id);
    }
}
