package com.bfi.referentiel.repositories;

import com.bfi.referentiel.model.Exceptional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExceptionalRepository extends JpaRepository<Exceptional, Long> {
    List<Exceptional> findExceptionalsByCalendar_Id(Long id);
}
