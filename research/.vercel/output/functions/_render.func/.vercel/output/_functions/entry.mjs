import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_vL09jr0x.mjs';
import { manifest } from './manifest_5YZG3h_B.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_categories_/_category_.astro.mjs');
const _page2 = () => import('./pages/_id_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.14.2_rollup@4.21.0_sass@1.77.8_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[categories]/[category].astro", _page1],
    ["src/pages/[id].astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "dbcfc263-88a9-4017-b4de-d07127221a69",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
