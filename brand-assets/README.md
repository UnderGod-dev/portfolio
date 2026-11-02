# Adekunle brand kit

Both identities are preserved: **WA / Interlock** (original) and **A / Flow A** (current adekunle.cloud identity).

## Find the right asset

| Folder | Contents |
| --- | --- |
| 01-WA-Interlock | Original WA symbol, Warith Adekunle wordmarks, avatars, icons |
| 02-A-Flow | Selected Flow A symbol, adekunle.cloud wordmarks, avatars, icons |
| 03-Concept-archive | All six WA and three A design studies, in forest and ivory SVG |
| 04-Comparison-sheets | Both design boards as SVG and PNG |
| 05-Source | Original geometry in JavaScript and JSON |

## Formats and sizes

- **SVG:** scalable vector masters for websites, design tools, and print. Monograms are paths. Wordmarks contain editable Arial/Helvetica text; use the PNG wordmark if an app substitutes fonts.
- **PNG-transparent:** square symbols at 512 and 2048 pixels, with transparent backgrounds and clear space built in. Ready for slides, documents, signatures, and graphics.
- **Wordmarks:** transparent horizontal logos, SVG plus 2048-pixel-wide PNG. WA uses Warith Adekunle; Flow A uses adekunle.cloud.
- **Avatars:** light and dark rounded tiles at 1024 pixels plus SVG. Centre them when cropping to a circle.
- **Icons:** 16, 32, 48, 180, 192, and 512-pixel PNG; SVG favicon; ICO with 16/32/48-pixel images.

## Colour and usage

| Colour | Hex | Use |
| --- | --- | --- |
| Forest | #25372B | Main mark on light backgrounds |
| Charcoal | #151B18 | Neutral dark alternative |
| Ivory | #E9EFDD | Main mark on dark backgrounds |
| Black | #000000 | Single-colour reproduction |
| White | #FFFFFF | High-contrast dark backgrounds |

Keep the proportions intact. Leave clear space of approximately one quarter of the symbol height around standalone marks. Choose a foreground with clear contrast to the background. White and ivory transparent files need a dark background to be visible.

The site uses Geist for interface typography; supplied reusable wordmarks use Arial/Helvetica. A logo selection does not delete its alternatives.

## Rebuild from the repository

Run npm install, then:

    node scripts/export-brand-marks.mjs
    node scripts/export-brand-kit.mjs

The kit renderer uses Sharp, installed with the repository's Next.js dependencies. An optional output-directory argument can write a separate copy. The manifest records SHA-256 hashes for every asset.
