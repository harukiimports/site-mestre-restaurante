/* @ds-bundle: {"format":3,"namespace":"KAZUKIDesignSystem_63706c","components":[{"name":"Crest","sourcePath":"components/brand/Crest.jsx"},{"name":"KatanaDivider","sourcePath":"components/brand/KatanaDivider.jsx"},{"name":"OrnamentalFrame","sourcePath":"components/brand/OrnamentalFrame.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"PromoSeal","sourcePath":"components/core/PromoSeal.jsx"},{"name":"SocialBar","sourcePath":"components/social/SocialBar.jsx"}],"sourceHashes":{"components/brand/Crest.jsx":"091762dd386e","components/brand/KatanaDivider.jsx":"4870a433bbf3","components/brand/OrnamentalFrame.jsx":"45594b5ac4e1","components/core/Badge.jsx":"033b5b543b4b","components/core/Button.jsx":"de2e7aaf58e1","components/core/Card.jsx":"9b768988f5c1","components/core/Eyebrow.jsx":"fb0e6bb6e445","components/core/PriceTag.jsx":"0578105b30f4","components/core/PromoSeal.jsx":"1156f3808fc3","components/social/SocialBar.jsx":"d003398fae1f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KAZUKIDesignSystem_63706c = window.KAZUKIDesignSystem_63706c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Crest.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI Crest — the K samurai logo lockup.
 * Optional wordmark (gold foil) and slogan. Horizontal or stacked.
 */
function Crest({
  layout = 'horizontal',
  wordmark = true,
  slogan = false,
  crestSize = 96,
  src = 'assets/kazuki-logo.png',
  style = {},
  ...rest
}) {
  const stacked = layout === 'stacked';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: stacked ? 'column' : 'row',
      alignItems: 'center',
      gap: stacked ? 'var(--space-3)' : 'var(--space-4)',
      textAlign: stacked ? 'center' : 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "KAZUKI",
    style: {
      width: crestSize,
      height: crestSize,
      objectFit: 'contain',
      filter: 'drop-shadow(var(--glow-gold-sm))',
      flex: 'none'
    }
  }), wordmark ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: crestSize * 0.46,
      letterSpacing: '0.05em',
      background: 'var(--kz-gradient-gold)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      textShadow: 'var(--foil-emboss)',
      lineHeight: 1
    }
  }, "KAZUKI"), slogan ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: crestSize * 0.17,
      color: 'var(--kz-bone)'
    }
  }, "Sua Marca, Nossa Miss\xE3o.") : null) : null);
}
Object.assign(__ds_scope, { Crest });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Crest.jsx", error: String((e && e.message) || e) }); }

// components/brand/KatanaDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI KatanaDivider — gold rule with a central diamond (kamon) accent,
 * evoking the crossed-katana motif. Separates sections in posts.
 */
