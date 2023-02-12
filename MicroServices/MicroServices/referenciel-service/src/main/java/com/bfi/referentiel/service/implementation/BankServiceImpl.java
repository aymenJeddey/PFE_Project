package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.BankDTO;
import com.bfi.referentiel.model.Bank;
import com.bfi.referentiel.repositories.BankRepository;
import com.bfi.referentiel.service.BankService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankServiceImpl implements BankService {

    private final BankRepository bankRepository;
    private final ModelMapper modelMapper;

    public BankServiceImpl(BankRepository bankRepository, ModelMapper modelMapper) {
        this.bankRepository = bankRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<BankDTO> getAllBanks() {
        return bankRepository.findAll()
                .stream()
                .map(bank -> modelMapper.map(bank, BankDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addBank(BankDTO bank) {
        bankRepository.save(modelMapper.map(bank, Bank.class));
    }

    @Override
    public void updateBank(BankDTO bank) {
        /*
        if (bank != null && bank.getId() != null){
            Optional<Bank> bankFromDB = bankRepository.findById(bank.getId());
            Bank bank1 = modelMapper.map(bank, Bank.class);
            if (bankFromDB.isPresent()){ bankRepository.save(bank1);}
        }
         */
    }

    @Override
    public void deleteBank(Long id) {
        bankRepository.deleteById(id);
    }
}
