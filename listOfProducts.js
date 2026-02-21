const PRODUCTS = [
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
}

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
    descricao: "Variante de espelho redondo com detalhes dourados."
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

  // ---------- PUFES ----------
  {
    id: "pufe-branco",
    nome: "Pufe branco",
    imagem: "images/antigas/pufe branco.jpg",
    categoria: "decoracao",
    descricao: "Pufe redondo estofado em branco, ideal para complementar a sala."
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
];
