# Fuentes del logotipo

Material de origen, no se publica. `public/` es lo que se sirve.

| Archivo | Uso |
|---|---|
| `logo-anim.html` | Animación original del logotipo. De aquí sale `src/components/svg/LogoAnimated.astro` |
| `logo-ink.svg` | `#F4FFF8`. Es el mismo arte que `public/biohi-logo.svg` |
| `logo-brand.svg` | `#00C853`. Variante de marca, sin uso actual |
| `logo-paper.svg` | `#519E50`. Variante apagada, sin uso actual |

## Diferencias entre `logo-anim.html` y el componente

El componente no es una copia literal:

- Sin el barrido de luz, ni su máscara ni su degradado.
- Sin las partículas a la deriva: `AgarField` ya aporta el ambiente del hero.
- Sin el `<rect>` de fondo negro.
- IDs con prefijo `bh-` para no chocar con los de `AgarField`.
- Verde tomado del token del sitio en lugar de `#03a345`.
- `transform-box: fill-box` en el anillo, para que el origen siga siendo el
  centro cuando el SVG escala con el contenedor.
- Se le suma el vuelo hacia el navbar, que no existe en el original.

El `<script>` del HTML era andamiaje de previsualización (escalado al viewport,
recarga con barra espaciadora, `seek(ms)` para congelar frames) y no se portó.
Para revisar la animación original, abrir el HTML directamente en el navegador.
