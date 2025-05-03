/* empty css                                       */import { createComponent, renderTemplate, renderComponent, maybeRenderHead } from '../astro.405de378.js';
import 'clsx';
import { $$BaseLayout } from './_...slug_.astro.68660be8.js';
import 'html-escaper';
import '../../content/entry.mjs';
/* empty css                                       *//* empty css                                       *//* empty css                                       */
const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thank You", "description": "Thank you for contacting MicroPig." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-900 text-white flex items-center justify-center min-h-screen px-6"> <div class="text-center"> <div class="flex justify-center mb-6"> <div class="w-24 h-24 rounded-full bg-gradient-to-br from-umn-maroon to-umn-light-maroon flex items-center justify-center"> <img src="/images/logo.png" alt="MicroPig Logo" class="h-16 w-16 object-contain"> </div> </div> <h1 class="text-4xl font-bold mb-4">Thank You!</h1> <p class="text-lg text-gray-300 mb-6">We received your message and will contact you soon.</p> <a href="/" class="mt-8 inline-block bg-umn-maroon text-white px-6 py-3 rounded-lg font-semibold hover:bg-umn-light-maroon transition-all duration-300">Return Home</a> </div> </div> ` })}`;
}, "C:/Users/sudar/micropig-website/src/pages/thank-you.astro", void 0);

const $$file = "C:/Users/sudar/micropig-website/src/pages/thank-you.astro";
const $$url = "/thank-you";

export { $$ThankYou as default, $$file as file, $$url as url };
