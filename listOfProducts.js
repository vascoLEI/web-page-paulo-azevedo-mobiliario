const PRODUTOS = [
  // ---------- APARADORES ----------
  {
    id: "aparador-1",
    nome: "Aparador",
    imagem: "images/aparador.jpg",
    categoria: "aparador",
    descricao: "Aparador moderno com arrumação, ideal para sala de estar ou de jantar."
  },
  {
    id: "aparador-2",
    nome: "Aparador branco",
    imagem: "images/aparador0.jpg",
    categoria: "aparador",
    descricao: "Aparador em acabamento claro, perfeito para ambientes luminosos."
  },

  // ---------- ARMÁRIOS / ARRUMAÇÃO ----------
  {
    id: "armarios-1",
    nome: "Armários de arrumação",
    imagem: "images/armarios.jpg",
    categoria: "quarto",
    descricao: "Módulo de armários para arrumação de quarto."
  },

  // ---------- CAMAS / QUARTO ----------
  {
    id: "cama-0",
    nome: "Cama",
    imagem: "images/cama.jpg",
    categoria: "quarto",
    descricao: "Cama estofada confortável, ideal para quartos modernos."
  },
  {
    id: "cama-1",
    nome: "Cama estofada",
    imagem: "images/cama1.jpg",
    categoria: "quarto",
    descricao: "Cama estofada com linhas simples e elegantes."
  },
  {
    id: "cama-2",
    nome: "Cama com arrumação",
    imagem: "images/cama2.jpg",
    categoria: "quarto",
    descricao: "Cama com base de arrumação integrada."
  },
  {
    id: "cama-3",
    nome: "Cama com cabeceira alta",
    imagem: "images/cama3.jpg",
    categoria: "quarto",
    descricao: "Cama com cabeceira estofada, ideal para leitura confortável."
  },
  {
    id: "cama-4",
    nome: "Cama estofada premium",
    imagem: "images/cama4.jpg",
    categoria: "quarto",
    descricao: "Modelo de cama estofada de gama superior."
  },
  {
    id: "cama-resultado",
    nome: "Cama estofada (resultado)",
    imagem: "images/sofa cama resultado.jpg",
    categoria: "quarto",
    descricao: "Cama/sofá-cama montado num quarto decorado."
  },

  // ---------- COLCHÕES ----------
  {
    id: "colchao-1",
    nome: "Colchão",
    imagem: "images/colchão.jpg",
    categoria: "colchao",
    descricao: "Colchão confortável, ideal para noites de descanso profundo."
  },

  // ---------- ESPELHOS / DECORAÇÃO ----------

  {
    id: "espelho-redondo-2",
    nome: "Espelho redondo (variante)",
    imagem: "images/espelho redondo2.jpg",
    categoria: "decoracao",
    descricao: "Variante de espelho redondo com detalhes dourados."
  },

  // ---------- MESAS DE CENTRO / SALA ----------
  {
    id: "mesa-centro-1",
    nome: "Mesa de centro",
    imagem: "images/mesa de centro.jpg",
    categoria: "sala",
    descricao: "Mesa de centro retangular com tampo em acabamento moderno."
  },
  {
    id: "mesa-centro-2",
    nome: "Mesa de centro (conjunto)",
    imagem: "images/mesa de centro (2).jpg",
    categoria: "sala",
    descricao: "Conjunto de mesas de centro em diferentes alturas."
  },
  {
    id: "mesa-centro-oval",
    nome: "Mesa de centro oval",
    imagem: "images/mesa de centro oval.jpg",
    categoria: "sala",
    descricao: "Mesa de centro oval com linhas suaves."
  },
  {
    id: "mesa-sala",
    nome: "Mesa de sala",
    imagem: "images/mesa de sala.jpg",
    categoria: "sala",
    descricao: "Mesa de apoio para sala de estar."
  },

  // ---------- PUFES ----------
  {
    id: "pufe-branco",
    nome: "Pufe branco",
    imagem: "images/pufe branco.jpg",
    categoria: "decoracao",
    descricao: "Pufe redondo estofado em branco, ideal para complementar a sala."
  },

  // ---------- QUARTOS (FOTOS DE AMBIENTE) ----------
  {
    id: "quarto-1",
    nome: "Quarto 1",
    imagem: "images/quarto.jpg",
    categoria: "quarto",
    descricao: "Ambiente de quarto completo com cama e decoração."
  },
  {
    id: "quarto-2",
    nome: "Quarto 2",
    imagem: "images/quarto (2).jpg",
    categoria: "quarto",
    descricao: "Outro ambiente de quarto com mobiliário moderno."
  },
  {
    id: "quarto-3",
    nome: "Quarto 3",
    imagem: "images/quarto (3).jpg",
    categoria: "quarto",
    descricao: "Quarto com cabeceira estofada e mesas de cabeceira."
  },
  {
    id: "quarto-4",
    nome: "Quarto 4",
    imagem: "images/quarto (4).jpg",
    categoria: "quarto",
    descricao: "Quarto decorado em tons neutros."
  },
  {
    id: "quarto-5",
    nome: "Quarto 5",
    imagem: "images/quarto (5).jpg",
    categoria: "quarto",
    descricao: "Quarto com foco em arrumação e conforto."
  },
  {
    id: "quarto-6",
    nome: "Quarto 6",
    imagem: "images/quarto (6).jpg",
    categoria: "quarto",
    descricao: "Quarto com iluminação suave e detalhes decorativos."
  },
  {
    id: "quarto-7",
    nome: "Quarto 7",
    imagem: "images/quarto (7).jpg",
    categoria: "quarto",
    descricao: "Quarto com mobiliário claro e moderno."
  },
  {
    id: "quarto-8",
    nome: "Quarto 8",
    imagem: "images/quarto (8).jpg",
    categoria: "quarto",
    descricao: "Ambiente de quarto acolhedor."
  },
  {
    id: "quarto-9",
    nome: "Quarto 9",
    imagem: "images/quarto (9).jpg",
    categoria: "quarto",
    descricao: "Quarto com cama estofada e mesas de cabeceira."
  },
  {
    id: "quarto-10",
    nome: "Quarto 10",
    imagem: "images/quarto (10).jpg",
    categoria: "quarto",
    descricao: "Quarto com destaque na cabeceira e iluminação."
  },
  {
    id: "quarto-11",
    nome: "Quarto 11",
    imagem: "images/quarto (11).jpg",
    categoria: "quarto",
    descricao: "Ambiente de quarto com cores suaves e confortáveis."
  },

  // ---------- SALAS (AMBientes de sala) ----------
  {
    id: "sala-detalhes-madeira",
    nome: "Sala com detalhes em madeira",
    imagem: "images/sala detalhes madeira.jpg",
    categoria: "sala",
    descricao: "Sala com detalhes em madeira e decoração moderna."
  },
  {
    id: "sala-1",
    nome: "Sala 1",
    imagem: "images/sala (3).jpg",
    categoria: "sala",
    descricao: "Ambiente de sala de estar com sofá e mesa de centro."
  },
  {
    id: "sala-2",
    nome: "Sala 2",
    imagem: "images/sala (4).jpg",
    categoria: "sala",
    descricao: "Sala de estar com sofá e mobiliário moderno."
  },
  {
    id: "sala-3",
    nome: "Sala 3",
    imagem: "images/sala (5).jpg",
    categoria: "sala",
    descricao: "Sala em tons neutros e confortáveis."
  },
  {
    id: "sala-4",
    nome: "Sala 4",
    imagem: "images/sala (6).jpg",
    categoria: "sala",
    descricao: "Sala com sofá em L e decoração contemporânea."
  },

  // ---------- SALA DE JANTAR ----------
  {
    id: "sala-jantar-1",
    nome: "Sala de jantar 1",
    imagem: "images/sala de jantar.jpg",
    categoria: "sala",
    descricao: "Sala de jantar com mesa retangular e cadeiras estofadas."
  },
  {
    id: "sala-jantar-2",
    nome: "Sala de jantar 2",
    imagem: "images/sala de jantar (2).jpg",
    categoria: "sala",
    descricao: "Outra composição de sala de jantar."
  },
  {
    id: "sala-jantar-3",
    nome: "Sala de jantar 3",
    imagem: "images/sala de jantar (3).jpg",
    categoria: "sala",
    descricao: "Sala de jantar com destaque para a iluminação."
  },
  {
    id: "sala-jantar-4",
    nome: "Sala de jantar 4",
    imagem: "images/sala de jantar (4).jpg",
    categoria: "sala",
    descricao: "Sala de jantar com mesa e cadeiras em tom claro."
  },

  // ---------- SOFÁS ----------
  {
    id: "sofa-1",
    nome: "Sofá 1",
    imagem: "images/sofa.jpg",
    categoria: "sala",
    descricao: "Sofá confortável para sala de estar."
  },
  {
    id: "sofa-2",
    nome: "Sofá 2",
    imagem: "images/sofa (2).jpg",
    categoria: "sala",
    descricao: "Sofá de linhas modernas."
  },
  {
    id: "sofa-3",
    nome: "Sofá 3",
    imagem: "images/sofa (3).jpg",
    categoria: "sala",
    descricao: "Sofá em tecido claro, ideal para salas luminosas."
  },
  {
    id: "sofa-4",
    nome: "Sofá 4",
    imagem: "images/sofa (4).jpg",
    categoria: "sala",
    descricao: "Variante de sofá em outro ambiente."
  },
  {
    id: "sofa-branco",
    nome: "Sofá branco",
    imagem: "images/sofá branco.jpg",
    categoria: "sala",
    descricao: "Sofá de canto em tecido branco, muito confortável."
  },
  {
    id: "sofa-cama",
    nome: "Sofá-cama",
    imagem: "images/sofá cama.jpg",
    categoria: "sala",
    descricao: "Sofá que se converte em cama, ideal para visitas."
  },
  {
    id: "sofa-com-arrumacao",
    nome: "Sofá com arrumação",
    imagem: "images/sofá com arrumação.jpg",
    categoria: "sala",
    descricao: "Sofá com espaço de arrumação integrado."
  },
  {
    id: "sofa-resultado-1",
    nome: "Sofá (resultado)",
    imagem: "images/sofa Resultado.jpg",
    categoria: "sala",
    descricao: "Sofá em ambiente final decorado."
  },
  {
    id: "sofa-resultado-2",
    nome: "Sofá (resultado 2)",
    imagem: "images/sofa Resultado (2).jpg",
    categoria: "sala",
    descricao: "Outra perspetiva de sofá já colocado em sala."
  },
  {
    id: "sofa-resultado-3",
    nome: "Sofá (resultado 3)",
    imagem: "images/sofa Resultado(repetido).jpg",
    categoria: "sala",
    descricao: "Versão repetida do ambiente de sofá."
  }
];
