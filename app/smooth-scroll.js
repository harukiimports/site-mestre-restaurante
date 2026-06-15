/* ZEN SUSHI — rolagem suave com Lenis (biblioteca oficial).
   Inicializa após o load. Respeita prefers-reduced-motion.
   O painel Auditor usa [data-lenis-prevent] para manter scroll nativo. */
(function () {
  function start() {
    if (typeof window.Lenis === "undefined") {
      // Lenis não carregou (offline/CDN) — degrada para scroll nativo.
      console.warn("[ZEN SUSHI] Lenis indisponível; usando scroll nativo.");
      window.__smooth = { to: function (y) { window.scrollTo({ top: y, behavior: "smooth" }); } };
      return;
    }
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Em telas de toque (celular/tablet) mantemos o scroll NATIVO — o "syncTouch"
    // da Lenis sequestra o gesto e deixa a rolagem travada/bugada no mobile.
    var isTouch = window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    var lenis = new window.Lenis({
      duration: reduce ? 0 : 2.2,
      // easing tipo macOS: desacelera suave e longo no fim
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -11 * t)); },
      smoothWheel: !reduce,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.8,
      lerp: reduce ? 1 : 0.045,
      // Desktop: rolagem suave. Mobile/toque: nativo (syncTouch desligado).
      syncTouch: !isTouch && !reduce,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.lenis = lenis;
    // API compatível com o resto do app (navegação de categorias etc.)
    window.__smooth = {
      to: function (y, opts) { lenis.scrollTo(y, opts || {}); },
      toTop: function (immediate) { lenis.scrollTo(0, { immediate: !!immediate }); },
    };

    // A Lenis mede a altura no init; o app React renderiza depois.
    // Forçamos remedições para o limite de scroll refletir o conteúdo final.
    var resize = function () { try { lenis.resize(); } catch (e) {} };
    window.addEventListener("load", resize);
    [120, 400, 900, 1600, 2600].forEach(function (ms) { setTimeout(resize, ms); });
    // Imagens que chegam tarde também mudam a altura.
    document.addEventListener("load", function (e) {
      if (e.target && (e.target.tagName === "IMG" || e.target.tagName === "IMAGE-SLOT")) resize();
    }, true);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(start, 0);
  } else {
    window.addEventListener("DOMContentLoaded", start);
  }
})();
