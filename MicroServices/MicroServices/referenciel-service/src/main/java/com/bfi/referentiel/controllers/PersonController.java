package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.PersonDTO;
import com.bfi.referentiel.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Persons")
public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public ResponseEntity<List<PersonDTO>> getPersons(){
        return ResponseEntity.ok(personService.getAllPersons());
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody PersonDTO person){
        personService.addPerson(person);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idPerson}")
    public void delete(@PathVariable Long idPerson){ personService.deletePerson(idPerson);}

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody PersonDTO person){
        personService.updatePerson(person);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
