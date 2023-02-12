package com.bfi.referentiel.repositories;

import com.bfi.referentiel.model.Agency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgencyRepository extends JpaRepository<Agency,Long> {
    //List<Agency> findAgenciesByAccounts(Long id);
}
