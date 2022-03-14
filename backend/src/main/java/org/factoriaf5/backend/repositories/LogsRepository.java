package org.factoriaf5.backend.repositories;

import org.factoriaf5.backend.model.Logs;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LogsRepository extends JpaRepository<Logs, Long> {
    List<Logs> findAllByFriendId(Long id);
    List<Logs> findAllByRegistryId(Long id);
}
