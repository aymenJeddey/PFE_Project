package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.GroupDTO;

import java.util.List;

public interface GroupService {

    void addGroup(GroupDTO group);

    void updateGroup(GroupDTO group);

    void deleteGroup(Long id);

    List<GroupDTO> getAllGroups();
}
