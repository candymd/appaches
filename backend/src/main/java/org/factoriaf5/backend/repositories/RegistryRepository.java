package org.factoriaf5.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.factoriaf5.backend.model.Registry;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistryRepository extends JpaRepository<Registry, Long> {
}
