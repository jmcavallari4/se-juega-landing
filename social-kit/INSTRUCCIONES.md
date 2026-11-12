# Kit de contenido semanal de Se Juega

Lo usa la rutina semanal de contenido. Se Juega es una app gratis para equipos de fútbol amateur de CABA y GBA: buscan rival de su nivel, coordinan el partido en la comunidad de WhatsApp, cargan el resultado y suben en un ranking por zona. Categorías masculino, femenino y mixto; la modalidad (F5, F7, F8, F11) la arreglan los equipos. Web: sejuega.net. Nunca mencionar precios ni "equipos fundadores" (la oferta venció el 31/10).

## Qué se produce cada semana

| Pieza | Cantidad | Día y hora (America/Buenos_Aires) | Dónde |
|---|---|---|---|
| Carrusel de fotos | 2 | martes 19:00 y viernes 19:00 | TikTok (foto, música automática) |
| Historia | 3 | lunes, miércoles y viernes 12:00 | Historias de Instagram y Facebook |

## Carruseles (TikTok)

- 6 a 8 diapositivas: `cover` + `item`/`text` + `close`.
- La app NO es el tema. Aparece solo en la última diapositiva (`close`).
- Temas: rotar entre las cuatro líneas del banco de temas. No repetir un tema de `usados.md`.
- Tono: español rioplatense, humor de vestuario, frases cortas que alguien quiera etiquetar a un amigo. Nada de lenguaje de marketing. Nada ofensivo, nada sobre árbitros reales, jugadores reales, clubes reales ni política.
- Sin emojis dentro de las imágenes (la tipografía no los dibuja). Los emojis van solo en la descripción.
- Descripción de TikTok: 1 o 2 líneas que inviten a comentar + `sejuega.net` + hashtags: #futbolamateur #futbol5 #buscorival #futbolcaba #sejuega
- Título de TikTok (obligatorio en Metricool): igual al título de la portada, corto.

## Historias (Instagram y Facebook)

- Una sola imagen `story`. Que se entienda sola, sin encuestas ni stickers (no se pueden automatizar).
- Variar: recordatorio de que se puede buscar rival para el finde, frase de vestuario, dato de cómo funciona el ranking, invitación a la comunidad de WhatsApp, "¿ya tenés partido esta semana?".
- Sin emojis en la imagen. Siempre `cta: "sejuega.net"`.

## Banco de temas (líneas)

1. Humor de vestuario: tipos de jugador, excusas del que falta, frases del grupo de WhatsApp del equipo, el que organiza todo, el que nunca paga la cancha, señales de que tu equipo se está por desarmar.
2. Debates: ¿F5 o F7?, ¿el que organiza paga menos?, ¿se puede patear de punta?, ¿arquero fijo o rotativo?, ¿tercer tiempo obligatorio?
3. Tips útiles: cómo no quedarte nunca sin rival, cómo armar un equipo que no se desarme, cómo elegir rival de tu nivel, qué llevar al partido, cómo cobrar la cancha sin perseguir a nadie.
4. Cultura del fútbol amateur de AMBA: el sintético, la cancha de los jueves, el tercer tiempo, la previa en el grupo, el partido que se arma a última hora.

## Cómo generar

```
pip install pillow --break-system-packages
python3 social-kit/generar.py spec.json carpeta_salida
```
Ver el formato del spec en el encabezado de `generar.py`. Revisar cada imagen generada antes de publicarla (que no haya texto cortado ni desbordado).

## Cómo publicar los archivos

Copiar las imágenes a `public/social/AAAA-MM-DD-nombre/` (fecha de publicación), hacer commit y push a `main`. Vercel publica la web y quedan en `https://sejuega.net/social/AAAA-MM-DD-nombre/1.png`. Esperar unos 2 minutos al deploy antes de programar en Metricool (si Metricool dice que no encuentra el archivo, esperar y reintentar).

## Cómo programar en Metricool

Marca `sejuega_app`, blogId `7987828`, zona horaria `America/Buenos_Aires`.
- Carrusel TikTok: `providers: [{"network":"tiktok"}]`, `media` = lista de URLs en orden, `text` = descripción, `tiktokData: {"title": "...", "autoAddMusic": true, "privacyOption": "PUBLIC_TO_EVERYONE", "commercialContentOwnBrand": true, "photoCoverIndex": 0}`, `autoPublish: true`.
- Historia: `providers: [{"network":"instagram"},{"network":"facebook"}]`, `media` = [URL], sin `text`, `instagramData: {"type":"STORY"}`, `facebookData: {"type":"STORY"}`, `autoPublish: true`.

## Registro

Después de programar, agregar a `usados.md` una línea por pieza: fecha de publicación, tipo, tema/título. Commit y push.
