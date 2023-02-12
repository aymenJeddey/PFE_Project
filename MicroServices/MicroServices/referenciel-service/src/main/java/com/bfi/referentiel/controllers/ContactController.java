package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.ContactDTO;
import com.bfi.referentiel.service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Contacts")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public ResponseEntity<List<ContactDTO>> getContacts(){
        return ResponseEntity.ok(contactService.getAllContacts());
    }

    @GetMapping("/{id}/Tier")
    public ResponseEntity<List<ContactDTO>> getContactsByTier(@PathVariable Long id){
        return ResponseEntity.ok(contactService.findContactByTierId(id));
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody ContactDTO contact){
        contactService.addContact(contact);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idContact}")
    public void delete(@PathVariable Long idContact){ contactService.deleteContact(idContact); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody ContactDTO contact){
        contactService.updateContact(contact);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
