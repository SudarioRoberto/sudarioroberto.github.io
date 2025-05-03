/* empty css                                       */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.1a419e99.js';
import 'html-escaper';
import 'clsx';
import { $ as $$Navbar, a as $$BaseLayout } from './blog-meta-analysis.astro.6775b07a.js';
/* empty css                          */
const $$Astro = createAstro("https://sudarioroberto.github.io");
const $$VideoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoCard;
  const {
    videoId,
    title,
    description,
    date,
    duration,
    presenter,
    presenterInitials
  } = Astro2.props;
  const initials = presenterInitials || presenter.split(" ").map((name) => name[0]).join("").substring(0, 2).toUpperCase();
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white max-w-md" data-astro-cid-g6m6frnh> <!-- Thumbnail with play button overlay --> <div class="relative group cursor-pointer video-thumbnail-container"${addAttribute(videoId, "data-video-id")} data-astro-cid-g6m6frnh> <img${addAttribute(thumbnailUrl, "src")}${addAttribute(title, "alt")} class="w-full h-52 object-cover" onerror="if(this.src.includes('maxresdefault')){this.src=this.src.replace('maxresdefault','hqdefault');}" data-astro-cid-g6m6frnh> <!-- Gradient overlay for better contrast --> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300" data-astro-cid-g6m6frnh></div> <!-- Play button --> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-g6m6frnh> <div class="w-16 h-16 rounded-full bg-white/1 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110" data-astro-cid-g6m6frnh> <div class="w-14 h-14 rounded-full bg-gradient-to-br from-umn-maroon to-umn-maroon flex items-center justify-center" data-astro-cid-g6m6frnh> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g6m6frnh> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" data-astro-cid-g6m6frnh></path> </svg> </div> </div> </div> <!-- Duration badge --> <div class="absolute bottom-3 right-3 bg-black/70 text-white text-sm py-1 px-2 rounded-md" data-astro-cid-g6m6frnh> ${duration} </div> </div> <!-- Content --> <div class="p-5" data-astro-cid-g6m6frnh> <!-- Date --> <div class="text-sm text-gray-500 mb-2" data-astro-cid-g6m6frnh> ${date} </div> <!-- Title --> <h2 class="text-xl font-bold mb-3 text-gray-800 hover:text-umn-maroon transition-colors" data-astro-cid-g6m6frnh> ${title} </h2> <!-- Description --> <p class="text-gray-600 mb-4 text-sm" data-astro-cid-g6m6frnh> ${description} </p> <!-- Footer with presenter and button --> <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100" data-astro-cid-g6m6frnh> <div class="flex items-center space-x-2" data-astro-cid-g6m6frnh> <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600" data-astro-cid-g6m6frnh> ${initials} </div> <span class="text-sm text-gray-600" data-astro-cid-g6m6frnh> ${presenter} </span> </div> <button class="watch-video-btn flex items-center space-x-1 bg-gradient-to-r from-umn-maroon to-umn-maroon text-white text-sm font-medium py-2 px-4 rounded-full hover:shadow-md transition-all duration-300"${addAttribute(videoId, "data-video-id")} data-astro-cid-g6m6frnh> <span data-astro-cid-g6m6frnh>Watch</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-g6m6frnh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-g6m6frnh></path> </svg> </button> </div> </div> </div> `;
}, "C:/Users/sudar/micropig-website/src/components/VideoCard.astro", void 0);

const $$Video = createComponent(($$result, $$props, $$slots) => {
  const videoContent = [
    {
      videoId: "S-vZzJM9usA",
      title: "Microbiome Basics for Producers",
      description: "Learn the fundamentals of swine gut microbiome and its practical implications for farm management and performance.",
      date: "March 15, 2025",
      duration: "30 min",
      presenter: "Andres Gomez"
    }
    // Add your other videos...
  ];
  videoContent.map((video) => ({
    ...video,
    // Default high quality thumbnail URL
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
    // Fallback image for development (when using example IDs)
    fallbackImage: `/images/video-placeholder.jpg`
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Videos", "description": "Educational videos and webinars from the MicroPig team" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="pt-32 pb-20 px-6 md:px-12 bg-umn-off-white"> <div class="container mx-auto max-w-6xl"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold mb-6 text-umn-maroon">MicroPig Videos</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Educational videos, webinars, and demonstrations for practical microbiome implementation
</p> </div> <!-- Video Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${videoContent.map((video) => renderTemplate`${renderComponent($$result2, "VideoCard", $$VideoCard, { "videoId": video.videoId, "title": video.title, "description": video.description, "date": video.date, "duration": video.duration, "presenter": video.presenter })}`)} </div> </div> </div> ` })} <!-- Video Modal --> <div id="videoModal" class="fixed inset-0 bg-black bg-opacity-75 z-50 hidden items-center justify-center"> <div class="bg-white rounded-lg w-full max-w-4xl mx-4 sm:mx-auto p-1 relative"> <!-- Close button --> <button id="closeVideoModal" class="absolute -top-10 right-0 text-white text-xl hover:text-gray-300 focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Video container with 16:9 aspect ratio --> <div class="relative" style="padding-bottom: 56.25%;"> <iframe id="videoFrame" class="absolute top-0 left-0 w-full h-full rounded-lg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe> </div> </div> </div> `;
}, "C:/Users/sudar/micropig-website/src/pages/video.astro", void 0);

const $$file = "C:/Users/sudar/micropig-website/src/pages/video.astro";
const $$url = "/video";

export { $$Video as default, $$file as file, $$url as url };
