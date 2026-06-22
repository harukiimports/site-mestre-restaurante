/* Gerado a partir de main.jsx — não editar à mão. */
const {
  useState: uS,
  useEffect: uE
} = React;
const SEOx = window.KZ_SEO;
const BLOGX = window.KZ_DATA.BLOG;
function parseRoute() {
  let h = location.hash.replace(/^#/, "");
  if (!h || h === "/") return {
    name: "home"
  };
  const parts = h.split("/").filter(Boolean);
  const top = parts[0];
  if (top === "blog" && parts[1]) {
    const post = BLOGX.find(p => p.slug === parts[1]);
    return post ? {
      name: "blogPost",
      post
    } : {
      name: "blog"
    };
  }
  const known = {
    menu: "menu",
    reservas: "reservas",
    delivery: "delivery",
    localizacao: "localizacao",
    blog: "blog",
    admin: "admin"
  };
  return {
    name: known[top] || "home"
  };
}
function App() {
  const [route, setRoute] = uS(parseRoute());
  const [audOpen, setAudOpen] = uS(false);
  const [audTab, setAudTab] = uS("audit");
  uE(() => {
    const onHash = () => {
      const r = parseRoute();
      setRoute(r);
      if (window.lenis) window.lenis.scrollTo(0, {
        immediate: true
      });else window.scrollTo({
        top: 0,
        behavior: "auto"
      });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  uE(() => {
    const meta = route.name === "blogPost" ? SEOx.ROUTES.blogPost(route.post) : (SEOx.ROUTES[route.name] || SEOx.ROUTES.home)();
    SEOx.applyHead(meta);
    if (window.lenis) {
      requestAnimationFrame(() => window.lenis.resize());
      setTimeout(() => window.lenis && window.lenis.resize(), 350);
    }
  }, [route]);
  let Page = null;
  switch (route.name) {
    case "home":
      Page = React.createElement(HomePage, null);
      break;
    case "menu":
      Page = React.createElement(MenuPage, null);
      break;
    case "reservas":
      Page = React.createElement(ReservasPage, null);
      break;
    case "delivery":
      Page = React.createElement(DeliveryPage, null);
      break;
    case "localizacao":
      Page = React.createElement(LocalizacaoPage, null);
      break;
    case "blog":
      Page = React.createElement(BlogPage, null);
      break;
    case "blogPost":
      Page = React.createElement(BlogPostPage, {
        post: route.post
      });
      break;
    case "admin":
      Page = React.createElement(AdminPage, null);
      break;
    default:
      Page = React.createElement(HomePage, null);
  }
  const isAdmin = route.name === "admin";
  return React.createElement(React.Fragment, null, React.createElement(Nav, {
    route: route.name
  }), React.createElement("main", {
    id: "page-root"
  }, Page), !isAdmin && React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));