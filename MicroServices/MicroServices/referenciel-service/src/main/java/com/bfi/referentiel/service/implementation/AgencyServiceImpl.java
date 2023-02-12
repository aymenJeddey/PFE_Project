package com.bfi.referentiel.service.implementation;

import com.bfi.referentiel.common.dto.AgencyDTO;
import com.bfi.referentiel.model.Agency;
import com.bfi.referentiel.repositories.AgencyRepository;
import com.bfi.referentiel.service.AgencyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AgencyServiceImpl implements AgencyService {

    private final AgencyRepository agencyRepository;
    private final ModelMapper modelMapper;

    public AgencyServiceImpl(AgencyRepository agencyRepository, ModelMapper modelMapper) {
        this.agencyRepository = agencyRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public List<AgencyDTO> getAllAgency() {
        return agencyRepository.findAll()
                .stream()
                .map(agency -> modelMapper.map(agency, AgencyDTO.class))
                .collect(Collectors.toList());
    }

//    @Override
//    public List<AgencyDTO> findAgencyByTierId(Long id) {
//        return agencyRepository.findAgenciesByTierId(id)
//                .stream()
//                .map(agency -> modelMapper.map(agency, AgencyDTO.class))
//                .collect(Collectors.toList());
//    }

    @Override
    public void addAgency(AgencyDTO agency) { agencyRepository.save(modelMapper.map(agency, Agency.class)); }

    @Override
    public void updateAgency(AgencyDTO agency) {
        if (agency != null && agency.getId() != null){
            Optional<Agency> agencyFromDB = agencyRepository.findById(agency.getId());
            Agency agency1 = modelMapper.map(agency, Agency.class);
            if (agencyFromDB.isPresent()){ agencyRepository.save(agency1);}
        }
    }

    @Override
    public void deleteAgency(Long id) {
        if (id != null){ agencyRepository.deleteById(id);}
    }
}
