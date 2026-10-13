import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
const target = new URL('../public/partenariat-rog-novasoft.png', import.meta.url);
const expected = '3aea87f377d92a21ebd999645a565a5a27b46006cbe16b3fa3fed6216ec90334';
const hash = buffer => createHash('sha256').update(buffer).digest('hex');
let bytes;
try { const local = await readFile(target); if (hash(local) === expected) bytes = local; } catch {}
if (!bytes) {
  const response = await fetch('https://drive.google.com/uc?export=download&id=1rv8bJJyCjOh03I_K5Ti5lvq2_VEcGWEF', { signal: AbortSignal.timeout(25000) });
  if (!response.ok) throw new Error('Logo partenaire original indisponible : build interrompu, aucun substitut.');
  bytes = Buffer.from(await response.arrayBuffer());
}
if (bytes.length !== 1709897 || hash(bytes) !== expected || bytes.subarray(0,8).toString('hex') !== '89504e470d0a1a0a') throw new Error('Le logo partenaire diffère du PNG original approuvé.');
await mkdir(new URL('../public/', import.meta.url), { recursive: true });
await writeFile(target, bytes);
console.log('Logo partenaire original vérifié (SHA-256, PNG, octets). Aucune transformation.');
