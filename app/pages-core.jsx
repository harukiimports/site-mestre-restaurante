/* ZEN SUSHI — core pages: Home, Menu, Reservas, Delivery. */
const { Button: B, Badge: Bd, Card: Cd, Eyebrow: Ey, KatanaDivider: KD, PriceTag, PromoSeal } = window.KAZUKIDesignSystem_63706c;
const RES = window.KZ_DATA.RESTAURANT;
const MENU = window.KZ_DATA.MENU;
const seo = window.KZ_SEO;

/* Default Japanese-food photos — drag & drop your own over any slot to replace. */
const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
  missao: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  destaques: [
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1000&q=80",
    "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1000&q=80",
    "https://images.unsplash.com/photo-1558030006-450675393462?w=1000&q=80",
  ],
};

/* ============ HOME ============ */
function HomePage() {
  React.useEffect(() => { seo.track("home_view", { page: "home" }); }, []);
  const cta = (label, hash) => { seo.track("cta_click", { label, destino: hash }); location.hash = hash; };

  const diferenciais = [
    { t: "Cortes nobres", d: "Picanha, bife ancho e filé mignon selecionados, finalizados na brasa." },
    { t: "Risotos artesanais", d: "Arroz arbóreo no ponto all'onda, do camarão ao porcini com trufas." },
    { t: "Carta de vinhos", d: "Seleção do sommelier para harmonizar cada prato da casa." },
    { t: "Ambiente premium", d: "A elegância do aço samurai traduzida em uma mesa contemporânea." },
  ];

  return (
    <div>
      <section className="kz-hero">
        <div className="kz-hero-bg-wrap">
          <image-slot class="kz-hero-slot" id="hero-foto" shape="rect" src={PHOTOS.hero} placeholder="Arraste uma foto do restaurante ou prato"></image-slot>
        </div>
        <div className="kz-hero-overlay" aria-hidden="true" />
        <div className="kz-hero-inner">
          <div className="kz-hero-content">
            <Ey rule="left" color="gold">Alta gastronomia · {RES.cidade} - {RES.estado}</Ey>
            <p className="kz-hero-greeting">Seja bem-vindo ao <strong>ZEN SUSHI</strong></p>
            <h1 className="kz-hero-title">Restaurante<br /><span>em Cotia</span></h1>
            <p className="kz-hero-sub">{RES.descricao}</p>
            <div className="kz-hero-actions">
              <B variant="gold" size="lg" iconRight="→" onClick={() => cta("Reservar mesa", "#/reservas")}>Reservar mesa</B>
              <B variant="outline" size="lg" onClick={() => cta("Ver cardápio", "#/menu")}>Ver cardápio</B>
              <B variant="blood" size="lg" onClick={() => cta("Pedir delivery", "#/delivery")}>Pedir delivery</B>
            </div>
          </div>
        </div>
        <div className="kz-hero-strip">
          <span>★ ★ ★ ★ ★</span><span>Reservas e delivery</span><span>Centro · Cotia</span><span>{RES.telefone}</span>
        </div>
      </section>

      <section className="kz-section kz-mission">
        <div className="kz-mission-grid">
          <div>
            <Ey rule="left">Nossa essência</Ey>
            <h2 className="kz-h2">Nossa Missão</h2>
            <p className="kz-lead">Servir alta gastronomia com a disciplina e a honra de um samurai — do primeiro corte ao último brinde.</p>
            <p className="kz-body">No ZEN SUSHI, cada prato é uma lâmina afiada: precisão na técnica, respeito ao ingrediente e uma apresentação que impõe presença. Acreditamos que comer bem em Cotia não deveria exigir uma viagem à capital — por isso trouxemos cortes nobres, frutos do mar e uma confeitaria artesanal para o coração da cidade.</p>
            <div className="kz-mission-actions">
              <B variant="ghost" iconRight="→" onClick={() => cta("Conheça o cardápio", "#/menu")}>Conheça o cardápio</B>
            </div>
          </div>
          <div className="kz-mission-figure">
            <image-slot class="kz-mission-slot" id="missao-foto" shape="rounded" radius="8" src={PHOTOS.missao} placeholder="Arraste uma foto de comida japonesa"></image-slot>
          </div>
        </div>
      </section>

      <section className="kz-section kz-diff">
        <div className="kz-section-head">
          <Ey rule="both">O que nos torna únicos</Ey>
          <h2 className="kz-h2 kz-center">Diferenciais da casa</h2>
        </div>
        <div className="kz-diff-grid">
          {diferenciais.map((d) => (
            <Cd key={d.t} pattern className="kz-diff-card">
              <h3 className="kz-h3">{d.t}</h3>
              <p className="kz-body">{d.d}</p>
            </Cd>
          ))}
        </div>
      </section>

      <section className="kz-section kz-featured">
        <div className="kz-section-head">
          <Ey rule="both" color="blood">Mais pedidos</Ey>
          <h2 className="kz-h2 kz-center">Destaques do chef</h2>
        </div>
        <div className="kz-featured-grid">
          {MENU.find((s) => s.id === "principais").itens.filter((i) => i.destaque).map((it, fi) => (
            <article key={it.nome} className="kz-feat-card">
              <image-slot class="kz-feat-slot" id={"destaque-" + fi} shape="rect" src={PHOTOS.destaques[fi]} placeholder="Arraste a foto do prato"></image-slot>
              <div className="kz-feat-body">
                <h3 className="kz-h3">{it.nome}</h3>
                <p className="kz-body">{it.desc}</p>
                <PriceTag price={it.preco} size="sm" />
              </div>
            </article>
          ))}
        </div>
        <div className="kz-center" style={{ marginTop: "var(--space-7)" }}>
          <B variant="gold" size="lg" iconRight="→" onClick={() => cta("Ver cardápio completo", "#/menu")}>Ver cardápio completo</B>
        </div>
      </section>

      <section className="kz-section kz-cta-band">
        <h2 className="kz-h2 kz-center">Pronto para uma experiência inesquecível?</h2>
        <p className="kz-lead kz-center">Reserve sua mesa ou peça em casa pelos principais aplicativos de delivery de Cotia.</p>
        <div className="kz-hero-actions kz-center-flex">
          <B variant="gold" size="lg" iconRight="→" onClick={() => cta("Reservar agora", "#/reservas")}>Reservar agora</B>
          <B variant="blood" size="lg" onClick={() => cta("Peça delivery", "#/delivery")}>Peça delivery</B>
        </div>
      </section>
    </div>
  );
}

