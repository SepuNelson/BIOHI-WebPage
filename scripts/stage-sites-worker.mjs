import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(projectRoot, 'src', 'worker.mjs');
const serverDir = path.join(projectRoot, 'dist', 'server');

await mkdir(serverDir, { recursive: true });
await copyFile(source, path.join(serverDir, 'index.js'));
