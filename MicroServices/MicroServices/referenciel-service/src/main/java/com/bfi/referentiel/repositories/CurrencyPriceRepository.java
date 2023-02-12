package com.bfi.referentiel.repositories;

import com.bfi.referentiel.model.CurrencyPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyPriceRepository extends JpaRepository<CurrencyPrice, Long> {
}
