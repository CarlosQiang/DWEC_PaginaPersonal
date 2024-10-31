# Portafolio de Carlos Qiang

Este es el código fuente del portafolio personal de **Carlos Qiang**, un desarrollador especializado en crear aplicaciones web intuitivas y funcionales, construido con **Next.js** y **TypeScript**. Este portafolio es un ejemplo de mis habilidades en desarrollo frontend y está pensado para presentar mi experiencia y proyectos en un formato profesional y moderno.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Componentes Principales](#componentes-principales)
  - [Cabecera](#cabecera)
  - [Card](#card)
  - [Cursor](#cursor)
  - [Footer](#footer)
  - [Información](#información)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Recursos y Documentación](#recursos-y-documentación)

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada como portafolio personal, en donde se destacan mis habilidades y experiencia en tecnologías web. Incluye secciones como "Inicio", "Sobre mí" y un portafolio de proyectos. Es una plataforma diseñada para destacar tanto mis competencias técnicas como mi enfoque en diseño intuitivo y funcional.

## Características

- **Next.js y TypeScript**: Aprovecha el poder de Next.js para el enrutamiento y la generación estática de páginas, junto con la seguridad y escalabilidad de TypeScript.
- **Interfaz intuitiva**: Una UI limpia y amigable, diseñada para facilitar la navegación y la experiencia del usuario.
- **Componentes reutilizables**: Uso de componentes personalizados para modularizar el diseño y optimizar la reutilización del código.
- **Estilos CSS**: Cada componente cuenta con su archivo CSS modularizado, lo que facilita el mantenimiento y la personalización.

## Componentes Principales

### Cabecera

El componente `Cabecera` se encarga de la barra de navegación del portafolio. Incluye enlaces a las secciones "Inicio", "Sobre mí" y "Portfolio" con estilos personalizados y resaltado del enlace activo. Este componente utiliza `next/link` para el enrutamiento y `next/image` para mostrar el logotipo.

### Card

El componente `Card` es una tarjeta visual que muestra una imagen, un título y una breve descripción de contenido. Es ideal para presentar proyectos o habilidades en el portafolio.

### Cursor

`Cursor` es un componente personalizado que reemplaza el cursor nativo con uno estilizado. Utiliza `gsap` para animaciones fluidas y responde a la interacción con elementos de enlace (`<a>`), ampliándose al pasar el cursor sobre ellos.

### Footer

`Footer` muestra la información de contacto y navegación en el pie de página. También incluye un componente `RedesSociales` para mostrar enlaces a redes sociales. 

### Información

`Informacion` es un componente que contiene secciones de texto e imagen que describen mi trabajo y pasatiempos. Cada sección tiene un diseño modular con imágenes y bloques de texto alineados.

## Tecnologías Utilizadas

- **React** y **Next.js** para la estructura y navegación de la aplicación.
- **TypeScript** para mejorar la robustez y escalabilidad del proyecto.
- **CSS** para el diseño y estilo de los componentes.
- **GSAP** para animaciones avanzadas en el cursor personalizado.
- **MySQL** y **SQL Server** como ejemplos de sistemas de gestión de bases de datos.
- **Java**, **Python**, **PHP**, **Laravel** y frameworks de CSS como **Tailwind CSS**.

## Estructura del Proyecto

```plaintext
.
├── components
│   ├── Cabecera.tsx       # Componente de cabecera/navegación
│   ├── Card.tsx           # Componente de tarjeta
│   ├── Cursor.tsx         # Componente de cursor personalizado
│   ├── Footer.tsx         # Componente de pie de página
│   └── Informacion.tsx    # Componente de información sobre mi trabajo y hobbies
│
├── public
│   ├── images             # Carpeta con imágenes del proyecto
│   └── favicon.ico        # Favicon de la aplicación
│
├── styles
│   ├── Cabecera.css       # Estilos específicos para Cabecera
│   ├── Card.css           # Estilos específicos para Card
│   ├── Cursor.css         # Estilos específicos para Cursor
│   ├── Footer.css         # Estilos específicos para Footer
│   └── Informacion.css    # Estilos específicos para Informacion
│
├── pages
│   ├── _app.tsx           # Configuración global de la aplicación
│   ├── index.tsx          # Página de inicio
│   ├── sobremi.tsx        # Página sobre mí
│   └── portfolio.tsx      # Página de portafolio
│
├── README.md              # Documentación del proyecto
└── package.json           # Dependencias y scripts del proyecto
