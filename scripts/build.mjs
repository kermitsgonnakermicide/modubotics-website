import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(root, 'dist');

if (dirname(output) !== root || output === root) {
  throw new Error('Build output must be the project dist directory.');
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of ['index.html', 'styles.css', 'assets']) {
  await cp(join(root, entry), join(output, entry), { recursive: true });
}

console.log('Built static website in dist/');
