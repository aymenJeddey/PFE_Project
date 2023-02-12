package com.bfi.securityservice.controller;

import com.bfi.securityservice.service.AppUserService;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WithMockUser(username = "Admin", password = "1234", roles = "ADMIN")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class AppUserControllerTest {

    @MockBean
    private AppUserService appUserService;

    @InjectMocks
    private AppUserController controller;

    @Autowired
    MockMvc mockMvc;


    @Test
    @Order(1)
    void loadUserByUsername() throws Exception {
        mockMvc.perform(get("/api/{getUserByUsername}", "Admin"))
                .andExpect(status().isOk());
    }

    @Test
    void getUsers() {
    }

    @Test
    void saveUser() {
    }

    @Test
    void getRoles() {
    }

    @Test
    void saveRole() {
    }

    @Test
    void addRoleToUser() {
    }

    @Test
    void update() {
    }

    @Test
    void updateRole() {
    }

    @Test
    void deleteUser() {
    }

    @Test
    void deleteRole() {
    }
}