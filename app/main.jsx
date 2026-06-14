/* ZEN SUSHI — router + app shell. */
const { useState: uS, useEffect: uE } = React;
const SEOx = window.KZ_SEO;
const BLOGX = window.KZ_DATA.BLOG;

function parseRoute() {
  let h = location.hash.replace(/^#/, "");
  if (!h || h === "/") return { name: "home" };
  const parts = h.split("/").filter(Boolean); // e.g. ["blog","slug"]
  const top = parts[0];
  if (top === "blog" && parts[1]) {
    const post = BLOGX.find((p) => p.slug === parts[1]);
    return post ? { name: "blogPost", post } : { name: "blog" };
  }
  const known = { menu: "menu", reservas: "reservas", delivery: "delivery", localizacao: "localizacao", blog: "blog", admin: "admin" };
  return { name: known[top] || "home" };
}

function App() {
  const [route, setRoute] = uS(parseRoute());
  const [audOpen, setAudOpen] = uS(false);
  const [audTab, setAudTab] = uS("audit");

  uE(() => {
    const onHash = () => {
      const r = parseRoute();
      setRoute(r);
      if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // apply SEO head for the active route
  uE(() => {
    const meta = route.name === "blogPost"
      ? SEOx.ROUTES.blogPost(route.post)
      : (SEOx.ROUTES[route.name] || SEOx.ROUTES.home)();
    SEOx.applyHead(meta);
    // A altura da página muda a cada rota → remede o limite da Lenis.
    if (window.lenis) {
      requestAnimationFrame(() => window.lenis.resize());
      setTimeout(() => window.lenis && window.lenis.resize(), 350);
    }
  }, [route]);

  let Page = null;
  switch (route.name) {
    case "home": Page = <HomePage />; break;
    case "menu": Page = <MenuPage />; break;
    case "reservas": Page = <ReservasPage />; break;
    case "delivery": Page = <DeliveryPage />; break;
    case "localizacao": Page = <LocalizacaoPage />; break;
    case "blog": Page = <BlogPage />; break;
    case "blogPost": Page = <BlogPostPage post={route.post} />; break;
    case "admin": Page = <AdminPage />; break;
    default: Page = <HomePage />;
  }

  const isAdmin = route.name === "admin";

  return (
    <React.Fragment>
      <Nav route={route.name} />
      <main id="page-root">{Page}</main>
      {!isAdmin && <Footer />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
