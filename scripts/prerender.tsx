import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const distPath = resolve(import.meta.dirname, '..', 'dist');
const template = readFileSync(resolve(distPath, 'index.html'), 'utf-8');

// Dynamic import of the server entry built by Vite
const { render } = await import(resolve(distPath, 'server', 'entry-server.js'));

const html = render() as string;
const finalHtml = template.replace('<!--ssr-outlet-->', html);

writeFileSync(resolve(distPath, 'index.html'), finalHtml);
console.log('Pre-rendered index.html successfully.');
