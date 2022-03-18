package org.factoriaf5.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.factoriaf5.backend.model.Event;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
