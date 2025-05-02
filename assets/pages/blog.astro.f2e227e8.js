/* empty css                                       */import { a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.1a419e99.js';
import 'html-escaper';
import { $ as $$Navbar, a as $$BaseLayout } from './blog-meta-analysis.astro.a36630e0.js';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = [
    {
      slug: "blog-meta-analysis",
      title: "The Power of Meta-Analysis in Swine Gut Microbiome Research",
      description: "Understanding how combined research findings create a stronger foundation for sustainable pork production through microbiome optimization.",
      image: "/images/metadata.png",
      date: "February 15, 2025",
      author: "Sudario Roberto Silva Junior"
    },
    {
      slug: "coming-soon",
      title: "Prebiotics, Probiotics, and Postbiotics for Pigs' Gut Health",
      description: "Dietary means of influencing the gut microbiome and its metabolic activities, as well as intestinal integrity and digestive health.",
      image: "/images/postbiotic.png",
      date: "January 10, 2025",
      author: "Pedro Urriola"
    },
    {
      slug: "coming-soon",
      title: "Reducing Antibiotic Use Through Microbiome Management",
      description: "Strategies for maintaining swine health and productivity with fewer antibiotics by optimizing gut microbiome health.",
      image: "/images/microbiome.png",
      date: "December 8, 2024",
      author: "Andres Gomez"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "Insights and research updates from the MicroPig team" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="pt-32 pb-20 px-6 md:px-12 bg-umn-off-white"> <div class="container mx-auto max-w-6xl"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold mb-6 text-umn-maroon">MicroPig Blog</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Latest research findings, implementation strategies, and insights from our team
</p> </div> <!-- Blog Posts Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${blogPosts.map((post) => renderTemplate`<article class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"> <a${addAttribute(`/${post.slug}`, "href")}> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover"> </a> <div class="p-6"> <div class="flex justify-between items-center text-sm text-gray-500 mb-3"> <time>${post.date}</time> <span>${post.author}</span> </div> <h2 class="text-xl font-bold mb-3 text-umn-maroon"> <a${addAttribute(`/${post.slug}`, "href")} class="hover:text-umn-light-maroon transition-colors"> ${post.title} </a> </h2> <p class="text-gray-600 mb-5"> ${post.description} </p> <a${addAttribute(`/${post.slug}`, "href")} class="inline-flex items-center text-umn-maroon font-medium hover:text-umn-light-maroon transition-colors">
Read more
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </article>`)} </div> </div> </div> ` })}`;
}, "C:/Users/sudar/micropig-website/src/pages/blog.astro", void 0);

const $$file = "C:/Users/sudar/micropig-website/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
