Archivo front (front/.github/copilot-instructions.md)
TypeScript estricto: Habilitar "strict": true en tsconfig.json. Evitar any; si es inevitable, usar unknown con validación. Aprovechar inferencia de tipos. Usar interfaces/tipos claros.
Angular Moderno: Emplear Componentes standalone para nuevas funcionalidades. No usar NgModule a menos que sea necesario (lazy-loaded modules pueden ser esqueleto mínimo). Por defecto, standalone: true (Angular v20+ no requiere declararlo). Activar ChangeDetectionStrategy.OnPush en componentes por defecto para mejorar performance (solo mutar estado con señales o RxJS).
Signals: Preferir signals de Angular para manejo de estado local (en lugar de BehaviorSubject en componentes). Usar computed() para estados derivados. No invocar mutate en señales (usar set() o update() en su lugar).
Lazy Loading: Implementar lazy loading en todas las rutas de características (feature modules o rutas standalone cargadas por demanda). Esto reduce el tamaño inicial de la app.
Forms: Usar Reactive Forms obligatoriamente para formularios complejos. Evitar template-driven forms. Esto permite validación tipada y más control programático.
Enlaces de host: Nunca usar @HostBinding ni @HostListener; en su lugar, usar la propiedad host de @Component o @Directive. Esto mejora la legibilidad y evita decoradores innecesarios.
Imágenes: Cargar imágenes estáticas con NgOptimizedImage para optimización automática. (Recuerda: no funciona con imágenes inline base64; en ese caso usar <img> normal).
Accesibilidad (A11Y): Cumplir AXE (automatizado) y WCAG AA. Usar atributos ARIA correctamente (vínculos de componentes, roles, labels). Reutilizar elementos HTML semánticos nativos (por ejemplo, usar <button> en lugar de roles personalizados). Garantizar contraste de colores adecuado, manejo de focus, aria-label en controles, etc. Cada componente debe ser navegable con teclado.
Componentes: Mantenerlos pequeños y de responsabilidad única. Preferir plantillas en línea (template: \<div>...` ``) para componentes muy simples (una o dos líneas); de otra forma usar archivos separados.
Enlaces de propiedad: No usar ngClass; en su lugar, usar class="..." con binding de objeto. No usar ngStyle; preferir binding en style. Ejemplo: <div [class.active]="isActive"></div>.
Templates simples: Evitar lógica compleja o bucles anidados en el HTML. Usar control flow nativo (@if, @for, @switch en Angular v24+) en vez de *ngIf/*ngFor clásicos. No escribir arrow functions en el template (no soportado). Emplear el pipe async para subscribirse a Observables en plantilla.
Pruebas: Ejecutar pruebas unitarias con ng test (Jasmine/Karma) o jest. Cobertura mínima del 80%. Configurar pruebas E2E (por ejemplo, con Cypress) que simulen flujos de usuario clave.
Lint/Build: Configurar ESLint con reglas de Angular (por ejemplo, @angular-eslint). Antes de cada commit, ejecutar ng lint. Para compilar, usar ng build --configuration production. No incluir código obsoleto: eliminar imports no usados.
Ejemplos de comandos:
Generar componente con OnPush:
ng generate component miComponente --standalone --changeDetection OnPush --inlineStyle --inlineTemplate
Ejecutar lint y tests:
npm run lint && npm run test
ng e2e       # Ejecutar pruebas end-to-end
ng build     # Construir producción