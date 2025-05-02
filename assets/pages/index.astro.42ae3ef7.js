/* empty css                                       */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.1a419e99.js';
import 'html-escaper';
import 'clsx';
import { $ as $$Navbar, a as $$BaseLayout } from './blog-meta-analysis.astro.a36630e0.js';
/* empty css                          */
const $$Astro$4 = createAstro("https://sudarioroberto.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    text,
    variant = "primary",
    size = "md",
    className = "",
    icon = ""
  } = Astro2.props;
  let baseClasses = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3 text-lg"
  };
  const variantClasses = {
    primary: "bg-umn-maroon text-white hover:bg-umn-light-maroon hover:shadow-lg hover:-translate-y-1",
    secondary: "bg-transparent border-2 border-umn-gold text-umn-gold hover:bg-umn-gold hover:text-umn-maroon hover:shadow-lg hover:-translate-y-1",
    accent: "bg-umn-gold text-umn-maroon hover:bg-umn-light-gold hover:shadow-lg hover:-translate-y-1"
  };
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  const isExternal = href.startsWith("http");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(buttonClasses, "class")}${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}> ${icon && renderTemplate`<i${addAttribute(`${icon} mr-2`, "class")}></i>`} ${text} </a>`;
}, "C:/Users/sudar/micropig-website/src/components/Button.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative min-h-screen flex items-center pt-24 overflow-hidden bg-umn-maroon"> <!-- VIDEO BACKGROUND --> <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-5 opacity-20"> <source src="/images/dna.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> <!-- OVERLAY --> <div class="absolute inset-0 bg-gradient-to-br from-umn-maroon via-umn-maroon to-umn-light-maroon opacity-10 mix-blend-multiply z-0"></div> <!-- MAIN CONTENT --> <div class="container mx-auto px-6 md:px-12 relative z-10"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="text-white animate-fade-in"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
Transforming swine health through microbiome science
</h1> <p class="text-xl md:text-2xl mb-8 text-gray-100 max-w-lg">
Connecting gut microbiome research with practical feeding strategies for healthier, more sustainable pork production.
</p> <div class="flex flex-wrap gap-4"> ${renderComponent($$result, "Button", $$Button, { "href": "#research", "text": "Explore Our Research", "variant": "primary", "size": "lg", "className": "shadow-md" })} ${renderComponent($$result, "Button", $$Button, { "href": "#contact", "text": "Contact", "variant": "secondary", "size": "lg" })} </div> </div> <!-- RIGHT SIDE VISUAL --> <div class="hidden md:block"> <div class="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500"> <h3 class="text-white text-2xl font-bold mb-4">Research Areas</h3> <ul class="space-y-3 text-white"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-umn-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path> </svg> <span>Meta-analysis of core sow microbiome</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-umn-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path> </svg> <span>Postbiotic supplements</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-umn-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path> </svg> <span>Energy prediction from fibrous ingredients</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-umn-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path> </svg> <span>Lower antibiotic use through gut health</span> </li> </ul> </div> </div> </div> </div> </section>`;
}, "C:/Users/sudar/micropig-website/src/components/Hero.astro", void 0);

const $$ValueProposition = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-umn-off-white"> <div class="container mx-auto px-6 md:px-12"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-8 slide-up">
Understanding and modulating the pig gut microbiome is essential for sustainable swine nutrition and performance
</h2> <div class="grid md:grid-cols-3 gap-8 mt-12"> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 slide-up"> <div class="w-16 h-16 bg-umn-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"> <i class="fas fa-heartbeat text-2xl text-umn-maroon"></i> </div> <h3 class="text-xl font-bold mb-3 text-gray-800">Improved Health</h3> <p class="text-gray-600">
Better digestion, nutrient extraction, and gut health, supporting longer productive lifespans.
</p> </div> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 slide-up" style="transition-delay: 0.2s"> <div class="w-16 h-16 bg-umn-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"> <i class="fas fa-leaf text-2xl text-umn-maroon"></i> </div> <h3 class="text-xl font-bold mb-3 text-gray-800">Sustainability</h3> <p class="text-gray-600">
Better utilization of fibrous byproducts, reduced waste, and lower environmental impact.
</p> </div> <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 slide-up" style="transition-delay: 0.4s"> <div class="w-16 h-16 bg-umn-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"> <i class="fas fa-chart-line text-2xl text-umn-maroon"></i> </div> <h3 class="text-xl font-bold mb-3 text-gray-800">Performance</h3> <p class="text-gray-600">
Enhanced reproductive efficiency, lactation outcomes, and better piglet development and growth.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/sudar/micropig-website/src/components/ValueProposition.astro", void 0);

