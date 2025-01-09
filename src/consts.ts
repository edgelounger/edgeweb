// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Edgelounger";
export const SITE_TITLE = "Edgelounger";
export const SITE_DESCRIPTION = "Lounging on the edge of the web";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Edgelounger - All Tags";
export const Tags_DESCRIPTION =
  "Edgelounger - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in Edgelandia`,
    description: `Explore articles about ${tag} for different perspectives.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Edgelandia`,
    description: `Browse all articles under the ${category} category in Edgelandia`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "Earth" },
  { href: "/category/Two/1/", title: "Nature" },
  { href: "/category/Three/1/", title: "Human" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Edge" },
  { href: "/posts/tailwind-typography/", title: "River" },
  { href: "/tags/", title: "Sky" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/inotelab",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/inotelab",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
