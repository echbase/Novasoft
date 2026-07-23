/*
 * Produit public/logo-full.png (logo officiel, PNG original non retouché).
 *
 * Stratégie (prebuild) :
 *   1. Téléchargement depuis l'URL d'assets de production (canal fiable),
 *      vérifié par md5.
 *   2. Repli : assemblage des fragments base64 de logo-parts/ (source de
 *      vérité du dépôt git), vérifié par md5.
 *   3. Si aucun des deux ne donne l'octet-à-octet exact → échec du build.
 *      Un logo corrompu ne doit jamais partir en ligne.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';

const EXPECTED_MD5 = '01a12fdd24d02c27d5afd5f79ff5ab6b';
const EXPECTED_SIZE = 20286;
const ASSET_URL = 'https://novasoft-assets-echbases-projects.vercel.app/logo-full.png';

const md5 = (b) => createHash('md5').update(b).digest('hex');

const isValid = (buf) => buf && buf.length === EXPECTED_SIZE && md5(buf) === EXPECTED_MD5;

async function fromUrl() {
  try {
    const res = await fetch(ASSET_URL, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    console.log(`[assemble-logo] URL : ${buf.length} octets, md5=${md5(buf)}`);
    return isValid(buf) ? buf : null;
  } catch (e) {
    console.log(`[assemble-logo] URL indisponible (${e.message})`);
    return null;
  }
}

function fromFragments() {
  try {
    const parts = readdirSync('logo-parts')
      .filter((f) => f.endsWith('.b64.txt'))
      .sort();
    const b64 = parts.map((f) => readFileSync(`logo-parts/${f}`, 'utf8').replace(/\s/g, '')).join('');
    const buf = Buffer.from(b64, 'base64');
    console.log(`[assemble-logo] fragments : ${parts.length} fichiers, ${buf.length} octets, md5=${md5(buf)}`);
    return isValid(buf) ? buf : null;
  } catch (e) {
    console.log(`[assemble-logo] fragments indisponibles (${e.message})`);
    return null;
  }
}

const png = (await fromUrl()) ?? fromFragments();

if (!png) {
  console.error(`[assemble-logo] ÉCHEC : impossible d'obtenir le PNG exact (${EXPECTED_SIZE} octets, md5=${EXPECTED_MD5})`);
  process.exit(1);
}

mkdirSync('public', { recursive: true });
writeFileSync('public/logo-full.png', png);
console.log(`[assemble-logo] OK — public/logo-full.png écrit et vérifié (md5=${EXPECTED_MD5})`);
