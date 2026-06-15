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
    // Em telas de toque (celular/tablet) NÃO inicializamos a Lenis — ela sequestra
    // o gesto e deixa a rolagem travada/bugada. Mantemos o scroll 100% nativo.
    var isTouch = window.matchMedia &&
      (window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
       window.matchMedia("(pointer: coarse)").matches) ||
      ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);

    if (isTouch || reduce) {
      window.__smooth = {
        to: function (y, opts) { window.scrollTo({ top: typeof y === "number" ? y : 0, behavior: (opts && opts.immediate) ? "auto" : "smooth" }); },
        toTop: function (immediate) { window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" }); },
      };
      return;
    }

    var lenis = new window.Lenis({
      duration: 2.2,
      // easing tipo macOS: desacelera suave e longo no fim
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -11 * t)); },
      smoothWheel: true,
      wheelMultiplier: 1.15,
      lerp: 0.045,
      // Rolagem suave só no desktop (mouse/trackpad). Toque já saiu acima.
      syncTouch: false,
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
