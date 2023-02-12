package com.bfi.referentiel.controllers;

import com.bfi.referentiel.service.CalendarService;
import com.bfi.referentiel.service.RoleService;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@ExtendWith(MockitoExtension.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CalendarControllerTest {

    @Mock
    private CalendarService calendarService;

    @InjectMocks
    private CalendarController controller;

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Test
    @Order(1)
    void getCalendars() throws Exception {
        mockMvc.perform(get("/Calendars"))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    @Order(2)
    void getAnnualsByCalendarId() throws Exception {
        mockMvc.perform(get("/Calendars/{id}/Annuals", 10))
                .andExpect(status().isOk());
    }

    @Test
    void getExceptionalByCalendarId() {
    }

    @Test
    void getWeeklyByCalendarId() {
    }

    @Test
    @Order(3)
    void add() throws Exception {
        mockMvc.perform(post("/Calendars")
                .contentType("application/json")
                .content("{\"id\":\"11\",\"name\":\"CalendarTest\"}"));
    }

    @Test
    @Order(4)
    void update() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.put("/Calendars/{id}", 2)
                .contentType("application/json")
                .content("{\"id\":\"10\",\"name\":\"CalendarTest\"}"));
    }
}