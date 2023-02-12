package com.bfi.referentiel.controllers;

import com.bfi.referentiel.model.Role;
import com.bfi.referentiel.service.AccountService;
import com.bfi.referentiel.service.RoleService;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


//@ExtendWith(MockitoExtension.class)
@WebMvcTest(RoleController.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class RoleControllerTest {

    @MockBean
    private RoleService roleService;

    @InjectMocks
    private RoleController controller;
    @Autowired
    MockMvc mockMvc;



    @Test
    @Order(1)
    void getRoles() throws Exception {
        mockMvc.perform(get("/Roles"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(0));
    }

    @Test
    @Order(2)
    void add() throws Exception {
        Role role = new Role();
        role.setRole("ROLE_Test");
        role.setId(7L);
        mockMvc.perform(post("/Roles")
                .contentType("application/json")
                .content("{\"id\":\"" + role.getId() + "\",\"role\":\"" + role.getRole() + "\"}"));
    }


    @Test
    @Order(3)
    void update() throws Exception {
        mockMvc.perform(put("/Roles/{id}", 7L)
                .contentType("application/json")
                .content("{\"id\":\"7\",\"role\":\"ROLE_ADMIN\"}"))
                .andExpect(status().isNoContent());
    }
}