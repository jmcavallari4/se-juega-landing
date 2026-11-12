"""Renderiza un bloque PUBLICACION con la plantilla oficial de Se Juega (plantilla.html).

Uso: python3 social-kit/render.py publicacion.json carpeta_salida
publicacion.json = el mismo objeto PUBLICACION de la plantilla, en JSON:
  {"formato": "9:16", "placas": [ {"tipo": "portada", ...}, ... ]}
Tipos: portada, equipos, pasos, cierre (ver guia-de-marca.md). Sale un PNG por placa,
a tamaño real (1080x1350 o 1080x1920), igual que el botón "Descargar" de la plantilla.
Requiere playwright (python) con Chromium.
"""
import json, os, re, sys
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
pub = json.load(open(sys.argv[1], encoding="utf-8"))
out = sys.argv[2]
os.makedirs(out, exist_ok=True)
html = open(os.path.join(HERE, "plantilla.html"), encoding="utf-8").read()
html, n = re.subn(r"const PUBLICACION = \{.*?\n\};", lambda m: "const PUBLICACION = " + json.dumps(pub, ensure_ascii=False) + ";", html, count=1, flags=re.S)
assert n == 1, "no se encontró el bloque PUBLICACION en la plantilla"
tmp = os.path.join(out, "_render.html")
open(tmp, "w", encoding="utf-8").write(html)
h = 1920 if pub.get("formato") == "9:16" else 1350
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1200, "height": h + 100})
    pg.route("**/*", lambda r: r.abort() if r.request.url.startswith("http") else r.continue_())
    pg.goto("file://" + tmp, wait_until="load")
    pg.evaluate("document.fonts.ready")
    pg.evaluate("""() => document.querySelectorAll('.vista').forEach(v => {v.style.width='1080px'; v.style.height='auto'; v.style.overflow='visible'; v.style.borderRadius='0';
                   v.querySelector('.s').style.transform='none';})""")
    pg.wait_for_timeout(500)
    for i in range(len(pub["placas"])):
        f = os.path.join(out, f"{i + 1}.png")
        pg.locator(f"#placa{i}").screenshot(path=f)
        print(f)
    b.close()
os.remove(tmp)
