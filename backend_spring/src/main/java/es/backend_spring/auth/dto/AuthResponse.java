package es.backend_spring.auth.dto;

public record AuthResponse(
        String accessToken,
        String refreshToken,
        String nombre,
        String email
) {}
