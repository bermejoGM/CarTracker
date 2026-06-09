# 🚗 CarLog Pro - Gestión Integral de Vehículos

CarLog Pro es una aplicación **full stack** diseñada para centralizar toda la información relacionada con uno o varios vehículos en una sola plataforma.

Permite registrar gastos, mantenimientos, repostajes, averías, modificaciones, documentación e historiales avanzados, convirtiéndose en un auténtico libro digital del vehículo. Su objetivo es ofrecer una visión completa del coste real de propiedad de cada coche y facilitar el seguimiento de su mantenimiento y evolución a lo largo del tiempo.

## 📋 Objetivo

CarLog Pro nace para que cualquier usuario pueda:

- Gestionar múltiples vehículos desde una misma cuenta.
- Registrar todos los gastos asociados a cada coche.
- Controlar mantenimientos preventivos y correctivos.
- Llevar un historial completo de repostajes, averías, piezas y documentación.
- Analizar métricas clave como consumo, coste por kilómetro o gasto anual.
- Preparar un dossier profesional del vehículo para venta o consulta.

## 🏗️ Stack Tecnológico

### Frontend

- Angular 20+
- Angular Material
- RxJS
- Angular Signals
- Ngx-Charts / Chart.js
- Angular Router
- Reactive Forms

### Backend

- Spring Boot 3
- Spring Security
- Spring Data MongoDB
- JWT Authentication
- MapStruct
- Lombok
- OpenAPI / Swagger

### Base de datos

- MongoDB Atlas

### Almacenamiento de archivos

- MongoDB GridFS
- Alternativamente: AWS S3
- Cloudinary

## ✨ Funcionalidades Principales

### Gestión de usuarios

- Registro de usuario.
- Inicio de sesión.
- Recuperación de contraseña.
- Edición de perfil.
- Cambio de contraseña.
- Eliminación de cuenta.

Seguridad aplicada:

- JWT.
- Refresh tokens.
- Contraseñas cifradas con BCrypt.
- Roles `USER` y `ADMIN`.

### Gestión de vehículos

Cada usuario puede registrar múltiples vehículos con información como:

- Marca.
- Modelo.
- Matrícula.
- Año.
- Motor.
- Combustible.
- Potencia.
- Kilometraje actual.
- VIN opcional.
- Fotografía principal.

Acciones disponibles:

- Crear vehículo.
- Editar vehículo.
- Eliminar vehículo.
- Consultar historial completo.

### Gestión de gastos

CarLog Pro organiza los costes por categorías como:

- Mantenimientos.
- Tuning y modificaciones.
- Limpieza.
- Impuestos y gastos recurrentes.
- Otros gastos personalizados.

### Gestión de repostajes

Registro de información clave como:

- Fecha.
- Gasolinera.
- Tipo de combustible.
- Litros repostados.
- Precio por litro.
- Coste total.
- Kilometraje.

Estadísticas previstas:

- Consumo medio.
- Coste por kilómetro.
- Coste mensual.
- Coste anual.
- Evolución del consumo.

### Mantenimiento preventivo

Sistema basado en:

- Kilometraje.
- Tiempo.
- Antigüedad del vehículo.

Incluye alertas para:

- Próximos mantenimientos.
- Mantenimientos vencidos.
- Recordatorios.

### Checklist de operaciones

Cada mantenimiento puede desglosarse en tareas con estados como:

- Pendiente.
- En progreso.
- Realizada.
- Revisada.

### Gestión de neumáticos

Información prevista:

- Marca.
- Modelo.
- Medida.
- Fecha de montaje.
- Kilometraje.
- Estado.
- Desgaste.

### Gestión de fluidos

Tipos contemplados:

- Aceite.
- Refrigerante.
- Líquido de frenos.
- Dirección asistida.
- Limpiaparabrisas.

### Bitácora de averías

Registro de:

- Síntomas.
- Diagnóstico.
- Solución.
- Estado.
- Coste.

### Inventario de piezas

Control de piezas instaladas con:

- Nombre.
- Categoría.
- Fecha de instalación.
- Coste.
- Proveedor.
- Estado.

### Gestión de homologaciones

Estados previstos:

- Homologada.
- Pendiente.
- No homologada.

Documentación asociada:

- Certificados.
- Informes técnicos.
- Facturas.
- Fotografías.

### Galería de evolución

- Fotos antes y después.
- Álbumes por vehículo.
- Álbumes por proyecto.
- Línea temporal visual.

### Presupuestos de proyecto

Permite planificar modificaciones con comparación entre:

- Presupuesto estimado.
- Coste real.

### Garage / Build Gallery

Cada vehículo podrá contar con:

- Ficha pública opcional.
- Historial visual.
- Modificaciones realizadas.
- Fotografías.
- Notas.

### Gestión documental

Archivos soportados:

- PDF.
- JPG.
- PNG.
- WEBP.

Documentos habituales:

- Facturas.
- ITV.
- Seguros.
- Presupuestos.
- Certificados.

Funciones:

- Subir.
- Descargar.
- Visualizar.
- Eliminar.

### Talleres favoritos

Información prevista:

- Nombre.
- Dirección.
- Contacto.
- Valoración.
- Notas.

Relacionable con:

- Gastos.
- Averías.
- Mantenimientos.

### Modo venta

Vista optimizada para compradores que incluye:

- Información del vehículo.
- Historial de mantenimiento.
- Modificaciones.
- Documentación.
- Fotografías.
- Informe PDF.

### Dashboard y analítica

KPIs previstos:

- Gasto total.
- Coste mensual.
- Coste anual.
- Coste por vehículo.

Gráficos previstos:

- Gastos por categoría.
- Gastos por mes.
- Evolución temporal.
- Consumo de combustible.
- Coste por kilómetro.

### Exportación e importación

Exportación CSV de:

- Vehículos.
- Gastos.
- Mantenimientos.
- Repostajes.

Exportación PDF de:

- Informe completo.
- Informe por vehículo.
- Informe de venta.

Importación CSV de:

- Vehículos.
- Gastos.
- Repostajes.
- Mantenimientos.

## 🚀 Roadmap de Desarrollo

### Fase 1 - Base del sistema

- Autenticación.
- Gestión de usuarios.
- Gestión de vehículos.
- MongoDB Atlas.

### Fase 2 - Sistema de gastos

- Gastos generales.
- Categorías.
- Historial.

### Fase 3 - Repostajes

- Registro.
- Estadísticas.
- Consumo.

### Fase 4 - Mantenimientos

- Historial.
- Checklist.
- Preventivos.

### Fase 5 - Documentación

- Subida de archivos.
- Gestión documental.

### Fase 6 - Dashboard

- Gráficos.
- KPIs.
- Informes.

### Fase 7 - Modificaciones y proyectos

- Inventario.
- Homologaciones.
- Presupuestos.

### Fase 8 - Importación y exportación

- CSV.
- PDF.

### Fase 9 - Modo venta

- Informe profesional.
- Historial resumido.

### Fase 10 - Optimización

- Notificaciones.
- PWA.
- Docker.
- CI/CD.

## 🔮 Mejoras Futuras

- Aplicación móvil Flutter.
- Integración con OBD-II.
- Escaneo OCR de facturas.
- IA para mantenimiento predictivo.
- Recordatorios automáticos.
- Sincronización en la nube.
- Compartir vehículos con otros usuarios.

## 📜 Licencia

MIT License.

---

Desarrollado usando Angular, Spring Boot y MongoDB Atlas
