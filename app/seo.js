/* ZEN SUSHI — SEO / Schema / GA4 / sitemap / audit engine.
   Exposes window.KZ_SEO with helpers used by pages + the Auditor panel.
   Babel-transpiled but contains no JSX — kept here for consistency. */
(function () {
  const R = window.KZ_DATA.RESTAURANT;
  const BLOG = window.KZ_DATA.BLOG;
  const ORIGIN = "https://www.zensushicotia.com.br";
  const GA4_ID = "G-KAZUKICOTIA";

  /* ---------- GA4 (gtag) + visible event bus ---------- */
  window.dataLayer = window.dataLayer || [];
  const eventLog = [];
  const listeners = new Set();
  function emit() { listeners.forEach((fn) => fn(eventLog.slice())); }

  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
    const args = Array.prototype.slice.call(arguments);
    if (args[0] === "event") {
      eventLog.unshift({
        name: args[1],
        params: args[2] || {},
        t: new Date().toLocaleTimeString("pt-BR"),
      });
      if (eventLog.length > 60) eventLog.pop();
      emit();
    }
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID, { send_page_view: false });

  function track(name, params) {
    window.gtag("event", name, params || {});
  }

  /* ---------- <head> management ---------- */
  function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
    return el;
  }
  function setLink(rel, href) {
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  let currentSchemas = [];
  function applyHead(meta) {
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", meta.robots || "index, follow");
    setLink("canonical", ORIGIN + meta.path);
    // Open Graph
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:type", meta.ogType || "website");
    setMeta("property", "og:url", ORIGIN + meta.path);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:site_name", R.name + " Restaurante");
    // JSON-LD
    document.querySelectorAll('script[data-kz-schema]').forEach((s) => s.remove());
    currentSchemas = meta.schemas || [];
    currentSchemas.forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-kz-schema", "1");
      s.textContent = JSON.stringify(obj, null, 2);
      document.head.appendChild(s);
    });
  }

  /* ---------- Reusable schema blocks ---------- */
  const openingHours = R.horarios.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.d.map((x) => ({ Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday" }[x])),
    opens: h.abre,
    closes: h.fecha,
  }));

  function localBusiness() {
    return {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": ORIGIN + "/#restaurant",
      name: R.name,
      legalName: R.legalName,
      description: R.descricao,
      image: ORIGIN + "/assets/kazuki-capa.jpg",
      logo: ORIGIN + "/assets/zen-logo.png",
      url: ORIGIN + "/",
      telephone: R.telefoneE164,
      email: R.email,
      priceRange: R.priceRange,
      servesCuisine: R.servesCuisine,
      acceptsReservations: true,
      address: {
        "@type": "PostalAddress",
        streetAddress: R.rua,
        addressLocality: R.cidade,
        addressRegion: R.estado,
        postalCode: R.cep,
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: R.geo.lat, longitude: R.geo.lng },
      openingHoursSpecification: openingHours,
      sameAs: [R.social.instagram, R.social.facebook, R.social.tiktok],
      hasMenu: ORIGIN + "/menu",
    };
  }

  /* ---------- Per-route SEO descriptors ---------- */
  const ROUTES = {
    home: () => ({
      title: "Restaurante em Cotia | ZEN SUSHI | Reservas e Delivery",
      description:
        "ZEN SUSHI — alta gastronomia em Cotia. Cortes nobres, risotos e frutos do mar. Faça sua reserva ou peça delivery. Av. Antônio Mathias de Camargo, 895, Centro.",
      path: "/",
      schemas: [localBusiness()],
    }),
    menu: () => ({
      title: "Cardápio Completo | ZEN SUSHI Restaurante em Cotia",
      description:
        "Conheça o cardápio do ZEN SUSHI em Cotia: entradas, pratos principais como Risoto de Camarão e Picanha na Brasa, sobremesas artesanais e carta de vinhos.",
      path: "/menu",
      schemas: [menuSchema(), localBusiness()],
    }),
    reservas: () => ({
      title: "Reserve sua Mesa | ZEN SUSHI Restaurante em Cotia",
      description:
        "Reserve sua mesa no ZEN SUSHI em Cotia. Atendimento por formulário ou WhatsApp. Confira regras e horários disponíveis para o seu jantar.",
      path: "/reservas",
      schemas: [contactPointSchema(), localBusiness()],
    }),
    delivery: () => ({
      title: "Delivery em Cotia | ZEN SUSHI | iFood, 99Food, Keeta e Rappi",
      description:
        "Peça delivery do ZEN SUSHI em Cotia pelo iFood, 99Food, Keeta ou Rappi. Alta gastronomia entregue na sua casa, com pratos quentes e sobremesas.",
      path: "/delivery",
      schemas: [orderActionSchema(), localBusiness()],
    }),
    localizacao: () => ({
      title: "Como Chegar | ZEN SUSHI Restaurante em Cotia - SP",
      description:
        "Como chegar ao ZEN SUSHI em Cotia: Av. Antônio Mathias de Camargo, 895, Centro, Cotia - SP, CEP 06700-158. De carro, transporte público e estacionamento.",
      path: "/localizacao",
      schemas: [placeSchema(), localBusiness()],
    }),
    blog: () => ({
      title: "Blog | ZEN SUSHI Restaurante em Cotia",
      description:
        "Histórias, receitas e dicas de harmonização do ZEN SUSHI em Cotia. Bastidores da cozinha, vinhos e o melhor da gastronomia local.",
      path: "/blog",
      schemas: [blogSchema()],
    }),
    blogPost: (post) => ({
      title: post.titulo + " | Blog ZEN SUSHI",
      description: post.resumo,
      path: "/blog/" + post.slug,
      ogType: "article",
      schemas: [blogPostingSchema(post), localBusiness()],
    }),
    admin: () => ({
      title: "Painel Administrativo | ZEN SUSHI",
      description: "Área restrita de administração do site ZEN SUSHI.",
      path: "/admin",
      robots: "noindex, nofollow",
      schemas: [],
    }),
  };

  function menuSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Menu",
      name: "Cardápio ZEN SUSHI",
      url: ORIGIN + "/menu",
      hasMenuSection: window.KZ_DATA.MENU.map((sec) => ({
        "@type": "MenuSection",
        name: sec.nome,
        hasMenuItem: sec.itens.map((it) => ({
          "@type": "MenuItem",
          name: it.nome,
          description: it.desc,
          offers: { "@type": "Offer", price: it.preco.replace(",", "."), priceCurrency: "BRL" },
          ...(it.tags && it.tags.length ? { suitableForDiet: it.tags } : {}),
        })),
      })),
    };
  }
  function contactPointSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: R.name,
      url: ORIGIN + "/reservas",
      acceptsReservations: ORIGIN + "/reservas",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Reservas",
        telephone: R.telefoneE164,
        email: R.email,
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
    };
  }
  function orderActionSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: R.name,
      url: ORIGIN + "/delivery",
      potentialAction: R.delivery.map((d) => ({
        "@type": "OrderAction",
        name: "Pedir pelo " + d.nome,
        target: { "@type": "EntryPoint", urlTemplate: d.url, actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] },
        deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
      })),
    };
  }
  function placeSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Place",
      name: R.name + " — " + R.cidade,
      address: {
        "@type": "PostalAddress",
        streetAddress: R.rua,
        addressLocality: R.cidade,
        addressRegion: R.estado,
        postalCode: R.cep,
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: R.geo.lat, longitude: R.geo.lng },
      hasMap: "https://www.google.com/maps?q=" + R.geo.lat + "," + R.geo.lng,
    };
  }
  function blogSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog ZEN SUSHI",
      url: ORIGIN + "/blog",
      blogPost: BLOG.map((p) => ({
        "@type": "BlogPosting",
        headline: p.titulo,
        url: ORIGIN + "/blog/" + p.slug,
        datePublished: p.data,
        author: { "@type": "Person", name: p.autor },
      })),
    };
  }
  function blogPostingSchema(p) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.titulo,
      description: p.resumo,
      image: ORIGIN + "/assets/kazuki-post-exemplo.jpg",
      url: ORIGIN + "/blog/" + p.slug,
      datePublished: p.data,
      dateModified: p.data,
      author: { "@type": "Person", name: p.autor },
      publisher: {
        "@type": "Organization",
        name: R.name,
        logo: { "@type": "ImageObject", url: ORIGIN + "/assets/kazuki-logo.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": ORIGIN + "/blog/" + p.slug },
      articleSection: p.categoria,
    };
  }

  /* ---------- Sitemap generation (dynamic) ---------- */
  function buildSitemap() {
    const today = "2026-06-13";
    const urls = [
      { loc: "/", priority: "1.0", freq: "weekly" },
      { loc: "/menu", priority: "0.9", freq: "weekly" },
      { loc: "/reservas", priority: "0.8", freq: "monthly" },
      { loc: "/delivery", priority: "0.8", freq: "monthly" },
      { loc: "/localizacao", priority: "0.7", freq: "monthly" },
      { loc: "/blog", priority: "0.6", freq: "weekly" },
    ];
    BLOG.forEach((p) => urls.push({ loc: "/blog/" + p.slug, priority: "0.5", freq: "monthly", lastmod: p.data }));
    // NOTE: /admin is intentionally excluded (noindex)
    const body = urls
      .map(
        (u) =>
          `  <url>\n    <loc>${ORIGIN}${u.loc}</loc>\n    <lastmod>${u.lastmod || today}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
      )
      .join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.w3.org/1999/sitemap/0.9">\n${body}\n</urlset>`;
  }

  /* ---------- Live audit of the rendered DOM ---------- */
  function auditPage(rootSelector) {
    const root = document.querySelector(rootSelector || "#page-root") || document.body;
    const h1s = root.querySelectorAll("h1");
    const checks = [];
    const ok = (label, pass, detail) => checks.push({ label, pass, detail });

    ok("H1 único na página", h1s.length === 1, `${h1s.length} elemento(s) <h1> encontrado(s)`);

    // heading hierarchy: no skipped levels
    const heads = [...root.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => +h.tagName[1]);
    let skipped = false;
    for (let i = 1; i < heads.length; i++) if (heads[i] - heads[i - 1] > 1) skipped = true;
    ok("Hierarquia de títulos sem saltos", !skipped, heads.map((n) => "H" + n).join(" › ") || "sem títulos");

    const title = document.title;
    ok("Meta title (30–65 caracteres)", title.length >= 30 && title.length <= 65, `${title.length} caracteres`);
    const desc = (document.head.querySelector('meta[name="description"]') || {}).content || "";
    ok("Meta description (70–160)", desc.length >= 70 && desc.length <= 160, `${desc.length} caracteres`);
    const canon = (document.head.querySelector('link[rel="canonical"]') || {}).href || "";
    ok("Canonical definido", !!canon, canon || "ausente");
    ok("Schema JSON-LD presente", currentSchemas.length > 0, currentSchemas.map((s) => s["@type"]).join(", ") || "nenhum");

    // images with alt
    const imgs = [...root.querySelectorAll("img")];
    const semAlt = imgs.filter((i) => !i.hasAttribute("alt"));
    ok("Imagens com alt-text", semAlt.length === 0, `${imgs.length - semAlt.length}/${imgs.length} com atributo alt`);

    return checks;
  }

  window.KZ_SEO = {
    ORIGIN,
    GA4_ID,
    ROUTES,
    applyHead,
    track,
    buildSitemap,
    auditPage,
    getEvents: () => eventLog.slice(),
    onEvents: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    getSchemas: () => currentSchemas,
  };
})();
