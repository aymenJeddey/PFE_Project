package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.ContactDTO;
import com.bfi.referentiel.model.Contact;
import com.bfi.referentiel.repositories.ContactRepository;
import com.bfi.referentiel.repositories.TierRepository;
import com.bfi.referentiel.service.ContactService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;
    private final ModelMapper modelMapper;

    public ContactServiceImpl(ContactRepository contactRepository, TierRepository tierRepository, ModelMapper modelMapper) {
        this.contactRepository = contactRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ContactDTO> getAllContacts() {
        return contactRepository.findAll()
                .stream()
                .map(contact -> modelMapper.map(contact, ContactDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ContactDTO> findContactByTierId(Long id) {
        return contactRepository.findAllByTierId(id)
                .stream()
                .map(contact -> modelMapper.map(contact, ContactDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addContact(ContactDTO contact) {
        contactRepository.save(modelMapper.map(contact, Contact.class));
    }

    @Override
    public void updateContact(ContactDTO contact) {
        if (contact != null && contact.getId() != null){
            Optional<Contact> contactFromDB = contactRepository.findById(contact.getId());
            Contact contact1 = modelMapper.map(contact, Contact.class);
            if (contactFromDB.isPresent()){ contactRepository.save(contact1);}
        }
    }

    @Override
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
