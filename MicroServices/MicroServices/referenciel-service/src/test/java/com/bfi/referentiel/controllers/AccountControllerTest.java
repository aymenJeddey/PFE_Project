package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.AccountDTO;
import com.bfi.referentiel.model.Account;
import com.bfi.referentiel.service.AccountService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class AccountControllerTest {

    @Mock
    private AccountService accountService;

    @InjectMocks
    private AccountController controller;

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    void getAccounts() throws Exception {
        //List<AccountDTO> accounts = accountService.getAllAccounts();
        mockMvc.perform(get("/Accounts"))
                .andExpect(status().isOk());
    }

    @Test
    void addAccount() throws Exception {
        Account account = new Account();
        account.setId(7L);

        account.setRib("123456789");
        mockMvc.perform(get("/Accounts/{id}" , account.getId()))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id", is(account.getId())))
                .andExpect(jsonPath("$.rib", is(account.getRib())));

    }

    @Test
    void add() {
    }

    @Test
    void delete() {
    }

    @Test
    void update() {
    }
}