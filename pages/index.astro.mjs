export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../assets/pages/index.astro.b4a851d3.js').then(n => n.index);

export { page };
