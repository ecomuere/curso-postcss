# Curso de PostCSS y CSS Next

BEM significa Bloque, Elemento, Modificador, y nos permite separar por bloques, cada parte del código, haciéndolo mucho más legible.

## Custom properties => permite usar variables

  :root {
    --mainColor: red
  }
  a {
    color: var(--mainColor)
  }

## Custom media queries

Definición

  @custom-media --small-viewport (max-width: 30em);

Uso

  @media (--small-viewport) {
    ...
  }
