import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const source = fs.readFileSync(path.join(root, "src/data/brand.js"), "utf8");
const { activeLogoId, logoConcepts, legacyLogoConcepts, adekunleConcepts } = await import(
  "data:text/javascript;base64," + Buffer.from(source).toString("base64")
);
const output = path.join(root, "public/brand");
fs.mkdirSync(output, { recursive: true });
const attributeName = (key) =>
  ({
    strokeWidth: "stroke-width",
    strokeLinejoin: "stroke-linejoin",
    strokeLinecap: "stroke-linecap",
    fillRule: "fill-rule",
    clipRule: "clip-rule",
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
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${concept.viewBox}" fill="none" color="#25372b" role="img" aria-labelledby="title"><title id="title">${concept.family === "a" ? "Adekunle.cloud" : "Warith Adekunle"} — ${concept.name} ${concept.family === "a" ? "A" : "WA"} monogram</title>${paths(concept)}</svg>\n`,
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
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${active.viewBox}" fill="none" color="${color}" role="img" aria-labelledby="title"><title id="title">Adekunle.cloud — ${active.name}</title>${paths(active)}</svg>\n`,
  );
}
fs.writeFileSync(
  path.join(root, "public/favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" color="#e9efdd"><title>Adekunle.cloud — ${active.name}</title><rect width="64" height="64" rx="13" fill="#23372b"/><svg x="8" y="6" width="48" height="52" viewBox="${active.viewBox}">${paths(active)}</svg></svg>\n`,
);

let sheet = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850"><rect width="1200" height="850" fill="#f7f7ef"/><text x="48" y="52" fill="#25372b" font-family="Arial,sans-serif" font-size="23" font-weight="600">WARITH ADEKUNLE / WA DIRECTIONS</text><text x="1152" y="52" text-anchor="end" fill="#677060" font-family="Arial,sans-serif" font-size="12">SIX ORIGINAL VECTOR STUDIES</text>`;
legacyLogoConcepts.forEach((concept, index) => {
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

let aSheet = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560 1120" width="1560" height="1120" role="img" aria-labelledby="title"><title id="title">Adekunle.cloud — three A identity directions</title><rect width="1560" height="1120" fill="#f7f7ef"/><g font-family="Arial,Helvetica,sans-serif"><text x="60" y="58" font-size="12" letter-spacing="2" fill="#677060">ADEKUNLE.CLOUD / IDENTITY STUDIES</text><text x="60" y="125" font-size="48" font-weight="600" letter-spacing="-2" fill="#25372b">A new perspective. Distinctly Adekunle.</text><text x="60" y="161" font-size="16" fill="#677060">Three original symbols. One professional identity. Light, dark, and everyday scale.</text>`;
for (const [index, concept] of adekunleConcepts.entries()) {
  const x = 60 + index * 486;
  aSheet += `<g transform="translate(${x} 213)"><rect width="468" height="804" rx="8" fill="#efefe7" stroke="#d9dfd1"/><text x="24" y="35" font-size="11" letter-spacing="1.2" fill="#677060">${concept.number} / ${concept.name.toUpperCase()}</text>`;
  for (const [offset, color, bg] of [[0, "#25372b", "#fdfdf7"], [234, "#e9efdd", "#202c25"]]) {
    aSheet += `<rect x="${offset}" y="58" width="234" height="294" fill="${bg}"/><svg x="${offset + 47}" y="126" width="140" height="150" viewBox="${concept.viewBox}" fill="none" color="${color}">${paths(concept)}</svg>`;
  }
  aSheet += `<text x="24" y="395" font-size="27" font-weight="600" letter-spacing="-1" fill="#25372b">${concept.name}</text><text x="24" y="423" font-size="13" fill="#677060">${concept.character}</text><path d="M24 454H444" stroke="#d5dacd"/><svg x="24" y="481" width="49" height="54" viewBox="${concept.viewBox}" fill="none" color="#25372b">${paths(concept)}</svg><text x="88" y="518" font-size="32" letter-spacing="-1.4" fill="#25372b">adekunle<tspan fill="#748569">.cloud</tspan></text><text x="24" y="575" font-size="10" letter-spacing="1.8" fill="#677060">FAVICON / MONOCHROME</text>`;
  for (const [i, size] of [16, 24, 32, 48].entries()) {
    const bx = 24 + i * 94;
    aSheet += `<rect x="${bx}" y="${649 - size}" width="${size}" height="${size}" rx="${size * .23}" fill="#23372b"/><svg x="${bx + size * .12}" y="${649 - size * .88}" width="${size * .76}" height="${size * .76}" viewBox="${concept.viewBox}" fill="none" color="#e9efdd">${paths(concept)}</svg><text x="${bx}" y="675" font-size="10" fill="#677060">${size}px</text>`;
  }
  aSheet += `<text x="24" y="750" font-size="12" fill="#32694b">${concept.id === activeLogoId ? "SELECTED IDENTITY / ADEKUNLE.CLOUD" : index === 0 ? "OPEN CROSSBAR / ARCHITECTURAL" : "NEGATIVE SPACE / EMBLEM"}</text></g>`;
  fs.writeFileSync(path.join(output, `${concept.id}-wordmark.svg`), `<svg xmlns="http://www.w3.org/2000/svg" width="620" height="128" viewBox="0 0 620 128" role="img" aria-labelledby="title"><title id="title">Adekunle.cloud — ${concept.name} wordmark</title><svg x="8" y="8" width="104" height="112" viewBox="${concept.viewBox}" fill="none" color="#25372b">${paths(concept)}</svg><text x="140" y="83" font-family="Arial,Helvetica,sans-serif" font-size="64" letter-spacing="-3" fill="#25372b">adekunle<tspan fill="#748569">.cloud</tspan></text></svg>\n`);
}
aSheet += `<text x="60" y="1070" font-size="12" fill="#677060">ORIGINAL VECTOR STUDIES / CHARCOAL · IVORY · SAGE</text><text x="1500" y="1070" text-anchor="end" font-size="12" fill="#677060">ADEKUNLE / CLOUD · DEVOPS · AI</text></g></svg>`;
fs.writeFileSync(path.join(output, "adekunle-directions.svg"), aSheet + "\n");
console.log(`Exported ${logoConcepts.length} marks and both comparison sheets.`);
