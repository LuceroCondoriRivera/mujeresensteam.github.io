# Mujeres en STEAM — Landing Page

> Sitio web institucional de **Mujeres en STEAM**, una iniciativa que crea clubes de programación para mujeres y niñas desde los territorios.

---

## Estructura del proyecto

```
mujeres-steam/
├── index.html      → Estructura y contenido (HTML semántico)
├── styles.css      → Estilos, paleta, tipografía y responsividad
├── script.js       → Interactividad, animaciones y validación del formulario
└── README.md       → Este archivo
```

> **Sin dependencias externas.** No requiere npm, frameworks ni build tools. Funciona abriendo `index.html` directamente en el navegador o subiéndolo a cualquier hosting estático.

---

## Diseño

### Paleta de colores oficial

| Nombre           | Hex       | Uso principal                        |
|------------------|-----------|--------------------------------------|
| Morado andino    | `#5B2D8B` | Color base, nav, íconos, botón envío |
| Morado oscuro    | `#3D1A63` | Hero background, footer              |
| Terracota        | `#C46A3B` | CTAs primarios, acentos, bullets     |
| Verde hoja       | `#3E7C59` | Sección Quiénes somos, club niñas    |
| Blanco hueso     | `#FAF7F2` | Background general                   |
| Gris texto       | `#2E2E2E` | Texto principal                      |

### Tipografía

| Fuente          | Tipo     | Uso                                          |
|-----------------|----------|----------------------------------------------|
| **Syne**        | Display  | Títulos, botones, nav — geométrica y tech    |
| **DM Sans**     | Body     | Párrafos, descripciones — legible y moderna  |
| **IBM Plex Mono** | Mono   | Labels, badges, terminal, errores de form    |

---

## Secciones

| # | Sección            | ID             | Descripción                                              |
|---|--------------------|----------------|----------------------------------------------------------|
| 1 | Hero               | `#inicio`      | Titular principal, subtítulo, 2 CTAs, imagen y badge     |
| 2 | Qué es             | `#que-es`      | Misión, ventajas competitivas, imagen + cita destacada   |
| 3 | El Problema        | `#problema`    | Brecha estructural, bullets, stat card               |
| 4 | Nuestra Respuesta  | `#respuesta`   | 3 pilares: educación, mentoría, impacto comunitario      |
| 5 | Programas          | `#programas`   | 2 cards: Club Mujeres (+18) y Club Niñas (10–17)        |
| 6 | Impacto            | `#impacto`     | 4 estadísticas animadas + 3 fotos de galería             |
| 7 | Quiénes somos      | `#quienes`     | Mujeres en STEAM, reconocimientos, imagen                  |
| 8 | CTA Final          | —              | Llamado a acción sobre fondo morado oscuro               |
| 9 | Contacto           | `#contacto`    | Formulario completo + datos de contacto + terminal       |

---

## Funcionalidades (script.js)

- **Navbar dinámico** — transparente en el hero, sólido con blur al hacer scroll
- **Menú hamburguesa** — responsivo en móviles, se cierra al seleccionar un enlace
- **Link activo en scroll** — el ítem del nav se resalta según la sección visible
- **Scroll reveal** — elementos aparecen con fade-up al entrar en viewport (IntersectionObserver)
- **Contadores animados** — los números de impacto se animan al aparecer en pantalla
- **Smooth scroll** — todos los enlaces internos hacen scroll suave con offset del nav
- **Parallax sutil** — las formas geométricas del hero se mueven al hacer scroll
- **Formulario de contacto** 

---

## Deploy

link: https://lucerocondoririvera.github.io/mujeresensteam.github.io/

### Netlify (drag & drop)

1. Entra a [netlify.com](https://www.netlify.com) y crea una cuenta gratuita
2. En el dashboard, arrastra la carpeta `mujeres-steam/` al área de deploy
3. Netlify genera una URL automáticamente (ej. `https://mujeres-steam.netlify.app`)
4. Para un dominio personalizado: **Domain settings → Add custom domain**

### Dominio personalizado (opcional)

Para usar un dominio como `mujeresenteam.org`:
1. Compra el dominio en [Namecheap](https://namecheap.com) o [Porkbun](https://porkbun.com)
2. En Netlify: **Site settings → Domain management → Add domain**
3. Apunta los nameservers del dominio a los de Netlify (te los indica la plataforma)

---

## Meta tags para redes sociales

El `index.html` incluye meta tags básicas de Open Graph. Para personalizar la vista previa en redes:

```html
<!-- En el <head> de index.html -->
<meta property="og:title"       content="Mujeres en STEAM" />
<meta property="og:description" content="Tecnología, identidad y libertad económica para mujeres y niñas." />
<meta property="og:image"       content="https://TU_URL/preview.jpg" />
<meta property="og:url"         content="https://TU_URL" />
<meta name="twitter:card"       content="summary_large_image" />
```

## Responsividad

| Breakpoint | Comportamiento                                      |
|------------|-----------------------------------------------------|
| `> 900px`  | Layout completo de 2 columnas en todas las secciones |
| `≤ 860px`  | Grillas colapsan a 1 columna, imágenes se reducen   |
| `≤ 700px`  | Nav cambia a hamburguesa, cards de programas en 1 col |
| `≤ 560px`  | Formulario: campos en 1 columna, padding reducido   |

---


## Créditos

| Elemento           | Fuente                                          |
|--------------------|-------------------------------------------------|
| Fuentes            | [Google Fonts](https://fonts.google.com)        |
| Íconos             | SVG inline — trazo único, sin dependencias      |

---

## 📋 Licencia

Proyecto de uso interno de **Lucero Condori Rivera**.  
© 2026 Mujeres en STEAM — Arequipa, Perú.