/* Pequenos selos de dieta exibidos direto no nome do prato. */
function DietIcons({ tags }) {
  const T = window.KZ_DATA.TAGS;
  const map = {
    [T.VEGANO]: { ab: "VG", cls: "is-vegan", title: "Vegano" },
    [T.VEGETARIANO]: { ab: "V", cls: "is-veg", title: "Vegetariano" },
    [T.SEMGLUTEN]: { ab: "GF", cls: "is-gf", title: "Sem Glúten" },
    [T.PICANTE]: { ab: "🌶", cls: "is-spicy", title: "Picante" },
  };
  const shown = (tags || []).filter((t) => map[t]);
  if (!shown.length) return null;
  return (
    <span className="kz-diet" aria-label={"Dieta: " + shown.map((t) => map[t].title).join(", ")}>
      {shown.map((t) => (
        <span key={t} className={"kz-diet-dot " + map[t].cls} title={map[t].title}>{map[t].ab}</span>
      ))}
    </span>
  );
}

/* ============ MENU ============ */
function MenuPage() {
  const [active, setActive] = React.useState(MENU[0].id);
  const [expanded, setExpanded] = React.useState(null);
  const lockUntil = React.useRef(0); // ignora scroll-spy logo após um clique

  const goCat = (id) => {
    setActive(id);
    lockUntil.current = Date.now() + 900; // trava o spy durante a rolagem suave
    const sec = MENU.find((s) => s.id === id);
    seo.track("menu_category_view", { categoria: sec.nome });
    const el = document.getElementById("cat-" + id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      if (window.__smooth) window.__smooth.to(top);
      else window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Scroll spy: ativa a categoria conforme a seção entra na área de leitura.
  React.useEffect(() => {
    const onScroll = () => {
      if (Date.now() < lockUntil.current) return;
      const line = 160; // linha de referência abaixo da navbar
      let current = MENU[0].id;
      for (const sec of MENU) {
        const el = document.getElementById("cat-" + sec.id);
        if (el && el.getBoundingClientRect().top - line <= 0) current = sec.id;
      }
      setActive((prev) => (prev === current ? prev : current));
      // mantém o chip ativo visível na barra rolável (mobile)
      const btn = document.querySelector('.kz-catnav-btn[data-cat="' + current + '"]');
      const nav = document.querySelector(".kz-catnav");
      if (btn && nav && nav.scrollWidth > nav.clientWidth) {
        const target = btn.offsetLeft - nav.clientWidth / 2 + btn.offsetWidth / 2;
        nav.scrollTo({ left: target, behavior: "smooth" });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    if (window.lenis) window.lenis.on("scroll", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (window.lenis && window.lenis.off) window.lenis.off("scroll", onScroll);
    };
  }, []);

  const toggleItem = (key, nome) => {
    setExpanded((e) => {
      const next = e === key ? null : key;
      if (next) seo.track("item_details_expand", { prato: nome });
      return next;
    });
  };

  return (
    <div>
      <PageHero eyebrow="Cardápio" title="Cardápio Completo" subtitle="Entradas, pratos principais, sobremesas artesanais e uma carta de bebidas selecionada. Sabores que fazem do ZEN SUSHI o melhor jantar em Cotia." />
      <div className="kz-catnav-wrap">
        <nav className="kz-catnav" aria-label="Categorias do cardápio">
          {MENU.map((s) => (
            <button key={s.id} data-cat={s.id} className={"kz-catnav-btn" + (active === s.id ? " is-active" : "")} onClick={() => goCat(s.id)}>
              {s.nome} <span className="kz-catnav-count">{s.itens.length}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="kz-diet-legend">
        <span className="kz-diet-legend-item"><span className="kz-diet-dot is-veg">V</span> Vegetariano</span>
        <span className="kz-diet-legend-item"><span className="kz-diet-dot is-vegan">VG</span> Vegano</span>
        <span className="kz-diet-legend-item"><span className="kz-diet-dot is-gf">GF</span> Sem Glúten</span>
        <span className="kz-diet-legend-item"><span className="kz-diet-dot is-spicy">🌶</span> Picante</span>
      </div>

      <div className="kz-section kz-menu-body">
        {MENU.map((sec) => (
          <section key={sec.id} id={"cat-" + sec.id} className="kz-menu-cat">
            <div className="kz-menu-cat-head">
              <Ey rule="left" color="gold">{sec.kw}</Ey>
              <h2 className="kz-h2">{sec.nome}</h2>
              <KD style={{ marginTop: "var(--space-4)" }} />
            </div>
            <ul className="kz-menu-list">
              {sec.itens.map((it, idx) => {
                const key = sec.id + "-" + idx;
                const isOpen = expanded === key;
                return (
                  <li key={key} className={"kz-menu-item" + (isOpen ? " is-open" : "")}>
                    <button className="kz-menu-item-row" onClick={() => toggleItem(key, it.nome)} aria-expanded={isOpen}>
                      <span className="kz-menu-item-main">
                        <span className="kz-menu-item-titlerow">
                          <h3 className="kz-h3 kz-menu-item-name">{it.nome}</h3>
                          <DietIcons tags={it.tags} />
                          {it.destaque && <Bd variant="blood">Mais pedido</Bd>}
                        </span>
                        <p className="kz-menu-item-desc">{it.desc}</p>
                      </span>
                      <span className="kz-menu-item-aside">
                        <span className="kz-menu-price"><i>R$</i>{it.preco}</span>
                        <span className="kz-menu-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="kz-menu-item-extra">
                        <h4 className="kz-h4">Informações dietéticas</h4>
                        <div className="kz-tags">
                          {(it.tags || []).map((t) => (
                            <Bd key={t} variant={t.indexOf("Sem") === 0 || t === "Vegano" || t === "Vegetariano" ? "gold" : t === "Picante" ? "blood" : "ghost"}>{t}</Bd>
                          ))}
                          {(!it.tags || !it.tags.length) && <span className="kz-body">Consulte nossa equipe sobre restrições alimentares.</span>}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ============ RESERVAS ============ */
function ReservasPage() {
  const [form, setForm] = React.useState({ nome: "", telefone: "", data: "", hora: "19:30", pessoas: "2", obs: "" });
  const [started, setStarted] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const onFocusOnce = () => { if (!started) { setStarted(true); seo.track("form_start", { form: "reserva" }); } };
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (form.nome.trim().length < 2) er.nome = "Informe seu nome.";
    if (form.telefone.replace(/\D/g, "").length < 10) er.telefone = "Telefone inválido.";
    if (!form.data) er.data = "Escolha uma data.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };
  const buildMsg = () => encodeURIComponent(
    `Olá! Gostaria de reservar uma mesa no ZEN SUSHI.\n\n` +
    `Nome: ${form.nome || "—"}\n` +
    `Data: ${form.data || "—"} às ${form.hora}\n` +
    `Pessoas: ${form.pessoas}` +
    (form.obs ? `\nObservações: ${form.obs}` : "")
  );
  const openWhatsApp = (origem) => {
    seo.track("whatsapp_api_click", { origem });
    window.open(`https://wa.me/${RES.whatsapp}?text=${buildMsg()}`, "_blank", "noopener");
  };
  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    seo.track("form_success", { form: "reserva", pessoas: form.pessoas });
    setDone(true);
    openWhatsApp("confirmar_reserva");
  };
  const whatsapp = () => openWhatsApp("botao_whatsapp");

  const regras = [
    "Tolerância de 15 minutos após o horário reservado.",
    "Mesas para mais de 8 pessoas mediante consulta.",
    "Reservas para o mesmo dia somente por WhatsApp.",
    "Pets são bem-vindos na área externa.",
  ];
  const horarios = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

  return (
    <div>
      <PageHero eyebrow="Reservas" title="Reserva de Mesa" subtitle="Garanta seu lugar no ZEN SUSHI. Preencha o formulário ou fale direto com a casa pelo WhatsApp." />
      <div className="kz-section kz-reservas-grid">
        <div className="kz-reservas-form-col">
          <h2 className="kz-h2">Como Reservar</h2>
          <p className="kz-body">Escolha a data, o horário e o número de pessoas. Confirmamos sua reserva em poucos minutos no horário de atendimento.</p>

          {done ? (
            <Cd pattern className="kz-reserva-success">
              <PromoSeal value="OK" caption="Confirmado" size={110} rotate={-6} variant="gold" style={{ marginBottom: "var(--space-4)" }} />
              <h3 className="kz-h3">Reserva enviada, {form.nome.split(" ")[0]}!</h3>
              <p className="kz-body">Abrimos o <strong>WhatsApp</strong> com os dados da sua reserva — é só enviar a mensagem para confirmarmos. Para {form.pessoas} pessoa(s) em {form.data} às {form.hora}.</p>
              <B variant="blood" iconRight="→" onClick={whatsapp} style={{ marginTop: "var(--space-4)" }}>Abrir WhatsApp novamente</B>
            </Cd>
          ) : (
            <form className="kz-form" onSubmit={submit} noValidate>
              <div className="kz-field">
                <label htmlFor="r-nome">Nome completo</label>
                <input id="r-nome" value={form.nome} onChange={set("nome")} onFocus={onFocusOnce} placeholder="Seu nome" />
                {errors.nome && <span className="kz-err">{errors.nome}</span>}
              </div>
              <div className="kz-field">
                <label htmlFor="r-tel">Telefone / WhatsApp</label>
                <input id="r-tel" value={form.telefone} onChange={set("telefone")} onFocus={onFocusOnce} placeholder="(11) 90000-0000" inputMode="tel" />
                {errors.telefone && <span className="kz-err">{errors.telefone}</span>}
              </div>
              <div className="kz-field-row">
                <div className="kz-field">
                  <label htmlFor="r-data">Data</label>
                  <input id="r-data" type="date" value={form.data} onChange={set("data")} onFocus={onFocusOnce} />
                  {errors.data && <span className="kz-err">{errors.data}</span>}
                </div>
                <div className="kz-field">
                  <label htmlFor="r-pessoas">Pessoas</label>
                  <select id="r-pessoas" value={form.pessoas} onChange={set("pessoas")} onFocus={onFocusOnce}>
                    {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
              <div className="kz-field">
                <h3 className="kz-h3 kz-field-h">Horários disponíveis</h3>
                <div className="kz-slots">
                  {horarios.map((h) => (
                    <button type="button" key={h} className={"kz-slot" + (form.hora === h ? " is-active" : "")} onClick={() => setForm((f) => ({ ...f, hora: h }))}>{h}</button>
                  ))}
                </div>
              </div>
              <div className="kz-field">
                <label htmlFor="r-obs">Observações (opcional)</label>
                <textarea id="r-obs" rows="2" value={form.obs} onChange={set("obs")} onFocus={onFocusOnce} placeholder="Aniversário, restrições alimentares, cadeira de bebê..." />
              </div>
              <div className="kz-form-actions">
                <B variant="gold" size="lg" iconRight="→" type="submit">Confirmar reserva no WhatsApp</B>
                <B variant="ghost" size="lg" type="button" onClick={whatsapp}>Reservar pelo WhatsApp</B>
              </div>
            </form>
          )}
        </div>

        <aside className="kz-reservas-aside">
          <Cd pattern>
            <h3 className="kz-h3">Regras de Reserva</h3>
            <ul className="kz-rules">
              {regras.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </Cd>
          <Cd>
            <h3 className="kz-h3">Horários de funcionamento</h3>
            <ul className="kz-hours kz-hours-dark">
              {RES.horarios.map((h) => (<li key={h.dias}><span>{h.dias}</span><span className="kz-hours-time">{h.abre}–{h.fecha}</span></li>))}
            </ul>
            <KD style={{ margin: "var(--space-4) 0" }} />
            <p className="kz-body">Prefere falar com a gente? <a className="kz-inline-link" href={"tel:" + RES.telefoneE164}>{RES.telefone}</a></p>
          </Cd>
        </aside>
      </div>
    </div>
  );
}

/* ============ DELIVERY ============ */
/* Logomarcas oficiais reconstruídas como wordmarks SVG (cores e lockup de cada marca). */
function DeliveryLogo({ id }) {
  switch (id) {
    case "ifood":
      return (
        <svg viewBox="0 0 200 80" className="kz-deliv-svg" role="img" aria-label="iFood">
          <rect width="200" height="80" rx="16" fill="#EA1D2C" />
          <text x="100" y="52" textAnchor="middle" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="38" fontWeight="700" fill="#FFFFFF" letterSpacing="-1">
            <tspan fontStyle="italic">i</tspan>Food
          </text>
          <circle cx="71" cy="24" r="4.4" fill="#FFFFFF" />
        </svg>
      );
    case "99food":
      return (
        <svg viewBox="0 0 200 80" className="kz-deliv-svg" role="img" aria-label="99Food">
          <rect width="200" height="80" rx="16" fill="#FFD400" />
          <text x="100" y="53" textAnchor="middle" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="40" fontWeight="800" fill="#1A1A1A" letterSpacing="-1.5">
            99<tspan fontWeight="600">Food</tspan>
          </text>
        </svg>
      );
    case "keeta":
      return (
        <svg viewBox="0 0 200 80" className="kz-deliv-svg" role="img" aria-label="Keeta">
          <rect width="200" height="80" rx="16" fill="#FFB300" />
          <circle cx="42" cy="40" r="19" fill="#1A1A1A" />
          <path d="M35 33 q4 -6 9 -2 q-3 2 -2 6 q3 -1 5 1 q-5 5 -10 2 q-4 -3 -2 -7z" fill="#FFB300" />
          <circle cx="40" cy="35" r="2" fill="#FFB300" />
          <text x="118" y="53" textAnchor="middle" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="36" fontWeight="800" fill="#1A1A1A" letterSpacing="-1">Keeta</text>
        </svg>
      );
    case "rappi":
      return (
        <svg viewBox="0 0 200 80" className="kz-deliv-svg" role="img" aria-label="Rappi">
          <rect width="200" height="80" rx="16" fill="#FF441F" />
          <text x="100" y="52" textAnchor="middle" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="38" fontWeight="800" fill="#FFFFFF" letterSpacing="-1">Rappi</text>
          <circle cx="135" cy="22" r="3.4" fill="#FFFFFF" />
          <circle cx="149" cy="22" r="3.4" fill="#FFFFFF" />
        </svg>
      );
    default:
      return null;
  }
}

function DeliveryPage() {
  const click = (d) => { seo.track("delivery_platform_click", { plataforma: d.nome, plataforma_id: d.id }); window.open(d.url, "_blank", "noopener"); };
  const dicas = [
    "Confira o tempo estimado antes de confirmar — pratos quentes saem na hora.",
    "Peça as sobremesas junto: elas viajam bem e chegam frescas.",
    "Use cupons de primeira compra das plataformas para economizar.",
    "Em pedidos grandes, ligue para a casa e combine o melhor horário.",
  ];
  return (
    <div>
      <PageHero eyebrow="Delivery em Cotia" title="Peça Delivery" subtitle="A alta gastronomia do ZEN SUSHI na sua casa. Escolha sua plataforma favorita e receba em toda a região de Cotia." />
      <div className="kz-section">
        <div className="kz-section-head">
          <Ey rule="both">Onde pedir</Ey>
          <h2 className="kz-h2 kz-center">Plataformas</h2>
        </div>
        <div className="kz-delivery-grid">
          {RES.delivery.map((d) => (
            <article key={d.id} className="kz-delivery-card">
              <div className="kz-delivery-logo">
                <DeliveryLogo id={d.id} />
              </div>
              <h3 className="kz-h3">{d.nome}</h3>
              <p className="kz-body">{d.desc}</p>
              <B variant="blood" fullWidth iconRight="→" onClick={() => click(d)}>Pedir no {d.nome}</B>
            </article>
          ))}
        </div>

        <div className="kz-delivery-tips">
          <h4 className="kz-h4">Dicas para um pedido perfeito</h4>
          <ul className="kz-tips-list">
            {dicas.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, MenuPage, ReservasPage, DeliveryPage });
