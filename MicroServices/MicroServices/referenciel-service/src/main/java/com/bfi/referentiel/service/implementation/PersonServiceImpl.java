package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.PersonDTO;
import com.bfi.referentiel.model.Person;
import com.bfi.referentiel.repositories.PersonRepository;
import com.bfi.referentiel.service.PersonService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;
    private final ModelMapper modelMapper;

    public PersonServiceImpl(PersonRepository personRepository, ModelMapper modelMapper) {
        this.personRepository = personRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<PersonDTO> getAllPersons() {
        return personRepository.findAll()
                .stream()
                .map(person -> modelMapper.map(person, PersonDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addPerson(PersonDTO person) {
        personRepository.save(modelMapper.map(person,Person.class));
    }

    @Override
    public void updatePerson(PersonDTO person) {
        /*
        if (person != null && person.getId() != null){
            Optional<Person> personFromDB = personRepository.findById(person.getId());
            Person person1 = modelMapper.map(person, Person.class);
            if (personFromDB.isPresent()){ personRepository.save(person1);}
        }
         */
    }

    @Override
    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }
}
