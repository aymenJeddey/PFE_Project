package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.ContactDTO;

import java.util.List;

public interface ContactService {

    void addContact(ContactDTO contact);

    void updateContact(ContactDTO contact);

    void deleteContact(Long id);

    List<ContactDTO> getAllContacts();

    List<ContactDTO> findContactByTierId(Long id);
}
