package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.CrossParityDTO;
import com.bfi.referentiel.model.CrossParity;
import com.bfi.referentiel.repositories.CrossParityRepository;
import com.bfi.referentiel.service.CrossParityService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CrossParityServiceImpl implements CrossParityService {

    private final CrossParityRepository crossParityRepository;
    private final ModelMapper modelMapper;

    public CrossParityServiceImpl(CrossParityRepository crossParityRepository, ModelMapper modelMapper) {
        this.crossParityRepository = crossParityRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public List<CrossParityDTO> getAllCrossParities() {
        return crossParityRepository.findAll()
                .stream()
                .map(crossParity -> modelMapper.map(crossParity, CrossParityDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void addCrossParity(CrossParityDTO crossParity) {
        crossParityRepository.save(modelMapper.map(crossParity, CrossParity.class));
    }

    @Override
    public void updateCrossParity(CrossParityDTO crossParity) {
        if (crossParity != null && crossParity.getId() != null){
            Optional<CrossParity> crossParityFromDB = crossParityRepository.findById(crossParity.getId());
            CrossParity crossParity1 = modelMapper.map(crossParity, CrossParity.class);
            if (crossParityFromDB.isPresent()){ crossParityRepository.save(crossParity1);}
        }
    }

    @Override
    public void deleteCrossParity(Long id) {
        crossParityRepository.deleteById(id);
    }


}
