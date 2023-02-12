package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.AccountDTO;
import com.bfi.referentiel.common.enumeration.AccountStatus;
import com.bfi.referentiel.model.Account;
import com.bfi.referentiel.model.Agency;
import com.bfi.referentiel.model.Currency;
import com.bfi.referentiel.model.Tier;
import com.bfi.referentiel.repositories.AccountRepository;
import com.bfi.referentiel.repositories.AgencyRepository;
import com.bfi.referentiel.repositories.CurrencyRepository;
import com.bfi.referentiel.repositories.TierRepository;
import com.bfi.referentiel.service.AccountService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;
    private final AgencyRepository agencyRepository;
    private final CurrencyRepository currencyRepository;
    private final TierRepository tierRepository;
    private final ModelMapper modelMapper;

    public AccountServiceImpl(AccountRepository accountRepository, AgencyRepository agencyRepository, CurrencyRepository currencyRepository, TierRepository tierRepository, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.agencyRepository = agencyRepository;
        this.currencyRepository = currencyRepository;
        this.tierRepository = tierRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<AccountDTO> getAllAccounts() {
        return accountRepository.findAll()
                .stream()
                .map(account -> modelMapper.map(account, AccountDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addAccount(AccountDTO account) {
        Agency agencyFromDB = agencyRepository.findById(account.getAgency().getId()).orElse(null);
        Currency currencyFromDB = currencyRepository.findById(account.getCurrency().getId()).orElse(null);
        Tier tierFromDB = tierRepository.findById(account.getTier().getId()).orElse(null);
        Account account1 = modelMapper.map(account , Account.class);
        account1.setAgency(agencyFromDB);
        account1.setCurrency(currencyFromDB);
        account1.setTier(tierFromDB);
        accountRepository.save(account1);
    }

    @Override
    public void updateAccount(AccountDTO account) {
        if (account != null && account.getId() != null){
            Agency agencyFromDB = agencyRepository.findById(account.getAgency().getId()).orElse(null);
            Currency currencyFromDB = currencyRepository.findById(account.getCurrency().getId()).orElse(null);
            Tier tierFromDB = tierRepository.findById(account.getTier().getId()).orElse(null);
            Account account1 = modelMapper.map(account , Account.class);
            if (agencyFromDB != null && currencyFromDB != null && tierFromDB != null){
                account1.setAgency(agencyFromDB);
                account1.setCurrency(currencyFromDB);
                account1.setTier(tierFromDB);
            }
            accountRepository.save(account1);
        }
    }

    @Override
    public List<AccountDTO> findAccountsByAgencyId(Long id) {
        return accountRepository.findAccountByAgency_Id(id)
                .stream()
                .map(account -> modelMapper.map(account, AccountDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<AccountDTO> getAccountsByIdTier(Long id) {
        return accountRepository.findAccountsByTier_Id(id)
                .stream()
                .map(account -> modelMapper.map(account, AccountDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<AccountDTO> getAccountsById(Long id) {
        return accountRepository.findById(id)
                .stream()
                .map(account -> modelMapper.map(account, AccountDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void updateAccountStatus(Long id,AccountStatus accountStatus) {
        accountRepository.findById(id).ifPresent(account -> {
            account.setAccountStatus(accountStatus);
            accountRepository.save(account);
        }
        );
    }

    @Override
    public void deleteAccount(Long id) {
        if (id != null){ accountRepository.deleteById(id);}
    }
}
