package com.bfi.engagement.controllers;

import com.bfi.engagement.common.ReferencielServiceClient;
import com.bfi.engagement.model.Engagement;
import com.bfi.engagement.model.Response;
import com.bfi.engagement.model.enumeration.ContractState;
import com.bfi.engagement.service.EngagementService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.OK;

@RestController
@AllArgsConstructor
@RequestMapping("/Engagements")
public class EngagementController {

    private final EngagementService engagementService;
    private final ReferencielServiceClient referencielServiceClient;

    @PostMapping
    public ResponseEntity<Response> preview(@RequestBody Engagement engagement) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("engagement", engagementService.previewEngagement(engagement)))
                        .status(OK)
                        .build());
    }

    @PostMapping("/save")
    public ResponseEntity<Void> save(@RequestBody Engagement engagement) {
        engagementService.saveEngagement(engagement);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public ResponseEntity<List<Engagement>> getAllEngagements() {
        return ResponseEntity.ok(engagementService.getAllEngagements());
    }

    @PatchMapping("/{id}/{contracttStatus}")
    public ResponseEntity<Void> updateContractStatus(@PathVariable Long id,@PathVariable ContractState contracttStatus){
        engagementService.updateContractStatus(id,contracttStatus);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


    @GetMapping("/Banks")
    public ResponseEntity<List<Object>> getBanks(){
        return referencielServiceClient.getBanks();
    }

    @GetMapping("/Persons")
    public ResponseEntity<List<Object>> getPersons(){
        return referencielServiceClient.getPersons();
    }

    @GetMapping("/Currencies")
    public ResponseEntity<List<Object>> getCurrencies(){
        return referencielServiceClient.getCurrencies();
    }

    @GetMapping("/Accounts/{id}/Tier")
    public ResponseEntity<List<Object>> getAccountsByIdTier(@PathVariable Long id){
        return referencielServiceClient.getAccountsByIdTier(id);
    }

    @GetMapping("/Tiers/{idTier}")
    public ResponseEntity<List<Object>> getTierById(@PathVariable Long idTier){
        return referencielServiceClient.getTierById(idTier);
    }

    @GetMapping("/Accounts/{id}")
    public ResponseEntity<List<Object>> getAccountsById(@PathVariable Long id){
        return referencielServiceClient.getAccountsById(id);
    }

}
