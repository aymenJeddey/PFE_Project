package com.bfi.referentiel.service;

import com.bfi.referentiel.common.dto.BankDTO;

import java.util.List;

public interface BankService {

    void addBank(BankDTO bank);

    void updateBank(BankDTO bank);

    void deleteBank(Long id);

    List<BankDTO> getAllBanks();
}
