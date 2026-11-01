import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const source = fs.readFileSync(path.join(root, "src/data/brand.js"), "utf8");
const { activeLogoId, logoConcepts } = await import(
  "data:text/javascript;base64," + Buffer.from(source).toString("base64")
);
const output = path.join(root, "public/brand");
fs.mkdirSync(output, { recursive: true });
const attributeName = (key) =>
  ({
    strokeWidth: "stroke-width",
    strokeLinejoin: "stroke-linejoin",
    strokeLinecap: "stroke-linecap",
  })[key] || key;
const paths = (concept) =>
  concept.paths
    .map(
      (shape) =>
        `<path ${Object.entries(shape)
          .map(([key, value]) => `${attributeName(key)}="${value}"`)
          .join(" ")}/>`,
    )
    .join("");

for (const concept of logoConcepts) {
  fs.writeFileSync(
    path.join(output, `${concept.id}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${concept.viewBox}" fill="none" color="#25372b" role="img" aria-labelledby="title"><title id="title">Warith Adekunle — ${concept.name} WA monogram</title>${paths(concept)}</svg>\n`,
  );
}

// Publish canonical assets from the selected geometry, including the browser icon.
const active = logoConcepts.find((concept) => concept.id === activeLogoId);
for (const [filename, color] of [
  ["logo.svg", "#25372b"],
  ["logo-light.svg", "#e9efdd"],
]) {
  fs.writeFileSync(
    path.join(output, filename),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="6 10 120 84" fill="none" color="${color}" role="img" aria-labelledby="title"><title id="title">Warith Adekunle — WA</title>${paths(active)}</svg>\n`,
  );
}
fs.writeFileSync(
  path.join(root, "public/favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" color="#e9efdd"><title>Adekunle — WA</title><rect width="64" height="64" rx="13" fill="#23372b"/><g transform="translate(2 8) scale(.46)">${paths(active)}</g></svg>\n`,
);

let sheet = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850"><rect width="1200" height="850" fill="#f7f7ef"/><text x="48" y="52" fill="#25372b" font-family="Arial,sans-serif" font-size="23" font-weight="600">WARITH ADEKUNLE / WA DIRECTIONS</text><text x="1152" y="52" text-anchor="end" fill="#677060" font-family="Arial,sans-serif" font-size="12">SIX ORIGINAL VECTOR STUDIES</text>`;
logoConcepts.forEach((concept, index) => {
  const x = 48 + (index % 3) * 378;
  const y = 87 + Math.floor(index / 3) * 370;
  const [, , width, height] = concept.viewBox.split(" ").map(Number);
  sheet += `<g transform="translate(${x} ${y})"><rect width="348" height="337" rx="3" fill="#ecede4"/><text x="18" y="29" fill="#677060" font-family="Arial,sans-serif" font-size="11" letter-spacing="1">${concept.number} / ${concept.name.toUpperCase()}</text><rect x="0" y="48" width="174" height="206" fill="#fdfdf7"/><rect x="174" y="48" width="174" height="206" fill="#202c25"/>`;
  for (const [offset, color] of [
    [0, "#25372b"],
    [174, "#e9efdd"],
  ]) {
    const scale = Math.min(132 / width, 146 / height);
    const tx = offset + (174 - width * scale) / 2;
    const ty = 48 + (206 - height * scale) / 2;
    sheet += `<g transform="translate(${tx} ${ty}) scale(${scale})" color="${color}" fill="none">${paths(concept)}</g>`;
  }
  sheet += `<text x="18" y="283" fill="#25372b" font-family="Arial,sans-serif" font-size="19" font-weight="600">${concept.name}</text><text x="18" y="307" fill="#677060" font-family="Arial,sans-serif" font-size="11">${concept.character}</text></g>`;
});
sheet += `<text x="48" y="830" fill="#677060" font-family="Arial,sans-serif" font-size="11">EXPLORING OPPOSING ANGLES, SHARED STROKES, AND THE ORIGINAL W.</text></svg>`;
fs.writeFileSync(path.join(output, "wa-directions.svg"), sheet + "\n");
console.log(`Exported ${logoConcepts.length} marks and the comparison sheet.`);
