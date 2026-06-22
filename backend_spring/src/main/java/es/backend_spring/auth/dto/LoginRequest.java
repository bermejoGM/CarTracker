package es.backend_spring.auth.dto;

import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
        @NotBlank(message="El correo electronico o usuario son obligatorios")
        String identifier,

        @NotBlank(message = "La contraseña es obligatoria")
        String password
) {
}
