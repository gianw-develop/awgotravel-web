from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "awgotravel-logo.png"
OUTPUT = ROOT / "public" / "awgotravel-logo-transparent.png"


def foreground_alpha(red: int, green: int, blue: int) -> int:
    """Build a soft matte for the white and gold artwork only."""
    luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue
    chroma = max(red, green, blue) - min(red, green, blue)
    white_score = max(0.0, min(1.0, (luminance - 115.0) / 105.0))
    if chroma > 42:
        white_score *= max(0.0, 1.0 - (chroma - 42.0) / 80.0)

    warmth = ((red + green) / 2.0) - blue
    gold_score = max(0.0, min(1.0, (warmth - 20.0) / 65.0))
    gold_score *= max(0.0, min(1.0, (red - 105.0) / 100.0))

    score = max(white_score, gold_score)
    if score < 0.08:
        return 0
    return round(255 * min(1.0, (score - 0.08) / 0.78))


source = Image.open(SOURCE).convert("RGB")
result = Image.new("RGBA", source.size)
result.putdata(
    [
        (red, green, blue, foreground_alpha(red, green, blue))
        for red, green, blue in source.get_flattened_data()
    ]
)

alpha = result.getchannel("A")
bbox = alpha.getbbox()
if bbox is None:
    raise RuntimeError("Logo extraction produced no foreground pixels")

padding = 12
left = max(0, bbox[0] - padding)
top = max(0, bbox[1] - padding)
right = min(result.width, bbox[2] + padding)
bottom = min(result.height, bbox[3] + padding)
result.crop((left, top, right, bottom)).save(OUTPUT, optimize=True)

print(f"saved={OUTPUT}")
print(f"source_size={source.size}")
print(f"foreground_bbox={bbox}")
print(f"output_size={(right-left, bottom-top)}")
