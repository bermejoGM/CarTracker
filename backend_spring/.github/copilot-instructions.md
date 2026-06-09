Archivo back (back/.github/copilot-instructions.md)
Plataforma Java: Usar Java 21 (última LTS) con Spring Boot 3.5.15 (compatible con Java 17–21). Configurar el proyecto con Maven o Gradle en nivel 3.5.15 de Spring Boot.
Arquitectura y DTOs: Seguir arquitectura por capas (controladores, servicios, repositorios). Nunca exponer entidades de persistencia directamente en la API. Siempre convertir entidades a DTOs de salida con mappers (MapStruct). Por ejemplo:

@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    UsuarioDto toDto(Usuario entidad);
    Usuario toEntity(UsuarioDto dto);
}
MapStruct genera código de mapeo tipo-seguro a tiempo de compilación, evitando errores triviales.
Validaciones: Usar anotaciones de validación (@NotNull, @Size, etc.) en DTOs y aplicar @Valid en los controladores para forzar validación automática. Validar entradas en cada capa de entrada. Preferir listas blancas de valores (e.g. enums) para parámetros sensibles.
OpenAPI/Swagger: Documentar la API con OpenAPI (por ejemplo, springdoc-openapi). Configurar /v3/api-docs y Swagger UI. Todos los endpoints REST deben estar etiquetados con descripciones claras (@Tag, @Operation). Añadir @Schema en modelos para describir los campos.
Seguridad: Implementar Spring Security o validación de autorización. No relajar CSRF ni CORS inadvertidamente. Asegurar cabeceras (XSS protection, HSTS, etc.). Proteger rutas sensibles. Como regla general OWASP recomienda no concatenar cadenas en queries, sino usar queries parametricados de Spring Data (o Criteria) para prevenir inyecciones. Encoder/archeo de output para evitar XSS. Reglas de acceso con anotaciones (@PreAuthorize) para evitar exposiciones involuntarias.
Manejo de excepciones: Definir un @ControllerAdvice global para convertir excepciones en respuestas HTTP adecuadas (ej. 400, 404, 500). Nunca propagues excepciones internas sin control. Usar @ResponseStatus en excepciones personalizadas cuando aplique.
MongoDB Atlas:
Conexión segura: Conectarse a Atlas usando URI TLS (mongodb+srv) proporcionada por Atlas, no hardcodear usuarios/contraseñas en código. Ejemplo en application.yml:
spring:
  data:
    mongodb:
      uri: ${MONGODB_URI}
donde MONGODB_URI es una variable de entorno (Spring la lee por defecto). Ejemplo de URI Atlas:
mongodb+srv://user:*****@cluster0.mongodb.net/miBD?retryWrites=true&w=majority
Índices: Marcar campos con @Indexed o crear índices parciales según consultas frecuentes (use partialFilterExpression para índices parciales que reduzcan tamaño y mejoren rendimiento). Por ejemplo, indexar estado si se consulta con frecuencia. Revisar con Performance Advisor de Atlas las recomendaciones automáticas.
Transacciones: Si la operación involucra múltiples colecciones, usar transacciones (multi-document, disponibles en MongoDB 4.0+). Configurar la unidad de trabajo apropiadamente.
Paginación: Para endpoints listados, implementar paginación (por ejemplo, Pageable de Spring Data). Nunca devolver listas ilimitadas de datos.
Configuración (application.yml): Ejemplo mínimo:
server:
  port: 8080
spring:
  application:
    name: MiAplicacion
  data:
    mongodb:
      uri: ${MONGODB_URI}
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
Incluir también perfiles (spring.profiles.active) y, opcionalmente, springdoc.swagger-ui.enabled=true para habilitar Swagger UI.
Snippets de ejemplo:
Repositorio Spring Data:

@Repository
public interface UsuarioRepo extends MongoRepository<Usuario, String> {
    // Métodos de consulta personalizados, p.ej.:
    List<Usuario> findByRol(String rol);
}
(Las consultas deben usar parámetros, no string concatenado).
Controlador REST:

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService service;
    public UsuarioController(UsuarioService service) { this.service = service; }

    @GetMapping
    public List<UsuarioDto> listarUsuarios() {
        return service.listarTodos();
    }

    @PostMapping
    public ResponseEntity<UsuarioDto> crear(@Valid @RequestBody UsuarioDto dto) {
        UsuarioDto creado = service.crear(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }
}
Use siempre UsuarioDto, jamás Usuario entidad en los DTOs de petición/respuesta.
Observabilidad: Incluir dependencia spring-boot-starter-actuator. Exponer /actuator/health, /actuator/metrics. Configurar tracing si es necesario. Estructurar logs (formato JSON) para fácil análisis.
Pruebas: Escribir tests unitarios con JUnit 5 y Mockito para servicios y repositorios. Para controladores, usar @WebMvcTest o MockMvc. También implementar pruebas de integración con base en memoria o Testcontainers (para MongoDB). Verificar escenarios de éxito y error (incluyendo validaciones).
Comandos de ejemplo:
Ejecutar tests:
mvn test      # o ./gradlew test
Ejecutar la aplicación:
mvn spring-boot:run   # con perfil dev por defecto
Generar artefacto Docker optimizado (si aplica).
Cada sección de este archivo debe estar marcada como Must/Should/Can según prioridad. Por ejemplo, en seguridad: Must: @Valid en entradas; Should: validar roles; Can: reportar vulnerabilidades con herramientas OWASP. En código, Must no usar field injection (@Autowired en campos) sino inyección por constructor. En resumen, instrucciones concisas y categorizadas.