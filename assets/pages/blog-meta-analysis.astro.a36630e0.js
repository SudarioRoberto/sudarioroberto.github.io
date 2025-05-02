/* empty css                                       */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.1a419e99.js';
import 'html-escaper';
import 'clsx';
/* empty css                                       *//* empty css                                       */
const $$Astro$3 = createAstro("https://sudarioroberto.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Basic favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Apple Touch Icon --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><!-- Android/Chrome --><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title || "MicroPig | Swine Microbiome Research"}</title><meta name="description"${addAttribute(description || "Transforming swine production through microbiome science and research at the University of Minnesota.", "content")}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/sudar/micropig-website/src/layouts/BaseLayout.astro", void 0);

const $$Astro$2 = createAstro("https://sudarioroberto.github.io");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, text, className = "" } = Astro2.props;
  const isExternal = href.startsWith("http");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`nav-link text-umn-maroon font-medium hover:text-umn-light-maroon relative py-2 ${className}`, "class")}${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}> ${text} </a>`;
}, "C:/Users/sudar/micropig-website/src/components/NavLink.astro", void 0);

const $$Astro$1 = createAstro("https://sudarioroberto.github.io");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logo;
  const { size = "h-20" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center space-x-3"> <img${addAttribute("/" + "images/logo.png", "src")} alt="MicroPig Logo"${addAttribute(`${size} w-auto`, "class")}> <div class="flex flex-col"> <span class="text-xl font-bold text-[#7A0019]">MicroPig</span> <span class="text-xs text-[#7A0019]/70 tracking-wide">Swine Microbiome Research</span> </div> </div>`;
}, "C:/Users/sudar/micropig-website/src/components/Logo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<nav id="navbar" class="fixed w-full z-50 transition-all duration-300 scrolled-nav shadow-md" data-astro-cid-5blmo7yk> <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4" data-astro-cid-5blmo7yk> <!-- Logo --> <a href="/" class="flex items-center space-x-3" data-astro-cid-5blmo7yk> ', ' </a> <!-- Desktop Menu --> <div class="hidden md:flex space-x-8" data-astro-cid-5blmo7yk> ', " ", " ", " ", " ", " ", " ", " ", " ", ' </div> <!-- Mobile Button --> <button id="menu-button" class="md:hidden focus:outline-none text-[#7A0019]" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </nav> <!-- Mobile Menu --> <div id="mobile-menu" class="fixed inset-0 bg-black bg-opacity-50 z-40 transform translate-x-full transition-transform duration-300 ease-in-out" data-astro-cid-5blmo7yk> <div class="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl flex flex-col" data-astro-cid-5blmo7yk> <div class="flex justify-between items-center p-6 border-b border-[#FFCC33]/30 bg-[#FFCC33]/20" data-astro-cid-5blmo7yk> <a href="/" class="flex items-center space-x-3" data-astro-cid-5blmo7yk> ', ` </a> <button id="close-menu-button" class="text-[#7A0019] hover:text-[#500010] focus:outline-none" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5blmo7yk></path> </svg> </button> </div> <div class="flex-1 overflow-y-auto p-6" data-astro-cid-5blmo7yk> <nav class="flex flex-col space-y-4" data-astro-cid-5blmo7yk> <a href="/#hero" class="mobile-link" data-astro-cid-5blmo7yk>Home</a> <a href="/#research" class="mobile-link" data-astro-cid-5blmo7yk>Research</a> <a href="/#impact" class="mobile-link" data-astro-cid-5blmo7yk>Impact</a> <a href="/#approach" class="mobile-link" data-astro-cid-5blmo7yk>Our Approach</a> <a href="/#team" class="mobile-link" data-astro-cid-5blmo7yk>Team</a> <a href="/#resources" class="mobile-link" data-astro-cid-5blmo7yk>Resources</a> <a href="/blog" class="mobile-link" data-astro-cid-5blmo7yk>Blog</a> <a href="/#contact" class="mobile-link" data-astro-cid-5blmo7yk>Contact</a> </nav> </div> </div> </div>  <script type="text/javascript">
  window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const navbar = document.getElementById('navbar');

    menuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });

    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled-nav');
      }
    });
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/#hero", "text": "Home", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/#research", "text": "Research", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/#impact", "text": "Impact", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/#approach", "text": "Our Approach", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/#team", "text": "Team", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/#resources", "text": "Resources", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/video", "text": "videos", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/blog", "text": "Blog", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "NavLink", $$NavLink, { "href": "/#contact", "text": "Contact", "data-astro-cid-5blmo7yk": true }), renderComponent($$result, "Logo", $$Logo, { "size": "h-10", "data-astro-cid-5blmo7yk": true }));
}, "C:/Users/sudar/micropig-website/src/components/Navbar.astro", void 0);