function KatanaDivider({
  width = '100%',
  color = 'var(--kz-gold)',
  glyph = '◆',
  style = {},
  ...rest
}) {
  const line = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${color} 30%, ${color} 70%, transparent)`
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      width,
      color,
      ...style
    }
  }, rest), line, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      transform: 'scaleX(1.4)',
      opacity: 0.95
    }
  }, glyph), line);
}
Object.assign(__ds_scope, { KatanaDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/KatanaDivider.jsx", error: String((e && e.message) || e) }); }

// components/brand/OrnamentalFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI OrnamentalFrame — gold Art-Deco corner brackets framing content,
 * the signature post border. Wrap any post/story content.
 */
function OrnamentalFrame({
  children,
  inset = 28,
  cornerSize = 56,
  color = 'var(--kz-gold)',
  doubleLine = true,
  style = {},
  ...rest
}) {
  const corner = pos => {
    const isTop = pos.includes('top');
    const isLeft = pos.includes('left');
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        [isTop ? 'top' : 'bottom']: 0,
        [isLeft ? 'left' : 'right']: 0,
        width: cornerSize,
        height: cornerSize,
        borderTop: isTop ? `var(--border-frame) solid ${color}` : 'none',
        borderBottom: !isTop ? `var(--border-frame) solid ${color}` : 'none',
        borderLeft: isLeft ? `var(--border-frame) solid ${color}` : 'none',
        borderRight: !isLeft ? `var(--border-frame) solid ${color}` : 'none'
      }
    }, doubleLine ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        [isTop ? 'top' : 'bottom']: 6,
        [isLeft ? 'left' : 'right']: 6,
        width: cornerSize * 0.55,
        height: cornerSize * 0.55,
        borderTop: isTop ? `var(--border-hair) solid ${color}` : 'none',
        borderBottom: !isTop ? `var(--border-hair) solid ${color}` : 'none',
        borderLeft: isLeft ? `var(--border-hair) solid ${color}` : 'none',
        borderRight: !isLeft ? `var(--border-hair) solid ${color}` : 'none',
        opacity: 0.7
      }
    }) : null);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      height: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: inset,
      border: `var(--border-hair) solid ${color}`,
      opacity: 0.32,
      pointerEvents: 'none'
    }
  }, corner('top-left'), corner('top-right'), corner('bottom-left'), corner('bottom-right')), children);
}
Object.assign(__ds_scope, { OrnamentalFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/OrnamentalFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI Badge / Tag — small label for categories, status, kickers.
 * Variants: gold (outline), solid (gold fill), blood (promo), ghost.
 */
function Badge({
  children,
  variant = 'gold',
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-1)',
    height: 28,
    padding: '0 12px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: 'var(--fs-caption)',
    letterSpacing: 'var(--ls-wide)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-pill)',
    border: 'var(--border-hair) solid transparent',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    gold: {
      color: 'var(--kz-gold)',
      borderColor: 'var(--border-subtle)',
      background: 'var(--kz-gold-dim)'
    },
    solid: {
      color: 'var(--text-on-gold)',
      background: 'var(--kz-gradient-gold-soft)'
    },
    blood: {
      color: 'var(--kz-bone)',
      background: 'var(--kz-blood)'
    },
    ghost: {
      color: 'var(--text-muted)',
      borderColor: 'var(--border-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI Button — CTA control for posts and stories.
 * Variants: gold (primary), blood (urgent CTA), outline (secondary), ghost.
 */
function Button({
  children,
  variant = 'gold',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const pads = {
    sm: '0 18px',
    md: '0 26px',
    lg: '0 34px'
  };
  const fonts = {
    sm: '13px',
    md: 'var(--fs-label)',
    lg: '17px'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    height: heights[size],
    padding: pads[size],
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: fonts[size],
    letterSpacing: 'var(--ls-cta)',
    textTransform: 'uppercase',
    border: 'var(--border-thin) solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    gold: {
      background: 'var(--kz-gradient-gold-soft)',
      color: 'var(--text-on-gold)',
      boxShadow: 'var(--glow-gold-sm)'
    },
    blood: {
      background: 'var(--kz-blood)',
      color: 'var(--kz-bone)',
      boxShadow: 'var(--glow-blood)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--kz-gold)',
      borderColor: 'var(--kz-gold)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--kz-bone)',
      borderColor: 'var(--border-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI Card — dark raised surface with a thin gold hairline.
 * For menu items, info blocks, hours, etc.
 */
function Card({
  children,
  tone = 'card',
  bordered = true,
  pattern = false,
  style = {},
  ...rest
}) {
  const bg = tone === 'raised' ? 'var(--surface-raised)' : tone === 'canvas' ? 'var(--surface-canvas)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: bg,
      backgroundImage: pattern ? 'var(--pattern-asanoha)' : 'none',
      border: bordered ? 'var(--border-hair) solid var(--border-subtle)' : 'none',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--shadow-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI Eyebrow / Kicker — spaced gold caps with optional flanking rules.
 * Sets the premium tone above a headline.
 */
function Eyebrow({
  children,
  rule = 'left',
  color = 'gold',
  style = {},
  ...rest
}) {
  const c = color === 'bone' ? 'var(--kz-bone)' : color === 'blood' ? 'var(--kz-blood)' : 'var(--kz-gold)';
  const line = /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 28,
      background: 'currentColor',
      opacity: 0.6,
      flex: 'none'
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color: c,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-overline)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), rule === 'left' || rule === 'both' ? line : null, children, rule === 'right' || rule === 'both' ? line : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI PriceTag — gastronomic pricing block.
 * Optional struck "de" price and a blood "por" price. Currency prefix in gold.
 */
function PriceTag({
  price = '39,90',
  was = null,
  currency = 'R$',
  align = 'left',
  size = 'md',
  style = {},
  ...rest
}) {
  const scale = {
    sm: 0.7,
    md: 1,
    lg: 1.4
  }[size] || 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
      gap: 2 * scale,
      ...style
    }
  }, rest), was ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16 * scale,
      color: 'var(--text-muted)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--kz-blood)',
      letterSpacing: '0.02em'
    }
  }, currency, " ", was) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8 * scale,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 22 * scale,
      color: 'var(--kz-gold)'
    }
  }, currency), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 56 * scale,
      color: 'var(--kz-blood)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, price)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/PromoSeal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KAZUKI PromoSeal — circular "selo de promoção" stamp.
 * Blood-red by default with a gold ring. Place over the corner of a dish.
 */
function PromoSeal({
  value = '-30%',
  caption = 'HOJE',
  size = 132,
  variant = 'blood',
  rotate = -8,
  style = {},
  ...rest
}) {
  const palette = {
    blood: {
      bg: 'var(--kz-blood)',
      fg: 'var(--kz-bone)',
      ring: 'var(--kz-gold)',
      glow: 'var(--glow-blood)'
    },
    gold: {
      bg: 'var(--kz-gradient-gold-soft)',
      fg: 'var(--kz-black)',
      ring: 'var(--kz-black)',
      glow: 'var(--glow-gold-md)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: palette.bg,
      color: palette.fg,
      boxShadow: `${palette.glow}, 0 0 0 ${Math.round(size * 0.022)}px ${palette.bg}, 0 0 0 ${Math.round(size * 0.03)}px ${palette.ring}`,
      outline: `var(--border-hair) dashed ${palette.ring}`,
      outlineOffset: -Math.round(size * 0.09),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: `rotate(${rotate}deg)`,
      fontFamily: 'var(--font-display)',
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.3
    }
  }, value), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.1,
      letterSpacing: '0.18em',
      marginTop: size * 0.05,
      textTransform: 'uppercase'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PromoSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PromoSeal.jsx", error: String((e && e.message) || e) }); }

// components/social/SocialBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Minimal brand glyphs (single-path, currentColor). */
const GLYPHS = {
  instagram: 'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.18A6.62 6.62 0 1 0 18.62 12 6.62 6.62 0 0 0 12 5.38Zm0 10.92A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.88-11.16a1.55 1.55 0 1 1-1.55-1.55 1.55 1.55 0 0 1 1.55 1.55Z',
  facebook: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z',
  whatsapp: 'M.06 24l1.68-6.16a11.87 11.87 0 1 1 4.3 4.3L.06 24Zm6.59-3.81c1.62.96 3.16 1.54 5.34 1.54a9.86 9.86 0 1 0-9.86-9.86c0 2.31.65 3.86 1.7 5.5l-.98 3.58 3.8-.76Zm11.39-5.46c-.15-.26-.56-.42-1.18-.73-.62-.31-3.66-1.81-4.23-2.02-.57-.21-.98-.31-1.39.31-.41.62-1.59 2.02-1.95 2.43-.36.41-.72.47-1.34.16-.62-.31-2.62-.97-4.99-3.08a18.7 18.7 0 0 1-3.45-4.3c-.36-.62-.04-.95.27-1.26.28-.28.62-.72.93-1.08.31-.36.41-.62.62-1.03.21-.41.1-.78-.05-1.08-.16-.31-1.39-3.35-1.91-4.59-.5-1.2-1.01-1.04-1.39-1.06l-1.18-.02c-.41 0-1.08.15-1.65.78-.57.62-2.17 2.12-2.17 5.17s2.22 6 2.53 6.41c.31.41 4.38 6.68 10.6 9.37 1.48.64 2.64 1.02 3.54 1.31 1.49.47 2.84.4 3.91.24 1.19-.18 3.66-1.5 4.18-2.94.51-1.44.51-2.68.36-2.94Z',
  tiktok: 'M16.6 5.82a4.28 4.28 0 0 1-1.13-2.82h-3.1v12.4a2.45 2.45 0 1 1-2.45-2.45c.25 0 .49.04.72.11V9.9a5.6 5.6 0 0 0-.72-.05 5.55 5.55 0 1 0 5.55 5.55V9.01a7.3 7.3 0 0 0 4.27 1.37V7.28a4.28 4.28 0 0 1-3.14-1.46Z'
};

/**
 * KAZUKI SocialBar — gold circular social chips + optional handle.
 * Mirrors the brand footer: Instagram, Facebook, WhatsApp, TikTok.
 */
function SocialBar({
  networks = ['instagram', 'facebook', 'whatsapp', 'tiktok'],
  handle = '@agenciakazuki',
  size = 44,
  variant = 'gold',
  align = 'center',
  style = {},
  ...rest
}) {
  const filled = variant === 'gold';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, networks.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: filled ? 'var(--kz-gradient-gold-soft)' : 'transparent',
      border: filled ? 'none' : 'var(--border-hair) solid var(--border-subtle)',
      color: filled ? 'var(--kz-black)' : 'var(--kz-gold)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.52,
    height: size * 0.52,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-label": n
  }, /*#__PURE__*/React.createElement("path", {
    d: GLYPHS[n]
  }))))), handle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--kz-bone)'
    }
  }, handle) : null);
}
Object.assign(__ds_scope, { SocialBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Crest = __ds_scope.Crest;

__ds_ns.KatanaDivider = __ds_scope.KatanaDivider;

__ds_ns.OrnamentalFrame = __ds_scope.OrnamentalFrame;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.PromoSeal = __ds_scope.PromoSeal;

__ds_ns.SocialBar = __ds_scope.SocialBar;

})();
