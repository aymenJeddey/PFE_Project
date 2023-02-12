package com.bfi.engagement.common;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name="referenciel")
public interface ReferencielServiceClient {

    @GetMapping("/Tiers")
    ResponseEntity<List<Object>> getTiers();

    @GetMapping("/Tiers/Banks")
    ResponseEntity<List<Object>> getBanks();

    @GetMapping("/Tiers/Persons")
    ResponseEntity<List<Object>> getPersons();

    @GetMapping("/Currencies")
    ResponseEntity<List<Object>> getCurrencies();

    @GetMapping("/Accounts/{id}/Tier")
    ResponseEntity<List<Object>> getAccountsByIdTier(@PathVariable Long id);

    @GetMapping("/Tiers/{idTier}")
    ResponseEntity<List<Object>> getTierById(@PathVariable Long idTier);

    @GetMapping("/Accounts//{id}")
    ResponseEntity<List<Object>> getAccountsById(@PathVariable Long id);

}
