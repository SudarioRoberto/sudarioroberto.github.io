/* empty css                                       */import { createAstro, createComponent, renderTemplate, addAttribute, renderHead, renderSlot, maybeRenderHead, renderComponent } from '../astro.405de378.js';
import 'clsx';
import { getCollection } from '../../content/entry.mjs';
/* empty css                                       *//* empty css                                       *//* empty css                                       */
const $$Astro$3 = createAstro("https://sudarioroberto.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Basic favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Apple Touch Icon --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><!-- Android/Chrome --><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title || "MicroPig | Swine Microbiome Research"}</title><meta name="description"${addAttribute(description || "Transforming swine production through microbiome science and research at the University of Minnesota.", "content")}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/sudar/micropig-website/src/layouts/BaseLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<nav id="main-nav" class="fixed w-full z-50 transition-all duration-300 bg-umn-gold/95 backdrop-blur-md shadow-md h-50" data-astro-cid-5blmo7yk> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-5blmo7yk> <div class="flex justify-between items-center py-3" data-astro-cid-5blmo7yk> <!-- Logo Section - Enlarged --> <a href="/" class="flex items-center space-x-3 z-10" data-astro-cid-5blmo7yk> <img src="/images/logo.png" alt="MicroPig Logo" class="h-20 object-contain transition-transform duration-300 hover:scale-105" data-astro-cid-5blmo7yk> <div class="flex flex-col leading-tight" data-astro-cid-5blmo7yk> <span class="text-2xl md:text-3xl font-bold text-gray-900" data-astro-cid-5blmo7yk>MicroPig</span> <span class="hidden sm:block text-sm text-gray-700 tracking-wide" data-astro-cid-5blmo7yk>Swine Microbiome Research</span> </div> </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center space-x-1" data-astro-cid-5blmo7yk> <a href="/#research" class="nav-link px-3 py-2 rounded-md text-lg " data-astro-cid-5blmo7yk>Research</a> <a href="/#impact" class="nav-link px-3 py-2 rounded-md text-lg" data-astro-cid-5blmo7yk>Impact</a> <a href="/#approach" class="nav-link px-3 py-2 rounded-md text-lg" data-astro-cid-5blmo7yk>Our Approach</a> <a href="/#team" class="nav-link px-3 py-2 rounded-md text-lg" data-astro-cid-5blmo7yk>Team</a> <!-- Resources Dropdown --> <div class="relative group" data-astro-cid-5blmo7yk> <a href="/#resources" class="nav-link px-3 py-2 rounded-md flex items-center text-lg" data-astro-cid-5blmo7yk>\nResources\n<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-5blmo7yk> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-5blmo7yk></path> </svg> </a> <div class="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 origin-top-left" data-astro-cid-5blmo7yk> <a href="/videos" class="block px-4 py-3 text-md text-umn-maroon hover:bg-umn-gold/20 border-l-2 border-transparent hover:border-umn-maroon" data-astro-cid-5blmo7yk>Educational Videos</a> <a href="https://scholar.google.com/citations?hl=en&user=0j08MsQAAAAJ&view_op=list_works&sortby=pubdate" class="block px-4 py-3 text-md text-umn-maroon hover:bg-umn-gold/20 border-l-2 border-transparent hover:border-umn-maroon " data-astro-cid-5blmo7yk>Research Publications</a> <a href="https://github.com/SudarioRoberto" class="block px-4 py-3 text-md text-umn-maroon hover:bg-umn-gold/20 border-l-2 border-transparent hover:border-umn-maroon" data-astro-cid-5blmo7yk>Tools</a> </div> </div> <a href="/blog" class="nav-link px-3 py-2 rounded-md text-lg" data-astro-cid-5blmo7yk>Blog</a> <a href="/#contact" class="nav-link px-3 py-2 rounded-md text-lg" data-astro-cid-5blmo7yk>Contact</a> </div> <!-- Mobile menu button --> <button id="mobile-menu-button" aria-label="Menu" class="lg:hidden flex items-center p-2 rounded-md text-umn-maroon hover:bg-umn-maroon/10 focus:outline-none" aria-expanded="false" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </div> <!-- Mobile Menu (hidden by default) --> <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-gray-200 shadow-inner" data-astro-cid-5blmo7yk> <div class="px-2 pt-2 pb-3 space-y-1" data-astro-cid-5blmo7yk> <a href="/#hero" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Home</a> <a href="/#research" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Research</a> <a href="/#impact" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Impact</a> <a href="/#approach" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Our Approach</a> <a href="/#team" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Team</a> <!-- Mobile Resources Dropdown --> <div class="mobile-dropdown" data-astro-cid-5blmo7yk> <a href="/#resources" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Resources</a> <div class="mobile-dropdown-toggle flex items-center justify-center w-8 h-8 absolute right-3 top-[12.75rem] rounded-full bg-umn-gold/20 text-umn-maroon hover:bg-umn-gold/40" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" class="dropdown-icon h-4 w-4 transform transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-5blmo7yk> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-5blmo7yk></path> </svg> </div> <div class="mobile-dropdown-content hidden pl-6 py-2 space-y-1" data-astro-cid-5blmo7yk> <a href="https://scholar.google.com/citations?hl=en&user=0j08MsQAAAAJ&view_op=list_works&sortby=pubdate" class="mobile-nav-link block px-3 py-2 text-sm rounded-md" data-astro-cid-5blmo7yk>Research Publications</a> <a href="/video" class="mobile-nav-link block px-3 py-2 text-sm rounded-md" data-astro-cid-5blmo7yk>Educational Videos</a> <a href="https://github.com/SudarioRoberto" class="mobile-nav-link block px-3 py-2 text-sm rounded-md" data-astro-cid-5blmo7yk>Tools</a> </div> </div> <a href="/blog" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Blog</a> <a href="/#contact" class="mobile-nav-link block px-3 py-2 rounded-md" data-astro-cid-5blmo7yk>Contact</a> </div> </div> </nav>  <script src="/scripts/nav-enhancement.js" defer><\/script> '])), maybeRenderHead());
}, "C:/Users/sudar/micropig-website/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro("https://sudarioroberto.github.io");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const {
    title,
    description = "",
    author = "MicroPig Research Team",
    publishDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    featuredImage
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-32 pb-20 px-6 md:px-12"> <div class="container mx-auto max-w-4xl"> <!-- Header --> <div class="mb-16 text-center"> <h1 class="text-4xl md:text-5xl font-bold mb-6 text-umn-maroon">${title}</h1> ${description && renderTemplate`<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">${description}</p>`} <div class="flex items-center justify-center gap-4 text-gray-500 text-sm"> <div class="flex items-center"> <i class="fas fa-user mr-2"></i> <span>${author}</span> </div> <div class="flex items-center"> <i class="fas fa-calendar-alt mr-2"></i> <time${addAttribute(new Date(publishDate).toISOString(), "datetime")}>${publishDate}</time> </div> </div> </div> <!-- Featured Image --> ${featuredImage && renderTemplate`<div class="mb-12"> <img${addAttribute(featuredImage, "src")}${addAttribute(title, "alt")} class="w-full h-auto rounded-xl shadow-lg"> </div>`} <!-- Content --> <article class="prose prose-lg max-w-none"> ${renderSlot($$result2, $$slots["default"])} </article> <!-- Back Button --> <div class="mt-16 pt-8 border-t border-gray-200"> <a href="/blog" class="inline-flex items-center text-umn-maroon hover:text-umn-light-maroon transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Back to Blog
</a> </div> </div> </div> ` })} `;
}, "C:/Users/sudar/micropig-website/src/layouts/BlogLayout.astro", void 0);

const $$Astro$1 = createAstro("https://sudarioroberto.github.io");
async function getStaticPaths$1() {
  const videos = [
    { slug: "intro-to-micropig", title: "Introduction to MicroPig", description: "Learn about MicroPig basics" },
    { slug: "getting-started", title: "Getting Started with MicroPig", description: "Your first steps" },
    { slug: "advanced-features", title: "Advanced MicroPig Features", description: "Taking it to the next level" }
  ];
  return videos.map((video) => ({
    params: { slug: video.slug },
    props: { video }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { video } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "VideoLayout", $$BaseLayout, { "title": video.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>${video.title}</h1> <p>${video.description}</p> <!-- Your video content goes here --> <div class="video-container"> <!-- Add your video player or embed code here --> </div> <!-- Additional content like related videos, comments, etc. --> </main> ` })}`;
}, "C:/Users/sudar/micropig-website/src/pages/videos/[...slug].astro", void 0);

const $$file$1 = "C:/Users/sudar/micropig-website/src/pages/videos/[...slug].astro";
const $$url$1 = "/videos/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://sudarioroberto.github.io");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const formattedDate = new Date(entry.data.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": entry.data.title, "description": entry.data.description, "author": entry.data.author, "publishDate": formattedDate, "featuredImage": entry.data.featuredImage }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/sudar/micropig-website/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/sudar/micropig-website/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout, $$BlogLayout, $$Navbar, ____slug_$1 as ____slug_, ____slug_ as ____slug_$1 };
