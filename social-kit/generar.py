"""Genera piezas de Se Juega a partir de un spec JSON.

Uso: python3 social-kit/generar.py spec.json carpeta_salida
Requiere Pillow (pip install pillow --break-system-packages).

Spec:
{"slides": [ {"kind": "cover", "title": "...", "accent": "...", "sub": "..."},
             {"kind": "item", "num": "01", "title": "...", "body": "..."},
             {"kind": "text", "title": "...", "body": "..."},
             {"kind": "close", "title": "...", "sub": "...", "cta1": "...", "cta2": "..."},
             {"kind": "story", "title": "...", "accent": "...", "body": "...", "cta": "sejuega.net"} ]}
Todas las piezas salen en 1080x1920. Las "story" no llevan numeración y dejan libre
la parte de abajo para stickers.
"""
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HERE, "fonts")
A = os.path.join(FONTS, "Anton.ttf")
L = os.path.join(FONTS, "Lilita.ttf")
I = os.path.join(FONTS, "Inter-Medium.otf")
IB = os.path.join(FONTS, "Inter-Bold.otf")
BG, G, Y, W, MU, CARD = (10, 26, 14), (34, 211, 107), (255, 210, 31), (255, 255, 255), (170, 190, 175), (20, 44, 27)
WD, H, M = 1080, 1920, 96


def F(p, s):
    return ImageFont.truetype(p, s)


def wrap(d, t, f, mw):
    out, cur = [], ""
    for w in t.split():
        x = (cur + " " + w).strip()
        if d.textlength(x, font=f) <= mw:
            cur = x
        else:
            out.append(cur)
            cur = w
    out.append(cur)
    return out


def fit(d, t, path, size, mw, max_lines):
    """Achica la fuente hasta que el texto entre en max_lines líneas."""
    while size > 40:
        f = F(path, size)
        if len(wrap(d, t, f, mw)) <= max_lines:
            return f
        size -= 6
    return F(path, size)


def block(d, y, t, f, col, lh=1.18, center=True, mw=WD - 2 * M):
    for ln in wrap(d, t, f, mw):
        x = (WD - d.textlength(ln, font=f)) / 2 if center else M
        d.text((x, y), ln, font=f, fill=col)
        y += f.size * lh
    return y


def base(i, n, numbered=True):
    im = Image.new("RGB", (WD, H), BG)
    d = ImageDraw.Draw(im)
    d.ellipse((WD - 380, H - 380, WD + 380, H + 380), outline=(18, 44, 25), width=8)
    d.text((M, 120), "SE JUEGA", font=F(A, 52), fill=G)
    if numbered and n > 1:
        t = f"{i + 1}/{n}"
        f = F(IB, 36)
        d.text((WD - M - d.textlength(t, font=f), 132), t, font=f, fill=MU)
    return im, d


def render(spec, out):
    os.makedirs(out, exist_ok=True)
    sl = spec["slides"]
    n = len(sl)
    paths = []
    for i, s in enumerate(sl):
        k = s["kind"]
        im, d = base(i, n, numbered=(k != "story"))
        mw = WD - 2 * M
        if k == "cover":
            f = fit(d, s["title"] + " " + s.get("accent", ""), A, 150, mw, 6)
            y = block(d, 560, s["title"], f, W, 1.05)
            if s.get("accent"):
                y = block(d, y + 20, s["accent"], f, Y, 1.05)
            if s.get("sub"):
                block(d, y + 70, s["sub"], F(IB, 54), MU)
            block(d, 1640, "Deslizá  →", F(IB, 46), G)
        elif k == "item":
            d.text((M, 430), s["num"], font=F(A, 300), fill=G)
            ft = fit(d, s["title"], A, 120, mw, 3)
            y = block(d, 800, s["title"], ft, W, 1.05, center=False)
            d.rounded_rectangle((M, y + 50, WD - M, y + 60), 5, fill=Y)
            fb = fit(d, s["body"], I, 58, mw, 7)
            block(d, y + 110, s["body"], fb, W, 1.3, center=False)
        elif k == "text":
            ft = fit(d, s["title"], A, 130, mw, 4)
            y = block(d, 520, s["title"], ft, Y, 1.05, center=False)
            fb = fit(d, s["body"], I, 58, mw, 9)
            block(d, y + 80, s["body"], fb, W, 1.3, center=False)
        elif k == "close":
            ft = fit(d, s["title"], A, 140, mw, 3)
            y = block(d, 480, s["title"], ft, W, 1.05)
            if s.get("sub"):
                block(d, y + 30, s["sub"], F(L, 64), Y)
            d.rounded_rectangle((M, 1120, WD - M, 1560), 40, fill=CARD, outline=G, width=4)
            block(d, 1170, s.get("cta1", "¿A tu equipo le falta rival?"), F(IB, 50), W, 1.25)
            block(d, 1320, "SE JUEGA", F(A, 110), G)
            block(d, 1470, s.get("cta2", "App gratis · CABA y GBA · sejuega.net"), F(IB, 44), MU)
        elif k == "story":
            f = fit(d, s["title"] + " " + s.get("accent", ""), A, 170, mw, 5)
            y = block(d, 380, s["title"], f, W, 1.05)
            if s.get("accent"):
                y = block(d, y + 10, s["accent"], f, Y, 1.05)
            if s.get("body"):
                y = block(d, y + 70, s["body"], fit(d, s["body"], IB, 54, mw - 80, 4), W, 1.3)
            if s.get("cta"):
                y = max(y + 60, 1180)
                d.rounded_rectangle((190, y, 890, y + 130), 65, fill=G)
                block(d, y + 20, s["cta"], F(A, 80), BG)
        else:
            raise ValueError(f"kind desconocido: {k}")
        p = os.path.join(out, f"{i + 1}.png")
        im.save(p)
        paths.append(p)
    return paths


if __name__ == "__main__":
    spec = json.load(open(sys.argv[1], encoding="utf-8"))
    for p in render(spec, sys.argv[2]):
        print(p)
