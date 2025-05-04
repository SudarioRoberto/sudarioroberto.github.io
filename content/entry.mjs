// astro-head-inject
import {
	createCollectionToGlobResultMap,
	createGetCollection,
	createGetDataEntryById,
	createGetEntries,
	createGetEntry,
	createGetEntryBySlug,
	createReference,
} from 'astro/content/runtime';

export { defineCollection } from 'astro/content/runtime';
export { z } from 'astro/zod';

const contentDir = '/src/content/';

const contentEntryGlob = {
  "/src/content/videos/digestibility.md": () => import("./videos/digestibility.mjs"),
  "/src/content/videos/microbiome.md": () => import("./videos/microbiome.mjs"),
  "/src/content/videos/microbiome-basics.md": () => import("./videos/microbiome-basics.mjs"),
  "/src/content/videos/waste.md": () => import("./videos/waste.mjs"),
  "/src/content/blog/prebiotic.md": () => import("./blog/prebiotic.mjs"),
  "/src/content/blog/meta-analysis.md": () => import("./blog/meta-analysis.mjs"),
};
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = {
};
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"videos":{"type":"content","entries":{"digestibility":"/src/content/videos/digestibility.md","microbiome":"/src/content/videos/microbiome.md","microbiome-basics":"/src/content/videos/microbiome-basics.md","waste":"/src/content/videos/waste.md"}},"blog":{"type":"content","entries":{"prebiotic":"/src/content/blog/prebiotic.md","meta-analysis":"/src/content/blog/meta-analysis.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = {
  "/src/content/videos/digestibility.md": () => import("./videos/digestibility.entry.mjs"),
  "/src/content/videos/microbiome.md": () => import("./videos/microbiome.entry.mjs"),
  "/src/content/videos/microbiome-basics.md": () => import("./videos/microbiome-basics.entry.mjs"),
  "/src/content/videos/waste.md": () => import("./videos/waste.entry.mjs"),
  "/src/content/blog/prebiotic.md": () => import("./blog/prebiotic.entry.mjs"),
  "/src/content/blog/meta-analysis.md": () => import("./blog/meta-analysis.entry.mjs"),
};
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

export const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export const getDataEntryById = createGetDataEntryById({
	getEntryImport: createGlobLookup(dataCollectionToEntryMap),
});

export const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export const getEntries = createGetEntries(getEntry);

export const reference = createReference({ lookupMap });
