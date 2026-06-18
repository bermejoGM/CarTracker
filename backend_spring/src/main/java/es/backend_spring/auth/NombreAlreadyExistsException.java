package es.backend_spring.auth;

public class NombreAlreadyExistsException extends RuntimeException {
    public NombreAlreadyExistsException(String message) {
        super(message);
    }
}