const $$Research = createComponent(($$result, $$props, $$slots) => {
  const researchAreas = [
    {
      title: "Core Microbiome Analysis",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our meta-analysis defines the core sow microbiome, providing a foundation for targeted nutritional interventions.",
      tags: ["Microbiome", "Genomics", "Taxonomy"],
      link: "/coming-soon"
    },
    {
      title: "Data Integration Modeling",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our integrated models combine microbiome, metabolomics, and digestibility data to understand the mechanism by which feed additives improve nutrient digestibility in high-fiber diets.",
      tags: ["Data Science", "Metabolomics"],
      link: "/coming-soon"
    },
    {
      title: "Postbiotic Supplementation",
      image: "/images/sow.png",
      description: "Our research shows that feeding sows with postbiotic reduced body weight loss in sows.",
      tags: ["Nutrition", "Feed Additives", "Digestibility"],
      link: "https://academic.oup.com/jas/article/102/Supplement_2/175/7664807"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="research" class="py-20 px-6 md:px-12 bg-white"> <div class="container mx-auto max-w-6xl"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4 section-heading">Our Research Focus</h2> <p class="text-gray-600 max-w-3xl mx-auto">
Our research connects microbiome science with practical feeding strategies—helping producers better utilize fiber byproducts and improve pig performance without dependency on antibiotics.
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${researchAreas.map((area, index) => renderTemplate`<div class="card bg-white shadow-md overflow-hidden slide-up"${addAttribute(`transition-delay: ${index * 0.2}s`, "style")}> <div class="h-48 bg-cover bg-center"${addAttribute(`background-image: url('${area.image}')`, "style")}> <div class="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end"> <div class="p-6"> <h3 class="text-xl font-bold text-white">${area.title}</h3> </div> </div> </div> <div class="p-6"> <p class="text-gray-600 mb-4"> ${area.description} </p> <div class="flex flex-wrap gap-2 mb-6"> ${area.tags.map((tag) => renderTemplate`<span class="text-xs bg-umn-gold/20 text-umn-maroon rounded-full px-3 py-1">${tag}</span>`)} </div> <a${addAttribute(area.link, "href")} class="inline-flex items-center text-umn-maroon font-medium hover:text-umn-light-maroon transition-colors">
Learn more
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </div>`)} </div> <!-- Research CTA --> <div class="mt-16 text-center"> ${renderComponent($$result, "Button", $$Button, { "href": "https://scholar.google.com/citations?hl=en&user=0j08MsQAAAAJ&view_op=list_works&sortby=pubdate", "text": "View All Research Publications", "variant": "primary", "className": "shadow-md hover:shadow-lg", "icon": "fas fa-arrow-right" })} </div> </div> </section>`;
}, "C:/Users/sudar/micropig-website/src/components/Research.astro", void 0);

const $$Astro$3 = createAstro("https://sudarioroberto.github.io");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, size = "text-xl", color = "text-umn-maroon", extraClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<i${addAttribute(`${name} ${size} ${color} ${extraClasses}`, "class")}></i>`;
}, "C:/Users/sudar/micropig-website/src/components/Icon.astro", void 0);

const $$Impact = createComponent(($$result, $$props, $$slots) => {
  const productionBenefits = [
    {
      icon: "fas fa-heartbeat",
      title: "Improved sow longevity",
      description: "Fewer health issues and longer productive lives."
    },
    {
      icon: "fas fa-piggy-bank",
      title: "Enhanced reproductive performance",
      description: "Higher litter size and healthier piglets, with 0.8 more piglets per litter in our studies."
    },
    {
      icon: "fas fa-chart-line",
      title: "Better growth and development",
      description: "Higher weaning weights and more robust post-weaning performance."
    },
    {
      icon: "fas fa-capsules",
      title: "Reduced antibiotic dependency",
      description: "Less antibiotic use due to microbiome focused feeding strategies."
    }
  ];
  const sustainabilityBenefits = [
    {
      icon: "fas fa-recycle",
      title: "Better use of fibrous byproducts",
      description: "Better digestibility of co-products ingredients."
    },
    {
      icon: "fas fa-globe-americas",
      title: "Lower environmental impact",
      description: "Nitrogen and phosphorus excretion reduced in optimized feeding systems."
    },
    {
      icon: "fas fa-truck-loading",
      title: "Reduced reliance on imported feed",
      description: "More efficient use of local ingredients lowers feed costs and transportation impact."
    },
    {
      icon: "fas fa-coins",
      title: "Better feed efficiency",
      description: "Improvement in feed conversion ratio through microbiome responsive diets."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="impact" class="py-20 px-6 md:px-12 bg-gray-50" data-astro-cid-74e7pgtg> <div class="container mx-auto max-w-6xl" data-astro-cid-74e7pgtg> <div class="text-center mb-16" data-astro-cid-74e7pgtg> <h2 class="text-4xl font-bold mb-4 section-heading" data-astro-cid-74e7pgtg>Impact on Swine Production</h2> <p class="text-gray-600 max-w-3xl mx-auto text-lg" data-astro-cid-74e7pgtg>
Our research translates into measurable benefits, helping producers raise healthier animals and reduce environmental load.
</p> </div> <div class="grid md:grid-cols-2 gap-12" data-astro-cid-74e7pgtg> <!-- Production Benefits --> <div data-astro-cid-74e7pgtg> <h3 class="text-2xl font-bold mb-6 text-umn-maroon flex items-center" data-astro-cid-74e7pgtg> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-award", "extraClasses": "mr-3", "data-astro-cid-74e7pgtg": true })}
Production Benefits
</h3> <div class="space-y-6" data-astro-cid-74e7pgtg> ${productionBenefits.map((benefit) => renderTemplate`<div class="impact-card bg-white p-6 rounded-xl shadow hover:shadow-lg flex items-start" data-astro-cid-74e7pgtg> <div class="w-12 h-12 bg-umn-gold/20 rounded-full flex items-center justify-center mr-4" data-astro-cid-74e7pgtg> ${renderComponent($$result, "Icon", $$Icon, { "name": benefit.icon, "size": "text-lg", "data-astro-cid-74e7pgtg": true })} </div> <div data-astro-cid-74e7pgtg> <h4 class="font-semibold text-lg mb-1" data-astro-cid-74e7pgtg>${benefit.title}</h4> <p class="text-gray-600 text-sm" data-astro-cid-74e7pgtg> ${benefit.description} </p> </div> </div>`)} </div> </div> <!-- Sustainability Benefits --> <div data-astro-cid-74e7pgtg> <h3 class="text-2xl font-bold mb-6 text-umn-maroon flex items-center" data-astro-cid-74e7pgtg> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-leaf", "extraClasses": "mr-3", "data-astro-cid-74e7pgtg": true })}
Sustainability Advantages
</h3> <div class="space-y-6" data-astro-cid-74e7pgtg> ${sustainabilityBenefits.map((benefit) => renderTemplate`<div class="impact-card bg-white p-6 rounded-xl shadow hover:shadow-lg flex items-start" data-astro-cid-74e7pgtg> <div class="w-12 h-12 bg-umn-gold/20 rounded-full flex items-center justify-center mr-4" data-astro-cid-74e7pgtg> ${renderComponent($$result, "Icon", $$Icon, { "name": benefit.icon, "size": "text-lg", "data-astro-cid-74e7pgtg": true })} </div> <div data-astro-cid-74e7pgtg> <h4 class="font-semibold text-lg mb-1" data-astro-cid-74e7pgtg>${benefit.title}</h4> <p class="text-gray-600 text-sm" data-astro-cid-74e7pgtg> ${benefit.description} </p> </div> </div>`)} </div> </div> </div> </div> </section> `;
}, "C:/Users/sudar/micropig-website/src/components/Impact.astro", void 0);

const $$Approach = createComponent(($$result, $$props, $$slots) => {
  const featureCards = [
    {
      title: "Dialogue Model",
      description: "We engage in mutual exchange with producers, veterinarians, and industry partners, creating space for feedback and practical insights that refine our research based on real-world constraints."
    },
    {
      title: "Participation Model",
      description: "We involve stakeholders in co-designing trials and interpreting data, making collaborative decisions about dietary formulations, prebiotic use, and housing conditions."
    },
    {
      title: "Continuous Innovation Cycle",
      description: "Our research integrates adoption strategies and stakeholder feedback to continually improve our innovations and ensure they address real industry needs."
    }
  ];
  const steps = [
    {
      number: 1,
      title: "Innovation Development",
      description: "Developing targeted solutions based on scientific research and stakeholder needs"
    },
    {
      number: 2,
      title: "Adoption Strategies",
      description: "Creating practical implementation paths for on-farm application"
    },
    {
      number: 3,
      title: "Intended Audience",
      description: "Tailoring solutions for producers, veterinarians, and industry partners"
    },
    {
      number: 4,
      title: "Integrated Feedback",
      description: "Incorporating real-world results and stakeholder insights to refine innovations"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="approach" class="py-20 px-6 md:px-12 bg-white" data-astro-cid-ouou2mig> <div class="container mx-auto max-w-6xl" data-astro-cid-ouou2mig> <div class="text-center mb-16" data-astro-cid-ouou2mig> <h2 class="text-4xl font-bold mb-4 section-heading" data-astro-cid-ouou2mig>Our Collaborative Approach</h2> <p class="text-gray-600 max-w-3xl mx-auto" data-astro-cid-ouou2mig>
We believe in Responsible Research and Innovation that integrates stakeholder feedback throughout the research cycle.
</p> </div> <div class="grid md:grid-cols-2 gap-12 items-center mb-20" data-astro-cid-ouou2mig> <div class="image-container rounded-xl overflow-hidden shadow-xl" data-astro-cid-ouou2mig> <img src="images/farmer.png" alt="Researchers and farmers collaborating" class="w-full h-full object-cover transition-all duration-700" data-astro-cid-ouou2mig> </div> <div class="space-y-6" data-astro-cid-ouou2mig> ${featureCards.map((card, index) => renderTemplate`<div class="feature-card bg-gray-50 p-6 hover:shadow-md transition-all duration-300 slide-up"${addAttribute(`transition-delay: ${index * 0.2}s`, "style")} data-astro-cid-ouou2mig> <h3 class="text-xl font-bold mb-3 text-umn-maroon" data-astro-cid-ouou2mig>${card.title}</h3> <p class="text-gray-600" data-astro-cid-ouou2mig> ${card.description} </p> </div>`)} </div> </div> <!-- Innovation Cycle - Improved for all devices --> <div class="mt-20 mb-16" id="innovation-cycle" data-astro-cid-ouou2mig> <h3 class="text-3xl font-bold mb-12 text-center" data-astro-cid-ouou2mig>Our Responsible Innovation Cycle</h3> <!-- Desktop version with connected cards --> <div class="hidden md:block relative" data-astro-cid-ouou2mig> <!-- Connecting background circle --> <div class="absolute inset-0 flex items-center justify-center z-0" data-astro-cid-ouou2mig> <div class="w-3/4 h-3/4 border-4 border-dashed border-umn-gold/30 rounded-full" data-astro-cid-ouou2mig></div> </div> <div class="grid grid-cols-2 gap-x-36 gap-y-32 relative z-10" data-astro-cid-ouou2mig> ${steps.map((step, index) => {
    let gridPosition;
    switch (index) {
      case 0:
        gridPosition = "col-start-1";
        break;
      case 1:
        gridPosition = "col-start-2";
        break;
      case 2:
        gridPosition = "col-start-2 row-start-2";
        break;
      case 3:
        gridPosition = "col-start-1 row-start-2";
        break;
      default:
        gridPosition = "";
    }
    let arrowDirection;
    switch (index) {
      case 0:
        arrowDirection = "right";
        break;
      case 1:
        arrowDirection = "down";
        break;
      case 2:
        arrowDirection = "left";
        break;
      case 3:
        arrowDirection = "up";
        break;
      default:
        arrowDirection = "";
    }
    return renderTemplate`<div${addAttribute(`cycle-card transform hover:scale-105 transition-all duration-300 ${gridPosition}`, "class")} data-astro-cid-ouou2mig> <div class="bg-white rounded-xl shadow-lg p-8 relative" data-astro-cid-ouou2mig> <div class="cycle-number absolute -top-6 -left-6 w-16 h-16 rounded-full bg-umn-maroon text-white text-2xl font-bold flex items-center justify-center shadow-lg" data-astro-cid-ouou2mig>${step.number}</div> <h4 class="font-bold text-xl mb-3 pl-10" data-astro-cid-ouou2mig>${step.title}</h4> <p class="text-gray-600" data-astro-cid-ouou2mig>${step.description}</p> </div>  ${arrowDirection === "right" && renderTemplate`<svg class="absolute top-1/2 -right-28" width="100" height="30" viewBox="0 0 100 30" data-astro-cid-ouou2mig> <path d="M0 15 H90 M80 5 L100 15 L80 25" fill="none" stroke="#7A0019" stroke-width="2" data-astro-cid-ouou2mig></path> </svg>`} ${arrowDirection === "down" && renderTemplate`<svg class="absolute left-1/2 -bottom-24" width="30" height="80" viewBox="0 0 30 80" data-astro-cid-ouou2mig> <path d="M15 0 V70 M5 60 L15 80 L25 60" fill="none" stroke="#7A0019" stroke-width="2" data-astro-cid-ouou2mig></path> </svg>`} ${arrowDirection === "left" && renderTemplate`<svg class="absolute top-1/2 -left-28" width="100" height="30" viewBox="0 0 100 30" data-astro-cid-ouou2mig> <path d="M100 15 H10 M20 5 L0 15 L20 25" fill="none" stroke="#7A0019" stroke-width="2" data-astro-cid-ouou2mig></path> </svg>`} ${arrowDirection === "up" && renderTemplate`<svg class="absolute -top-28 left-1/2 transform -translate-x-1/2" width="30" height="80" viewBox="0 0 30 80" data-astro-cid-ouou2mig> <path d="M15 80 V10 M5 20 L15 0 L25 20" fill="none" stroke="#7A0019" stroke-width="2" data-astro-cid-ouou2mig></path> </svg>`} </div>`;
  })} </div> </div> <!-- Mobile version with vertical flow --> <div class="md:hidden space-y-6" data-astro-cid-ouou2mig> <!-- Mobile cycle container with visual indicator --> <div class="relative pb-12" data-astro-cid-ouou2mig> <div class="absolute top-0 bottom-0 left-8 w-1 bg-umn-gold/30" data-astro-cid-ouou2mig></div> ${steps.map((step, index) => renderTemplate`<div class="cycle-card bg-white rounded-xl shadow-lg p-6 relative mb-12 ml-16" data-astro-cid-ouou2mig> <div class="cycle-number absolute -top-4 -left-20 w-12 h-12 rounded-full bg-umn-maroon text-white text-xl font-bold flex items-center justify-center shadow-md z-10" data-astro-cid-ouou2mig>${step.number}</div> <h4 class="font-bold text-lg mb-2" data-astro-cid-ouou2mig>${step.title}</h4> <p class="text-gray-600 text-sm" data-astro-cid-ouou2mig>${step.description}</p>  ${index < steps.length - 1 && renderTemplate`<div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-umn-maroon" data-astro-cid-ouou2mig> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ouou2mig> <path d="M12 5v14m-7-7l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ouou2mig></path> </svg> </div>`} </div>`)}  <div class="mt-8 flex justify-center w-full" data-astro-cid-ouou2mig> <div class="relative w-full max-w-xs h-24 flex items-center justify-center" data-astro-cid-ouou2mig> <svg class="w-full" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ouou2mig> <path d="M170 35 H30 C25 35 10 35 10 10 C10 0 20 0 30 0 H170" stroke="#7A0019" stroke-width="2" stroke-dasharray="6 4" data-astro-cid-ouou2mig></path> <path d="M160 10 L180 0 L180 20" fill="none" stroke="#7A0019" stroke-width="2" data-astro-cid-ouou2mig></path> <text x="75" y="55" font-family="sans-serif" font-size="12" fill="#7A0019" data-astro-cid-ouou2mig>Back to Step 1</text> </svg> </div> </div> </div> </div> </div> </div> </section> `;
}, "C:/Users/sudar/micropig-website/src/components/Approach.astro", void 0);

const $$Stats = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    {
      value: "15+",
      label: "Research Publications"
    },
    {
      value: "5+",
      label: "Farm Partnerships"
    },
    {
      value: "8%",
      label: "Feed Efficiency Improvement"
    },
    {
      value: "20%",
      label: "Reduced Antibiotic Use"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-6 md:px-12 bg-umn-maroon text-white" data-astro-cid-bhxv2qxz> <div class="container mx-auto max-w-6xl" data-astro-cid-bhxv2qxz> <div class="text-center mb-10" data-astro-cid-bhxv2qxz> <h2 class="text-3xl font-bold mb-4" data-astro-cid-bhxv2qxz>Our Research Impact</h2> <p class="text-umn-gold max-w-2xl mx-auto" data-astro-cid-bhxv2qxz>
Translating microbiome science into real-world outcomes for swine producers
</p> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-6" data-astro-cid-bhxv2qxz> ${stats.map((stat) => renderTemplate`<div class="stats-card bg-white/10 backdrop-blur p-6 rounded-xl text-center border border-white/20" data-astro-cid-bhxv2qxz> <div class="text-5xl font-bold text-umn-gold mb-2" data-astro-cid-bhxv2qxz>${stat.value}</div> <p class="text-white font-medium" data-astro-cid-bhxv2qxz>${stat.label}</p> </div>`)} </div> </div> </section> `;
}, "C:/Users/sudar/micropig-website/src/components/Stats.astro", void 0);

const $$Astro$2 = createAstro("https://sudarioroberto.github.io");
const $$TeamMemberModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TeamMemberModal;
  const { id, name, role, image, bio } = Astro2.props;
  const modalId = `${id}Modal`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(modalId, "id")} class="team-modal fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center" data-astro-cid-vofz7lpg> <div class="bg-white rounded-lg w-full max-w-5xl mx-auto p-8 relative" data-astro-cid-vofz7lpg> <button class="close-modal-btn absolute top-4 right-4 text-gray-600 text-xl hover:text-gray-900 focus:outline-none"${addAttribute(modalId, "data-modal-id")} data-astro-cid-vofz7lpg>
&times;
</button> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-vofz7lpg> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-40 h-40 rounded-lg object-cover" data-astro-cid-vofz7lpg> <div data-astro-cid-vofz7lpg> <h3 class="text-2xl font-bold text-gray-900" data-astro-cid-vofz7lpg>${name}</h3> <p class="text-umn-maroon font-medium" data-astro-cid-vofz7lpg>${role}</p> <div class="mt-4 text-gray-700 space-y-2" data-astro-cid-vofz7lpg> ${bio.split("\n\n").map((paragraph) => renderTemplate`<p data-astro-cid-vofz7lpg>${paragraph}</p>`)} </div> </div> </div> </div> </div> `;
}, "C:/Users/sudar/micropig-website/src/components/TeamMemberModal.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    {
      id: "sudario",
      name: "Sudario Roberto Silva Junior",
      role: "PhD Student",
      image: "/images/founder.jpg",
      bio: `I'm a swine scientist from the Federal University of Lavras, doing my PhD at the University of Minnesota. I work with swine nutrition, microbiome, and data integration.

I started in pig barns managing farrowing, piglet care, and feed. That's where I first heard about the microbiome, but no one could explain how it really worked.

Now I link microbial activity to feed efficiency, growth, and resilience using modeling, bioinformatics, and field data.`
    },
    {
      id: "pedro",
      name: "Pedro Urriola",
      role: "Assistant Professor",
      image: "/images/pedro.jpg",
      bio: `Dr. Pedro Urriola works on sustainability of pork production by studying the intersection of animal health and the environment at a systems level. We apply nutritional evaluation of agro-industrial co-products using novel techniques. In addition to feed evaluation projects, Pedro is involved in projects on the management and control of infectious diseases transmission such as African Swine Fever in his appointment and with collaborations with the College of Veterinary Medicine.`
    },
    {
      id: "andres",
      name: "Andres Gomez",
      role: "Associate Professor",
      image: "/images/andres.png",
      bio: `Dr. Andres Gomez received a PhD in Animal Science and Microbial Ecology from the University of Illinois in Urbana-Champaign and a master's degree in biotechnology and microbial ecology from the National University of Colombia. He completed postdoctoral work at the University of Minnesota and was a staff scientist at the J. Craig Venter Institute in La Jolla, California.`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="team" class="py-20 px-6 md:px-12 bg-umn-off-white" data-astro-cid-yu4wt3u2> <div class="container mx-auto max-w-6xl" data-astro-cid-yu4wt3u2> <div class="text-center mb-16" data-astro-cid-yu4wt3u2> <h2 class="text-4xl font-bold mb-4 section-heading" data-astro-cid-yu4wt3u2>Research Team</h2> <p class="text-gray-600 max-w-3xl mx-auto text-lg" data-astro-cid-yu4wt3u2>
The idea for MicroPig Innovations was born in real-world production systems, where microbiome was often mentioned but rarely understood.
</p> </div> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-yu4wt3u2> ${teamMembers.map((member) => renderTemplate`<div class="text-center team-member-card" data-astro-cid-yu4wt3u2> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="rounded-xl w-full shadow-lg mb-4 hover:shadow-xl transition-all" data-astro-cid-yu4wt3u2> <h4 class="text-lg font-semibold text-gray-900" data-astro-cid-yu4wt3u2>${member.name}</h4> <p class="text-sm text-gray-600" data-astro-cid-yu4wt3u2>${member.role}</p> <button class="text-sm text-umn-maroon font-medium mt-2 view-bio-btn"${addAttribute(member.id, "data-member-id")} data-astro-cid-yu4wt3u2>
View Bio
</button> </div>`)} </div> </div>  ${teamMembers.map((member) => renderTemplate`${renderComponent($$result, "TeamMemberModal", $$TeamMemberModal, { "id": member.id, "name": member.name, "role": member.role, "image": member.image, "bio": member.bio, "data-astro-cid-yu4wt3u2": true })}`)} </section>  `;
}, "C:/Users/sudar/micropig-website/src/components/Team.astro", void 0);

const $$Astro$1 = createAstro("https://sudarioroberto.github.io");
const $$ResourceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResourceCard;
  const { title, description, image, type, link, linkText, duration, delay = 0, videoId, date } = Astro2.props;
  const formattedDate = date ? new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "";
  return renderTemplate`${maybeRenderHead()}<div class="resource-card bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition duration-300 hover:shadow-xl hover:-translate-y-1"${addAttribute(type, "data-type")}${addAttribute(videoId, "data-video-id")} data-aos="fade-up"${addAttribute(delay * 1e3, "data-aos-delay")}> <div class="relative"> <!-- Make entire image clickable for videos --> ${type === "video" ? renderTemplate`<div class="cursor-pointer relative"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-48 object-cover" loading="lazy"> <!-- Play button overlay for videos --> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-16 h-16 bg-red-600 bg-opacity-80 rounded-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> </div> </div>` : renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-48 object-cover" loading="lazy">`} <div class="absolute top-4 right-4"> <span${addAttribute(`text-xs font-bold px-3 py-1 rounded-full uppercase ${type === "video" ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`, "class")}> ${type} </span> </div> </div> <div class="p-6 flex flex-col flex-grow"> <!-- Date badge --> ${formattedDate && renderTemplate`<div class="text-sm text-gray-500 mb-2"> ${formattedDate} </div>`} <h3 class="text-xl font-bold mb-3">${title}</h3> <p class="text-gray-600 mb-4 flex-grow">${description}</p> <div class="mt-auto flex items-center"> ${duration && renderTemplate`<span class="text-sm text-gray-500 mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${duration} </span>`}  <a${addAttribute(link, "href")}${addAttribute(`${type === "video" ? "text-red-600 hover:text-red-800" : "text-blue-600 hover:text-blue-800"} font-medium inline-flex items-center`, "class")}> ${linkText} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </div>`;
}, "C:/Users/sudar/micropig-website/src/components/ResourceCard.astro", void 0);