const $$Astro = createAstro("https://sudarioroberto.github.io");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

const $$BlogMetaAnalysis = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": "The Power of Meta-Analysis in Swine Gut Microbiome Research", "description": "Understanding how combined research findings create a stronger foundation for sustainable pork production through microbiome optimization.", "author": "Sudario Roberto Silva Junior", "publishDate": "February 15, 2025", "featuredImage": "/images/metadata.png" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Why Meta-Analysis Matters in Swine Microbiome Research</h2> <p>
The field of swine gut microbiome research has expanded dramatically over the past decade, with numerous studies examining the relationship between gut microbial communities and pig health, performance, and efficiency. However, these individual studies often represent small sample sizes, specific genetic lines, or limited environmental conditions, making it difficult to draw broad conclusions applicable across diverse production systems.
</p> <p>
This is where meta-analysis becomes a powerful tool. By systematically combining and analyzing data from multiple independent studies, we can identify consistent patterns, strengthen the evidence base, and develop more reliable recommendations for producers. At MicroPig Innovations, we've pioneered this approach for swine gut microbiome research, leading to several key insights.
</p> <h2>Key Insights from Our Meta-Analysis Work</h2> <p>
Our recent meta-analysis of the core sow microbiome, which compiled data from 23 independent studies spanning 7 countries and over 900 individual animals, has revealed several critical findings:
</p> <h3>1. Core Microbiome Consistency</h3> <p>
Despite differences in genetics, feed, housing, and management across studies, we identified a consistent "core microbiome" present in healthy sows. This core includes members of the Prevotellaceae, Ruminococcaceae, and Lactobacillaceae families, which appear to be essential for optimal gut function across diverse environments.
</p> <h3>2. Diet-Responsive Taxa</h3> <p>
By comparing across different dietary interventions, we identified specific bacterial groups that consistently respond to dietary changes. For example, Prevotella species consistently increase in abundance when high-fiber byproducts are included in the diet, while certain Bacteroides species show the opposite pattern.
</p> <h3>3. Microbiome Stability During Transition Periods</h3> <p>
Our meta-analysis revealed that the core microbiome remains remarkably stable during key transition periods (breeding to gestation, gestation to lactation), despite significant physiological changes. However, the relative abundances of specific taxa shift predictably during these transitions, suggesting potential for targeted interventions to support gut health during critical production phases.
</p> <h2>Applications for Producers</h2> <p>
These meta-analysis findings have several practical applications for swine producers:
</p> <h3>Targeted Prebiotic and Probiotic Strategies</h3> <p>
By identifying the consistent core members of the healthy sow microbiome, we can develop more precisely targeted probiotic formulations. Similarly, knowing which bacterial groups respond to specific dietary components allows for more effective prebiotic strategies tailored to production goals.
</p> <h3>Better Feed Formulation</h3> <p>
Understanding how different fiber sources and feed ingredients affect specific microbial populations allows nutritionists to formulate diets that support beneficial gut microbial communities while minimizing nutrients for potential pathogens.
</p> <h3>Transition Management</h3> <p>
The insights regarding microbiome stability during physiological transitions provide a foundation for developing targeted nutritional interventions during critical periods, potentially improving reproductive performance and reducing health challenges.
</p> <h2>Future Directions</h2> <p>
Our meta-analysis work continues to expand, with several ongoing projects:
</p> <ul> <li>Integration of microbiome data with metabolomics to identify key metabolic pathways influenced by gut microbes</li> <li>Comparison of antibiotic-free vs. conventional production systems to identify microbiome signatures associated with resilience in antibiotic-free environments</li> <li>Development of predictive models linking microbiome composition to key production outcomes like feed efficiency and reproductive performance</li> </ul> <p>
Through these meta-analysis approaches, we aim to move beyond descriptive studies of the swine gut microbiome toward actionable insights and practical recommendations for producers seeking to optimize animal health, performance, and sustainability.
</p> <p>
If you're interested in learning more about our meta-analysis work or discussing potential applications for your production system, please <a href="/#contact">contact us</a>. We're always eager to collaborate with producers and industry partners to translate our research into practical solutions.
</p> ` })}`;
}, "C:/Users/sudar/micropig-website/src/pages/blog-meta-analysis.astro", void 0);

const $$file = "C:/Users/sudar/micropig-website/src/pages/blog-meta-analysis.astro";
const $$url = "/blog-meta-analysis";

const blogMetaAnalysis = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogMetaAnalysis,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navbar as $, $$BaseLayout as a, blogMetaAnalysis as b };
