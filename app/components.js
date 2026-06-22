/* Gerado a partir de components.jsx — não editar à mão. */
const {
  useState,
  useEffect,
  useRef
} = React;
const KZ = window.KAZUKIDesignSystem_63706c;
const {
  Button,
  Badge,
  Card,
  Eyebrow,
  KatanaDivider,
  SocialBar,
  Crest
} = KZ;
const R = window.KZ_DATA.RESTAURANT;
const SEO = window.KZ_SEO;
const SOCIAL_GLYPHS = {
  instagram: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92Zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Zm6.95-9.22a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0Z",
  facebook: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.1 24 12.07Z",
  whatsapp: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z",
  tiktok: "M16.6 5.82a4.28 4.28 0 0 1-1.13-2.82h-3.1v12.4a2.45 2.45 0 1 1-2.45-2.45c.25 0 .49.04.72.11V9.9a5.6 5.6 0 0 0-.72-.05 5.55 5.55 0 1 0 5.55 5.55V9.01a7.3 7.3 0 0 0 4.27 1.37V7.28a4.28 4.28 0 0 1-3.14-1.46Z"
};
function ZenSocial({
  size = 42
}) {
  const links = [{
    id: "instagram",
    url: R.social.instagram,
    label: "Instagram"
  }, {
    id: "facebook",
    url: R.social.facebook,
    label: "Facebook"
  }, {
    id: "whatsapp",
    url: "https://wa.me/" + R.whatsapp,
    label: "WhatsApp"
  }, {
    id: "tiktok",
    url: R.social.tiktok,
    label: "TikTok"
  }];
  return React.createElement("div", {
    className: "kz-social"
  }, React.createElement("div", {
    className: "kz-social-row"
  }, links.map(s => React.createElement("a", {
    key: s.id,
    className: "kz-social-chip",
    href: s.url,
    target: "_blank",
    rel: "noopener",
    "aria-label": s.label,
    title: s.label,
    style: {
      width: size,
      height: size
    }
  }, React.createElement("svg", {
    width: size * 0.52,
    height: size * 0.52,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: SOCIAL_GLYPHS[s.id]
  }))))), React.createElement("span", {
    className: "kz-social-handle"
  }, R.social.handle));
}
function BrandMark({
  size = 44,
  withWord = false,
  stacked = false
}) {
  const mark = React.createElement("svg", {
    className: "kz-mark",
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    focusable: "false"
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "zenGold",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#F6DDA0"
  }), React.createElement("stop", {
    offset: "0.5",
    stopColor: "#D4A853"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#9C701F"
  }))), React.createElement("g", {
    transform: "rotate(-18 50 50)"
  }, React.createElement("path", {
    d: "M 78.5 27 A 36 36 0 1 1 60 16.2",
    fill: "none",
    stroke: "url(#zenGold)",
    strokeWidth: "7.5",
    strokeLinecap: "round"
  }), React.createElement("circle", {
    cx: "60",
    cy: "16.2",
    r: "2.2",
    fill: "#9C701F"
  })), React.createElement("circle", {
    cx: "68",
    cy: "30",
    r: "6.4",
    fill: "#AF2828"
  }), React.createElement("circle", {
    cx: "68",
    cy: "30",
    r: "6.4",
    fill: "none",
    stroke: "#F6DDA0",
    strokeWidth: "1",
    opacity: "0.5"
  }));
  if (!withWord) return mark;
  return React.createElement("span", {
    className: "kz-lockup" + (stacked ? " is-stacked" : "")
  }, mark, React.createElement("span", {
    className: "kz-lockup-word"
  }, "ZEN", React.createElement("span", {
    className: "kz-lockup-word-sub"
  }, "SUSHI")));
}
const NAV_LINKS = [{
  to: "#/",
  label: "Início"
}, {
  to: "#/menu",
  label: "Cardápio"
}, {
  to: "#/reservas",
  label: "Reservas"
}, {
  to: "#/delivery",
  label: "Delivery"
}, {
  to: "#/localizacao",
  label: "Como Chegar"
}, {
  to: "#/blog",
  label: "Blog"
}];
function Nav({
  route
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [route]);
  const isActive = to => to === "#/" ? route === "home" : "#/" + route === to;
  return React.createElement("header", {
    className: "kz-nav" + (scrolled ? " is-scrolled" : "")
  }, React.createElement("div", {
    className: "kz-nav-inner"
  }, React.createElement("a", {
    href: "#/",
    className: "kz-brand",
    "aria-label": "ZEN SUSHI — página inicial"
  }, React.createElement(BrandMark, {
    size: 42
  }), React.createElement("span", {
    className: "kz-brand-word"
  }, "ZEN SUSHI")), React.createElement("nav", {
    className: "kz-nav-links",
    "aria-label": "Navegação principal"
  }, NAV_LINKS.map(l => React.createElement("a", {
    key: l.to,
    href: l.to,
    className: "kz-nav-link" + (isActive(l.to) ? " is-active" : "")
  }, l.label))), React.createElement("div", {
    className: "kz-nav-cta"
  }, React.createElement(Button, {
    variant: "gold",
    size: "sm",
    onClick: () => {
      location.hash = "#/reservas";
    }
  }, "Reservar")), React.createElement("button", {
    className: "kz-burger",
    "aria-label": "Abrir menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null))), open && React.createElement("div", {
    className: "kz-mobile-menu"
  }, NAV_LINKS.map(l => React.createElement("a", {
    key: l.to,
    href: l.to,
    className: "kz-nav-link" + (isActive(l.to) ? " is-active" : "")
  }, l.label)), React.createElement("a", {
    href: "#/reservas",
    className: "kz-nav-link kz-mobile-reserve"
  }, "Reservar mesa →")));
}
function Footer() {
  return React.createElement("footer", {
    className: "kz-footer"
  }, React.createElement("div", {
    className: "kz-footer-grid"
  }, React.createElement("div", {
    className: "kz-footer-col"
  }, React.createElement(BrandMark, {
    size: 72,
    withWord: true,
    stacked: true
  }), React.createElement("p", {
    className: "kz-footer-tagline"
  }, R.descricao), React.createElement(ZenSocial, {
    size: 42
  })), React.createElement("div", {
    className: "kz-footer-col"
  }, React.createElement("h2", {
    className: "kz-footer-h"
  }, "Visite-nos"), React.createElement("address", {
    className: "kz-address"
  }, R.rua, React.createElement("br", null), R.bairro, ", ", R.cidade, " - ", R.estado, React.createElement("br", null), "CEP ", R.cep, React.createElement("br", null), React.createElement("a", {
    href: "tel:" + R.telefoneE164
  }, R.telefone), React.createElement("br", null), React.createElement("a", {
    href: "mailto:" + R.email
  }, R.email))), React.createElement("div", {
    className: "kz-footer-col"
  }, React.createElement("h2", {
    className: "kz-footer-h"
  }, "Horários"), React.createElement("ul", {
    className: "kz-hours"
  }, R.horarios.map(h => React.createElement("li", {
    key: h.dias
  }, React.createElement("span", null, h.dias), React.createElement("span", {
    className: "kz-hours-time"
  }, h.abre, "–", h.fecha))))), React.createElement("div", {
    className: "kz-footer-col"
  }, React.createElement("h2", {
    className: "kz-footer-h"
  }, "Navegação"), React.createElement("ul", {
    className: "kz-footer-nav"
  }, NAV_LINKS.map(l => React.createElement("li", {
    key: l.to
  }, React.createElement("a", {
    href: l.to
  }, l.label)))))), React.createElement(KatanaDivider, {
    style: {
      margin: "0 auto",
      maxWidth: 1200
    }
  }), React.createElement("p", {
    className: "kz-copyright"
  }, "© 2026 ", R.legalName, " · ", R.enderecoCompleto, " · Todos os direitos reservados."));
}
function DishImage({
  name,
  tall
}) {
  const initial = name.trim()[0];
  return React.createElement("div", {
    className: "kz-dish-img" + (tall ? " is-tall" : ""),
    role: "img",
    "aria-label": "Foto do prato: " + name
  }, React.createElement("div", {
    className: "kz-dish-img-inner"
  }, React.createElement("span", {
    className: "kz-dish-initial"
  }, initial), React.createElement("span", {
    className: "kz-dish-glyph"
  }, "◆")));
}
function PageHero({
  eyebrow,
  title,
  subtitle,
  children
}) {
  return React.createElement("section", {
    className: "kz-pagehero"
  }, React.createElement("div", {
    className: "kz-pagehero-inner"
  }, eyebrow && React.createElement(Eyebrow, {
    rule: "left"
  }, eyebrow), React.createElement("h1", {
    className: "kz-pagehero-title"
  }, title), subtitle && React.createElement("p", {
    className: "kz-pagehero-sub"
  }, subtitle), children));
}
function AuditorPanel({
  route,
  tab,
  setTab,
  open,
  setOpen
}) {
  const [events, setEvents] = useState(SEO.getEvents());
  const [, force] = useState(0);
  useEffect(() => SEO.onEvents(setEvents), []);
  const [checks, setChecks] = useState([]);
  const [schemas, setSchemas] = useState([]);
  useEffect(() => {
    const t = setTimeout(() => {
      setChecks(SEO.auditPage("#page-root"));
      setSchemas(SEO.getSchemas());
    }, 80);
    return () => clearTimeout(t);
  }, [route]);
  const passCount = checks.filter(c => c.pass).length;
  return React.createElement(React.Fragment, null, React.createElement("button", {
    className: "kz-aud-fab" + (open ? " is-open" : ""),
    onClick: () => setOpen(!open),
    "aria-label": "Auditor SEO"
  }, React.createElement("span", {
    className: "kz-aud-fab-glyph"
  }, "⚙"), React.createElement("span", {
    className: "kz-aud-fab-label"
  }, "Auditor\xA0SEO"), checks.length > 0 && React.createElement("span", {
    className: "kz-aud-fab-score" + (passCount === checks.length ? " is-perfect" : "")
  }, passCount, "/", checks.length)), React.createElement("aside", {
    className: "kz-aud" + (open ? " is-open" : ""),
    "aria-hidden": !open
  }, React.createElement("div", {
    className: "kz-aud-head"
  }, React.createElement("div", null, React.createElement("span", {
    className: "kz-aud-kicker"
  }, "Painel técnico"), React.createElement("h2", {
    className: "kz-aud-title"
  }, "Auditor SEO")), React.createElement("button", {
    className: "kz-aud-close",
    onClick: () => setOpen(false),
    "aria-label": "Fechar"
  }, "×")), React.createElement("div", {
    className: "kz-aud-tabs"
  }, [["audit", "Auditoria"], ["schema", "Schema"], ["ga4", "GA4 · " + events.length], ["sitemap", "Sitemap"]].map(([k, label]) => React.createElement("button", {
    key: k,
    className: "kz-aud-tab" + (tab === k ? " is-active" : ""),
    onClick: () => setTab(k)
  }, label))), React.createElement("div", {
    className: "kz-aud-body",
    "data-lenis-prevent": true
  }, tab === "audit" && React.createElement("div", null, React.createElement("p", {
    className: "kz-aud-note"
  }, "Verificação ao vivo do DOM da rota atual ", React.createElement("code", null, "/", route === "home" ? "" : route), "."), React.createElement("ul", {
    className: "kz-checklist"
  }, checks.map((c, i) => React.createElement("li", {
    key: i,
    className: c.pass ? "ok" : "fail"
  }, React.createElement("span", {
    className: "kz-check-icon"
  }, c.pass ? "✓" : "✕"), React.createElement("span", {
    className: "kz-check-body"
  }, React.createElement("strong", null, c.label), React.createElement("em", null, c.detail)))))), tab === "schema" && React.createElement("div", null, React.createElement("p", {
    className: "kz-aud-note"
  }, schemas.length, " bloco(s) JSON-LD injetado(s) no ", React.createElement("code", null, "<head>"), ". Valide no ", React.createElement("a", {
    href: "https://search.google.com/test/rich-results",
    target: "_blank",
    rel: "noopener"
  }, "Rich Results Test"), "."), schemas.map((s, i) => React.createElement("details", {
    key: i,
    open: i === 0,
    className: "kz-code-details"
  }, React.createElement("summary", null, s["@type"]), React.createElement("pre", {
    className: "kz-code"
  }, JSON.stringify(s, null, 2))))), tab === "ga4" && React.createElement("div", null, React.createElement("p", {
    className: "kz-aud-note"
  }, "Eventos ", React.createElement("code", null, "gtag"), " disparados nesta sessão (ID ", React.createElement("code", null, SEO.GA4_ID), "). Mais recente no topo."), events.length === 0 && React.createElement("p", {
    className: "kz-aud-empty"
  }, "Nenhum evento ainda — navegue e interaja."), React.createElement("ul", {
    className: "kz-eventlog"
  }, events.map((e, i) => React.createElement("li", {
    key: i
  }, React.createElement("span", {
    className: "kz-event-name"
  }, e.name), React.createElement("span", {
    className: "kz-event-time"
  }, e.t), Object.keys(e.params).length > 0 && React.createElement("code", {
    className: "kz-event-params"
  }, JSON.stringify(e.params)))))), tab === "sitemap" && React.createElement("div", null, React.createElement("p", {
    className: "kz-aud-note"
  }, "Gerado dinamicamente a partir das rotas + posts do blog. ", React.createElement("code", null, "/admin"), " é excluído (noindex)."), React.createElement("pre", {
    className: "kz-code"
  }, SEO.buildSitemap())))), open && React.createElement("div", {
    className: "kz-aud-scrim",
    onClick: () => setOpen(false)
  }));
}
Object.assign(window, {
  Nav,
  Footer,
  DishImage,
  PageHero,
  AuditorPanel,
  NAV_LINKS,
  BrandMark
});