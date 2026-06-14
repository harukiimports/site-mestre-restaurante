# ZEN SUSHI — Site (Cotia)

Site institucional do restaurante ZEN SUSHI, em Cotia/SP. Single-page application com 7 rotas (Início, Cardápio, Reservas, Delivery, Como Chegar, Blog, Admin), SEO técnico (schemas JSON-LD, sitemap dinâmico, GA4), mapa do Google, rolagem suave (Lenis) e fotos arrastáveis.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `zen-sushi-cotia`).
2. Envie **todo o conteúdo desta pasta** para o repositório (o arquivo `index.html` deve ficar na raiz).
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, escolha a branch `main` e a pasta `/ (root)`. Salve.
5. Aguarde ~1 minuto. O site ficará no ar em:
   `https://SEU-USUARIO.github.io/zen-sushi-cotia/`

## Estrutura

- `index.html` — página principal (carrega tudo)
- `app/` — código do site (dados, SEO, componentes, páginas, estilos, rolagem)
- `assets/` — imagens da marca e logo
- `_ds/` — design system (tokens + bundle de componentes)
- `image-slot.js` — componente de foto arrastável
- `favicon.ico`, `*.png` — ícones do site

## Configurar antes de ir ao ar

- **Google Analytics 4:** em `index.html` e `app/seo.js`, troque o ID `G-KAZUKICOTIA` pelo seu Measurement ID real (`G-XXXXXXXXXX`).
- **Domínio:** se usar domínio próprio, ajuste a constante `ORIGIN` em `app/seo.js`.
- **Fotos:** as fotos dos pratos/hero podem ser trocadas arrastando suas próprias imagens sobre as áreas de foto (ficam salvas no navegador). Para fixá-las no site, substitua as URLs em `app/pages-core.jsx` (objeto `PHOTOS`) e em `app/data.js` (campo `img` dos posts do blog).

## Observação

As páginas usam JSX transpilado no navegador (Babel standalone) — não há etapa de build. Basta servir os arquivos estáticos.
