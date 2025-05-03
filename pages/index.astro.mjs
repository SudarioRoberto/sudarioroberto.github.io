export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../assets/pages/index.astro.6667fbdb.js').then(n => n.index);

export { page };
