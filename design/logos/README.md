# Logos institucionales

Cada marca está en dos versiones:

| Archivo | Ubicación | Uso |
| --- | --- | --- |
| `utfsm-informatica.png`, `fesw-usm.png` | `design/logos/` (acá) | Original oficial. Texto negro sobre transparente, así que **solo sirve sobre fondo claro**. Se conserva como fuente y **no se publica**: el sitio no lo usa en ninguna parte. |
| `utfsm-informatica-oscuro.png`, `fesw-usm-oscuro.png` | `public/logos/` | Variantes para el fondo oscuro del sitio. Son las que usa `InstitutionalStrip.astro`. |

## Cómo se derivaron las variantes oscuras

La alternativa fácil, `filter: brightness(0) invert(1)`, no sirve: aplana el
escudo UTFSM a una silueta blanca y le quita toda la heraldía.

Las variantes se generaron con una conversión de *tinta sobre papel* a *luz
sobre oscuro*: cada píxel neutro se pinta blanco con alfa proporcional a su
oscuridad, `alfa_nuevo = alfa * (1 - luminancia / 255)`. El negro queda blanco
opaco, el gris queda blanco semitransparente y el antialiasing se preserva, así
que la jerarquía del original se mantiene en negativo.

Lo que **no** se toca, para no alterar ningún color de marca:

- **UTFSM**: las columnas 0 a 174 (el escudo). El análisis de los píxeles
  saturados confirmó que la marca gráfica ocupa las columnas 6 a 166 y que de
  la 175 en adelante todo es texto neutro.
- **FESW**: cualquier píxel con saturación mayor a 0.30 (el swoosh rojo y
  amarillo). Acá la separación es por saturación y no por columna, porque el
  swoosh cruza por detrás de las letras.

Si hay que regenerarlas, se rehace la misma operación desde los originales.
