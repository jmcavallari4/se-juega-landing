# Guía de marca visual · Se Juega
Para que todas las publicaciones de Instagram y TikTok salgan iguales. Usala junto con `plantilla-publicaciones-se-juega.html`.

## Cómo se arma una publicación (proceso)
1. Elegí el tipo de cada placa: `portada`, `equipos`, `pasos` o `cierre`.
2. Escribí el bloque `PUBLICACION` de la plantilla (al final del archivo HTML): formato, textos, equipos y fondo de cada placa.
3. Entregale a Juan Martín **solo ese bloque `PUBLICACION`** completo, listo para pegar. Él lo pega en la plantilla, la abre en el navegador y descarga cada placa en PNG con el botón.
4. No inventes otro diseño: los colores, fuentes, fondos y medidas ya están en la plantilla.

## Formatos
- **Feed / carrusel de Instagram:** 4:5, 1080×1350 px. Entre 3 y 6 placas.
- **Historias y TikTok:** 9:16, 1080×1920 px. Dejar libres los 250 px de arriba y los 350 px de abajo (ahí van los botones de la app y los stickers). La plantilla ya respeta esos márgenes.

## Colores
| Uso | Color |
|---|---|
| Fondo | Verde muy oscuro `#0a1a0e` |
| Acento 1 ("SE", resaltados positivos, bordes) | Verde `#22d36b` |
| Acento 2 ("JUEGA", palabras clave, botones) | Amarillo `#ffd21f` |
| Texto | Blanco `#ffffff` |
| Solo para números que bajan | Rojo suave `#ff6b6b` |

## Tipografías (todas de Google Fonts, gratis)
- **Logo "SE JUEGA":** Anton. "SE" en verde, "JUEGA" en amarillo, en una línea.
- **Títulos:** Lilita One, grandes (78 a 160 px), con sombra negra abajo.
- **Textos y datos:** Inter (500 normal, 700 y 800 para destacar).

## Fondos
- **estadio-jugador.jpg:** jugador con la pelota y luces de estadio. Para portadas y cierres.
- **estadio-cancha.jpg:** cancha con luces, más neutro. Para placas con mucho contenido (equipos, pasos, ranking).
- Siempre con un degradé oscuro encima (de arriba a abajo) para que el texto se lea. Ya está en la plantilla.

## Elementos que se repiten
- **Logo arriba** en cada placa.
- **Pie** en todas las placas de feed: "@sejuega_app" a la izquierda y "sejuega.net" a la derecha.
- **Etiqueta** amarilla con borde redondeado para el tema (ej.: "⭐ NUEVOS EQUIPOS", "✅ PRIMER PARTIDO").
- **Tarjetas** de fondo verde oscuro semitransparente con borde verde fino.
- **Escudos** en círculo con borde verde. Si el equipo no tiene escudo, círculo verde con sus iniciales.
- **Botón final** amarillo: "Link en la bio 👆".
- En los títulos se resalta **una o dos palabras** en amarillo (en la plantilla: `[[palabra]]`) y, si hace falta, algo positivo en verde (`{{palabra}}`).

## Reglas de contenido
- Pocas palabras por placa: un título y como mucho una bajada de 2 líneas.
- Datos y equipos solo reales (de la app). Nada inventado.
- Sin ofertas ni fechas límite salvo que Juan Martín lo pida.
- Siempre cerrar con una placa de acción ("¿Tu equipo todavía no está?" + "Link en la bio").

## Escudos de los equipos
Los escudos se toman de la app. En el campo `escudo` va el link público de la imagen (los de la app están en `https://wdnpzdhdolvvdjyjfvfd.supabase.co/storage/v1/object/public/team-shields/...`). Si no hay link, dejarlo vacío y se usan las iniciales.
