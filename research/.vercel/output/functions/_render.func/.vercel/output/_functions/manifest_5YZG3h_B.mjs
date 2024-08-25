import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_BChPiMQl.mjs';
import { g as decodeKey } from './chunks/astro/server_BxUm2yVT.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.14.2_rollup@4.21.0_sass@1.77.8_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DaFSHHyO.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_category_.1qux0t4w.css"},{"type":"inline","content":".menu[data-astro-cid-o37a6lt4]{clip-path:polygon(30px 0,100% 0,290% 20px,85% 100%,0 100%,0 30px);a{clip-path:polygon(30px 0,100% 0,110% 20px,85% 100%,0 100%,0 30px)}}\n"}],"routeData":{"route":"/[categories]/[category]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"categories","dynamic":true,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["categories","category"],"component":"src/pages/[categories]/[category].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DaFSHHyO.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_category_.1qux0t4w.css"},{"type":"inline","content":"svg[data-astro-cid-ihrh7hs4]:hover{fill:#ea4335}svg[data-astro-cid-m5fqzfxg]:hover{fill:#1877f2}svg[data-astro-cid-mkk65pu3]:hover{fill:#f0652f}svg[data-astro-cid-g6qq46tl]:hover{fill:#0a66c2}svg[data-astro-cid-m5cdef5h]:hover{fill:#ff4500}svg[data-astro-cid-p54nhqmw]:hover{fill:#000}svg[data-astro-cid-nneamb4z]:hover{fill:#25d366}.astro-social-share{margin:20px 0;height:24px;display:inline-flex}.astro-social-share a{text-decoration:none;margin-right:10px}.astro-social-share svg{height:24px}figure[data-astro-cid-p5zaeqd4].image{display:flex;justify-content:center}pre[data-astro-cid-p5zaeqd4],code[data-astro-cid-p5zaeqd4]{background-color:#0f0f0f;overflow-x:auto;padding-block:.2rem;padding-inline:.4rem;border-radius:.4rem}\n"}],"routeData":{"route":"/[id]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DaFSHHyO.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_category_.1qux0t4w.css"},{"type":"inline","content":".menu.svelte-1430pfs{clip-path:polygon(30px 0,100% 0,290% 20px,85% 100%,0 100%,0 30px)}.menu{clip-path:polygon(30px 0,100% 0,290% 20px,85% 100%,0 100%,0 30px);a{clip-path:polygon(30px 0,100% 0,110% 20px,85% 100%,0 100%,0 30px)}}.categories-link.active,.categories-link.all-link,.categories-link:hover{clip-path:polygon(30px 0,100% 0,110% 20px,85% 100%,0 100%,0 30px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/pages/[categories]/[category].astro",{"propagation":"none","containsHead":true}],["/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/pages/[id].astro",{"propagation":"none","containsHead":true}],["/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/[categories]/[category]@_@astro":"pages/_categories_/_category_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[id]@_@astro":"pages/_id_.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.14.2_rollup@4.21.0_sass@1.77.8_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro@4.14.2_rollup@4.21.0_sass@1.77.8_typescript@5.5.4/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_5YZG3h_B.mjs","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/components/SideMenu.svelte":"_astro/SideMenu.DE4JP22W.js","/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/components/ArticleList.svelte":"_astro/ArticleList.DhjSP-81.js","/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/components/Header.svelte":"_astro/Header.Brs6CmNg.js","/astro/hoisted.js?q=0":"_astro/hoisted.DaFSHHyO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_category_.1qux0t4w.css","/favicon.svg","/footer.png","/logo-black.webp","/logo-white.webp","/_astro/ArticleList.DhjSP-81.js","/_astro/Header.Brs6CmNg.js","/_astro/SideMenu.DE4JP22W.js","/_astro/client.Cx1FBVJX.js","/_astro/filters.store._F2MoOkI.js","/_astro/hoisted.DaFSHHyO.js","/_astro/index.CJ3K2VGW.css","/_astro/index.DhCoHJLA.js","/fonts/avenirltstd-black-webfont.woff2","/fonts/avenirltstd-book-webfont.woff2","/fonts/avenirltstd-heavy-webfont.woff2","/fonts/avenirltstd-medium-webfont.woff2","/fonts/avenirltstd-roman-webfont.woff2","/images/block-stm-sealevel/1.png","/images/block-stm-sealevel/10.png","/images/block-stm-sealevel/11.png","/images/block-stm-sealevel/12.png","/images/block-stm-sealevel/13.png","/images/block-stm-sealevel/14.png","/images/block-stm-sealevel/15.png","/images/block-stm-sealevel/16.png","/images/block-stm-sealevel/17.png","/images/block-stm-sealevel/18.png","/images/block-stm-sealevel/19.png","/images/block-stm-sealevel/2.png","/images/block-stm-sealevel/20.png","/images/block-stm-sealevel/21.png","/images/block-stm-sealevel/22.png","/images/block-stm-sealevel/23.png","/images/block-stm-sealevel/24.png","/images/block-stm-sealevel/25.png","/images/block-stm-sealevel/26.png","/images/block-stm-sealevel/27.png","/images/block-stm-sealevel/3.png","/images/block-stm-sealevel/4.png","/images/block-stm-sealevel/5.png","/images/block-stm-sealevel/6.png","/images/block-stm-sealevel/7.png","/images/block-stm-sealevel/8.png","/images/block-stm-sealevel/9.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"f3Z3OA/177PgV5vZsLcMOkvFe5OP9RmUl7Q/Os5PYj0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
