package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.AccountDTO;
import com.bfi.referentiel.common.dto.AgencyDTO;
import com.bfi.referentiel.common.enumeration.AccountStatus;

import java.util.List;

public interface AccountService {

    void addAccount(AccountDTO account);

    void updateAccount(AccountDTO account);

    void deleteAccount(Long id);

    List<AccountDTO> getAllAccounts();

    List<AccountDTO> findAccountsByAgencyId(Long id);

    List<AccountDTO> getAccountsByIdTier(Long id);

    List<AccountDTO> getAccountsById(Long id);

    void updateAccountStatus(Long id,AccountStatus account);
}
