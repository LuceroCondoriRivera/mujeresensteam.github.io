# ✦ Mujeres en STEAM — Landing Page

> Sitio web institucional de **Mujeres en STEAM**, una iniciativa de la Asociación Cultural Warmis Sikuris que crea clubes de programación para mujeres y niñas desde los territorios.

---

## 📁 Estructura del proyecto

```
mujeres-steam/
├── index.html      → Estructura y contenido (HTML semántico)
├── styles.css      → Estilos, paleta, tipografía y responsividad
├── script.js       → Interactividad, animaciones y validación del formulario
└── README.md       → Este archivo
```

> **Sin dependencias externas.** No requiere npm, frameworks ni build tools. Funciona abriendo `index.html` directamente en el navegador o subiéndolo a cualquier hosting estático.

---

## 🎨 Diseño

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

## 📄 Secciones

| # | Sección            | ID             | Descripción                                              |
|---|--------------------|----------------|----------------------------------------------------------|
| 1 | Hero               | `#inicio`      | Titular principal, subtítulo, 2 CTAs, imagen y badge     |
| 2 | Qué es             | `#que-es`      | Misión, ventajas competitivas, imagen + cita destacada   |
| 3 | El Problema        | `#problema`    | Brecha estructural, bullets, stat card 76%               |
| 4 | Nuestra Respuesta  | `#respuesta`   | 3 pilares: educación, mentoría, impacto comunitario      |
| 5 | Programas          | `#programas`   | 2 cards: Club Mujeres (18–35) y Club Niñas (7–15)        |
| 6 | Impacto            | `#impacto`     | 4 estadísticas animadas + 3 fotos de galería             |
| 7 | Quiénes somos      | `#quienes`     | Warmis Sikuris, reconocimientos, imagen                  |
| 8 | CTA Final          | —              | Llamado a acción sobre fondo morado oscuro               |
| 9 | Contacto           | `#contacto`    | Formulario completo + datos de contacto + terminal       |

---

## ⚙️ Funcionalidades (script.js)

- **Navbar dinámico** — transparente en el hero, sólido con blur al hacer scroll
- **Menú hamburguesa** — responsivo en móviles, se cierra al seleccionar un enlace
- **Link activo en scroll** — el ítem del nav se resalta según la sección visible
- **Scroll reveal** — elementos aparecen con fade-up al entrar en viewport (IntersectionObserver)
- **Contadores animados** — los números de impacto se animan al aparecer en pantalla
- **Smooth scroll** — todos los enlaces internos hacen scroll suave con offset del nav
- **Parallax sutil** — las formas geométricas del hero se mueven al hacer scroll
- **Formulario de contacto** con:
  - Validación en tiempo real (campo a campo)
  - Mensajes de error con tipografía monospace
  - Estado de carga con animación en el botón
  - Pantalla de éxito animada con reset automático
- **Fallback de imágenes** — si falla una imagen de Unsplash, muestra un placeholder con gradiente

---

## 📬 Formulario de contacto

El formulario valida localmente y simula el envío. Para conectarlo a un servicio real, reemplaza el bloque de simulación en `script.js`:

```js
// Busca esta línea en script.js (~línea 105):
await new Promise(resolve => setTimeout(resolve, 1800));
```

### Opción A — Formspree

```js
const response = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre:   document.getElementById('nombre').value,
    email:    document.getElementById('email').value,
    interes:  document.getElementById('interes').value,
    mensaje:  document.getElementById('mensaje').value,
  }),
});
if (!response.ok) throw new Error('Error al enviar');
```

### Opción B — EmailJS

```js
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
  from_name: document.getElementById('nombre').value,
  reply_to:  document.getElementById('email').value,
  interes:   document.getElementById('interes').value,
  message:   document.getElementById('mensaje').value,
});
```

---

## 🖼️ Imágenes

Las imágenes se cargan desde **Unsplash** vía URL directa — no requieren carpeta local. Si necesitas usar imágenes propias, reemplaza los atributos `src` en `index.html`:

```html
<!-- Ejemplo: reemplazar imagen del hero -->
<img src="https://images.unsplash.com/..." alt="..." />
<!-- Por: -->
<img src="./img/hero.jpg" alt="..." />
```

---

## 🚀 Deploy

### GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o privado con plan Pro)
2. Sube los tres archivos a la rama `main`
3. Ve a **Settings → Pages**
4. En **Source**, selecciona `Deploy from a branch` → rama `main` → carpeta `/ (root)`
5. Guarda. En unos minutos el sitio estará disponible en:
   `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

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

## 🌐 Meta tags para redes sociales

El `index.html` incluye meta tags básicas de Open Graph. Para personalizar la vista previa en redes:

```html
<!-- En el <head> de index.html -->
<meta property="og:title"       content="Mujeres en STEAM" />
<meta property="og:description" content="Tecnología, identidad y libertad económica para mujeres y niñas." />
<meta property="og:image"       content="https://TU_URL/preview.jpg" />
<meta property="og:url"         content="https://TU_URL" />
<meta name="twitter:card"       content="summary_large_image" />
```

---

## ♿ Accesibilidad

- Estructura HTML semántica (`<nav>`, `<section>`, `<main>`, `<footer>`)
- Atributos `alt` en todas las imágenes
- `aria-label` en el botón hamburguesa
- Contraste de colores que cumple WCAG AA en texto principal
- Formulario con `<label>` vinculado a cada `<input>` via `for`/`id`
- `novalidate` en el form para control total con JS (sin popups nativos del browser)

---

## 📱 Responsividad

| Breakpoint | Comportamiento                                      |
|------------|-----------------------------------------------------|
| `> 900px`  | Layout completo de 2 columnas en todas las secciones |
| `≤ 860px`  | Grillas colapsan a 1 columna, imágenes se reducen   |
| `≤ 700px`  | Nav cambia a hamburguesa, cards de programas en 1 col |
| `≤ 560px`  | Formulario: campos en 1 columna, padding reducido   |

---

## 🔧 Personalización rápida

### Cambiar datos de contacto

En `index.html`, busca la sección `#contacto` y edita:

```html
<a href="mailto:info@mujeresenteam.org" class="ci-value">info@mujeresenteam.org</a>
<!-- Reemplaza con tu email real -->

<div class="ci-value">Arequipa, Perú</div>
<!-- Reemplaza con tu ciudad/modalidad -->

<a href="#" class="ci-value">@mujeresenteam</a>
<!-- Reemplaza con tu usuario de Instagram -->
```

### Cambiar estadísticas de impacto

En `index.html`, edita el atributo `data-target` de cada `.stat-num`:

```html
<span class="stat-num" data-target="84">0</span>
<!-- Cambia 84 por tu número real -->
```

### Agregar favicon

```html
<!-- Agregar en el <head> de index.html -->
<link rel="icon" type="image/png" href="./favicon.png" />
```

---

## 👩‍💻 Créditos

| Elemento           | Fuente                                          |
|--------------------|-------------------------------------------------|
| Fuentes            | [Google Fonts](https://fonts.google.com)        |
| Imágenes           | [Unsplash](https://unsplash.com) (libres de uso)|
| Íconos             | SVG inline — trazo único, sin dependencias      |

---

## 📋 Licencia

Proyecto de uso interno de **Warmis Sikuris Asociación Cultural**.  
© 2026 Mujeres en STEAM — Arequipa, Perú.
