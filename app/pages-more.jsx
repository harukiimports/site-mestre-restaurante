/* ZEN SUSHI — Localização, Blog, BlogPost, Admin. */
const { Button: B2, Badge: Bd2, Card: Cd2, Eyebrow: Ey2, KatanaDivider: KD2, SocialBar: SB2 } = window.KAZUKIDesignSystem_63706c;
const RST = window.KZ_DATA.RESTAURANT;
const BLOGP = window.KZ_DATA.BLOG;
const seo2 = window.KZ_SEO;

/* ============ LOCALIZAÇÃO ============ */
function MapEmbed({ onInteract }) {
  const [failed, setFailed] = React.useState(false);
  // Query limpa para geocodificação precisa (sem "Sala 7"/travessão).
  const cleanQuery = "Av. Antônio Mathias de Camargo, 895, Centro, Cotia - SP, " + RST.cep;
  const query = encodeURIComponent(cleanQuery);
  const embedSrc = "https://www.google.com/maps?q=" + query + "&z=16&hl=pt-BR&output=embed";

  if (failed) {
    return (
      <a className="kz-map kz-map-fallback" href={"https://www.google.com/maps/search/?api=1&query=" + query} target="_blank" rel="noopener" onClick={onInteract} aria-label="Abrir o mapa no Google Maps">
        <div className="kz-map-grid" aria-hidden="true" />
        <div className="kz-map-pin">
          <span className="kz-map-pin-dot" />
          <span className="kz-map-pin-label">ZEN SUSHI</span>
        </div>
        <div className="kz-map-fallback-cta">
          <strong>{RST.rua}</strong>
          <span>{RST.bairro}, {RST.cidade} - {RST.estado}</span>
          <span className="kz-map-fallback-btn">Abrir no Google Maps →</span>
        </div>
      </a>
    );
  }
  return (
    <div className="kz-map" onMouseDown={onInteract}>
      <iframe
        className="kz-map-iframe"
        title="Mapa do ZEN SUSHI Restaurante em Cotia"
        src={embedSrc}
        allowFullScreen
        onError={() => setFailed(true)}
      ></iframe>
    </div>
  );
}

