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
| Carrusel 9:16 | 2 | martes 19:00 y viernes 19:00 | TikTok (modo foto, música automática) |
| El mismo carrusel en 4:5 | 2 | martes 19:00 y viernes 19:00 | Feed de Instagram y página de Facebook |
| Historia 9:16 (1 placa) | 3 | lunes, miércoles y viernes 12:00 | Historias de Instagram y Facebook |
| Novedades con datos (solo si hay algo nuevo) | 0 o 1 | lunes 19:00 | Feed de Instagram y página de Facebook (4:5) |
| Guion de video de humor | 1 | (lo graba Juan si quiere) | Fila en Notion, no se publica |

De los 2 carruseles de la semana: uno es sobre una **función de la app** y el otro de humor, debate, tips o cultura (banco de temas). Alternar el orden: una semana la función va el martes, la siguiente el viernes.

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

## Funciones de la app (para el carrusel de funciones)

La única fuente es `funciones.md` (sale del código de la app). No inventar funciones ni detalles que no estén ahí. Una idea por carrusel, sin repetir lo de `usados.md`; la placa `pasos` sirve para explicar procesos. Cerrar con `cierre` invitando a registrar el equipo. Para las historias que hablen de la app, usar la misma fuente.

## Instagram y Facebook (feed)

- Mismo contenido que el carrusel de TikTok, renderizado con `"formato": "4:5"` (3 a 6 placas; si el de TikTok tiene más, condensar).
- Texto del pie: 2 o 3 líneas cortas, 1 emoji como mucho por párrafo, cierre "Link en la bio 👆" y hashtags: #futbolamateur #futbol5 #futbolargentina #futbolcaba #sejuega
- Metricool: `providers: [{"network":"instagram"},{"network":"facebook"}]`, `media` = URLs en orden, `instagramData: {"type":"POST"}`, `facebookData: {"type":"POST"}`, `autoPublish: true`.

## Novedades con datos (solo si hay algo nuevo)

Antes de armar la semana, consultar los equipos de la app: POST https://wdnpzdhdolvvdjyjfvfd.supabase.co/rest/v1/rpc/get_team_rankings con headers `apikey: sb_publishable_LH3ondk7ait067B0EyKYeg_KD-ukpop` y `Content-Type: application/json`, body `{}`. Devuelve name, zone, barrio_caba, pba_localidad, shield_url, rating, matches_played. Si no se puede consultar, saltear esta parte.
- Si hay 2 o más equipos que no están en "Equipos ya presentados" de `usados.md`: publicación "Nuevos equipos" (portada + placa `equipos` con hasta 4 equipos, escudo = shield_url + cierre).
- Si aparecieron partidos nuevos (matches_played subió respecto de lo publicado): avisarlo en la notificación a Juan con los datos, porque la base no dice quién jugó contra quién; no publicar un resultado sin rival y marcador confirmados.
- Si no hay nada nuevo, no se publica nada de esto. Nunca inventar equipos, cifras ni resultados.
- Agregar los equipos publicados a `usados.md`.

## Guion de video de humor (Notion)

Crear 1 fila en la base de Notion "Se Juega · Publicaciones (Instagram y TikTok)" (data source collection://65808159-d405-477d-8d3f-446a96d3a0b9) con: Publicación = título, Red = TikTok, Tipo = Humor, Publicar el = miércoles 20:00 de esa semana, Estado = "Para revisar", Semana = fecha del lunes, Texto = guion: idea en una línea; texto en pantalla (máximo 2 frases cortas); qué filmar con el celular en la cancha (sin caras de gente que no aceptó); qué tipo de audio en tendencia usar (sin inventar nombres de canciones); descripción + hashtags. Situación que todo jugador de F5 vivió; Se Juega solo al final y sin forzar. Leer antes las filas existentes para no repetir ideas y aplicar lo que Juan escribió en "Comentarios".

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
