package org.factoriaf5.backend.repositories;


import org.factoriaf5.backend.model.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendRepository extends JpaRepository<Friend,Long> {
}

