package com.hu4h.demo.data;

import com.hu4h.demo.models.RegisteringUser;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegisteringUserRepository extends JpaRepository<RegisteringUser, Long> {
    Optional<RegisteringUser> findByEmail(String email);
    Optional<RegisteringUser> findByUsername(String username);
    Boolean existsByUsername(@NotBlank @Size(max = 20) String username);
    Boolean existsByEmail(String email);

}
