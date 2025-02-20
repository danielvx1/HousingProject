package com.hu4h.demo.data;

import com.hu4h.demo.models.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // No longer optional, need to explicitly check for null
    // The method findByUsername will return null instead of Optional.empty()
    // when no result is found
    User findByUsername(String username);
    Boolean existsByUsername(@NotBlank @Size(max = 20) String username);
    Boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);

}
