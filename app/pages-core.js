/* Gerado a partir de pages-core.jsx — não editar à mão. */
const {
  Button: B,
  Badge: Bd,
  Card: Cd,
  Eyebrow: Ey,
  KatanaDivider: KD,
  PriceTag,
  PromoSeal
} = window.KAZUKIDesignSystem_63706c;
const RES = window.KZ_DATA.RESTAURANT;
const MENU = window.KZ_DATA.MENU;
const seo = window.KZ_SEO;
const PHOTOS = {
  hero: {
    src: "assets/zen-sushi-restaurante-cotia-hero.jpg",
    w: 1400,
    h: 933,
    alt: "Mesa posta com pratos de alta gastronomia no ZEN SUSHI, restaurante em Cotia - SP"
  },
  missao: {
    src: "assets/zen-sushi-ambiente-salao-cotia.jpg",
    w: 960,
    h: 640,
    alt: "Salão do ZEN SUSHI, restaurante de alta gastronomia em Cotia"
  },
  destaques: [{
    src: "assets/file-mignon-ao-molho-madeira-cotia.jpg",
    w: 860,
    h: 573
  }, {
    src: "assets/risoto-de-camarao-cotia.jpg",
    w: 900,
    h: 601
  }, {
    src: "assets/picanha-na-brasa-cotia.jpg",
    w: 900,
    h: 506
  }]
};
function HomePage() {
  React.useEffect(() => {
    seo.track("home_view", {
      page: "home"
    });
  }, []);
  const cta = (label, hash) => {
    seo.track("cta_click", {
      label,
      destino: hash
    });
    location.hash = hash;
  };
  const diferenciais = [{
    t: "Cortes nobres",
    d: "Picanha, bife ancho e filé mignon selecionados, finalizados na brasa."
  }, {
    t: "Risotos artesanais",
    d: "Arroz arbóreo no ponto all'onda, do camarão ao porcini com trufas."
  }, {
    t: "Carta de vinhos",
    d: "Seleção do sommelier para harmonizar cada prato da casa."
  }, {
    t: "Ambiente premium",
    d: "A elegância do aço samurai traduzida em uma mesa contemporânea."
  }];
  return React.createElement("div", null, React.createElement("section", {
    className: "kz-hero"
  }, React.createElement("div", {
    className: "kz-hero-bg-wrap"
  }, React.createElement("img", {
    className: "kz-hero-slot",
    id: "hero-foto",
    src: PHOTOS.hero.src,
    width: PHOTOS.hero.w,
    height: PHOTOS.hero.h,
    alt: PHOTOS.hero.alt,
    title: PHOTOS.hero.alt,
    fetchpriority: "high",
    decoding: "async"
  })), React.createElement("div", {
    className: "kz-hero-overlay",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "kz-hero-inner"
  }, React.createElement("div", {
    className: "kz-hero-content"
  }, React.createElement(Ey, {
    rule: "left",
    color: "gold"
  }, "Alta gastronomia · ", RES.cidade, " - ", RES.estado), React.createElement("p", {
    className: "kz-hero-greeting"
  }, "Seja bem-vindo ao ", React.createElement("strong", null, "ZEN SUSHI")), React.createElement("h1", {
    className: "kz-hero-title"
  }, "Restaurante", React.createElement("br", null), React.createElement("span", null, "em Cotia")), React.createElement("p", {
    className: "kz-hero-sub"
  }, RES.descricao), React.createElement("div", {
    className: "kz-hero-actions"
  }, React.createElement(B, {
    variant: "gold",
    size: "lg",
    iconRight: "→",
    onClick: () => cta("Reservar mesa", "#/reservas")
  }, "Reservar mesa"), React.createElement(B, {
    variant: "outline",
    size: "lg",
    onClick: () => cta("Ver cardápio", "#/menu")
  }, "Ver cardápio"), React.createElement(B, {
    variant: "blood",
    size: "lg",
    onClick: () => cta("Pedir delivery", "#/delivery")
  }, "Pedir delivery")))), React.createElement("div", {
    className: "kz-hero-strip"
  }, React.createElement("span", null, "★ ★ ★ ★ ★"), React.createElement("span", null, "Reservas e delivery"), React.createElement("span", null, "Centro · Cotia"), React.createElement("span", null, RES.telefone))), React.createElement("section", {
    className: "kz-section kz-mission"
  }, React.createElement("div", {
    className: "kz-mission-grid"
  }, React.createElement("div", null, React.createElement(Ey, {
    rule: "left"
  }, "Nossa essência"), React.createElement("h2", {
    className: "kz-h2"
  }, "Nossa Missão"), React.createElement("p", {
    className: "kz-lead"
  }, "Servir alta gastronomia com a disciplina e a honra de um samurai — do primeiro corte ao último brinde."), React.createElement("p", {
    className: "kz-body"
  }, "No ZEN SUSHI, cada prato é uma lâmina afiada: precisão na técnica, respeito ao ingrediente e uma apresentação que impõe presença. Acreditamos que comer bem em Cotia não deveria exigir uma viagem à capital — por isso trouxemos cortes nobres, frutos do mar e uma confeitaria artesanal para o coração da cidade."), React.createElement("div", {
    className: "kz-mission-actions"
  }, React.createElement(B, {
    variant: "ghost",
    iconRight: "→",
    onClick: () => cta("Conheça o cardápio", "#/menu")
  }, "Conheça o cardápio"))), React.createElement("div", {
    className: "kz-mission-figure"
  }, React.createElement("img", {
    className: "kz-mission-slot",
    id: "missao-foto",
    src: PHOTOS.missao.src,
    width: PHOTOS.missao.w,
    height: PHOTOS.missao.h,
    alt: PHOTOS.missao.alt,
    title: PHOTOS.missao.alt,
    loading: "lazy",
    decoding: "async"
  })))), React.createElement("section", {
    className: "kz-section kz-diff"
  }, React.createElement("div", {
    className: "kz-section-head"
  }, React.createElement(Ey, {
    rule: "both"
  }, "O que nos torna únicos"), React.createElement("h2", {
    className: "kz-h2 kz-center"
  }, "Diferenciais da casa")), React.createElement("div", {
    className: "kz-diff-grid"
  }, diferenciais.map(d => React.createElement(Cd, {
    key: d.t,
    pattern: true,
    className: "kz-diff-card"
  }, React.createElement("h3", {
    className: "kz-h3"
  }, d.t), React.createElement("p", {
    className: "kz-body"
  }, d.d))))), React.createElement("section", {
    className: "kz-section kz-featured"
  }, React.createElement("div", {
    className: "kz-section-head"
  }, React.createElement(Ey, {
    rule: "both",
    color: "blood"
  }, "Mais pedidos"), React.createElement("h2", {
    className: "kz-h2 kz-center"
  }, "Destaques do chef")), React.createElement("div", {
    className: "kz-featured-grid"
  }, MENU.find(s => s.id === "principais").itens.filter(i => i.destaque).map((it, fi) => React.createElement("article", {
    key: it.nome,
    className: "kz-feat-card"
  }, React.createElement("img", {
    className: "kz-feat-slot",
    id: "destaque-" + fi,
    src: PHOTOS.destaques[fi].src,
    width: PHOTOS.destaques[fi].w,
    height: PHOTOS.destaques[fi].h,
    alt: it.nome + " — prato em destaque do ZEN SUSHI, restaurante em Cotia",
    title: it.nome,
    loading: "lazy",
    decoding: "async"
  }), React.createElement("div", {
    className: "kz-feat-body"
  }, React.createElement("h3", {
    className: "kz-h3"
  }, it.nome), React.createElement("p", {
    className: "kz-body"
  }, it.desc), React.createElement(PriceTag, {
    price: it.preco,
    size: "sm"
  }))))), React.createElement("div", {
    className: "kz-center",
    style: {
      marginTop: "var(--space-7)"
    }
  }, React.createElement(B, {
    variant: "gold",
    size: "lg",
    iconRight: "→",
    onClick: () => cta("Ver cardápio completo", "#/menu")
  }, "Ver cardápio completo"))), React.createElement("section", {
    className: "kz-section kz-cta-band"
  }, React.createElement("h2", {
    className: "kz-h2 kz-center"
  }, "Pronto para uma experiência inesquecível?"), React.createElement("p", {
    className: "kz-lead kz-center"
  }, "Reserve sua mesa ou peça em casa pelos principais aplicativos de delivery de Cotia."), React.createElement("div", {
    className: "kz-hero-actions kz-center-flex"
  }, React.createElement(B, {
    variant: "gold",
    size: "lg",
    iconRight: "→",
    onClick: () => cta("Reservar agora", "#/reservas")
  }, "Reservar agora"), React.createElement(B, {
    variant: "blood",
    size: "lg",
    onClick: () => cta("Peça delivery", "#/delivery")
  }, "Peça delivery"))));
}
function DietIcons({
  tags
}) {
  const T = window.KZ_DATA.TAGS;
  const map = {
    [T.VEGANO]: {
      ab: "VG",
      cls: "is-vegan",
      title: "Vegano"
    },
    [T.VEGETARIANO]: {
      ab: "V",
      cls: "is-veg",
      title: "Vegetariano"
    },
    [T.SEMGLUTEN]: {
      ab: "GF",
      cls: "is-gf",
      title: "Sem Glúten"
    },
    [T.PICANTE]: {
      ab: "🌶",
      cls: "is-spicy",
      title: "Picante"
    }
  };
  const shown = (tags || []).filter(t => map[t]);
  if (!shown.length) return null;
  return React.createElement("span", {
    className: "kz-diet",
    "aria-label": "Dieta: " + shown.map(t => map[t].title).join(", ")
  }, shown.map(t => React.createElement("span", {
    key: t,
    className: "kz-diet-dot " + map[t].cls,
    title: map[t].title
  }, map[t].ab)));
}
function MenuPage() {
  const [active, setActive] = React.useState(MENU[0].id);
  const [expanded, setExpanded] = React.useState(null);
  const lockUntil = React.useRef(0);
  const goCat = id => {
    setActive(id);
    lockUntil.current = Date.now() + 900;
    const sec = MENU.find(s => s.id === id);
    seo.track("menu_category_view", {
      categoria: sec.nome
    });
    const el = document.getElementById("cat-" + id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      if (window.__smooth) window.__smooth.to(top);else window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };
  React.useEffect(() => {
    const onScroll = () => {
      if (Date.now() < lockUntil.current) return;
      const line = 160;
      let current = MENU[0].id;
      for (const sec of MENU) {
        const el = document.getElementById("cat-" + sec.id);
        if (el && el.getBoundingClientRect().top - line <= 0) current = sec.id;
      }
      setActive(prev => prev === current ? prev : current);
      const btn = document.querySelector('.kz-catnav-btn[data-cat="' + current + '"]');
      const nav = document.querySelector(".kz-catnav");
      if (btn && nav && nav.scrollWidth > nav.clientWidth) {
        const target = btn.offsetLeft - nav.clientWidth / 2 + btn.offsetWidth / 2;
        nav.scrollTo({
          left: target,
          behavior: "smooth"
        });
      }
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    if (window.lenis) window.lenis.on("scroll", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (window.lenis && window.lenis.off) window.lenis.off("scroll", onScroll);
    };
  }, []);
  const toggleItem = (key, nome) => {
    setExpanded(e => {
      const next = e === key ? null : key;
      if (next) seo.track("item_details_expand", {
        prato: nome
      });
      return next;
    });
  };
  return React.createElement("div", null, React.createElement(PageHero, {
    eyebrow: "Cardápio",
    title: "Cardápio Completo",
    subtitle: "Entradas, pratos principais, sobremesas artesanais e uma carta de bebidas selecionada. Sabores que fazem do ZEN SUSHI o melhor jantar em Cotia."
  }), React.createElement("div", {
    className: "kz-catnav-wrap"
  }, React.createElement("nav", {
    className: "kz-catnav",
    "aria-label": "Categorias do cardápio"
  }, MENU.map(s => React.createElement("button", {
    key: s.id,
    "data-cat": s.id,
    className: "kz-catnav-btn" + (active === s.id ? " is-active" : ""),
    onClick: () => goCat(s.id)
  }, s.nome, " ", React.createElement("span", {
    className: "kz-catnav-count"
  }, s.itens.length))))), React.createElement("div", {
    className: "kz-diet-legend"
  }, React.createElement("span", {
    className: "kz-diet-legend-item"
  }, React.createElement("span", {
    className: "kz-diet-dot is-veg"
  }, "V"), " Vegetariano"), React.createElement("span", {
    className: "kz-diet-legend-item"
  }, React.createElement("span", {
    className: "kz-diet-dot is-vegan"
  }, "VG"), " Vegano"), React.createElement("span", {
    className: "kz-diet-legend-item"
  }, React.createElement("span", {
    className: "kz-diet-dot is-gf"
  }, "GF"), " Sem Glúten"), React.createElement("span", {
    className: "kz-diet-legend-item"
  }, React.createElement("span", {
    className: "kz-diet-dot is-spicy"
  }, "🌶"), " Picante")), React.createElement("div", {
    className: "kz-section kz-menu-body"
  }, MENU.map(sec => React.createElement("section", {
    key: sec.id,
    id: "cat-" + sec.id,
    className: "kz-menu-cat"
  }, React.createElement("div", {
    className: "kz-menu-cat-head"
  }, React.createElement(Ey, {
    rule: "left",
    color: "gold"
  }, sec.kw), React.createElement("h2", {
    className: "kz-h2"
  }, sec.nome), React.createElement(KD, {
    style: {
      marginTop: "var(--space-4)"
    }
  })), React.createElement("ul", {
    className: "kz-menu-list"
  }, sec.itens.map((it, idx) => {
    const key = sec.id + "-" + idx;
    const isOpen = expanded === key;
    return React.createElement("li", {
      key: key,
      className: "kz-menu-item" + (isOpen ? " is-open" : "")
    }, React.createElement("button", {
      className: "kz-menu-item-row",
      onClick: () => toggleItem(key, it.nome),
      "aria-expanded": isOpen
    }, React.createElement("span", {
      className: "kz-menu-item-main"
    }, React.createElement("span", {
      className: "kz-menu-item-titlerow"
    }, React.createElement("h3", {
      className: "kz-h3 kz-menu-item-name"
    }, it.nome), React.createElement(DietIcons, {
      tags: it.tags
    }), it.destaque && React.createElement(Bd, {
      variant: "blood"
    }, "Mais pedido")), React.createElement("p", {
      className: "kz-menu-item-desc"
    }, it.desc)), React.createElement("span", {
      className: "kz-menu-item-aside"
    }, React.createElement("span", {
      className: "kz-menu-price"
    }, React.createElement("i", null, "R$"), it.preco), React.createElement("span", {
      className: "kz-menu-toggle",
      "aria-hidden": "true"
    }, isOpen ? "−" : "+"))), isOpen && React.createElement("div", {
      className: "kz-menu-item-extra"
    }, React.createElement("h4", {
      className: "kz-h4"
    }, "Informações dietéticas"), React.createElement("div", {
      className: "kz-tags"
    }, (it.tags || []).map(t => React.createElement(Bd, {
      key: t,
      variant: t.indexOf("Sem") === 0 || t === "Vegano" || t === "Vegetariano" ? "gold" : t === "Picante" ? "blood" : "ghost"
    }, t)), (!it.tags || !it.tags.length) && React.createElement("span", {
      className: "kz-body"
    }, "Consulte nossa equipe sobre restrições alimentares."))));
  }))))));
}
function ReservasPage() {
  const [form, setForm] = React.useState({
    nome: "",
    telefone: "",
    data: "",
    hora: "19:30",
    pessoas: "2",
    obs: ""
  });
  const [started, setStarted] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const onFocusOnce = () => {
    if (!started) {
      setStarted(true);
      seo.track("form_start", {
        form: "reserva"
      });
    }
  };
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const validate = () => {
    const er = {};
    if (form.nome.trim().length < 2) er.nome = "Informe seu nome.";
    if (form.telefone.replace(/\D/g, "").length < 10) er.telefone = "Telefone inválido.";
    if (!form.data) er.data = "Escolha uma data.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };
  const buildMsg = () => encodeURIComponent(`Olá! Gostaria de reservar uma mesa no ZEN SUSHI.\n\n` + `Nome: ${form.nome || "—"}\n` + `Data: ${form.data || "—"} às ${form.hora}\n` + `Pessoas: ${form.pessoas}` + (form.obs ? `\nObservações: ${form.obs}` : ""));
  const openWhatsApp = origem => {
    seo.track("whatsapp_api_click", {
      origem
    });
    window.open(`https://wa.me/${RES.whatsapp}?text=${buildMsg()}`, "_blank", "noopener");
  };
  const submit = e => {
    e.preventDefault();
    if (!validate()) return;
    seo.track("form_success", {
      form: "reserva",
      pessoas: form.pessoas
    });
    setDone(true);
    openWhatsApp("confirmar_reserva");
  };
  const whatsapp = () => openWhatsApp("botao_whatsapp");
  const regras = ["Tolerância de 15 minutos após o horário reservado.", "Mesas para mais de 8 pessoas mediante consulta.", "Reservas para o mesmo dia somente por WhatsApp.", "Pets são bem-vindos na área externa."];
  const horarios = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
  return React.createElement("div", null, React.createElement(PageHero, {
    eyebrow: "Reservas",
    title: "Reserva de Mesa",
    subtitle: "Garanta seu lugar no ZEN SUSHI. Preencha o formulário ou fale direto com a casa pelo WhatsApp."
  }), React.createElement("div", {
    className: "kz-section kz-reservas-grid"
  }, React.createElement("div", {
    className: "kz-reservas-form-col"
  }, React.createElement("h2", {
    className: "kz-h2"
  }, "Como Reservar"), React.createElement("p", {
    className: "kz-body"
  }, "Escolha a data, o horário e o número de pessoas. Confirmamos sua reserva em poucos minutos no horário de atendimento."), done ? React.createElement(Cd, {
    pattern: true,
    className: "kz-reserva-success"
  }, React.createElement(PromoSeal, {
    value: "OK",
    caption: "Confirmado",
    size: 110,
    rotate: -6,
    variant: "gold",
    style: {
      marginBottom: "var(--space-4)"
    }
  }), React.createElement("h3", {
    className: "kz-h3"
  }, "Reserva enviada, ", form.nome.split(" ")[0], "!"), React.createElement("p", {
    className: "kz-body"
  }, "Abrimos o ", React.createElement("strong", null, "WhatsApp"), " com os dados da sua reserva — é só enviar a mensagem para confirmarmos. Para ", form.pessoas, " pessoa(s) em ", form.data, " às ", form.hora, "."), React.createElement(B, {
    variant: "blood",
    iconRight: "→",
    onClick: whatsapp,
    style: {
      marginTop: "var(--space-4)"
    }
  }, "Abrir WhatsApp novamente")) : React.createElement("form", {
    className: "kz-form",
    onSubmit: submit,
    noValidate: true
  }, React.createElement("div", {
    className: "kz-field"
  }, React.createElement("label", {
    htmlFor: "r-nome"
  }, "Nome completo"), React.createElement("input", {
    id: "r-nome",
    value: form.nome,
    onChange: set("nome"),
    onFocus: onFocusOnce,
    placeholder: "Seu nome"
  }), errors.nome && React.createElement("span", {
    className: "kz-err"
  }, errors.nome)), React.createElement("div", {
    className: "kz-field"
  }, React.createElement("label", {
    htmlFor: "r-tel"
  }, "Telefone / WhatsApp"), React.createElement("input", {
    id: "r-tel",
    value: form.telefone,
    onChange: set("telefone"),
    onFocus: onFocusOnce,
    placeholder: "(11) 90000-0000",
    inputMode: "tel"
  }), errors.telefone && React.createElement("span", {
    className: "kz-err"
  }, errors.telefone)), React.createElement("div", {
    className: "kz-field-row"
  }, React.createElement("div", {
    className: "kz-field"
  }, React.createElement("label", {
    htmlFor: "r-data"
  }, "Data"), React.createElement("input", {
    id: "r-data",
    type: "date",
    value: form.data,
    onChange: set("data"),
    onFocus: onFocusOnce
  }), errors.data && React.createElement("span", {
    className: "kz-err"
  }, errors.data)), React.createElement("div", {
    className: "kz-field"
  }, React.createElement("label", {
    htmlFor: "r-pessoas"
  }, "Pessoas"), React.createElement("select", {
    id: "r-pessoas",
    value: form.pessoas,
    onChange: set("pessoas"),
    onFocus: onFocusOnce
  }, [1, 2, 3, 4, 5, 6, 7, 8].map(n => React.createElement("option", {
    key: n,
    value: n
  }, n))))), React.createElement("div", {
    className: "kz-field"
  }, React.createElement("h3", {
    className: "kz-h3 kz-field-h"
  }, "Horários disponíveis"), React.createElement("div", {
    className: "kz-slots"
  }, horarios.map(h => React.createElement("button", {
    type: "button",
    key: h,
    className: "kz-slot" + (form.hora === h ? " is-active" : ""),
    onClick: () => setForm(f => ({
      ...f,
      hora: h
    }))
  }, h)))), React.createElement("div", {
    className: "kz-field"
  }, React.createElement("label", {
    htmlFor: "r-obs"
  }, "Observações (opcional)"), React.createElement("textarea", {
    id: "r-obs",
    rows: "2",
    value: form.obs,
    onChange: set("obs"),
    onFocus: onFocusOnce,
    placeholder: "Aniversário, restrições alimentares, cadeira de bebê..."
  })), React.createElement("div", {
    className: "kz-form-actions"
  }, React.createElement(B, {
    variant: "gold",
    size: "lg",
    iconRight: "→",
    type: "submit"
  }, "Confirmar reserva no WhatsApp"), React.createElement(B, {
    variant: "ghost",
    size: "lg",
    type: "button",
    onClick: whatsapp
  }, "Reservar pelo WhatsApp")))), React.createElement("aside", {
    className: "kz-reservas-aside"
  }, React.createElement(Cd, {
    pattern: true
  }, React.createElement("h3", {
    className: "kz-h3"
  }, "Regras de Reserva"), React.createElement("ul", {
    className: "kz-rules"
  }, regras.map(r => React.createElement("li", {
    key: r
  }, r)))), React.createElement(Cd, null, React.createElement("h3", {
    className: "kz-h3"
  }, "Horários de funcionamento"), React.createElement("ul", {
    className: "kz-hours kz-hours-dark"
  }, RES.horarios.map(h => React.createElement("li", {
    key: h.dias
  }, React.createElement("span", null, h.dias), React.createElement("span", {
    className: "kz-hours-time"
  }, h.abre, "–", h.fecha)))), React.createElement(KD, {
    style: {
      margin: "var(--space-4) 0"
    }
  }), React.createElement("p", {
    className: "kz-body"
  }, "Prefere falar com a gente? ", React.createElement("a", {
    className: "kz-inline-link",
    href: "tel:" + RES.telefoneE164
  }, RES.telefone))))));
}
function DeliveryLogo({
  id
}) {
  switch (id) {
    case "ifood":
      return React.createElement("svg", {
        viewBox: "0 0 200 80",
        className: "kz-deliv-svg",
        role: "img",
        "aria-label": "iFood"
      }, React.createElement("rect", {
        width: "200",
        height: "80",
        rx: "16",
        fill: "#EA1D2C"
      }), React.createElement("text", {
        x: "100",
        y: "52",
        textAnchor: "middle",
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        fontSize: "38",
        fontWeight: "700",
        fill: "#FFFFFF",
        letterSpacing: "-1"
      }, React.createElement("tspan", {
        fontStyle: "italic"
      }, "i"), "Food"), React.createElement("circle", {
        cx: "71",
        cy: "24",
        r: "4.4",
        fill: "#FFFFFF"
      }));
    case "99food":
      return React.createElement("svg", {
        viewBox: "0 0 200 80",
        className: "kz-deliv-svg",
        role: "img",
        "aria-label": "99Food"
      }, React.createElement("rect", {
        width: "200",
        height: "80",
        rx: "16",
        fill: "#FFD400"
      }), React.createElement("text", {
        x: "100",
        y: "53",
        textAnchor: "middle",
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        fontSize: "40",
        fontWeight: "800",
        fill: "#1A1A1A",
        letterSpacing: "-1.5"
      }, "99", React.createElement("tspan", {
        fontWeight: "600"
      }, "Food")));
    case "keeta":
      return React.createElement("svg", {
        viewBox: "0 0 200 80",
        className: "kz-deliv-svg",
        role: "img",
        "aria-label": "Keeta"
      }, React.createElement("rect", {
        width: "200",
        height: "80",
        rx: "16",
        fill: "#FFB300"
      }), React.createElement("circle", {
        cx: "42",
        cy: "40",
        r: "19",
        fill: "#1A1A1A"
      }), React.createElement("path", {
        d: "M35 33 q4 -6 9 -2 q-3 2 -2 6 q3 -1 5 1 q-5 5 -10 2 q-4 -3 -2 -7z",
        fill: "#FFB300"
      }), React.createElement("circle", {
        cx: "40",
        cy: "35",
        r: "2",
        fill: "#FFB300"
      }), React.createElement("text", {
        x: "118",
        y: "53",
        textAnchor: "middle",
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        fontSize: "36",
        fontWeight: "800",
        fill: "#1A1A1A",
        letterSpacing: "-1"
      }, "Keeta"));
    case "rappi":
      return React.createElement("svg", {
        viewBox: "0 0 200 80",
        className: "kz-deliv-svg",
        role: "img",
        "aria-label": "Rappi"
      }, React.createElement("rect", {
        width: "200",
        height: "80",
        rx: "16",
        fill: "#FF441F"
      }), React.createElement("text", {
        x: "100",
        y: "52",
        textAnchor: "middle",
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        fontSize: "38",
        fontWeight: "800",
        fill: "#FFFFFF",
        letterSpacing: "-1"
      }, "Rappi"), React.createElement("circle", {
        cx: "135",
        cy: "22",
        r: "3.4",
        fill: "#FFFFFF"
      }), React.createElement("circle", {
        cx: "149",
        cy: "22",
        r: "3.4",
        fill: "#FFFFFF"
      }));
    default:
      return null;
  }
}
function DeliveryPage() {
  const click = d => {
    seo.track("delivery_platform_click", {
      plataforma: d.nome,
      plataforma_id: d.id
    });
    window.open(d.url, "_blank", "noopener");
  };
  const dicas = ["Confira o tempo estimado antes de confirmar — pratos quentes saem na hora.", "Peça as sobremesas junto: elas viajam bem e chegam frescas.", "Use cupons de primeira compra das plataformas para economizar.", "Em pedidos grandes, ligue para a casa e combine o melhor horário."];
  return React.createElement("div", null, React.createElement(PageHero, {
    eyebrow: "Delivery em Cotia",
    title: "Peça Delivery",
    subtitle: "A alta gastronomia do ZEN SUSHI na sua casa. Escolha sua plataforma favorita e receba em toda a região de Cotia."
  }), React.createElement("div", {
    className: "kz-section"
  }, React.createElement("div", {
    className: "kz-section-head"
  }, React.createElement(Ey, {
    rule: "both"
  }, "Onde pedir"), React.createElement("h2", {
    className: "kz-h2 kz-center"
  }, "Plataformas")), React.createElement("div", {
    className: "kz-delivery-grid"
  }, RES.delivery.map(d => React.createElement("article", {
    key: d.id,
    className: "kz-delivery-card"
  }, React.createElement("div", {
    className: "kz-delivery-logo"
  }, React.createElement(DeliveryLogo, {
    id: d.id
  })), React.createElement("h3", {
    className: "kz-h3"
  }, d.nome), React.createElement("p", {
    className: "kz-body"
  }, d.desc), React.createElement(B, {
    variant: "blood",
    fullWidth: true,
    iconRight: "→",
    onClick: () => click(d)
  }, "Pedir no ", d.nome)))), React.createElement("div", {
    className: "kz-delivery-tips"
  }, React.createElement("h4", {
    className: "kz-h4"
  }, "Dicas para um pedido perfeito"), React.createElement("ul", {
    className: "kz-tips-list"
  }, dicas.map(t => React.createElement("li", {
    key: t
  }, t))))));
}
Object.assign(window, {
  HomePage,
  MenuPage,
  ReservasPage,
  DeliveryPage
});