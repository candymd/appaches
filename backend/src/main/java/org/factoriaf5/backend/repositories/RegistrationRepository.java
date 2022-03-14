package org.factoriaf5.backend.repositories;

import org.factoriaf5.backend.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    List<Registration> findAllByFriendId(Long id);
}
