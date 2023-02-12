package com.bfi.referentiel.repositories;

import com.bfi.referentiel.model.Annual;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnualRepository extends JpaRepository<Annual, Long> {
    List<Annual> findAnnualsByCalendar_Id(Long id);
}
