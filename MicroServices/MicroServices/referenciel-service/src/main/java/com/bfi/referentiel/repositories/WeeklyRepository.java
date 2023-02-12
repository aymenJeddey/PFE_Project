package com.bfi.referentiel.repositories;

import com.bfi.referentiel.model.Weekly;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WeeklyRepository extends JpaRepository<Weekly, Long> {
    List<Weekly> findWeekliesByCalendar_Id(Long id);
}
