import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createHash } from "node:crypto";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require("sharp");
const output = path.resolve(process.argv[2] || path.join(root, "brand-assets"));
if (output === root || output === path.parse(output).root)
  throw new Error("Choose a dedicated brand kit directory.");

const source = await fs.readFile(path.join(root, "src/data/brand.js"), "utf8");
const { logoConcepts, activeLogoId } = await import(
  "data:text/javascript;base64," + Buffer.from(source).toString("base64")
);
const palette = {
  forest: "#25372b",
  charcoal: "#151b18",
  ivory: "#e9efdd",
  black: "#000000",
  white: "#ffffff",
};
const attributes = {
  strokeWidth: "stroke-width", strokeLinejoin: "stroke-linejoin",
  strokeLinecap: "stroke-linecap", fillRule: "fill-rule", clipRule: "clip-rule",
};
const shapes = (concept) => concept.paths.map((shape) =>
  `<path ${Object.entries(shape).map(([key, value]) => `${attributes[key] || key}="${value}"`).join(" ")}/>`
).join("");
const symbol = (concept, color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${concept.viewBox}" fill="none" color="${color}" role="img" aria-label="${concept.name}">${shapes(concept)}</svg>`;
const inset = (concept, color, x, y, width, height) =>
  `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${concept.viewBox}" fill="none" color="${color}">${shapes(concept)}</svg>`;
const square = (concept, color, background) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">${background ? `<rect width="1024" height="1024" rx="224" fill="${background}"/>` : ""}${inset(concept, color, 154, 154, 716, 716)}</svg>`;
const wordmark = (concept, color) => {
  const isA = concept.id === "flow-a";
  const width = isA ? 620 : 780;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="128" viewBox="0 0 ${width} 128" role="img" aria-label="${isA ? "adekunle.cloud" : "Warith Adekunle"}">${inset(concept, color, 8, 8, 104, 112)}<text x="140" y="83" font-family="Arial,Helvetica,sans-serif" font-size="64" letter-spacing="-3" fill="${color}">${isA ? "adekunle.cloud" : "Warith Adekunle"}</text></svg>`;
};
const files = [];
async function save(name, data) {
  const file = path.join(output, name);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, data);
  files.push(name);
}
async function png(name, svg, size) {
  const buffer = await sharp(Buffer.from(svg)).resize(size, size, { fit: "inside" }).png().toBuffer();
  await save(name, buffer);
  return buffer;
}
function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, index) => {
    const at = 6 + index * 16;
    header[at] = size === 256 ? 0 : size;
    header[at + 1] = size === 256 ? 0 : size;
    header.writeUInt16LE(1, at + 4);
    header.writeUInt16LE(32, at + 6);
    header.writeUInt32LE(data.length, at + 8);
    header.writeUInt32LE(offset, at + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map(({ data }) => data)]);
}

const identities = [
  { id: "interlock", folder: "01-WA-Interlock", name: "Original WA / Interlock" },
  { id: "flow-a", folder: "02-A-Flow", name: "Current A / Flow A" },
];
for (const identity of identities) {
  const concept = logoConcepts.find((item) => item.id === identity.id);
  for (const [name, color] of Object.entries(palette)) {
    await save(`${identity.folder}/SVG/${identity.id}-${name}.svg`, symbol(concept, color));
    for (const size of [512, 2048])
      await png(`${identity.folder}/PNG-transparent/${identity.id}-${name}-${size}.png`, square(concept, color), size);
    const lockup = wordmark(concept, color);
    await save(`${identity.folder}/Wordmarks/${identity.id}-${name}.svg`, lockup);
    await png(`${identity.folder}/Wordmarks/${identity.id}-${name}-2048.png`, lockup, 2048);
  }
  for (const [name, color, background] of [
    ["dark", palette.ivory, palette.forest],
    ["light", palette.forest, "#f7f7ef"],
  ]) {
    const avatar = square(concept, color, background);
    await save(`${identity.folder}/Avatars/${identity.id}-${name}.svg`, avatar);
    await png(`${identity.folder}/Avatars/${identity.id}-${name}-1024.png`, avatar, 1024);
  }
  const favicon = square(concept, palette.ivory, palette.forest);
  await save(`${identity.folder}/Icons/favicon.svg`, favicon);
  const small = [];
  for (const size of [16, 32, 48, 180, 192, 512]) {
    const data = await png(`${identity.folder}/Icons/icon-${size}.png`, favicon, size);
    if (size <= 48) small.push({ size, data });
  }
  await save(`${identity.folder}/Icons/favicon.ico`, ico(small));
}

for (const concept of logoConcepts) {
  await save(`03-Concept-archive/${concept.id}-forest.svg`, symbol(concept, palette.forest));
  await save(`03-Concept-archive/${concept.id}-ivory.svg`, symbol(concept, palette.ivory));
}
for (const name of ["wa-directions", "adekunle-directions"]) {
  const svg = await fs.readFile(path.join(root, `public/brand/${name}.svg`));
  await save(`04-Comparison-sheets/${name}.svg`, svg);
  await png(`04-Comparison-sheets/${name}.png`, svg.toString(), 1800);
}
await save("05-Source/brand.js", source);
await save("05-Source/geometry.json", JSON.stringify({ activeLogoId, palette, logoConcepts }, null, 2) + "\n");

let overview = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="920" viewBox="0 0 1440 920"><rect width="1440" height="920" fill="#f7f7ef"/><g font-family="Arial,Helvetica,sans-serif"><text x="64" y="70" font-size="13" letter-spacing="2" fill="#677060">ADEKUNLE / REUSABLE BRAND ASSETS</text><text x="64" y="132" font-size="46" letter-spacing="-2" font-weight="600" fill="#25372b">Two identities. Ready for wherever you go.</text>`;
identities.forEach((identity, index) => {
  const c = logoConcepts.find((item) => item.id === identity.id);
  const x = 64 + index * 668;
  overview += `<g transform="translate(${x} 190)"><text x="0" y="0" font-size="19" fill="#25372b">${identity.name}</text><rect y="28" width="316" height="340" fill="#efefe7" rx="6"/><rect x="316" y="28" width="316" height="340" fill="#202c25" rx="6"/>${inset(c, palette.forest, 66, 100, 184, 184)}${inset(c, palette.ivory, 382, 100, 184, 184)}<text x="24" y="338" font-size="11" letter-spacing="1" fill="#677060">FOR LIGHT BACKGROUNDS</text><text x="340" y="338" font-size="11" letter-spacing="1" fill="#e9efdd">FOR DARK BACKGROUNDS</text>${inset(c, palette.forest, 0, 408, 64, 70)}<text x="90" y="456" font-size="${index ? 39 : 36}" letter-spacing="-1.5" fill="#25372b">${index ? "adekunle.cloud" : "Warith Adekunle"}</text><text x="0" y="530" font-size="13" fill="#677060">SVG masters · transparent PNGs · wordmarks · avatars · icons</text></g>`;
});
overview += `<text x="64" y="828" font-size="14" fill="#677060">FOREST #25372B     CHARCOAL #151B18     IVORY #E9EFDD     BLACK #000000     WHITE #FFFFFF</text><text x="64" y="866" font-size="12" fill="#677060">Flow A is the current adekunle.cloud identity. The original WA and all design studies are preserved.</text></g></svg>`;
await save("Brand-kit-overview.svg", overview);
await png("Brand-kit-overview.png", overview, 1800);

await save("README.md", `# Adekunle brand kit

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
`);
const manifest = [];
for (const file of files.sort()) {
  const data = await fs.readFile(path.join(output, file));
  manifest.push({ file, bytes: data.length, sha256: createHash("sha256").update(data).digest("hex") });
}
await fs.writeFile(path.join(output, "manifest.json"), JSON.stringify({ identities, activeLogoId, files: manifest }, null, 2) + "\n");
console.log(`Exported ${files.length + 1} brand kit files to ${output}`);
