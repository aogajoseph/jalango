import { useEffect } from "react";
import { site } from "../content/site";

export function Seo() {
  useEffect(() => {
    document.title = site.seo.title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let element = document.head.querySelector<HTMLLinkElement>(
        `link[rel="${rel}"]`
      );

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    // Basic SEO
    setMeta("name", "description", site.seo.description);
    setMeta("name", "robots", "index, follow");

    // Open Graph
    setMeta("property", "og:title", site.seo.title);
    setMeta("property", "og:description", site.seo.description);
    setMeta("property", "og:type", site.seo.type);
    setMeta("property", "og:url", site.seo.url);
    setMeta("property", "og:site_name", site.seo.siteName);
    setMeta("property", "og:locale", site.seo.locale);

    setMeta(
      "property",
      "og:image",
      new URL(site.seo.image.src, site.seo.url).toString()
    );

    setMeta(
      "property",
      "og:image:alt",
      site.seo.image.alt
    );

    setMeta(
      "property",
      "og:image:width",
      String(site.seo.image.width)
    );

    setMeta(
      "property",
      "og:image:height",
      String(site.seo.image.height)
    );

    // Twitter / X
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", site.seo.title);
    setMeta("name", "twitter:description", site.seo.description);

    setMeta(
      "name",
      "twitter:image",
      new URL(site.seo.image.src, site.seo.url).toString()
    );

    setMeta(
      "name",
      "twitter:image:alt",
      site.seo.image.alt
    );

    // Canonical URL
    setLink("canonical", site.seo.url);

    // Favicon
    setLink("icon", site.brand.favicon);

    // Browser theme colour
    setMeta("name", "theme-color", "#0e0d0c");
  }, []);

  return null;
}