# All In Travels - Página Web

Este proyecto consiste en la implementación de una página web responsiva utilizando **React** como framework de frontend y **Bootstrap** para el diseño y la maquetación. La página incluye múltiples secciones como un encabezado, sección "Sobre nosotros", experiencias de viaje, blog, formulario de contacto y un pie de página.

## Características del Proyecto
- Diseño responsivo adaptado para escritorio y dispositivos móviles.
- Implementación de componentes reutilizables.
- Estilización con **Bootstrap** y estilos personalizados en CSS.
- Consumo de datos desde una API.
- Navegación sencilla con enlaces a secciones específicas.

---

## Instalación
A continuación, se detallan los pasos necesarios para configurar e instalar el proyecto desde cero.

### Paso 1: Crear el proyecto con Vite
Ejecuta el siguiente comando en tu terminal para crear un nuevo proyecto con Vite:

```bash
npm create vite@latest my-project --template react
```

Cambia al directorio del proyecto:
```bash
cd my-project
```

Instala las dependencias iniciales:
```bash
npm install
```

### Paso 2: Instalar Bootstrap
Instala Bootstrap desde npm:
```bash
npm install bootstrap
```

### Paso 3: Instalar React Icons
Instala la librería **React Icons** para utilizar íconos en el proyecto:
```bash
npm install react-icons
```
---

## Desarrollo
### Paso a paso

1. **Estructuración de componentes:**
   - Cada sección del diseño (Encabezado, Sobre nosotros, Experiencias, Blog, Formulario, Footer) se implementó como un componente funcional independiente dentro de la carpeta `components`.

2. **Integración de Bootstrap:**
   - Se utilizó **Bootstrap** para maquetar la estructura de las secciones principales y garantizar un diseño responsivo.

3. **Estilos personalizados:**
   - Para completar los detalles del diseño, se creó un archivo `custom.css` con reglas específicas para mejorar el estilo.

4. **Uso de React Icons:**
   - Se añadieron íconos con la librería **React Icons** para enriquecer visualmente algunas secciones, como los botones y los encabezados.

5. **Consumo de datos desde una API:**
   - Los datos dinámicos se obtuvieron utilizando una API proporcionada, y se integraron en componentes como "Experiencias" y "Blog".

6. **Navegación interna:**
   - Se implementaron enlaces de navegación entre las diferentes secciones de la página para mejorar la experiencia del usuario.

---

## Ejecución del Proyecto

1. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Acceso a la aplicación:**
   - La aplicación estará disponible en [ http://localhost:5173/]( http://localhost:5173/).

---

## Tecnologías Utilizadas
- React
- Vite
- Bootstrap
- React Icons
- CSS Personalizado
