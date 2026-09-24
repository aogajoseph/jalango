import { site } from "../content/site";

export function createPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.brand.name,
    url: site.seo.url,
    description: site.seo.description,
    image: new URL(
      site.hero.portrait.src,
      site.seo.url
    ).toString(),
    jobTitle: site.hero.eyebrow,
    sameAs: site.socialLinks
      .filter((social) => social.href !== "#")
      .map((social) => social.href),
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.seo.siteName,
    url: site.seo.url,
    description: site.seo.description,
  };
}

export function injectSchema() {
  const schemas = [
    createPersonSchema(),
    createWebsiteSchema(),
  ];

  let script = document.getElementById(
    "structured-data"
  ) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schemas);
}