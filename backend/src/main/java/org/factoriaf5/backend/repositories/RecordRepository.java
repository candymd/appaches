package org.factoriaf5.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.factoriaf5.backend.model.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {
}
