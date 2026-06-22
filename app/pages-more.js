/* Gerado a partir de pages-more.jsx — não editar à mão. */
const {
  Button: B2,
  Badge: Bd2,
  Card: Cd2,
  Eyebrow: Ey2,
  KatanaDivider: KD2,
  SocialBar: SB2
} = window.KAZUKIDesignSystem_63706c;
const RST = window.KZ_DATA.RESTAURANT;
const BLOGP = window.KZ_DATA.BLOG;
const seo2 = window.KZ_SEO;
function MapEmbed({
  onInteract
}) {
  const [failed, setFailed] = React.useState(false);
  const cleanQuery = "Av. Antônio Mathias de Camargo, 895, Centro, Cotia - SP, " + RST.cep;
  const query = encodeURIComponent(cleanQuery);
  const embedSrc = "https://www.google.com/maps?q=" + query + "&z=16&hl=pt-BR&output=embed";
  if (failed) {
    return React.createElement("a", {
      className: "kz-map kz-map-fallback",
      href: "https://www.google.com/maps/search/?api=1&query=" + query,
      target: "_blank",
      rel: "noopener",
      onClick: onInteract,
      "aria-label": "Abrir o mapa no Google Maps"
    }, React.createElement("div", {
      className: "kz-map-grid",
      "aria-hidden": "true"
    }), React.createElement("div", {
      className: "kz-map-pin"
    }, React.createElement("span", {
      className: "kz-map-pin-dot"
    }), React.createElement("span", {
      className: "kz-map-pin-label"
    }, "ZEN SUSHI")), React.createElement("div", {
      className: "kz-map-fallback-cta"
    }, React.createElement("strong", null, RST.rua), React.createElement("span", null, RST.bairro, ", ", RST.cidade, " - ", RST.estado), React.createElement("span", {
      className: "kz-map-fallback-btn"
    }, "Abrir no Google Maps →")));
  }
  return React.createElement("div", {
    className: "kz-map",
    onMouseDown: onInteract
  }, React.createElement("iframe", {
    className: "kz-map-iframe",
    title: "Mapa do ZEN SUSHI Restaurante em Cotia",
    src: embedSrc,
    allowFullScreen: true,
    onError: () => setFailed(true)
  }));
}
function LocalizacaoPage() {
  const directions = () => {
    seo2.track("directions_click", {
      destino: "google_maps"
    });
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${RST.geo.lat},${RST.geo.lng}`, "_blank", "noopener");
  };
  const mapInteract = () => seo2.track("map_interaction", {
    acao: "abrir_mapa"
  });
  return React.createElement("div", null, React.createElement(PageHero, {
    eyebrow: "Como Chegar",
    title: "Como chegar ao Restaurante",
    subtitle: "Estamos no Centro de Cotia, fácil de chegar de carro ou transporte público."
  }), React.createElement("div", {
    className: "kz-section kz-loc-grid"
  }, React.createElement("div", {
    className: "kz-loc-main"
  }, React.createElement("h2", {
    className: "kz-h2"
  }, "Mapa"), React.createElement(MapEmbed, {
    onInteract: mapInteract
  }), React.createElement("address", {
    className: "kz-loc-address"
  }, React.createElement("strong", null, RST.rua), React.createElement("br", null), RST.bairro, ", ", RST.cidade, " - ", RST.estado, React.createElement("br", null), "CEP ", RST.cep), React.createElement("div", {
    className: "kz-loc-actions"
  }, React.createElement(B2, {
    variant: "gold",
    iconRight: "→",
    onClick: directions
  }, "Traçar rota"), React.createElement(B2, {
    variant: "ghost",
    onClick: () => {
      seo2.track("directions_click", {
        destino: "ligar"
      });
      location.href = "tel:" + RST.telefoneE164;
    }
  }, "Ligar: ", RST.telefone))), React.createElement("aside", {
    className: "kz-loc-aside"
  }, React.createElement(Cd2, {
    pattern: true
  }, React.createElement("h3", {
    className: "kz-h3"
  }, "Como vir de carro"), React.createElement("p", {
    className: "kz-body"
  }, "Acesso rápido pela Rodovia Raposo Tavares (SP-270). Saída para o Centro de Cotia, seguindo pela Av. Antônio Mathias de Camargo. A poucos minutos do Shopping Granja Vianna.")), React.createElement(Cd2, {
    pattern: true
  }, React.createElement("h3", {
    className: "kz-h3"
  }, "Como vir de transporte público"), React.createElement("p", {
    className: "kz-body"
  }, "Diversas linhas municipais param no Centro de Cotia, a uma curta caminhada do restaurante. Da estação da CPTM, há ônibus e aplicativos de transporte disponíveis.")), React.createElement(Cd2, null, React.createElement("h4", {
    className: "kz-h4"
  }, "Estacionamento"), React.createElement("p", {
    className: "kz-body"
  }, "Estacionamento conveniado nas proximidades e vagas na via. Consulte a equipe sobre o serviço de manobrista nos fins de semana.")))));
}
function BlogPage() {
  return React.createElement("div", null, React.createElement(PageHero, {
    eyebrow: "Blog",
    title: "Histórias da Cozinha",
    subtitle: "Receitas, bastidores, harmonização de vinhos e o melhor da gastronomia em Cotia."
  }), React.createElement("div", {
    className: "kz-section kz-blog-list"
  }, BLOGP.map((p, i) => React.createElement("article", {
    key: p.slug,
    className: "kz-blog-card" + (i === 0 ? " is-feature" : "")
  }, React.createElement("a", {
    href: "#/blog/" + p.slug,
    className: "kz-blog-card-link",
    "aria-label": p.titulo
  }, React.createElement("div", {
    className: "kz-blog-thumb",
    role: "img",
    "aria-label": "Imagem do artigo: " + p.titulo,
    style: p.img ? {
      backgroundImage: "linear-gradient(180deg, rgba(10,10,10,0.05), rgba(10,10,10,0.55)), url(" + p.img + ")",
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : undefined
  }, React.createElement("span", {
    className: "kz-blog-cat"
  }, p.categoria), !p.img && React.createElement("span", {
    className: "kz-blog-glyph"
  }, "◆")), React.createElement("div", {
    className: "kz-blog-card-body"
  }, React.createElement("span", {
    className: "kz-blog-meta"
  }, p.dataLabel, " · ", p.leitura, " de leitura"), React.createElement("h2", {
    className: "kz-h3 kz-blog-card-title"
  }, p.titulo), React.createElement("p", {
    className: "kz-body"
  }, p.resumo), React.createElement("span", {
    className: "kz-blog-readmore"
  }, "Ler artigo →")))))));
}
function BlogPostPage({
  post
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    seo2.track("article_read", {
      artigo: post.slug
    });
    let fired = false;
    const onScroll = () => {
      const el = ref.current;
      if (!el || fired) return;
      const total = el.offsetTop + el.offsetHeight - window.innerHeight;
      const pct = total > 0 ? window.scrollY / total : 1;
      if (pct >= 0.75) {
        fired = true;
        seo2.track("scroll_depth_75", {
          artigo: post.slug
        });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [post.slug]);
  const related = BLOGP.filter(p => p.slug !== post.slug).slice(0, 2);
  return React.createElement("article", {
    className: "kz-post",
    ref: ref
  }, React.createElement("div", {
    className: "kz-post-hero"
  }, React.createElement("a", {
    href: "#/blog",
    className: "kz-post-back"
  }, "← Voltar ao blog"), React.createElement(Bd2, {
    variant: "gold"
  }, post.categoria), React.createElement("h1", {
    className: "kz-post-title"
  }, post.titulo), React.createElement("p", {
    className: "kz-post-byline"
  }, "Por ", post.autor, " · ", post.dataLabel, " · ", post.leitura, " de leitura")), React.createElement("div", {
    className: "kz-post-cover",
    role: "img",
    "aria-label": "Imagem de capa: " + post.titulo,
    style: post.img ? {
      backgroundImage: "linear-gradient(180deg, rgba(10,10,10,0.1), rgba(10,10,10,0.5)), url(" + post.img + ")",
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : undefined
  }, !post.img && React.createElement("span", {
    className: "kz-blog-glyph"
  }, "◆")), React.createElement("div", {
    className: "kz-post-body"
  }, React.createElement("p", {
    className: "kz-post-lead"
  }, post.resumo), post.topicos.map(t => React.createElement("section", {
    key: t.h2
  }, React.createElement("h2", {
    className: "kz-h2 kz-post-h2"
  }, t.h2), React.createElement("p", {
    className: "kz-post-p"
  }, t.p))), React.createElement(KD2, {
    style: {
      margin: "var(--space-7) 0"
    }
  }), React.createElement("h3", {
    className: "kz-h3"
  }, post.dicas.h3), React.createElement("p", {
    className: "kz-post-p"
  }, post.dicas.p), React.createElement("div", {
    className: "kz-post-cta"
  }, React.createElement("h4", {
    className: "kz-h4"
  }, post.cta), React.createElement("div", {
    className: "kz-hero-actions"
  }, React.createElement(B2, {
    variant: "gold",
    iconRight: "→",
    onClick: () => {
      seo2.track("cta_click", {
        label: post.cta,
        origem: "blog"
      });
      location.hash = "#/reservas";
    }
  }, "Reservar mesa"), React.createElement(B2, {
    variant: "outline",
    onClick: () => {
      location.hash = "#/menu";
    }
  }, "Ver cardápio")))), React.createElement("div", {
    className: "kz-section kz-post-related"
  }, React.createElement("h2", {
    className: "kz-h2 kz-center"
  }, "Continue lendo"), React.createElement("div", {
    className: "kz-related-grid"
  }, related.map(p => React.createElement("a", {
    key: p.slug,
    href: "#/blog/" + p.slug,
    className: "kz-related-card"
  }, React.createElement("span", {
    className: "kz-blog-cat"
  }, p.categoria), React.createElement("h3", {
    className: "kz-h3"
  }, p.titulo), React.createElement("span", {
    className: "kz-blog-readmore"
  }, "Ler →"))))));
}
function AdminPage() {
  const [authed, setAuthed] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [err, setErr] = React.useState(false);
  React.useEffect(() => {
    seo2.track("admin_access", {
      autenticado: false,
      acao: "tela_login"
    });
  }, []);
  const login = e => {
    e.preventDefault();
    if (user.trim() && pass.trim()) {
      setAuthed(true);
      setErr(false);
      seo2.track("admin_access", {
        autenticado: true,
        usuario: user
      });
    } else {
      setErr(true);
    }
  };
  if (!authed) {
    return React.createElement("div", {
      className: "kz-admin-login-wrap"
    }, React.createElement(Cd2, {
      pattern: true,
      className: "kz-admin-login"
    }, React.createElement("span", {
      className: "kz-admin-lock"
    }, "🔒"), React.createElement("h1", {
      className: "kz-h2",
      style: {
        marginTop: 0
      }
    }, "Área Restrita"), React.createElement("p", {
      className: "kz-body"
    }, "Acesso somente para a equipe ZEN SUSHI. Esta página é ", React.createElement("code", null, "noindex, nofollow"), "."), React.createElement("form", {
      className: "kz-form",
      onSubmit: login,
      noValidate: true
    }, React.createElement("div", {
      className: "kz-field"
    }, React.createElement("label", {
      htmlFor: "a-user"
    }, "Usuário"), React.createElement("input", {
      id: "a-user",
      value: user,
      onChange: e => setUser(e.target.value),
      placeholder: "admin"
    })), React.createElement("div", {
      className: "kz-field"
    }, React.createElement("label", {
      htmlFor: "a-pass"
    }, "Senha"), React.createElement("input", {
      id: "a-pass",
      type: "password",
      value: pass,
      onChange: e => setPass(e.target.value),
      placeholder: "••••••••"
    })), err && React.createElement("span", {
      className: "kz-err"
    }, "Preencha usuário e senha (demo: qualquer valor)."), React.createElement(B2, {
      variant: "gold",
      size: "lg",
      fullWidth: true,
      type: "submit",
      iconRight: "→"
    }, "Entrar no painel")), React.createElement("p", {
      className: "kz-admin-redirect"
    }, "Sem autenticação, o acesso é redirecionado para esta tela de login.")));
  }
  return React.createElement("div", {
    className: "kz-section kz-admin"
  }, React.createElement("div", {
    className: "kz-admin-head"
  }, React.createElement("div", null, React.createElement(Ey2, {
    rule: "left"
  }, "Painel privado · noindex"), React.createElement("h1", {
    className: "kz-h2",
    style: {
      margin: 0
    }
  }, "Painel")), React.createElement(B2, {
    variant: "ghost",
    onClick: () => setAuthed(false)
  }, "Sair")), React.createElement("div", {
    className: "kz-admin-grid"
  }, React.createElement(Cd2, null, React.createElement("h2", {
    className: "kz-h3"
  }, "Edição de Conteúdo"), React.createElement("p", {
    className: "kz-body"
  }, "Atualize textos das páginas, descrições de pratos e metadados de SEO."), React.createElement("ul", {
    className: "kz-admin-list"
  }, React.createElement("li", null, "Home · H1 e Missão ", React.createElement("span", {
    className: "kz-admin-pill"
  }, "Publicado")), React.createElement("li", null, "Cardápio · 45 itens ", React.createElement("span", {
    className: "kz-admin-pill"
  }, "Publicado")), React.createElement("li", null, "Blog · 5 artigos ", React.createElement("span", {
    className: "kz-admin-pill"
  }, "Publicado")))), React.createElement(Cd2, null, React.createElement("h3", {
    className: "kz-h3"
  }, "Upload de Mídia"), React.createElement("p", {
    className: "kz-body"
  }, "Envie fotos dos pratos e capas dos artigos (otimizadas com alt-text automático)."), React.createElement("div", {
    className: "kz-admin-drop"
  }, "Arraste imagens aqui ou clique para enviar")), React.createElement(Cd2, null, React.createElement("h4", {
    className: "kz-h4",
    style: {
      marginTop: 0
    }
  }, "Gerenciamento de Links"), React.createElement("p", {
    className: "kz-body"
  }, "Configure links de delivery, redes sociais e WhatsApp."), React.createElement("ul", {
    className: "kz-admin-links"
  }, RST.delivery.map(d => React.createElement("li", {
    key: d.id
  }, React.createElement("span", null, d.nome), React.createElement("code", null, d.url))), React.createElement("li", null, React.createElement("span", null, "WhatsApp"), React.createElement("code", null, "wa.me/", RST.whatsapp))))));
}
Object.assign(window, {
  LocalizacaoPage,
  BlogPage,
  BlogPostPage,
  AdminPage
});