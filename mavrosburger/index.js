let express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const path = require("path");

var app = express();

app.use(cors());

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(
  session({
    secret: "teste",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "views")));

app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  //res.json("fsdfsdfsdf");
  if (!req.session.meuspedidos) {
    req.session.meuspedidos = "";
    req.session.pedidoCompleto = "";
    req.session.numeroDoPedido = 1;
    req.session.total = 0;
  }
  res.render("index");
});

var carnes = [
  {
    nome: "Hambúrguer",
    preco: "2.50",
  },
  {
    nome: "Carne Caseira",
    preco: "5.50",
  },
  {
    nome: "Frango Desfiado",
    preco: "3.00",
  },
  {
    nome: "Carne de Sol Desfiada",
    preco: "4.00",
  },
  {
    nome: "Linguiça Suína",
    preco: "3.00",
  },
];

var paes = [
  {
    nome: "Pão Brioche",
    preco: "3.00",
  },
  {
    nome: "Pão Bola",
    preco: "2.00",
  },
  {
    nome: "Pão de Batata",
    preco: "3.00",
  },
];

var queijos = [
  {
    nome: "Chedar",
    preco: "2.25",
  },
  {
    nome: "Coalho",
    preco: "2.25",
  },
  {
    nome: "Mussarela",
    preco: "2.50",
  },
];

var adicionais2 = [
  {
    nome: "Calabresa",
    preco: "2.00",
  },
  {
    nome: "Frango Desfiado",
    preco: "3.00",
  },
  {
    nome: "Bacon",
    preco: "2.00",
  },
  {
    nome: "Linguiça Suína",
    preco: "2.50",
  },
  {
    nome: "Batata Palha",
    preco: "1.00",
  },
  {
    nome: "Ovo",
    preco: "1.25",
  },
  {
    nome: "Cebola Caramelizada",
    preco: "1.00",
  },
  {
    nome: "Presunto",
    preco: "1.75",
  },
];

var molhos = [
  { nome: "Ketchup Industrial", preco: "0.00" },
  { nome: "Maionese Industrial", preco: "0.00" },
  { nome: "Molho Barbecue", preco: "1.00" },
  { nome: "Mostarda", preco: "1.00" },
  { nome: "Maionese Mavros", preco: "1.00" },
  { nome: "Creme de Cheddar", preco: "2.00" },
];

var complemetos = [
  {
    nome: "Cebola Crua",
    preco: "0.00",
  },
  {
    nome: "Tomate",
    preco: "0.00",
  },
  {
    nome: "Alface",
    preco: "0.00",
  },
  {
    nome: "Cenoura Ralada",
    preco: "0.00",
  },
];

app.get("/sanduiche", (req, res) => {
  res.render("sanduiche", {
    carnes: carnes,
    paes: paes,
    queijos: queijos,
    adicionais: adicionais2,
    complemetos: complemetos,
    molhos: molhos,
    numeroDoPedido: req.session.numeroDoPedido,
  });
});