const $$Resources = createComponent(($$result, $$props, $$slots) => {
  const resources = [
    {
      title: "Prebiotics, Probiotics, and Postbiotics for Pigs' Gut Health",
      description: "Dietary means of influencing the gut microbiome...",
      image: "/images/postbiotic.png",
      type: "blog",
      // This is a blog post
      date: "2025-04-15",
      link: "https://www.realporktrust.org/post/prebiotics-probiotics-and-postbiotics-for-pigs-gut-health",
      linkText: "Read article"
    },
    {
      title: "The Power of Meta-Analysis in Swine Gut Microbiome Research",
      description: "Understanding how combined research findings...",
      image: "/images/metadata.png",
      type: "blog",
      // This is a blog post
      date: "2025-03-20",
      link: "/blog-meta-analysis",
      linkText: "Read article"
    },
    {
      title: "Microbiome Basics for Producers",
      description: "Learn the fundamentals of swine gut microbiome and its practical implications for farm management and performance.",
      image: "/images/microbiome.png",
      type: "video",
      date: "2025-03-15",
      duration: "30 min",
      link: "https://www.youtube.com/watch?v=S-vZzJM9usA",
      linkText: "Watch video",
      videoId: "S-vZzJM9usA"
      // ✅ This must be here
    }
  ];
  const sortedResources = [...resources].sort((a, b) => new Date(b.date) - new Date(a.date));
  return renderTemplate`${maybeRenderHead()}<section id="resources" class="py-20 px-6 md:px-12 bg-gray-50"> <div class="container mx-auto max-w-6xl"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold mb-4 section-heading">Educational Resources</h2> <p class="text-gray-600 max-w-3xl mx-auto">
Access practical guides, research findings, and tools to implement microbiome-focused nutrition strategies.
</p> </div> <!-- Carousel container --> <div class="relative"> <!-- Previous/Next buttons for larger screens --> <button id="prevBtn" class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 z-10 bg-white rounded-full p-2 shadow-md hidden md:block focus:outline-none hover:bg-gray-100"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="nextBtn" class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 z-10 bg-white rounded-full p-2 shadow-md hidden md:block focus:outline-none hover:bg-gray-100"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <!-- Carousel track --> <div id="carouselTrack" class="flex transition-transform duration-300 ease-out overflow-x-scroll md:overflow-x-hidden snap-x snap-mandatory scroll-smooth"> ${sortedResources.map((resource, index) => renderTemplate`<div class="flex-none w-full md:w-1/3 px-4 snap-start"> ${renderComponent($$result, "ResourceCard", $$ResourceCard, { "title": resource.title, "description": resource.description, "image": resource.image, "type": resource.type, "duration": resource.duration, "link": resource.link, "linkText": resource.linkText, "delay": index * 0.2, "videoId": resource.videoId, "date": resource.date })} </div>`)} </div> <!-- Dots for mobile --> <div class="flex justify-center mt-6 space-x-2 md:hidden"> ${sortedResources.map((_, index) => renderTemplate`<button class="carousel-dot w-3 h-3 rounded-full bg-gray-300 focus:outline-none"${addAttribute(index, "data-index")}></button>`)} </div> </div> </div> </section> <!-- Video Modal (same as before) --> <div id="videoModal" class="fixed inset-0 bg-black bg-opacity-75 z-50 hidden items-center justify-center"> <div class="bg-white rounded-lg w-full max-w-4xl mx-4 sm:mx-auto p-1 relative"> <!-- Close button --> <button id="closeVideoModal" class="absolute -top-10 right-0 text-white text-xl hover:text-gray-300 focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Video container with 16:9 aspect ratio --> <div class="relative" style="padding-bottom: 56.25%;"> <iframe id="videoFrame" class="absolute top-0 left-0 w-full h-full rounded-lg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe> </div> </div> </div> `;
}, "C:/Users/sudar/micropig-website/src/components/Resources.astro", void 0);

