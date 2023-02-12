package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.GroupDTO;
import com.bfi.referentiel.service.GroupService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Groups")
public class GroupController {

    private final GroupService groupService;

    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }

    @GetMapping
    public ResponseEntity<List<GroupDTO>> getGroups(){
        return ResponseEntity.ok(groupService.getAllGroups());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody GroupDTO group){
        groupService.addGroup(group);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idGroup}")
    public void delete(@PathVariable Long idGroup){
        groupService.deleteGroup(idGroup);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody GroupDTO group){
        groupService.updateGroup(group);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
