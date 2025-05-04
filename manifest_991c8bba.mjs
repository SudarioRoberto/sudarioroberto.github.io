import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './assets/astro.0dd1d872.js';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

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
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/scripts/hoisted.30f428b3.js"}],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"},{"type":"external","src":"/assets/index.4aead689.css"},{"type":"external","src":"/assets/blog-meta-analysis.8e0d073d.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/scripts/hoisted.fda5e03a.js"}],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"},{"type":"external","src":"/assets/blog-meta-analysis.8e0d073d.css"},{"type":"external","src":"/assets/blog-meta-analysis.88596634.css"}],"routeData":{"route":"/blog-meta-analysis","type":"page","pattern":"^\\/blog-meta-analysis\\/?$","segments":[[{"content":"blog-meta-analysis","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog-meta-analysis.astro","pathname":"/blog-meta-analysis","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/scripts/hoisted.fda5e03a.js"}],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"},{"type":"external","src":"/assets/blog-meta-analysis.8e0d073d.css"}],"routeData":{"route":"/coming-soon","type":"page","pattern":"^\\/coming-soon\\/?$","segments":[[{"content":"coming-soon","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/coming-soon.astro","pathname":"/coming-soon","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"}],"routeData":{"route":"/thank-you","type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/scripts/hoisted.b81bf6df.js"}],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"},{"type":"external","src":"/assets/blog-meta-analysis.8e0d073d.css"}],"routeData":{"route":"/videos","type":"page","pattern":"^\\/videos\\/?$","segments":[[{"content":"videos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/videos/index.astro","pathname":"/videos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"}],"routeData":{"route":"/videos/[...slug]","type":"page","pattern":"^\\/videos(?:\\/(.*?))?\\/?$","segments":[[{"content":"videos","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/videos/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/scripts/hoisted.fda5e03a.js"}],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"},{"type":"external","src":"/assets/blog-meta-analysis.8e0d073d.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/scripts/hoisted.fda5e03a.js"}],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"},{"type":"external","src":"/assets/blog-meta-analysis.8e0d073d.css"},{"type":"external","src":"/assets/blog-meta-analysis.88596634.css"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/scripts/hoisted.fda5e03a.js"}],"styles":[{"type":"external","src":"/assets/blog-meta-analysis.a0c39171.css"},{"type":"external","src":"/assets/blog-meta-analysis.2ea69993.css"},{"type":"external","src":"/assets/blog-meta-analysis.8e0d073d.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send","type":"endpoint","pattern":"^\\/api\\/send$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.ts","pathname":"/api/send","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sudarioroberto.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/sudar/micropig-website/src/pages/blog-meta-analysis.astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/coming-soon.astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/videos/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/sudar/micropig-website/src/pages/videos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/blog-meta-analysis@_@astro":"pages/blog-meta-analysis.astro.mjs","\u0000@astro-page:src/pages/coming-soon@_@astro":"pages/coming-soon.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/videos/index@_@astro":"pages/videos.astro.mjs","\u0000@astro-page:src/pages/videos/[...slug]@_@astro":"pages/videos/_---slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro2.mjs","\u0000@astro-page:src/pages/api/send@_@ts":"pages/api/send.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000virtual:empty-content":"_virtual_empty-content.mjs","/src/pages/blog-meta-analysis.astro":"assets/pages/blog-meta-analysis.astro.fdccff4c.js","/src/pages/blog.astro":"assets/pages/blog.astro.3cc80f63.js","/src/pages/coming-soon.astro":"assets/pages/coming-soon.astro.5cc1a131.js","/src/pages/api/send.ts":"assets/pages/send.ts.f07f4bbb.js","/src/pages/thank-you.astro":"assets/pages/thank-you.astro.a32cc687.js","\u0000@astrojs-manifest":"manifest_991c8bba.mjs","/astro/hoisted.js?q=0":"scripts/hoisted.b81bf6df.js","/astro/hoisted.js?q=1":"scripts/hoisted.30f428b3.js","/astro/hoisted.js?q=2":"scripts/hoisted.fda5e03a.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
