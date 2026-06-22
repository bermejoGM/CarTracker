package es.backend_spring.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<User> findByNombre(String nombre);
    boolean existsByNombre(String nombre);
    Optional<User> findByNombreOrEmail(String nombre, String email);
}
