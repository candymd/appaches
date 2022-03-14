package org.factoriaf5.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.factoriaf5.backend.model.Registry;

public interface RegistryRepository extends JpaRepository<Registry, Long> {
}
