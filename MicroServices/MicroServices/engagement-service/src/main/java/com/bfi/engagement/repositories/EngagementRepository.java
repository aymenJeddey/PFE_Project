package com.bfi.engagement.repositories;

import com.bfi.engagement.model.Engagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EngagementRepository extends JpaRepository<Engagement, Long> {

}
