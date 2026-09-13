from PIL import Image, ImageDraw, ImageFont
import os
out = os.path.join(os.path.dirname(__file__), '..', 'icons')
font_path = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
def make(size, maskable=False, name=None):
    S = size * 4
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    grad = Image.new('RGBA', (S, S))
    px = grad.load()
    a, b = (255, 77, 109), (255, 138, 61)
    for y in range(S):
        for x in range(S):
            t = (x + y) / (2 * S)
            px[x, y] = tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3)) + (255,)
    mask = Image.new('L', (S, S), 0)
    d = ImageDraw.Draw(mask)
    if maskable: d.rectangle([0, 0, S, S], fill=255)
    else: d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.23), fill=255)
    img.paste(grad, (0, 0), mask)
    d = ImageDraw.Draw(img)
    scale = 0.36 if maskable else 0.46
    f = ImageFont.truetype(font_path, int(S * scale))
    text = 'Го'
    bb = d.textbbox((0, 0), text, font=f)
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    d.text(((S - w) / 2 - bb[0], (S - h) / 2 - bb[1] + S * 0.02), text, font=f, fill='white')
    r = S * (0.055 if maskable else 0.066)
    cx, cy = S * (0.72 if maskable else 0.78), S * (0.28 if maskable else 0.23)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 255, 255, 230))
    img = img.resize((size, size), Image.LANCZOS)
    img.save(os.path.join(out, name))
make(192, name='icon-192.png')
make(512, name='icon-512.png')
make(512, maskable=True, name='icon-maskable-512.png')
make(180, maskable=True, name='apple-touch-icon.png')
print('ok')