app.post("/pedidosanduiche", (req, res) => {
  req.session.pedidoCompleto += `\n\n*PEDIDO N°: ${req.session.numeroDoPedido}* `;

  req.session.meuspedidos += JSON.stringify(req.body) + ",";
  req.session.meuspedidos = req.session.meuspedidos.slice(0, -1);
  req.session.meuspedidos = JSON.parse(req.session.meuspedidos);
  req.session.pedidoCompleto += `\n\n🍔 *SANDUICHE:*\n\n`;

  req.session.pedidoCompleto += `\n🥩 *CARNE:*\n`;

  if (req.session.meuspedidos.carne != undefined) {
    if (Array.isArray(req.session.meuspedidos.carne)) {
      for (x = 0; x < req.session.meuspedidos.carne.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.carne[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.carne} \n`;
    }
  }

  req.session.pedidoCompleto += `\n\n🥖 *PÃO:*\n`;

  if (req.session.meuspedidos.pao != undefined) {
    if (Array.isArray(req.session.meuspedidos.pao)) {
      for (x = 0; x < req.session.meuspedidos.pao.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.pao[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.pao} \n`;
    }
  }
  req.session.pedidoCompleto += `\n\n🧀 *QUEIJO:*\n`;

  if (req.session.meuspedidos.queijo != undefined) {
    if (Array.isArray(req.session.meuspedidos.queijo)) {
      for (x = 0; x < req.session.meuspedidos.queijo.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.queijo[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.queijo} \n`;
    }
  }

  req.session.pedidoCompleto += `\n\n🥓 *ADICIONAIS:*\n`;

  if (req.session.meuspedidos.adicional != undefined) {
    if (Array.isArray(req.session.meuspedidos.adicional)) {
      for (x = 0; x < req.session.meuspedidos.adicional.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.adicional[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.adicional} \n`;
    }
  }

  req.session.pedidoCompleto += `\n\n🍳 *COMPLEMENTOS:*\n`;

  if (req.session.meuspedidos.complemeto != undefined) {
    if (Array.isArray(req.session.meuspedidos.complemeto)) {
      for (x = 0; x < req.session.meuspedidos.complemeto.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.complemeto[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.complemeto} \n`;
    }
  }

  req.session.total += parseInt(req.session.meuspedidos.TotalSanduiche);
  req.session.pedidoCompleto += "\n\n📣 *OBSERVAÇÃO:* \n";

  req.session.pedidoCompleto += `\n    ${req.session.meuspedidos.observacao} `;

  req.session.meuspedidos = "";

  req.session.pedidoCompleto += "\n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀";

  console.log(req.session.pedidoCompleto);

  req.session.numeroDoPedido++;

  res.render("index");
});

app.post("/finalizarpedidosanduiche", (req, res) => {
  req.session.pedidoCompleto += `\n\n*PEDIDO N°: ${req.session.numeroDoPedido}* `;

  req.session.meuspedidos += JSON.stringify(req.body) + ",";
  req.session.meuspedidos = req.session.meuspedidos.slice(0, -1);
  req.session.meuspedidos = JSON.parse(req.session.meuspedidos);
  req.session.pedidoCompleto += `\n\n🍔 *SANDUICHE:*\n\n`;

  req.session.pedidoCompleto += `\n🥩 *CARNE:*\n`;

  if (req.session.meuspedidos.carne != undefined) {
    if (Array.isArray(req.session.meuspedidos.carne)) {
      for (x = 0; x < req.session.meuspedidos.carne.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.carne[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.carne} \n`;
    }
  }

  req.session.pedidoCompleto += `\n\n🥖 *PÃO:*\n`;

  if (req.session.meuspedidos.pao != undefined) {
    if (Array.isArray(req.session.meuspedidos.pao)) {
      for (x = 0; x < req.session.meuspedidos.pao.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.pao[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.pao} \n`;
    }
  }
  req.session.pedidoCompleto += `\n\n🧀 *QUEIJO:*\n`;

  if (req.session.meuspedidos.queijo != undefined) {
    if (Array.isArray(req.session.meuspedidos.queijo)) {
      for (x = 0; x < req.session.meuspedidos.queijo.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.queijo[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.queijo} \n`;
    }
  }

  req.session.pedidoCompleto += `\n\n🥓 *ADICIONAIS:*\n`;

  if (req.session.meuspedidos.adicional != undefined) {
    if (Array.isArray(req.session.meuspedidos.adicional)) {
      for (x = 0; x < req.session.meuspedidos.adicional.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.adicional[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.adicional} \n`;
    }
  }

  req.session.pedidoCompleto += `\n\n🍳 *COMPLEMENTOS:*\n`;

  if (req.session.meuspedidos.complemeto != undefined) {
    if (Array.isArray(req.session.meuspedidos.complemeto)) {
      for (x = 0; x < req.session.meuspedidos.complemeto.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.complemeto[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.complemeto} \n`;
    }
  }
  req.session.total += parseInt(req.session.meuspedidos.TotalSanduiche);
  req.session.pedidoCompleto += "\n\n📣 *OBSERVAÇÃO:* \n";

  req.session.pedidoCompleto += `\n    ${req.session.meuspedidos.observacao} `;

  req.session.meuspedidos = "";

  req.session.pedidoCompleto += "\n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀";

  console.log(req.session.pedidoCompleto);

  req.session.numeroDoPedido++;

  res.render("finalizar");
});

//-------------------------------------------------------------------

var bebidas = [
  { item: "Lata Uva", preco: "4.00" },
  { item: "Lata Guaraná", preco: "4.00" },
  { item: "Lata Coca cola", preco: "4.00" },
  { item: "Lata Fanta laranja", preco: "4.00" },
  { item: "1 Litro Guaraná", preco: "6.00" },
  { item: "1 Litro Coca", preco: "6.00" },
  { item: "1 Litro Pepsi", preco: "6.00" },
  { item: "1 Litro Cajuína", preco: "6.00" },
];

app.get("/bebidas", (req, res) => {
  res.render("bebidas", {
    bebidas: bebidas,
    numeroDoPedido: req.session.numeroDoPedido,
  });
});

app.post("/pedidobebidas", (req, res) => {
  req.session.pedidoCompleto += `\n\n*PEDIDO N°: ${req.session.numeroDoPedido}* `;

  req.session.meuspedidos += JSON.stringify(req.body) + ",";
  req.session.meuspedidos = req.session.meuspedidos.slice(0, -1);
  req.session.meuspedidos = JSON.parse(req.session.meuspedidos);

  req.session.pedidoCompleto += `\n\n🥃 *BEBIDAS*\n`;

  if (req.session.meuspedidos.bebida != undefined) {
    if (Array.isArray(req.session.meuspedidos.bebida)) {
      for (x = 0; x < req.session.meuspedidos.bebida.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.bebida[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.bebida} \n`;
    }
  }

  req.session.total += parseInt(req.session.meuspedidos.TotalBebida);
  req.session.pedidoCompleto += "\n\n📣 *OBSERVAÇÃO:* \n";

  req.session.pedidoCompleto += `\n    ${req.session.meuspedidos.observacao} `;

  req.session.meuspedidos = "";

  console.log(req.session.pedidoCompleto);

  req.session.numeroDoPedido++;

  if (req.session.numeroDoPedido > 1) {
    req.session.pedidoCompleto += "\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n";
  }

  res.render("index");
});

app.post("/finalizarpedidobebidas", (req, res) => {
  req.session.pedidoCompleto += `\n\n*PEDIDO N°: ${req.session.numeroDoPedido}* `;

  req.session.meuspedidos += JSON.stringify(req.body) + ",";
  req.session.meuspedidos = req.session.meuspedidos.slice(0, -1);
  req.session.meuspedidos = JSON.parse(req.session.meuspedidos);

  req.session.pedidoCompleto += `\n\n🥃 *BEBIDAS*\n`;

  if (req.session.meuspedidos.bebida != undefined) {
    if (Array.isArray(req.session.meuspedidos.bebida)) {
      for (x = 0; x < req.session.meuspedidos.bebida.length; x++) {
        req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.bebida[x]} \n`;
      }
    } else {
      req.session.pedidoCompleto += `\n   • ${req.session.meuspedidos.bebida} \n`;
    }
  }

  req.session.total += parseInt(req.session.meuspedidos.TotalBebida);
  req.session.pedidoCompleto += "\n\n📣 *OBSERVAÇÃO:* \n";

  req.session.pedidoCompleto += `\n    ${req.session.meuspedidos.observacao} `;

  req.session.meuspedidos = "";

  console.log(req.session.pedidoCompleto);

  req.session.numeroDoPedido++;

  if (req.session.numeroDoPedido > 1) {
    req.session.pedidoCompleto += "\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n";
  }

  res.render("finalizar");
});

app.post("/enviar", (req, res) => {
  if (req.body.nome2) {
    req.session.pedidoCompleto += "\n *NOME:* \n\n" + "    • " + req.body.nome2;
  }

  if (req.body.nome) {
    req.session.pedidoCompleto += "\n *NOME:* \n\n" + "    • " + req.body.nome;
    req.session.total += 1;
  }

  if (req.body.rua) {
    req.session.pedidoCompleto += "\n\n *RUA:* \n\n" + "    • " + req.body.rua;
  }

  if (req.body.bairro) {
    req.session.pedidoCompleto +=
      "\n\n *BAIRRO:* \n\n" + "    • " + req.body.bairro;
  }

  if (req.body.numero) {
    req.session.pedidoCompleto +=
      "\n\n *NÚMERO DA CASA:* \n\n" + "    • " + req.body.numero;
  }

  if (req.body.referencia) {
    req.session.pedidoCompleto +=
      "\n\n *PONTO DE REFERÊNCIA:* \n\n" + "    • " + req.body.referencia;
  }

  req.session.queijoebom += req.session.pedidoCompleto;

  req.session.pedidoCompleto +=
    "\n\n    • Total: " + `${req.session.total}\n\n`;

  if (req.body.PIX) {
    req.session.pedidoCompleto +=
      "    • PIX (CPF - 08837416369)" +
      "\n\n *OBSERVAÇÃO:* \n\n" +
      "    " +
      req.body.observacao;
  }

  if (req.body.cartao) {
    req.session.pedidoCompleto +=
      "    • Cartão" + "\n\n *OBSERVAÇÃO:* \n\n" + "    " + req.body.observacao;
  }
  if (req.body.Dinheiro) {
    req.session.pedidoCompleto +=
      "    • Dinheiro" +
      "\n\n *OBSERVAÇÃO:* \n\n" +
      "    " +
      req.body.observacao;
  }

  res.redirect(
    "https://api.whatsapp.com/send?phone=558882222539&text=" +
      req.session.pedidoCompleto
  );

  req.session.destroy();
});

const port = 3000 || process.env.PORT;

app.listen(5555 || process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
// .listen(process.env.PORT);
//app.listen(3000);
