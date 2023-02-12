package com.bfi.referentiel.controllers;

import com.bfi.referentiel.common.dto.AccountDTO;
import com.bfi.referentiel.common.enumeration.AccountStatus;
import com.bfi.referentiel.service.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public ResponseEntity<List<AccountDTO>> getAccounts(){
        return ResponseEntity.ok(accountService.getAllAccounts());
    }

    @GetMapping("/{id}/Tier")
    public ResponseEntity<List<AccountDTO>> getAccountsByIdTier(@PathVariable Long id){
        return ResponseEntity.ok(accountService.getAccountsByIdTier(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<AccountDTO>> getAccountsById(@PathVariable Long id){
        return ResponseEntity.ok(accountService.getAccountsById(id));
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody AccountDTO account){
        accountService.addAccount(account);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{idAccount}")
    public void delete(@PathVariable Long idAccount){ accountService.deleteAccount(idAccount); }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody AccountDTO account){
        accountService.updateAccount(account);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PatchMapping("/{idAccount}/{accountStatus}")
    public ResponseEntity<Void> updateAccountStatus(@PathVariable Long idAccount,@PathVariable AccountStatus accountStatus){
        accountService.updateAccountStatus(idAccount,accountStatus);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
