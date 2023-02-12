package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.PersonDTO;

import java.util.List;

public interface PersonService {

    void addPerson(PersonDTO person);

    void updatePerson(PersonDTO person);

    void deletePerson(Long id);

    List<PersonDTO> getAllPersons();
}
