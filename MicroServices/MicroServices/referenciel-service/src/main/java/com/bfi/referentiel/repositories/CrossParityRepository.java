package com.bfi.referentiel.repositories;

import com.bfi.referentiel.model.CrossParity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrossParityRepository extends JpaRepository<CrossParity, Long> {
}