function LocalizacaoPage() {
  const directions = () => {
    seo2.track("directions_click", { destino: "google_maps" });
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${RST.geo.lat},${RST.geo.lng}`, "_blank", "noopener");
  };
  const mapInteract = () => seo2.track("map_interaction", { acao: "abrir_mapa" });

  return (
    <div>
      <PageHero eyebrow="Como Chegar" title="Como chegar ao Restaurante" subtitle="Estamos no Centro de Cotia, fácil de chegar de carro ou transporte público." />
      <div className="kz-section kz-loc-grid">
        <div className="kz-loc-main">
          <h2 className="kz-h2">Mapa</h2>
          <MapEmbed onInteract={mapInteract} />
          <address className="kz-loc-address">
            <strong>{RST.rua}</strong><br />
            {RST.bairro}, {RST.cidade} - {RST.estado}<br />
            CEP {RST.cep}
          </address>
          <div className="kz-loc-actions">
            <B2 variant="gold" iconRight="→" onClick={directions}>Traçar rota</B2>
            <B2 variant="ghost" onClick={() => { seo2.track("directions_click", { destino: "ligar" }); location.href = "tel:" + RST.telefoneE164; }}>Ligar: {RST.telefone}</B2>
          </div>
        </div>

        <aside className="kz-loc-aside">
          <Cd2 pattern>
            <h3 className="kz-h3">Como vir de carro</h3>
            <p className="kz-body">Acesso rápido pela Rodovia Raposo Tavares (SP-270). Saída para o Centro de Cotia, seguindo pela Av. Antônio Mathias de Camargo. A poucos minutos do Shopping Granja Vianna.</p>
          </Cd2>
          <Cd2 pattern>
            <h3 className="kz-h3">Como vir de transporte público</h3>
            <p className="kz-body">Diversas linhas municipais param no Centro de Cotia, a uma curta caminhada do restaurante. Da estação da CPTM, há ônibus e aplicativos de transporte disponíveis.</p>
          </Cd2>
          <Cd2>
            <h4 className="kz-h4">Estacionamento</h4>
            <p className="kz-body">Estacionamento conveniado nas proximidades e vagas na via. Consulte a equipe sobre o serviço de manobrista nos fins de semana.</p>
          </Cd2>
        </aside>
      </div>
    </div>
  );
}

/* ============ BLOG (listagem) ============ */
function BlogPage() {
  return (
    <div>
      <PageHero eyebrow="Blog" title="Histórias da Cozinha" subtitle="Receitas, bastidores, harmonização de vinhos e o melhor da gastronomia em Cotia." />
      <div className="kz-section kz-blog-list">
        {BLOGP.map((p, i) => (
          <article key={p.slug} className={"kz-blog-card" + (i === 0 ? " is-feature" : "")}>
            <a href={"#/blog/" + p.slug} className="kz-blog-card-link" aria-label={p.titulo}>
              <div className="kz-blog-thumb" role="img" aria-label={"Imagem do artigo: " + p.titulo} style={p.img ? { backgroundImage: "linear-gradient(180deg, rgba(10,10,10,0.05), rgba(10,10,10,0.55)), url(" + p.img + ")", backgroundSize: "cover", backgroundPosition: "center" } : undefined}>
                <span className="kz-blog-cat">{p.categoria}</span>
                {!p.img && <span className="kz-blog-glyph">◆</span>}
              </div>
              <div className="kz-blog-card-body">
                <span className="kz-blog-meta">{p.dataLabel} · {p.leitura} de leitura</span>
                <h2 className="kz-h3 kz-blog-card-title">{p.titulo}</h2>
                <p className="kz-body">{p.resumo}</p>
                <span className="kz-blog-readmore">Ler artigo →</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ============ BLOG POST ============ */
function BlogPostPage({ post }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    seo2.track("article_read", { artigo: post.slug });
    let fired = false;
    const onScroll = () => {
      const el = ref.current;
      if (!el || fired) return;
      const total = el.offsetTop + el.offsetHeight - window.innerHeight;
      const pct = total > 0 ? window.scrollY / total : 1;
      if (pct >= 0.75) { fired = true; seo2.track("scroll_depth_75", { artigo: post.slug }); }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [post.slug]);

  const related = BLOGP.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="kz-post" ref={ref}>
      <div className="kz-post-hero">
        <a href="#/blog" className="kz-post-back">← Voltar ao blog</a>
        <Bd2 variant="gold">{post.categoria}</Bd2>
        <h1 className="kz-post-title">{post.titulo}</h1>
        <p className="kz-post-byline">Por {post.autor} · {post.dataLabel} · {post.leitura} de leitura</p>
      </div>
      <div className="kz-post-cover" role="img" aria-label={"Imagem de capa: " + post.titulo} style={post.img ? { backgroundImage: "linear-gradient(180deg, rgba(10,10,10,0.1), rgba(10,10,10,0.5)), url(" + post.img + ")", backgroundSize: "cover", backgroundPosition: "center" } : undefined}>
        {!post.img && <span className="kz-blog-glyph">◆</span>}
      </div>
      <div className="kz-post-body">
        <p className="kz-post-lead">{post.resumo}</p>
        {post.topicos.map((t) => (
          <section key={t.h2}>
            <h2 className="kz-h2 kz-post-h2">{t.h2}</h2>
            <p className="kz-post-p">{t.p}</p>
          </section>
        ))}
        <KD2 style={{ margin: "var(--space-7) 0" }} />
        <h3 className="kz-h3">{post.dicas.h3}</h3>
        <p className="kz-post-p">{post.dicas.p}</p>

        <div className="kz-post-cta">
          <h4 className="kz-h4">{post.cta}</h4>
          <div className="kz-hero-actions">
            <B2 variant="gold" iconRight="→" onClick={() => { seo2.track("cta_click", { label: post.cta, origem: "blog" }); location.hash = "#/reservas"; }}>Reservar mesa</B2>
            <B2 variant="outline" onClick={() => { location.hash = "#/menu"; }}>Ver cardápio</B2>
          </div>
        </div>
      </div>

      <div className="kz-section kz-post-related">
        <h2 className="kz-h2 kz-center">Continue lendo</h2>
        <div className="kz-related-grid">
          {related.map((p) => (
            <a key={p.slug} href={"#/blog/" + p.slug} className="kz-related-card">
              <span className="kz-blog-cat">{p.categoria}</span>
              <h3 className="kz-h3">{p.titulo}</h3>
              <span className="kz-blog-readmore">Ler →</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ============ ADMIN ============ */
function AdminPage() {
  const [authed, setAuthed] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [err, setErr] = React.useState(false);

  React.useEffect(() => { seo2.track("admin_access", { autenticado: false, acao: "tela_login" }); }, []);

  const login = (e) => {
    e.preventDefault();
    if (user.trim() && pass.trim()) {
      setAuthed(true); setErr(false);
      seo2.track("admin_access", { autenticado: true, usuario: user });
    } else { setErr(true); }
  };

  if (!authed) {
    return (
      <div className="kz-admin-login-wrap">
        <Cd2 pattern className="kz-admin-login">
          <span className="kz-admin-lock">🔒</span>
          <h1 className="kz-h2" style={{ marginTop: 0 }}>Área Restrita</h1>
          <p className="kz-body">Acesso somente para a equipe ZEN SUSHI. Esta página é <code>noindex, nofollow</code>.</p>
          <form className="kz-form" onSubmit={login} noValidate>
            <div className="kz-field">
              <label htmlFor="a-user">Usuário</label>
              <input id="a-user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="admin" />
            </div>
            <div className="kz-field">
              <label htmlFor="a-pass">Senha</label>
              <input id="a-pass" type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="••••••••" />
            </div>
            {err && <span className="kz-err">Preencha usuário e senha (demo: qualquer valor).</span>}
            <B2 variant="gold" size="lg" fullWidth type="submit" iconRight="→">Entrar no painel</B2>
          </form>
          <p className="kz-admin-redirect">Sem autenticação, o acesso é redirecionado para esta tela de login.</p>
        </Cd2>
      </div>
    );
  }

  return (
    <div className="kz-section kz-admin">
      <div className="kz-admin-head">
        <div>
          <Ey2 rule="left">Painel privado · noindex</Ey2>
          <h1 className="kz-h2" style={{ margin: 0 }}>Painel</h1>
        </div>
        <B2 variant="ghost" onClick={() => setAuthed(false)}>Sair</B2>
      </div>

      <div className="kz-admin-grid">
        <Cd2>
          <h2 className="kz-h3">Edição de Conteúdo</h2>
          <p className="kz-body">Atualize textos das páginas, descrições de pratos e metadados de SEO.</p>
          <ul className="kz-admin-list">
            <li>Home · H1 e Missão <span className="kz-admin-pill">Publicado</span></li>
            <li>Cardápio · 45 itens <span className="kz-admin-pill">Publicado</span></li>
            <li>Blog · 5 artigos <span className="kz-admin-pill">Publicado</span></li>
          </ul>
        </Cd2>
        <Cd2>
          <h3 className="kz-h3">Upload de Mídia</h3>
          <p className="kz-body">Envie fotos dos pratos e capas dos artigos (otimizadas com alt-text automático).</p>
          <div className="kz-admin-drop">Arraste imagens aqui ou clique para enviar</div>
        </Cd2>
        <Cd2>
          <h4 className="kz-h4" style={{ marginTop: 0 }}>Gerenciamento de Links</h4>
          <p className="kz-body">Configure links de delivery, redes sociais e WhatsApp.</p>
          <ul className="kz-admin-links">
            {RST.delivery.map((d) => (<li key={d.id}><span>{d.nome}</span><code>{d.url}</code></li>))}
            <li><span>WhatsApp</span><code>wa.me/{RST.whatsapp}</code></li>
          </ul>
        </Cd2>
      </div>
    </div>
  );
}

Object.assign(window, { LocalizacaoPage, BlogPage, BlogPostPage, AdminPage });
