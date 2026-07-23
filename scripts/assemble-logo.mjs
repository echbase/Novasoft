/*
 * Reconstruit public/logo-emblem.png à partir des fragments base64 de
 * logo-parts/ (prebuild). Raison d'être : le canal de déploiement corrompt
 * les gros blobs binaires transmis d'un bloc ; des fragments texte courts
 * transitent de façon fiable et sont réassemblés ici, côté build.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';

const parts = readdirSync('logo-parts')
  .filter((f) => f.endsWith('.b64.txt'))
  .sort();

const b64 = parts.map((f) => readFileSync(`logo-parts/${f}`, 'utf8').replace(/\s/g, '')).join('');
const png = Buffer.from(b64, 'base64');

mkdirSync('public', { recursive: true });
writeFileSync('public/logo-emblem.png', png);

const md5 = createHash('md5').update(png).digest('hex');
console.log(`[assemble-logo] ${parts.length} fragments, ${png.length} octets, md5=${md5}`);
