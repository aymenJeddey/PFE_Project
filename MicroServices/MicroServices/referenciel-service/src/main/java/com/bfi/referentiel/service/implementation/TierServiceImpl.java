package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.TierDTO;
import com.bfi.referentiel.common.enumeration.CustomerType;
import com.bfi.referentiel.model.Tier;
import com.bfi.referentiel.repositories.TierRepository;
import com.bfi.referentiel.service.TierService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TierServiceImpl implements TierService {

    private final TierRepository tierRepository;
    private final ModelMapper modelMapper;

    public TierServiceImpl(TierRepository tierRepository, ModelMapper modelMapper) {
        this.tierRepository = tierRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<TierDTO> getAllTiers() {
        return tierRepository.findAll()
                .stream()
                .map(tier -> modelMapper.map(tier, TierDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<TierDTO> getByCustomerType(CustomerType customerType) {
        return tierRepository.findAllByCustomerType(customerType)
                .stream()
                .map(tier -> modelMapper.map(tier, TierDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<TierDTO> getTierById(Long idTier) {
        return tierRepository.findAllById(idTier).stream().map(tier1 -> modelMapper.map(tier1, TierDTO.class)).collect(Collectors.toList());
    }


    @Override
    public void addTier(TierDTO tier) {
        tierRepository.save(modelMapper.map(tier, Tier.class));
    }

    @Override
    public void updateTier(TierDTO tier) {
        if (tier != null && tier.getId() != null) {
            Optional<Tier> tierFromDB = tierRepository.findById(tier.getId());
            Tier tier1 = modelMapper.map(tier, Tier.class);
            if (tierFromDB.isPresent()) {
                tierRepository.save(tier1);
            }
        }
    }

    @Override
    public void deleteTier(Long id) {
        tierRepository.deleteById(id);
    }
}
