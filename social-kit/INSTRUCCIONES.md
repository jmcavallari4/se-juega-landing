# Kit de contenido semanal de Se Juega

Lo usa la rutina semanal de contenido. Se Juega es una app gratis para equipos de fútbol amateur de CABA y GBA: buscan rival de su nivel, coordinan el partido en la comunidad de WhatsApp, cargan el resultado y suben en un ranking por zona. La modalidad (F5, F7, F8, F11) la arreglan los equipos. Web: sejuega.net. Nunca mencionar precios ni "equipos fundadores" (la oferta venció el 31/10).

## Diseño: siempre la plantilla oficial

No se diseña nada desde cero. Todas las placas salen de `plantilla.html` siguiendo `guia-de-marca.md` (leerla entera antes de empezar). Se arma el bloque PUBLICACION en JSON y se renderiza:

```
python3 social-kit/render.py publicacion.json carpeta_salida
```

Tipos de placa: `portada`, `equipos`, `pasos`, `cierre`. Fondos: `jugador` (portadas y cierres) y `cancha` (placas con contenido). `[[texto]]` resalta en amarillo, `{{texto}}` en verde. Formato `"9:16"` para TikTok e historias, `"4:5"` para el feed de Instagram.

Para un carrusel de lista (ej. "5 tipos de jugador"), cada ítem va en una placa `portada` con fondo `cancha`, `etiqueta` "TIPO 1", "TIPO 2"…, `titulo` corto y `bajada` de 1 o 2 líneas, `pie` vacío. Ver `ejemplos/tipos-de-jugador.json`.

Revisar cada PNG generado (abrirlo y mirarlo) antes de publicar: nada cortado, desbordado ni encimado. Si un texto no entra, acortarlo.

## Qué se produce cada semana

| Pieza | Cantidad | Día y hora (America/Buenos_Aires) | Dónde |
|---|---|---|---|
| Carrusel de fotos 9:16 | 2 | martes 19:00 y viernes 19:00 | TikTok (modo foto, música automática) |
| Historia 9:16 (1 placa) | 3 | lunes, miércoles y viernes 12:00 | Historias de Instagram y Facebook |

## Carruseles (TikTok)

- 5 a 7 placas: `portada` de tapa + contenido + `cierre`.
- La app NO es el tema. Aparece solo en el `cierre` (ej.: "¿A tu equipo le falta rival? Sumalo {{gratis}} a Se Juega", boton "sejuega.net").
- Temas: rotar entre las líneas del banco. No repetir nada de `usados.md`.
- Tono: español rioplatense, humor de vestuario, frases cortas que den ganas de etiquetar a un amigo. Nada de marketing. Nada ofensivo, nada sobre árbitros, jugadores, clubes o equipos reales, ni política.
- Descripción de TikTok: 1 o 2 líneas que inviten a comentar + "Link en el perfil" + hashtags: #futbolamateur #futbol5 #futbolargentina #futbolcaba #sejuega
- Título de TikTok (obligatorio en Metricool): corto, igual a la idea de la portada.

## Historias (Instagram y Facebook)

- Una sola placa 9:16, tipo `portada` o `cierre`. Que se entienda sola: sin encuestas ni stickers (no se pueden automatizar).
- Variar: ¿ya tenés partido esta semana?, cómo funciona el ranking (todos arrancan en 1200, ganarle a uno de más arriba suma más, el empate cuenta), invitación a la comunidad de WhatsApp, "si no conseguís rival, te lo conseguimos", frase de vestuario.
- Datos y equipos solo reales. Si no hay un dato confirmado, no se usa.

## Banco de temas para carruseles

1. Humor de vestuario: tipos de jugador, excusas del que falta, frases del grupo de WhatsApp del equipo, el que organiza todo, el que nunca paga la cancha, señales de que tu equipo se está por desarmar.
2. Debates: ¿F5 o F7?, ¿el que organiza paga menos?, ¿arquero fijo o rotativo?, ¿tercer tiempo obligatorio?
3. Tips útiles: cómo no quedarte nunca sin rival, cómo armar un equipo que no se desarme, cómo elegir rival de tu nivel, cómo cobrar la cancha sin perseguir a nadie.
4. Cultura del fútbol amateur de AMBA: el sintético, la cancha de los jueves, el tercer tiempo, la previa en el grupo, el partido que se arma a última hora.

## Cómo publicar los archivos

Copiar las imágenes a `public/social/AAAA-MM-DD-nombre/` (fecha de publicación), commit y push a `main`. Vercel publica la web y quedan en `https://sejuega.net/social/AAAA-MM-DD-nombre/1.png`. Esperar unos 2 minutos el deploy antes de programar en Metricool; si Metricool dice que no encuentra el archivo, esperar y reintentar.

## Cómo programar en Metricool

Marca `sejuega_app`, blogId `7987828`, zona horaria `America/Buenos_Aires`.
- Carrusel TikTok: `providers: [{"network":"tiktok"}]`, `media` = lista de URLs en orden, `text` = descripción, `tiktokData: {"title": "...", "autoAddMusic": true, "privacyOption": "PUBLIC_TO_EVERYONE", "commercialContentOwnBrand": true, "photoCoverIndex": 0}`, `autoPublish: true`.
- Historia: `providers: [{"network":"instagram"},{"network":"facebook"}]`, `media` = [URL], sin `text`, `instagramData: {"type":"STORY"}`, `facebookData: {"type":"STORY"}`, `autoPublish: true`.

## Registro

Después de programar, agregar a `usados.md` una línea por pieza (fecha de publicación, tipo, tema). Commit y push.
