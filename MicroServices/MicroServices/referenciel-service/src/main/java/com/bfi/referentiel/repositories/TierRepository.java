package com.bfi.referentiel.repositories;

import com.bfi.referentiel.common.dto.TierDTO;
import com.bfi.referentiel.common.enumeration.CustomerType;
import com.bfi.referentiel.model.Tier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TierRepository extends JpaRepository<Tier, Long> {
    List<Tier> findAllByCustomerType(CustomerType customerType);

    List<Tier> findAllById(Long id);

}
