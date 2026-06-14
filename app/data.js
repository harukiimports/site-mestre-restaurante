/* ZEN SUSHI Restaurante — content data (plain JS, loaded before React app). */
(function () {
  const RESTAURANT = {
    name: "ZEN SUSHI",
    legalName: "ZEN SUSHI Restaurante",
    tagline: "Alta gastronomia em Cotia",
    descricao:
      "Restaurante de alta gastronomia em Cotia. Sushi, sashimi, frutos do mar e cortes nobres, com uma carta de vinhos e saquês selecionada — no equilíbrio entre a serenidade zen e a mesa contemporânea.",
    cidade: "Cotia",
    estado: "SP",
    rua: "Av. Antônio Mathias de Camargo, 895 — Sala 7",
    bairro: "Centro",
    cep: "06700-158",
    enderecoCompleto:
      "Av. Antônio Mathias de Camargo, 895 — Sala 7, Centro, Cotia - SP, 06700-158",
    telefone: "(11) 97022-2443",
    telefoneE164: "+5511970222443",
    whatsapp: "5511970222443",
    email: "reservas@zensushicotia.com.br",
    geo: { lat: -23.6039, lng: -46.9189 },
    priceRange: "$$$",
    servesCuisine: ["Contemporânea", "Italiana", "Frutos do Mar", "Grelhados"],
    horarios: [
      { dias: "Segunda a Quinta", abre: "09:00", fecha: "23:00", d: ["Mo", "Tu", "We", "Th"] },
      { dias: "Sexta e Sábado", abre: "09:00", fecha: "00:00", d: ["Fr", "Sa"] },
      { dias: "Domingo", abre: "11:00", fecha: "22:00", d: ["Su"] },
    ],
    social: {
      instagram: "https://instagram.com/zensushicotia",
      facebook: "https://facebook.com/zensushicotia",
      tiktok: "https://tiktok.com/@zensushicotia",
      handle: "@zensushicotia",
    },
    delivery: [
      { id: "ifood", nome: "iFood", cor: "#EA1D2C", text: "#FFFFFF", url: "https://www.ifood.com.br", desc: "Entrega rápida com acompanhamento em tempo real." },
      { id: "99food", nome: "99Food", cor: "#FFC400", text: "#0A0A0A", url: "https://www.99app.com", desc: "Cupons e frete grátis para a região de Cotia." },
      { id: "keeta", nome: "Keeta", cor: "#FF7A00", text: "#FFFFFF", url: "https://www.keeta.com", desc: "Novidade na cidade — promoções de lançamento." },
      { id: "rappi", nome: "Rappi", cor: "#FF441F", text: "#FFFFFF", url: "https://www.rappi.com.br", desc: "Combine pratos, bebidas e sobremesas no mesmo pedido." },
    ],
  };

  // Dietary tag dictionary
  const T = {
    GLUTEN: "Contém Glúten",
    SEMGLUTEN: "Sem Glúten",
    VEGANO: "Vegano",
    VEGETARIANO: "Vegetariano",
    PICANTE: "Picante",
    LACTOSE: "Contém Lactose",
  };

  const MENU = [
    {
      id: "entradas",
      nome: "Entradas",
      kw: "entradas e couvert em Cotia",
      itens: [
        { nome: "Bruschetta Clássica", desc: "Pão italiano artesanal, tomates frescos, manjericão e azeite extra virgem.", preco: "32,00", tags: [T.VEGETARIANO, T.GLUTEN] },
        { nome: "Carpaccio de Carne", desc: "Fatias finas de filé mignon, molho de alcaparras, parmesão e rúcula fresca.", preco: "46,00", tags: [T.SEMGLUTEN, T.LACTOSE] },
        { nome: "Bolinho de Bacalhau Premium", desc: "Receita tradicional portuguesa, crocante por fora e suculento por dentro.", preco: "42,00", tags: [T.GLUTEN] },
        { nome: "Tartare de Salmão", desc: "Salmão fresco, abacate, limão siciliano e torradas especiais.", preco: "54,00", tags: [T.GLUTEN] },
        { nome: "Mix de Queijos e Frios", desc: "Seleção de queijos importados, salame italiano e azeitonas gregas.", preco: "68,00", tags: [T.VEGETARIANO, T.LACTOSE] },
      ],
    },
    {
      id: "principais",
      nome: "Pratos Principais",
      kw: "melhor jantar em Cotia",
      itens: [
        { nome: "Filé Mignon ao Molho Madeira", desc: "Acompanha purê de batatas cremoso e cogumelos frescos.", preco: "78,00", tags: [T.SEMGLUTEN, T.LACTOSE], destaque: true },
        { nome: "Risoto de Camarão", desc: "Camarões grelhados, arroz arbóreo, açafrão e raspas de limão.", preco: "86,00", tags: [T.SEMGLUTEN, T.LACTOSE], destaque: true },
        { nome: "Salmão Grelhado", desc: "Crosta de ervas finas, risoto de aspargos e molho de maracujá.", preco: "82,00", tags: [T.SEMGLUTEN] },
        { nome: "Strogonoff de Carne", desc: "Filé em cubos, molho artesanal, batata palha caseira e arroz branco.", preco: "64,00", tags: [T.LACTOSE] },
        { nome: "Picanha na Brasa", desc: "Corte nobre, farofa de bacon, vinagrete e mandioca frita.", preco: "98,00", tags: [T.SEMGLUTEN], destaque: true },
        { nome: "Lasanha à Bolonhesa", desc: "Massa fresca, molho de tomate caseiro e queijo mussarela premium.", preco: "58,00", tags: [T.GLUTEN, T.LACTOSE] },
        { nome: "Spaghetti ao Frutti di Mare", desc: "Massa grano duro com lulas, mexilhões e camarões.", preco: "92,00", tags: [T.GLUTEN] },
        { nome: "Nhoque ao Molho Pesto", desc: "Nhoque artesanal, molho de manjericão, pinoli e parmesão.", preco: "56,00", tags: [T.VEGETARIANO, T.GLUTEN, T.LACTOSE] },
        { nome: "Bife Ancho Premium", desc: "Corte argentino, batatas rústicas e molho chimichurri.", preco: "110,00", tags: [T.SEMGLUTEN] },
        { nome: "Frango Grelhado com Legumes", desc: "Peito de frango temperado, legumes salteados e arroz integral.", preco: "52,00", tags: [T.SEMGLUTEN] },
        { nome: "Moqueca de Peixe", desc: "Peixe fresco, dendê, leite de coco, pimentões e arroz de coco.", preco: "96,00", tags: [T.SEMGLUTEN, T.PICANTE] },
        { nome: "Parmegiana de Carne", desc: "Carne selecionada, molho marinara, gratinada com muito queijo.", preco: "72,00", tags: [T.GLUTEN, T.LACTOSE] },
        { nome: "Costela ao Molho Barbecue", desc: "Costela assada lentamente, batata doce assada e salada coleslaw.", preco: "84,00", tags: [T.SEMGLUTEN] },
        { nome: "Peixe ao Molho de Alcaparras", desc: "Filé de peixe branco, alcaparras, manteiga de ervas e batatas sauté.", preco: "79,00", tags: [T.SEMGLUTEN, T.LACTOSE] },
        { nome: "Risoto de Cogumelos Porcini", desc: "Cogumelos frescos, trufas negras e queijo grana padano.", preco: "88,00", tags: [T.VEGETARIANO, T.SEMGLUTEN, T.LACTOSE] },
      ],
    },
    {
      id: "sobremesas",
      nome: "Sobremesas",
      kw: "melhores sobremesas em Cotia",
      itens: [
        { nome: "Mousse de Chocolate Belga", desc: "Intenso, aveludado e finalizado com raspas de chocolate amargo.", preco: "28,00", tags: [T.VEGETARIANO, T.LACTOSE] },
        { nome: "Petit Gâteau", desc: "Bolo quente de chocolate, recheio cremoso e sorvete de baunilha artesanal.", preco: "32,00", tags: [T.VEGETARIANO, T.GLUTEN, T.LACTOSE], destaque: true },
        { nome: "Cheesecake de Frutas Vermelhas", desc: "Base crocante, recheio de cream cheese e calda de morango e amora.", preco: "30,00", tags: [T.VEGETARIANO, T.GLUTEN, T.LACTOSE] },
        { nome: "Tiramisù Tradicional", desc: "Camadas de café expresso, mascarpone e cacau em pó.", preco: "30,00", tags: [T.VEGETARIANO, T.GLUTEN, T.LACTOSE] },
        { nome: "Pudim de Leite Condensado", desc: "Textura lisinha, calda de caramelo dourado e toque de baunilha.", preco: "22,00", tags: [T.VEGETARIANO, T.SEMGLUTEN, T.LACTOSE] },
        { nome: "Torta de Limão Siciliano", desc: "Massa sablée, creme cítrico e merengue italiano maçaricado.", preco: "28,00", tags: [T.VEGETARIANO, T.GLUTEN, T.LACTOSE] },
        { nome: "Banana Flambada", desc: "Bananas grelhadas, rum, canela e sorvete de creme.", preco: "30,00", tags: [T.VEGETARIANO, T.LACTOSE] },
        { nome: "Brownie com Sorvete", desc: "Brownie de nozes, calda quente de ganache e sorvete de doce de leite.", preco: "32,00", tags: [T.VEGETARIANO, T.GLUTEN, T.LACTOSE] },
        { nome: "Abacaxi com Raspas de Limão", desc: "Abacaxi grelhado, mel e raspas de limão para uma opção leve.", preco: "24,00", tags: [T.VEGETARIANO, T.SEMGLUTEN] },
        { nome: "Mil-Folhas de Creme", desc: "Camadas crocantes de massa folhada com recheio de baunilha de Madagascar.", preco: "30,00", tags: [T.VEGETARIANO, T.GLUTEN, T.LACTOSE] },
      ],
    },
    {
      id: "bebidas",
      nome: "Bebidas",
      kw: "drinks e vinhos em Cotia",
      itens: [
        { nome: "Suco de Laranja", desc: "100% natural, espremido na hora.", preco: "14,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Limonada Suíça", desc: "Limão batido com casca, açúcar e gelo.", preco: "14,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Água Mineral", desc: "Com ou sem gás.", preco: "8,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Refrigerantes", desc: "Coca-Cola, Coca Zero, Guaraná Antártica.", preco: "9,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Chá Gelado da Casa", desc: "Chá preto, limão siciliano e hortelã.", preco: "12,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Café Expresso", desc: "Grãos selecionados, torra equilibrada.", preco: "8,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Cappuccino Italiano", desc: "Café, leite vaporizado e toque de canela.", preco: "14,00", tags: [T.VEGETARIANO, T.LACTOSE] },
        { nome: "Caipirinha", desc: "Limão, cachaça premium e açúcar (opção com vodka).", preco: "26,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Gin Tônica", desc: "Gin, tônica, zimbro e fatia de pepino.", preco: "32,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Vinho Tinto (Taça)", desc: "Seleção do sommelier.", preco: "28,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Vinho Branco (Taça)", desc: "Seleção do sommelier.", preco: "28,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Cerveja Artesanal (IPA)", desc: "Garrafa 600ml.", preco: "26,00", tags: [T.VEGANO, T.GLUTEN] },
        { nome: "Cerveja Pilsen (Lager)", desc: "Garrafa 600ml.", preco: "18,00", tags: [T.VEGANO, T.GLUTEN] },
        { nome: "Soda Italiana", desc: "Maçã verde, monin e água com gás.", preco: "16,00", tags: [T.VEGANO, T.SEMGLUTEN] },
        { nome: "Água de Coco", desc: "Natural, servida gelada.", preco: "12,00", tags: [T.VEGANO, T.SEMGLUTEN] },
      ],
    },
  ];

  const BLOG = [
    {
      slug: "melhores-pratos-jantar-a-dois-cotia",
      titulo: "Os 5 Melhores Pratos para um Jantar a Dois em Cotia",
      resumo:
        "Da Picanha na Brasa ao Risoto de Camarão: um roteiro de sabores para tornar a noite inesquecível no ZEN SUSHI.",
      autor: "Chef Henrique Mori",
      data: "2026-05-28",
      dataLabel: "28 de maio de 2026",
      categoria: "Experiências",
      leitura: "6 min",
      img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1280&q=80",
      topicos: [
        {
          h2: "Por que Cotia virou rota gastronômica",
          p: "Nos últimos anos, Cotia deixou de ser apenas passagem para a serra e se firmou como destino de quem busca alta gastronomia perto de São Paulo. O movimento de novos restaurantes elevou o nível das cozinhas da região, e o jantar a dois ganhou opções à altura de qualquer capital.",
        },
        {
          h2: "Os pratos que conquistam à primeira garfada",
          p: "Para um jantar romântico, aposte em pratos para compartilhar e em texturas marcantes. A Picanha na Brasa com farofa de bacon abre bem a noite; o Risoto de Camarão com açafrão traz cremosidade; e o Salmão Grelhado com molho de maracujá fecha com acidez elegante. Acompanhe com uma taça de vinho tinto da seleção do sommelier.",
        },
      ],
      dicas: {
        h3: "Dica do chef para a noite perfeita",
        p: "Reserve a mesa com antecedência e peça a sobremesa Petit Gâteau já no início — ela leva alguns minutos a mais e chega quentinha no momento certo do brinde.",
      },
      cta: "Reserve sua mesa para um jantar a dois",
    },
    {
      slug: "risoto-de-camarao-ponto-perfeito",
      titulo: "Risoto de Camarão: o Segredo do Ponto Perfeito",
      resumo:
        "O que separa um risoto cremoso de um arroz empapado? Mostramos a técnica que usamos na cozinha do ZEN SUSHI em Cotia.",
      autor: "Chef Henrique Mori",
      data: "2026-05-12",
      dataLabel: "12 de maio de 2026",
      categoria: "Cozinha",
      leitura: "5 min",
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1280&q=80",
      topicos: [
        {
          h2: "Começa no arroz arbóreo",
          p: "O risoto perfeito depende do amido do arroz arbóreo, liberado aos poucos durante o cozimento. Nunca lave o arroz antes — é justamente esse amido que cria a textura cremosa e envolvente que buscamos.",
        },
        {
          h2: "Camarão na medida certa",
          p: "O camarão entra grelhado e por último, para não passar do ponto. Selamos em fogo alto por poucos segundos de cada lado e finalizamos com raspas de limão siciliano, que realçam o frescor do mar sem mascarar o sabor.",
        },
      ],
      dicas: {
        h3: "Dicas para repetir em casa",
        p: "Mantenha o caldo sempre quente ao lado da panela e mexa em movimentos suaves. O ponto ideal é o 'all'onda': ao inclinar o prato, o risoto deve escorrer como uma onda lenta.",
      },
      cta: "Prove o nosso Risoto de Camarão",
    },
    {
      slug: "harmonizacao-de-vinhos-guia-iniciantes",
      titulo: "Harmonização de Vinhos: Guia Prático para Iniciantes",
      resumo:
        "Tinto com carne, branco com peixe? A regra é mais flexível do que parece. Um guia direto para acertar na próxima taça.",
      autor: "Sommelier Letícia Vasques",
      data: "2026-04-30",
      dataLabel: "30 de abril de 2026",
      categoria: "Vinhos",
      leitura: "7 min",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1280&q=80",
      topicos: [
        {
          h2: "Equilíbrio antes de regra",
          p: "Harmonizar é equilibrar intensidades: pratos delicados pedem vinhos leves; pratos potentes pedem vinhos encorpados. A clássica 'tinto com carne, branco com peixe' funciona porque segue esse princípio — mas pode ser quebrada com bom senso.",
        },
        {
          h2: "Combinações que nunca falham",
          p: "Picanha na Brasa pede um tinto encorpado, como um Malbec. O Salmão Grelhado vai bem com um branco aromático. Já o Risoto de Cogumelos Porcini, terroso, harmoniza lindamente com um tinto de média estrutura.",
        },
      ],
      dicas: {
        h3: "Dica de temperatura",
        p: "Tintos encorpados a 16–18 °C, brancos a 8–10 °C. Servir gelado demais esconde os aromas; quente demais ressalta o álcool. Na dúvida, peça a recomendação do nosso sommelier.",
      },
      cta: "Conheça nossa carta de vinhos",
    },
    {
      slug: "picanha-na-brasa-cotia",
      titulo: "Por que a Picanha na Brasa é a Estrela de Cotia",
      resumo:
        "Corte nobre, ponto certo e o toque da brasa: entenda o que faz da nossa picanha o prato mais pedido da casa.",
      autor: "Chef Henrique Mori",
      data: "2026-04-15",
      dataLabel: "15 de abril de 2026",
      categoria: "Cozinha",
      leitura: "5 min",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?w=1280&q=80",
      topicos: [
        {
          h2: "A escolha do corte",
          p: "Tudo começa na seleção da peça: capa de gordura uniforme, coloração viva e marmoreio na medida. Trabalhamos com fornecedores que garantem rastreabilidade — qualidade que se sente na primeira fatia.",
        },
        {
          h2: "O segredo da brasa",
          p: "A brasa sela a carne e cria a crosta dourada enquanto mantém o interior suculento. Servimos com farofa de bacon, vinagrete e mandioca frita, acompanhamentos que conversam com o sabor defumado.",
        },
      ],
      dicas: {
        h3: "Como pedir o ponto ideal",
        p: "Para sentir todo o sabor, recomendamos o ponto ao ponto (mal a médio). Assim a gordura derrete o suficiente para perfumar a carne sem ressecar.",
      },
      cta: "Peça a Picanha na Brasa",
    },
    {
      slug: "sobremesas-artesanais-petit-gateau-tiramisu",
      titulo: "Sobremesas Artesanais: do Petit Gâteau ao Tiramisù",
      resumo:
        "Um passeio pelas sobremesas que fecham a refeição com chave de ouro — feitas na casa, todos os dias.",
      autor: "Confeiteira Marina Toledo",
      data: "2026-03-29",
      dataLabel: "29 de março de 2026",
      categoria: "Confeitaria",
      leitura: "4 min",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1280&q=80",
      topicos: [
        {
          h2: "Petit Gâteau: o ponto do recheio",
          p: "O charme do Petit Gâteau está no contraste entre a casca firme e o centro líquido. O segredo é o tempo exato de forno — alguns minutos a mais e o recheio cozinha; a menos, a massa não estrutura.",
        },
        {
          h2: "Tiramisù: equilíbrio entre café e mascarpone",
          p: "Nosso Tiramisù usa café expresso encorpado e mascarpone fresco. As camadas descansam para que os sabores se integrem, e o cacau é peneirado só na hora de servir, preservando o aroma.",
        },
      ],
      dicas: {
        h3: "Qual escolher?",
        p: "Quer algo quente e indulgente? Petit Gâteau. Prefere leveza e final de café? Tiramisù. Indecisos costumam pedir as duas para dividir — e não se arrependem.",
      },
      cta: "Veja todas as sobremesas",
    },
  ];

  window.KZ_DATA = { RESTAURANT, MENU, BLOG, TAGS: T };
})();
