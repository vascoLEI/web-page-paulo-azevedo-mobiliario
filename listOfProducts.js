const PRODUCTS = [
  // ---------- NOVIDADES: 9 NOVEMBRO 2026 ----------
  {
    id: "aparador-cerejeira-mjb",
    nome: "Aparador em cerejeira MJB",
    imagem: "images/novas/aparador/Aparador cerejeira MJB.jpg",
    categoria: "aparador",
    descricao: "Aparador em cerejeira com quatro portas e linhas arredondadas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "aparador-oval-branco-carvalho",
    nome: "Aparador oval branco e carvalho natural",
    imagem: "images/novas/aparador/Aparador oval branco com carvalho natural.jpg",
    categoria: "aparador",
    descricao: "Aparador com portas em carvalho natural e laterais brancas caneladas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "aparador-pau-ferro-branco",
    nome: "Aparador em pau-ferro e branco",
    imagem: "images/novas/aparador/Aparador pau ferro e branco.jpg",
    categoria: "aparador",
    descricao: "Aparador com estrutura em pau-ferro, frentes brancas e gavetas laterais.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "base-tv-americana",
    nome: "Base TV americana",
    imagem: "images/novas/base/Base TV americana.jpg",
    categoria: "base",
    descricao: "Base de TV com estrutura em madeira, frentes brancas e pés inclinados.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "base-tv-branca-friso-mesas",
    nome: "Base TV branca com friso e mesas de centro",
    imagem: "images/novas/base/Base TV branca com friso + Mesa de centro .jpg",
    categoria: "base",
    descricao: "Conjunto de base de TV branca e duas mesas de centro com estrutura preta.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "base-tv-carvalho-branco-led-mesas",
    nome: "Base TV em carvalho e branco com LED",
    imagem: "images/novas/base/Base TV carvalho natural e branco com led + Mesa de centro .jpg",
    categoria: "base",
    descricao: "Base de TV em carvalho e branco com nicho central e mesas de centro a combinar.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "base-tv-nogueira-branco-mesa",
    nome: "Base TV e mesa de centro em nogueira e branco",
    imagem: "images/novas/base/Base TV nogueira e branco + mesa de centro nogueira e branco.jpg",
    categoria: "base",
    descricao: "Conjunto em nogueira e branco com base de TV e mesa de centro geométrica.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "base-tv-oval-branco-carvalho",
    nome: "Base TV oval branca e carvalho natural",
    imagem: "images/novas/base/Base TV oval branco com carvalho natural.png",
    categoria: "base",
    descricao: "Base de TV com laterais caneladas, portas em carvalho e nicho aberto.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cadeira-01-frente",
    nome: "Cadeira - vista frontal",
    imagem: "images/novas/cadeiras/Cadeira 01 frente.jpg",
    categoria: "cadeira",
    descricao: "Cadeira estofada com encosto arredondado e estrutura em madeira natural.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cadeirao-02-perna-conica",
    nome: "Cadeirão com perna cónica",
    imagem: "images/novas/cadeiras/Cadeirão 02 perna cónica.jpg",
    categoria: "cadeira",
    descricao: "Cadeirão estofado com braços envolventes e pés cónicos em madeira.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cadeirao-03",
    nome: "Cadeirão",
    imagem: "images/novas/cadeiras/Cadeirão 03 .jpg",
    categoria: "cadeira",
    descricao: "Cadeirão em tecido claro com braços integrados e pés em madeira.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cadeiras-varios-modelos",
    nome: "Cadeiras em vários modelos",
    imagem: "images/novas/cadeiras/Cadeiras Vários modelos.jpg",
    categoria: "cadeira",
    descricao: "Seleção de cadeiras com diferentes formatos, tecidos e cores.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cama-california-visco-fresh",
    nome: "Cama California com colchão Visco Fresh",
    imagem: "images/novas/cama/Cama California + colchão Visco Fresh.jpg",
    categoria: "quarto",
    descricao: "Cama estofada com cabeceira canelada e detalhes dourados, com colchão Visco Fresh.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cama-charlotte-classi-roll",
    nome: "Cama Charlotte com colchão Classi Roll",
    imagem: "images/novas/cama/Cama Charlotte + Colchão Classi roll.jpg",
    categoria: "quarto",
    descricao: "Cama em tecido cinzento com cabeceira capitoné e colchão Classi Roll.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cama-denver-levit",
    nome: "Cama Denver com colchão Levit",
    imagem: "images/novas/cama/Cama Denver + colchão Levit.jpg",
    categoria: "quarto",
    descricao: "Cama estofada em cinzento com apontamentos dourados e colchão Levit.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cama-merida-top-luxury",
    nome: "Cama Mérida bege com colchão Top Luxury",
    imagem: "images/novas/cama/Cama Mérida bege + Colchão Top Luxury.jpg",
    categoria: "quarto",
    descricao: "Cama bege com cabeceira de painéis inclinados e colchão Top Luxury.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cama-montana-orthopedic",
    nome: "Cama Montana com colchão Orthopedic",
    imagem: "images/novas/cama/Cama Montana + Colchão Ortophedic.jpg",
    categoria: "quarto",
    descricao: "Cama estofada com cabeceira capitoné e colchão Orthopedic.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cama-mesinhas-suspensas-nogueira",
    nome: "Cama com mesinhas suspensas em nogueira",
    imagem: "images/novas/cama/Cama Outubro2026 frent cama nogueiraII.jpeg",
    categoria: "quarto",
    descricao: "Cama estofada com cabeceira ampla e mesinhas suspensas em nogueira.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesinha-suspensa-nogueira",
    nome: "Mesinha suspensa em nogueira",
    imagem: "images/novas/cama/Cama Outubro2026 mesinha suspensa nogueira.jpeg",
    categoria: "quarto",
    descricao: "Detalhe da mesinha suspensa em nogueira, integrada na cabeceira estofada.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "cama-praga-georgia",
    nome: "Cama Praga com colchão Georgia",
    imagem: "images/novas/cama/Cama Praga + Colchão Georgia.jpg",
    categoria: "quarto",
    descricao: "Cama estofada azul com cabeceira ampla e colchão Georgia.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-classi-visco",
    nome: "Colchão Classi Visco",
    imagem: "images/novas/colchao/Colchão Classi Visco 26cm.jpg",
    categoria: "colchao",
    descricao: "Colchão Classi Visco com tampo acolchoado e laterais em tom claro.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-confor-plus",
    nome: "Colchão Confor Plus",
    imagem: "images/novas/colchao/Colchão Confor Plus molas ensacadas.jpg",
    categoria: "colchao",
    descricao: "Colchão Confor Plus de molas ensacadas, com acabamento em tecido claro.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-georgia",
    nome: "Colchão Georgia",
    imagem: "images/novas/colchao/Colchão Georgia 26cm.jpg",
    categoria: "colchao",
    descricao: "Colchão Georgia com tampo branco acolchoado e laterais cinzentas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-king",
    nome: "Colchão King",
    imagem: "images/novas/colchao/Colchão King molas ensacadas 30cm.jpg",
    categoria: "colchao",
    descricao: "Colchão King de molas ensacadas, com tampo claro e laterais cinzentas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-levit",
    nome: "Colchão Levit",
    imagem: "images/novas/colchao/Colchão Levit molas ensacadas 33cm.jpg",
    categoria: "colchao",
    descricao: "Colchão Levit de molas ensacadas, com tecido escuro e costuras onduladas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-orthopedic",
    nome: "Colchão Orthopedic",
    imagem: "images/novas/colchao/Colchão Orthopedic molas ensacadas 29cm.jpg",
    categoria: "colchao",
    descricao: "Colchão Orthopedic de molas ensacadas, com acolchoado e costuras decorativas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-texas",
    nome: "Colchão Texas",
    imagem: "images/novas/colchao/Colchão Texas molas ensacadas 29cm.jpg",
    categoria: "colchao",
    descricao: "Colchão Texas de molas ensacadas, com laterais castanhas e tampo claro.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-top-luxury",
    nome: "Colchão Top Luxury",
    imagem: "images/novas/colchao/Colchão Top Luxury  molas ensacadas 29cm.jpg",
    categoria: "colchao",
    descricao: "Colchão Top Luxury de molas ensacadas, com laterais acolchoadas em losangos.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "colchao-visco-fresh",
    nome: "Colchão Visco Fresh",
    imagem: "images/novas/colchao/Colchão Visco Fresh molas ensacadas 30cm.jpg",
    categoria: "colchao",
    descricao: "Colchão Visco Fresh de molas ensacadas, com faixa lateral azul e tampo claro.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesas-centro-nogueira-par",
    nome: "Mesas de centro com tampo em nogueira",
    imagem: "images/novas/mesa/Mesa centro tampo nogueira par.jpeg",
    categoria: "mesa",
    descricao: "Par de mesas de centro redondas com tampos em nogueira e estrutura dourada.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesa-oval-branca-pe-central",
    nome: "Mesa oval branca com pé central",
    imagem: "images/novas/mesa/Mesa oval branca pé central.jpg",
    categoria: "mesa",
    descricao: "Mesa de jantar oval branca com pé central canelado.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesa-sala-branca-200x100",
    nome: "Mesa de jantar branca",
    imagem: "images/novas/mesa/Mesa sala branca 200x100 50+50.jpg",
    categoria: "mesa",
    descricao: "Mesa branca com base central curva e pormenores diagonais no tampo.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesa-jantar-012-castanho-natural",
    nome: "Mesa de jantar 012 em castanho natural",
    imagem: "images/novas/mesa/Mesa sala jantar 012 castanho natural  140x90(60)II.jpeg",
    categoria: "mesa",
    descricao: "Mesa de jantar retangular em tom natural, apresentada com cadeiras estofadas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesa-jantar-oval-branca-carvalho",
    nome: "Mesa oval branca e carvalho natural",
    imagem: "images/novas/mesa/Mesa sala jantar oval branca com carvalho natural.jpg",
    categoria: "mesa",
    descricao: "Mesa oval com tampo branco, rebordo em carvalho e apoios canelados.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesa-redonda-150",
    nome: "Mesa de jantar redonda branca",
    imagem: "images/novas/mesa/Mesa sala redonda 150.jpg",
    categoria: "mesa",
    descricao: "Mesa redonda branca com base central cónica e acabamento canelado.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesa-redonda-carvalho",
    nome: "Mesa redonda em carvalho",
    imagem: "images/novas/mesa/Mesa sala redonda carvalho.jpg",
    categoria: "mesa",
    descricao: "Mesa de jantar redonda em carvalho com pé central e cadeiras em tecido claro.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesa-redonda-tampo-vidro",
    nome: "Mesa redonda com tampo em vidro",
    imagem: "images/novas/mesa/Mesa sala redonda tampo vidro .jpg",
    categoria: "mesa",
    descricao: "Mesa redonda com tampo transparente e base geométrica em madeira.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesas-centro-par-pernas-douradas",
    nome: "Mesas de centro com pernas douradas",
    imagem: "images/novas/mesa/Mesas centro par pernas douradas.jpg",
    categoria: "mesa",
    descricao: "Par de mesas redondas com tampos de efeito mármore e bases douradas curvas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "mesas-centro-redondas-dourado-branco",
    nome: "Mesas de centro redondas em dourado e branco",
    imagem: "images/novas/mesa/Mesas centro redondas dour_br.jpg",
    categoria: "mesa",
    descricao: "Duas mesas de centro com tampos claros e estruturas geométricas douradas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-branco-cinza",
    nome: "Quarto branco e cinzento",
    imagem: "images/novas/quarto/Quarto branco com cinza.jpg",
    categoria: "quarto",
    descricao: "Conjunto de quarto branco com pormenores geométricos em cinzento.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-branco-barras-douradas",
    nome: "Quarto com barras douradas",
    imagem: "images/novas/quarto/Quarto casal branco com barras douradas.jpg",
    categoria: "quarto",
    descricao: "Quarto com cama estofada bege e móveis brancos com barras douradas.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-branco-pormenores-dourados",
    nome: "Quarto branco com pormenores dourados",
    imagem: "images/novas/quarto/Quarto casal branco com pormenores em dourado.jpg",
    categoria: "quarto",
    descricao: "Conjunto de quarto com cabeceira estofada e apontamentos verticais dourados.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-cantos-redondos-branco-dourado",
    nome: "Quarto de cantos redondos em branco e dourado",
    imagem: "images/novas/quarto/Quarto casal cantos redondos branco e dourado.jpg",
    categoria: "quarto",
    descricao: "Quarto com móveis de cantos arredondados, frentes brancas e contornos dourados.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-carvalho-natural",
    nome: "Quarto em carvalho natural",
    imagem: "images/novas/quarto/Quarto casal em carvalho natural .jpg",
    categoria: "quarto",
    descricao: "Cama estofada com moldura e mesinhas em carvalho natural.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-onda-carvalho-branco",
    nome: "Quarto Onda em carvalho e branco",
    imagem: "images/novas/quarto/Quarto onda carvalho natural e branco.jpg",
    categoria: "quarto",
    descricao: "Conjunto de quarto em carvalho natural e branco com pormenores ondulados.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-toronto-bege",
    nome: "Quarto Toronto bege",
    imagem: "images/novas/quarto/Quarto Toronto_bege.png",
    categoria: "quarto",
    descricao: "Quarto Toronto em bege com cabeceira geométrica e pormenores dourados.",
    adicionadoEm: "2026-11-09"
  },
  {
    id: "quarto-toronto-branco",
    nome: "Quarto Toronto branco",
    imagem: "images/novas/quarto/Quarto Toronto_branco.png",
    categoria: "quarto",
    descricao: "Quarto Toronto branco com linhas geométricas e apontamentos prateados.",
    adicionadoEm: "2026-11-09"
  },

  // ---------- APARADORES ----------
  {
    id: "aparador-1",
    nome: "Aparador",
    imagem: "images/antigas/aparador.jpg",
    categoria: "aparador",
    descricao: "Aparador moderno com arrumação, ideal para sala de estar ou de jantar."
  },
  {
    id: "aparador-2",
    nome: "Aparador branco",
    imagem: "images/antigas/aparador0.jpg",
    categoria: "aparador",
    descricao: "Aparador em acabamento claro, perfeito para ambientes luminosos."
  },
  {
    id: "aparador-3",
    nome: "Aparador branco",
    imagem: "images/novas/aparador/Aparador + Espelho branco com ripado carvalho 1,95.jpg.jpeg",
    categoria: "aparador",
    descricao: "Aparador moderno branco com detalhes verticais em madeira e base em tom natural, design minimalista e elegante."
  },
  {
    id: "aparador-4",
    nome: "Aparador branco",
    imagem: "images/novas/aparador/Aparador + Espelho branco com tampo em carvalho 1,95.jpg.jpeg",
    categoria: "aparador",
    descricao: "Aparador contemporâneo branco com cantos arredondados, detalhes em madeira e pés metálicos elegantes."
  },
  {
    id: "aparador-5",
    nome: "Aparador branco",
    imagem: "images/novas/aparador/Aparador branco cantos redondos 2m.jpg.jpeg",
    categoria: "aparador",
    descricao: "Aparador branco com design curvo e textura canelada, estilo moderno e sofisticado."
  },
  {
    id: "aparador-6",
    nome: "Aparador Cerejeira",
    imagem: "images/novas/aparador/Aparador cerejeira com pormenores em branco 1,95.jpg.jpeg",
    categoria: "aparador",
    descricao: "Aparador moderno branco com estrutura em madeira e padrão geométrico marcante."
  },
  {
    id: "aparador-7",
    nome: "Aparador Cinza",
    imagem: "images/novas/aparador/Aparador lacado cinza tampo mármore 2m.jpg.jpeg",
    categoria: "aparador",
    descricao: "Aparador minimalista branco com linhas retas e base escura discreta."
  },
  {
    id: "aparador-8",
    nome: "Aparador Nogueira",
    imagem: "images/novas/aparador/Aparador Nogueira com portas brancas 1,95.jpg.jpeg",
    categoria: "aparador",
    descricao: "Aparador moderno branco com moldura em madeira e padrão geométrico subtil."
  },


  // ---------- ARMÁRIOS / ARRUMAÇÃO ----------
  {
    id: "armarios-1",
    nome: "Armários de arrumação",
    imagem: "images/antigas/armarios.jpg",
    categoria: "quarto",
    descricao: "Módulo de armários para arrumação de quarto."
  },

  // ---------- CAMAS (NOVAS) ----------
{
  id: "cama-n-1",
  nome: "Cama",
  imagem: "images/novas/cama/cama-n-1.jpeg",
  categoria: "quarto",
  descricao: "Cama elegante com design sofisticado e conforto excecional."
},
{
  id: "cama-n-2",
  nome: "Cama",
  imagem: "images/novas/cama/cama-n-2.jpeg",
  categoria: "quarto",
  descricao: "Cama moderna com acabamento refinado e presença imponente."
},
{
  id: "cama-n-3",
  nome: "Cama",
  imagem: "images/novas/cama/cama-n-3.jpeg",
  categoria: "quarto",
  descricao: "Cama distinta com linhas harmoniosas e conforto superior."
},
{
  id: "cama-n-4",
  nome: "Cama",
  imagem: "images/novas/cama/cama-n-4.jpeg",
  categoria: "quarto",
  descricao: "Cama sofisticada com estrutura robusta e excelente qualidade."
},
{
  id: "cama-n-5",
  nome: "Cama",
  imagem: "images/novas/cama/cama-n-5.jpeg",
  categoria: "quarto",
  descricao: "Cama confortável com design contemporâneo e acabamento premium."
},

// ---------- COLCHÕES ----------
{
  id: "colchao-1",
  nome: "Colchão",
  imagem: "images/antigas/colchão.jpg",
  categoria: "colchao",
  descricao: "Colchão confortável, ideal para noites de descanso profundo."
},

// ---------- ESPELHOS / DECORAÇÃO ----------
{
  id: "espelho-redondo-2",
  nome: "Espelho redondo",
  imagem: "images/antigas/espelho redondo2.jpg",
  categoria: "decoracao",
  descricao: "Variante de espelho redondo com design elegante."
},
  // ---------- MESAS ----------
{
  id: "mesa-n-1",
  nome: "Mesa",
  imagem: "images/novas/mesa/mesa-n-1.jpeg",
  categoria: "mesa",
  descricao: "Mesa elegante com design sofisticado e acabamento de elevada qualidade."
},
{
  id: "mesa-n-2",
  nome: "Mesa",
  imagem: "images/novas/mesa/mesa-n-2.jpeg",
  categoria: "mesa",
  descricao: "Mesa moderna com estrutura sólida e presença marcante."
},
{
  id: "mesa-n-4",
  nome: "Mesa",
  imagem: "images/novas/mesa/mesa-n-4.jpeg",
  categoria: "mesa",
  descricao: "Mesa distinta com linhas harmoniosas e design contemporâneo."
},
{
  id: "mesa-n-5",
  nome: "Mesa",
  imagem: "images/novas/mesa/mesa-n-5.jpeg",
  categoria: "mesa",
  descricao: "Mesa sofisticada com acabamento refinado e excelente durabilidade."
},
{
  id: "mesa-n-6",
  nome: "Mesa",
  imagem: "images/novas/mesa/mesa-n-6.jpeg",
  categoria: "mesa",
  descricao: "Mesa elegante com estrutura robusta e estética moderna."
},  

  // ---------- PUFFS ----------
  {
    id: "pufe-branco",
    nome: "Puff branco",
    imagem: "images/antigas/pufe branco.jpg",
    categoria: "decoracao",
    descricao: "Puff redondo estofado em branco, ideal para complementar a sala."
  },

  // ---------- CADEIRAS ----------
{
  id: "cadeira-n-1",
  nome: "Cadeira",
  imagem: "images/novas/cadeiras/cadeira-n-1.jpeg",
  categoria: "cadeira",
  descricao: "Cadeira elegante com design refinado e excelente conforto."
},
{
  id: "cadeira-n-2",
  nome: "Cadeira",
  imagem: "images/novas/cadeiras/cadeira-n-2.jpeg",
  categoria: "cadeira",
  descricao: "Cadeira sofisticada com acabamento cuidado e presença distinta."
},
{
  id: "cadeira-n-3",
  nome: "Cadeira",
  imagem: "images/novas/cadeiras/cadeira-n-3.jpeg",
  categoria: "cadeira",
  descricao: "Cadeira moderna com linhas harmoniosas e conforto superior."
},
{
  id: "cadeira-n-4",
  nome: "Cadeira",
  imagem: "images/novas/cadeiras/cadeira-n-4.jpeg",
  categoria: "cadeira",
  descricao: "Cadeira confortável com estrutura elegante e design equilibrado."
},
{
  id: "cadeira-n-5",
  nome: "Cadeira",
  imagem: "images/novas/cadeiras/cadeira-n-5.jpeg",
  categoria: "cadeira",
  descricao: "Cadeira contemporânea com presença marcante e acabamento premium."
},
{
  id: "cadeira-n-6",
  nome: "Cadeira",
  imagem: "images/novas/cadeiras/cadeira-n-6.jpeg",
  categoria: "cadeira",
  descricao: "Cadeira distinta com design moderno e conforto excecional."
},
{
  id: "cadeira-n-7",
  nome: "Banco",
  imagem: "images/novas/cadeiras/cadeira-n-7.jpeg",
  categoria: "cadeira",
  descricao: "Banco elegante com linhas sofisticadas e excelente ergonomia."
},

// ---------- SOFÁS  ----------
{
  id: "sala-n-1",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-1.jpeg",
  categoria: "sofa",
  descricao: "Sofá elegante com elevado conforto e design harmonioso."
},
{
  id: "sala-n-2",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-2.jpeg",
  categoria: "sofa",
  descricao: "Sofá moderno com estrutura equilibrada e conforto superior."
},
{
  id: "sala-n-3",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-3.jpeg",
  categoria: "sofa",
  descricao: "Sofá sofisticado com acabamento cuidado e presença marcante."
},
{
  id: "sala-n-4",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-4.jpeg",
  categoria: "sofa",
  descricao: "Sofá contemporâneo com design elegante e conforto envolvente."
},
{
  id: "sala-n-5",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-5.jpeg",
  categoria: "sofa",
  descricao: "Sofá confortável com linhas modernas e estética refinada."
},
{
  id: "sala-n-6",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-6.jpeg",
  categoria: "sofa",
  descricao: "Sofá acolhedor com estrutura robusta e conforto duradouro."
},
{
  id: "sala-n-7",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-7.jpeg",
  categoria: "sofa",
  descricao: "Sofá elegante com design equilibrado e conforto excecional."
},
{
  id: "sala-n-8",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-8.jpeg",
  categoria: "sofa",
  descricao: "Sofá sofisticado com presença distinta e toque confortável."
},
{
  id: "sala-n-9",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-9.jpeg",
  categoria: "sofa",
  descricao: "Sofá moderno com acabamento refinado e conforto envolvente."
},
{
  id: "sala-n-10",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-10.jpeg",
  categoria: "sofa",
  descricao: "Sofá contemporâneo com estrutura elegante e elevado conforto."
},
{
  id: "sala-n-11",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-11.jpeg",
  categoria: "sofa",
  descricao: "Sofá confortável com design minimalista e presença sofisticada."
},
{
  id: "sala-n-12",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-12.jpeg",
  categoria: "sofa",
  descricao: "Sofá elegante com linhas suaves e conforto superior."
},
{
  id: "sala-n-13",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-13.jpeg",
  categoria: "sofa",
  descricao: "Sofá moderno com estrutura sólida e conforto acolhedor."
},
{
  id: "sala-n-14",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-14.jpeg",
  categoria: "sofa",
  descricao: "Sofá sofisticado com design contemporâneo e conforto envolvente."
},
{
  id: "sala-n-15",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-15.jpeg",
  categoria: "sofa",
  descricao: "Sofá elegante com acabamento cuidado e conforto duradouro."
},
{
  id: "sala-n-16",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-16.jpeg",
  categoria: "sofa",
  descricao: "Sofá confortável com presença harmoniosa e design moderno."
},
{
  id: "sala-n-17",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-17.jpeg",
  categoria: "sofa",
  descricao: "Sofá contemporâneo com linhas equilibradas e conforto superior."
},
{
  id: "sala-n-18",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-18.jpeg",
  categoria: "sofa",
  descricao: "Sofá elegante com estética refinada e conforto envolvente."
},
{
  id: "sala-n-19",
  nome: "Sofá",
  imagem: "images/novas/sala/sala-n-19.jpeg",
  categoria: "sofa",
  descricao: "Sofá sofisticado com design moderno e conforto excecional."
},
/*BASES TV */
{
  id: "base-n-1",
  nome: "Base TV",
  imagem: "images/novas/base/Base TV + Mesa de centro barco com carvalho natural.jpg.jpeg",
  categoria: "base",
  descricao: "Base TV"
},
{
  id: "base-n-2",
  nome: "Base TV",
  imagem: "images/novas/base/Base TV + Mesa de centro branca com pés dourados.jpg.jpeg",
  categoria: "base",
  descricao: "Base TV"
},
{
  id: "base-n-3",
  nome: "Base TV",
  imagem: "images/novas/base/Base TV + Mesa de centro branca com ripado carvalho.jpg.jpeg",
  categoria: "base",
  descricao: "Base TV"
},
{
  id: "base-n-4",
  nome: "Base TV",
  imagem: "images/novas/base/Base TV + Mesa de centro dupla branca com pés dourados.jpg.jpeg",
  categoria: "base",
  descricao: "Base TV"
},
].sort((a, b) => (b.adicionadoEm || "").localeCompare(a.adicionadoEm || ""));
