package es.backend_spring.auth;

import es.backend_spring.auth.dto.AuthResponse;
import es.backend_spring.auth.dto.RegisterRequest;
import es.backend_spring.security.JwtService;
import es.backend_spring.security.RefreshToken;
import es.backend_spring.security.RefreshTokenRepository;
import es.backend_spring.user.User;
import es.backend_spring.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Value("${app.jwt.refresh-expiration}")
    private long refreshExpiration;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())){
            throw new EmailAlreadyExistsException("Datos invalidos");
        }

        if (userRepository.existsByNombre(request.nombre())){
            throw new NombreAlreadyExistsException("El nombre de usuario ya está en uso");
        }

        User user = User.builder()
                .nombre(request.nombre().trim())
                .email(request.email().toLowerCase().trim())
                .password(passwordEncoder.encode(request.password()))
                .build();

        userRepository.save(user);

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = createRefreshToken(user);

        return new AuthResponse(accessToken, refreshToken, user.getNombre(), user.getEmail());
    }

    private String createRefreshToken(User user) {
        String tokenValue =  UUID.randomUUID().toString();
        RefreshToken refreshToken = RefreshToken.builder()
                .user(user)
                .token(tokenValue)
                .expiresAt(LocalDateTime.now().plusSeconds(refreshExpiration / 1000))
                .build();

        refreshTokenRepository.save(refreshToken);
        return tokenValue;
    }
}