const $$Astro = createAstro("https://sudarioroberto.github.io");
const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const {
    email = "ssilvaju@umn.edu",
    phone = "(612) 666-3177",
    location = "Department of Animal Science, University of Minnesota"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-24 px-6 md:px-12 text-white bg-umn-maroon"> <div class="container mx-auto max-w-6xl"> <div class="text-center mb-14"> <h2 class="text-4xl font-bold mb-4">Contact</h2> <p class="text-white/90 max-w-3xl mx-auto">
Join our collaborative network of producers, veterinarians, and industry professionals to advance swine microbiome research and implementation.
</p> </div> <div class="grid md:grid-cols-2 gap-8 items-start"> <!-- Left Column --> <div class="space-y-8"> <!-- Get in Touch Card --> <div class="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 shadow-lg"> <h3 class="text-2xl font-bold mb-4">Get in Touch</h3> <p class="text-white/90 mb-6">
Whether you're a pork producer, veterinarian, nutritionist, or industry partner, we're eager to collaborate on research, implementation, and knowledge sharing.
</p> <div class="space-y-5"> <!-- Email --> <div class="flex items-center"> <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-envelope", "color": "text-white" })} </div> <div> <div class="text-sm text-white/70 font-medium">Email</div> <a${addAttribute(`mailto:${email}`, "href")} class="text-white hover:text-white/80 transition-colors">${email}</a> </div> </div> <!-- Phone --> <div class="flex items-center"> <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-phone", "color": "text-white" })} </div> <div> <div class="text-sm text-white/70 font-medium">Phone</div> <a${addAttribute(`tel:${phone.replace(/[^0-9]/g, "")}`, "href")} class="text-white hover:text-white/80 transition-colors">${phone}</a> </div> </div> <!-- Location --> <div class="flex items-center"> <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-map-marker-alt", "color": "text-white" })} </div> <div> <div class="text-sm text-white/70 font-medium">Location</div> <address class="text-white not-italic">${location}</address> </div> </div> </div> </div> <!-- Partnership Opportunities --> <div class="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 shadow-lg"> <h3 class="text-xl font-bold mb-4">Partnership Opportunities</h3> <ul class="space-y-3"> <li class="flex items-start"> <div class="w-6 h-6 rounded-full bg-umn-gold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-check", "size": "text-xs", "color": "text-umn-maroon" })} </div> <span>On-farm research collaborations</span> </li> <li class="flex items-start"> <div class="w-6 h-6 rounded-full bg-umn-gold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-check", "size": "text-xs", "color": "text-umn-maroon" })} </div> <span>Feed formulation consulting</span> </li> <li class="flex items-start"> <div class="w-6 h-6 rounded-full bg-umn-gold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-check", "size": "text-xs", "color": "text-umn-maroon" })} </div> <span>Educational workshops for your team</span> </li> <li class="flex items-start"> <div class="w-6 h-6 rounded-full bg-umn-gold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fas fa-check", "size": "text-xs", "color": "text-umn-maroon" })} </div> <span>Product development partnerships</span> </li> </ul> </div> <!-- Social Links --> <div class="flex justify-center md:justify-start space-x-4"> <a href="#" class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fab fa-facebook-f", "color": "text-white" })} </a> <a href="#" class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fab fa-twitter", "color": "text-white" })} </a> <a href="https://www.linkedin.com/in/sudarioroberto/" class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fab fa-linkedin-in", "color": "text-white" })} </a> <a href="#" class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fab fa-youtube", "color": "text-white" })} </a> </div> </div> <!-- Right Column: Contact Form --> <div class="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 shadow-lg"> <h3 class="text-2xl font-bold mb-6">Send Us a Message</h3> <form class="space-y-6" method="POST" action="send.php"> <!-- Name and Email --> <div class="grid md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-medium text-white mb-2">Name</label> <input name="name" type="text" class="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-umn-gold" placeholder="Your name"> </div> <div> <label class="block text-sm font-medium text-white mb-2">Email</label> <input name="email" type="email" class="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-umn-gold" placeholder="Your email"> </div> </div> <!-- Organization --> <div> <label class="block text-sm font-medium text-white mb-2">Organization</label> <input name="organization" type="text" class="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-umn-gold" placeholder="Your organization"> </div> <!-- Organization Type --> <div> <label class="block text-sm font-medium text-white mb-2">Type of Organization</label> <select name="organization_type" class="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-umn-gold"> <option value="" disabled selected>Select your organization type</option> <option value="producer">Swine Producer</option> <option value="veterinary">Veterinary Practice</option> <option value="feed">Feed Manufacturer</option> <option value="academic">Academic/Research</option> <option value="industry">Industry Association</option> <option value="other">Other</option> </select> </div> <!-- Message --> <div> <label class="block text-sm font-medium text-white mb-2">Message</label> <textarea name="message" rows="4" class="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-umn-gold" placeholder="How can we help you?"></textarea> </div> <!-- Newsletter Checkbox --> <div class="flex items-center"> <input name="newsletter" type="checkbox" id="newsletter" class="rounded bg-white/90 border-0 text-umn-gold p-2 mr-3 focus:ring-umn-gold"> <label for="newsletter" class="text-white text-sm">Subscribe to our newsletter for research updates</label> </div> <!-- Submit Button --> <button type="submit" class="w-full py-3 px-6 rounded-lg bg-umn-gold text-umn-maroon font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
Send Message
</button> </form> </div> </div> </div> </section>`;
}, "C:/Users/sudar/micropig-website/src/components/ContactSection.astro", void 0);

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-6 md:px-12 bg-gray-900 text-white" data-astro-cid-motrwrji> <div class="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8" data-astro-cid-motrwrji> <div class="max-w-xl" data-astro-cid-motrwrji> <h3 class="text-2xl font-bold mb-3" data-astro-cid-motrwrji>Stay Updated</h3> <p class="text-gray-300" data-astro-cid-motrwrji>
Subscribe to our newsletter for the latest research findings, implementation strategies, and industry insights delivered to your inbox.
</p> </div> <div class="w-full md:w-auto" data-astro-cid-motrwrji> <form class="flex flex-col sm:flex-row gap-3" data-astro-cid-motrwrji> <input type="email" placeholder="Your email address" class="px-4 py-3 rounded-lg bg-white/10 border border-gray-600 w-full md:w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-umn-gold form-input" required data-astro-cid-motrwrji> <button type="submit" class="px-6 py-3 bg-gradient-to-r from-umn-maroon to-umn-light-maroon text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-astro-cid-motrwrji>
Subscribe
</button> </form> </div> </div> </section> `;
}, "C:/Users/sudar/micropig-website/src/components/Newsletter.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = [
    { href: "#research", text: "Research" },
    { href: "#impact", text: "Impact" },
    { href: "#approach", text: "Our Approach" },
    { href: "/blog", text: "Blog" },
    { href: "#contact", text: "Contact" }
  ];
  const resourceLinks = [
    { href: "https://scholar.google.com/citations?hl=en&user=0j08MsQAAAAJ&view_op=list_works&sortby=pubdate", text: "Research Publications" },
    { href: "https://www.youtube.com/watch?v=S-vZzJM9usA", text: "Educational Videos" },
    { href: "https://www.youtube.com/watch?v=S-vZzJM9usA", text: "Webinar Recordings" },
    { href: "https://github.com/SudarioRoberto", text: "Implementation Tools" }
  ];
  const professionalLinks = [
    { href: "/coming-soon", text: "Producers" },
    { href: "/coming-soon", text: "Veterinarians" },
    { href: "/coming-soon", text: "Nutritionists" },
    { href: "/coming-soon", text: "Industry Partners" },
    { href: "/coming-soon", text: "Research Collaborators" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="py-12 px-6 md:px-12 bg-gray-900 text-gray-400 border-t border-gray-800" data-astro-cid-sz7xmlte> <div class="container mx-auto max-w-6xl" data-astro-cid-sz7xmlte> <div class="grid md:grid-cols-4 gap-8 mb-12" data-astro-cid-sz7xmlte> <!-- Logo and Description --> <div data-astro-cid-sz7xmlte> <div class="flex items-center space-x-3 mb-6" data-astro-cid-sz7xmlte> <div class="w-12 h-12 rounded-full bg-gradient-to-br to-umn-light-maroon flex items-center justify-center" data-astro-cid-sz7xmlte> <img src="/images/logo2.png" alt="MicroPig Logo" class="h-48 w-40 object-contain" data-astro-cid-sz7xmlte> </div> <div class="hidden md:flex flex-col" data-astro-cid-sz7xmlte> <span class="text-xl font-bold text-white" data-astro-cid-sz7xmlte>MicroPig</span> <span class="text-xs text-gray-400 tracking-wide" data-astro-cid-sz7xmlte>Swine Microbiome Research</span> </div> <div class="md:hidden" data-astro-cid-sz7xmlte> <span class="text-2xl font-bold text-white" data-astro-cid-sz7xmlte>MicroPig</span> </div> </div> <p class="mb-4 text-sm" data-astro-cid-sz7xmlte>
Transforming swine health through microbiome science and collaborative research.
</p> <p class="text-xs text-gray-500" data-astro-cid-sz7xmlte>
Our research connects gut microbiome science with practical feeding strategies for healthier, more sustainable pork production.
</p> </div> <div data-astro-cid-sz7xmlte> <h5 class="font-bold text-white text-lg mb-4" data-astro-cid-sz7xmlte>Quick Links</h5> <ul class="space-y-3" data-astro-cid-sz7xmlte> ${quickLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="hover:text-white transition-colors footer-link" data-astro-cid-sz7xmlte> ${link.text} </a> </li>`)} </ul> </div> <div data-astro-cid-sz7xmlte> <h5 class="font-bold text-white text-lg mb-4" data-astro-cid-sz7xmlte>Resources</h5> <ul class="space-y-3" data-astro-cid-sz7xmlte> ${resourceLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="hover:text-white transition-colors footer-link" data-astro-cid-sz7xmlte> ${link.text} </a> </li>`)} </ul> </div> <div data-astro-cid-sz7xmlte> <h5 class="font-bold text-white text-lg mb-4" data-astro-cid-sz7xmlte>For Professionals</h5> <ul class="space-y-3" data-astro-cid-sz7xmlte> ${professionalLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="hover:text-white transition-colors footer-link" data-astro-cid-sz7xmlte> ${link.text} </a> </li>`)} </ul> </div> </div> <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} MicroPig Innovations. All rights reserved.</p> <div class="flex gap-6 mt-4 md:mt-0" data-astro-cid-sz7xmlte> <a href="/coming-soon" class="hover:text-white transition-colors" data-astro-cid-sz7xmlte>Privacy Policy</a> <a href="/coming-soon" class="hover:text-white transition-colors" data-astro-cid-sz7xmlte>Terms of Service</a> <a href="/coming-soon" class="hover:text-white transition-colors" data-astro-cid-sz7xmlte>Accessibility</a> </div> </div> </div> </footer> `;
}, "C:/Users/sudar/micropig-website/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Swine Microbiome Research", "description": "Transforming swine health through microbiome science and collaborative research at the University of Minnesota." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})}  ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ValueProposition", $$ValueProposition, {})} ${renderComponent($$result2, "Research", $$Research, {})} ${renderComponent($$result2, "Impact", $$Impact, {})} ${renderComponent($$result2, "Approach", $$Approach, {})} ${renderComponent($$result2, "Stats", $$Stats, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Resources", $$Resources, {})} ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ${renderComponent($$result2, "Contact", $$ContactSection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/sudar/micropig-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/sudar/micropig-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
