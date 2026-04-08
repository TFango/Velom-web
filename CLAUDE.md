# VELOM — Claude Code Context

## Qué es esto
VELOM es una tienda de ropa ficticia (portfolio demo) construida para Certezza, una agencia web de Mar del Plata. El objetivo es usarla como demo para conseguir clientes reales de e-commerce. Es frontend-only con mock data — sin backend ni pagos reales.

## Stack
- **Next.js** con TypeScript
- **CSS Modules** (sin Tailwind)
- **Framer Motion** para animaciones
- Sin librerías de UI (todo custom)

## Estructura de carpetas esperada
```
velom-web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # Home
│   ├── shop/
│   │   └── page.tsx              # Listado de productos
│   └── product/
│       └── [slug]/
│           └── page.tsx          # Página de producto
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── ProductGrid/
│   ├── ProductCard/
│   ├── Cart/                     # Slide-over
│   └── Footer/
├── data/
│   └── products.ts               # Mock data JSON
├── context/
│   └── CartContext.tsx           # Estado global del carrito
├── styles/
│   └── globals.css
└── public/
    └── images/
        └── products/
```

## Design tokens
```css
:root {
  --color-text: #0f0f0f;
  --color-background: #fcfcfc;
  --color-background-alt: #f2e8e0;   /* beige rosado — Featured, BannerBolso, Footer */
  --color-primary: #02121d;
  --color-secondary: #3c5967;
  --color-accent: #b8a794;
  --color-border: rgba(15, 15, 15, 0.12);  /* bordes sutiles internos */

  --font-serif: /* IBM Plex Serif */;
  --font-sans: /* Outfit */;
}
```

## Uso de colores por sección
| Sección       | Fondo                      | Texto principal       | Detalle                        |
|---------------|----------------------------|-----------------------|--------------------------------|
| Header        | transparent → `--color-background` (scroll) | `--color-background` → `--color-primary` | badge carrito: `--color-accent` |
| Hero          | imagen + overlay negro     | `--color-background`  | CTA hover: `--color-accent`    |
| Featured      | `--color-background-alt`   | `--color-primary`     | indicadores: `--color-text`    |
| Editorial     | imagen + overlay negro     | `#fff`                | underline semitransparente     |
| BannerBolso   | `--color-background-alt`   | `--color-primary`     | subtítulo: `--color-secondary` |
| Footer        | `--color-background-alt`   | `--color-text`        | bordes: `--color-border`       |

## Reglas de color establecidas
- **Nunca hardcodear colores** — siempre usar tokens CSS. Si falta un token, agregarlo en `globals.css` y documentarlo aquí.
- `--color-background-alt` es `#f2e8e0` (beige rosado cálido). No usar `#f5f0eb` ni ningún otro valor.
- `--color-border` reemplaza a `rgba(0,0,0,0.08)` y similares para todos los separadores y líneas.
- Overlays sobre imágenes: `rgba(0,0,0,0.45)` en la base, `transparent` al 60% — nunca más opaco.

## Tipografía
- **IBM Plex Serif** — pesos 400, 500, 700 — para títulos y display
- **Outfit** — pesos 400, 500, 700 — para body, labels, botones

## Reglas de tipografía
- `rem` para font-size
- `px` para spacing y márgenes
- Contraste verificado WCAG AAA

## Páginas
1. **Home** (`/`) — Hero fullscreen + sección productos + banner editorial + footer
2. **Shop** (`/shop`) — Grid de todos los productos con filtro por categoría
3. **Producto** (`/product/[slug]`) — Foto, nombre, precio, selector color/talle, botón agregar al carrito

## Header
- Transparente sobre el hero (logo y texto en blanco)
- Al hacer scroll → fondo `#fcfcfc` con blur, logo y texto oscuros
- Transición suave con CSS transition
- Ícono hamburger izquierda, logo centrado, ícono carrito derecha
- Animación del header manejada con Framer Motion o scroll listener

## Carrito
- Slide-over desde la derecha
- Estado global con React Context (`CartContext`)
- Muestra: imagen, nombre, color, talle, cantidad (- 1 +), ícono eliminar
- Total al pie + botón "Comprar" (sin funcionalidad real)
- Se abre/cierra con animación (Framer Motion)

## Mock data — productos
Categorías: **Remeras**, **Pantalones**, **Camperas**
Precios en **ARS**
Cada producto tiene:
```ts
{
  id: string
  slug: string
  name: string
  category: 'remeras' | 'pantalones' | 'camperas'
  price: number
  colors: string[]     // hex values
  sizes: string[]      // ['S', 'M', 'L', 'XL', 'XXL']
  image: string        // path a /public/images/products/
  description: string
}
```

## Animaciones
- **Framer Motion** — slide-over del carrito, fade de entrada en secciones, transición del header
- **CSS puro** — hover states, transiciones de color, underlines
- Animaciones de entrada: `fadeUp` en textos del hero, `stagger` en grid de productos

## Convenciones de código
- CSS Modules en cada componente (`Component.module.css`)
- Sin Tailwind
- TypeScript estricto
- Componentes funcionales con hooks
- Sin `any`

## Lo que NO tiene (por ser demo)
- Backend / base de datos
- Pagos reales
- Login / registro real (puede haber UI mockeada)
- Checkout funcional

## Despliegue
- Vercel al final del desarrollo
- Repo en GitHub: `velom-web`

## Filosofía de animaciones y UI polish
Seguir los principios de @.agents/skills/emil-design-eng/SKILL.md para todas las decisiones de animaciones, interacciones y polish de UI.

Resumen de reglas clave:
- Solo animar `transform` y `opacity` (GPU, no layout)
- Duraciones: botones 100-160ms, modales/drawers 200-500ms, resto bajo 300ms
- Siempre `ease-out` para entradas, nunca `ease-in`
- Curvas custom: `cubic-bezier(0.23, 1, 0.32, 1)` para ease-out fuerte
- Entradas desde `scale(0.95) + opacity: 0`, nunca desde `scale(0)`
- Botones con `scale(0.97)` en `:active`
- Stagger en grids: 30-80ms entre ítems
- Respetar `prefers-reduced-motion`
- Hover states solo con `@media (hover: hover) and (pointer: fine)`