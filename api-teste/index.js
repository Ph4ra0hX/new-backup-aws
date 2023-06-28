var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var nunjucks = require("nunjucks");

var app = express();

var pedidos = [];

let agorasim = "";

var enderecoCompleto = "";

const port = 3000 || process.env.PORT;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

nunjucks.configure(__dirname + "/views", {
  autoescape: true,
  express: app,
});

app.use(cookieParser());
app.use(
  session({
    secret: "secret!",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  //res.json("teste");
  if (!req.session.numeroDoPedidoCliente) {
    req.session.numeroDoPedidoCliente = 1;
  }

  res.render("index.html", {
   numeroDoPedidoCliente: "1",
  });

 // res.render("fechado.html");
 //res.render("aviso.html");
});

//MAIS_PEDIDOS;

app.post("/mais", function (req, res) {
  req.session.numeroDoPedidoCliente++;

  res.render("index.html", {
    numeroDoPedidoCliente: req.session.numeroDoPedidoCliente,
  });

  if (!req.session.precoSomado) {
    req.session.precoSomado = 0;

    req.session.precoTotal = 0;
  }

  if (!req.session.numeroDoPedido) {
    pedidos.push("\n\n*PEDIDO N°:* ");
    pedidos.push("*" + "1 ✅" + "* \n\n");
    req.session.numeroDoPedido = 1;
  } else {
    pedidos.push("*PEDIDO N°:* ");
    req.session.numeroDoPedido++;
    pedidos.push("*" + req.session.numeroDoPedido + "* \n\n");
  }

  pedidos.push("🍞 *PÃO:* \n");

  if (req.body.pao1) {
    req.body.pao1 = "\n" + "   • Pão Árabe";
    pedidos.push(req.body.pao1);

    req.session.precoTotal += 3;
  }
  if (req.body.pao2) {
    req.body.pao2 = "\n" + "   • Pão Bola";
    pedidos.push(req.body.pao2);

    req.session.precoTotal += 2;
  }
  if (req.body.pao3) {
    req.body.pao3 = "\n" + "   • Pão Brioche";
    pedidos.push(req.body.pao3);

    req.session.precoTotal += 3;
  }
  if (req.body.pao4) {
    req.body.pao4 = "\n" + "   • Pão Australiano";
    pedidos.push(req.body.pao4);

    req.session.precoTotal += 3;
  }

  pedidos.push("\n\n🧀 *QUEIJO:* \n");

  if (req.body.queijo1) {
    req.body.queijo1 = "\n" + "   • Cheddar";
    pedidos.push(req.body.queijo1);

    req.session.precoTotal += 2;
  }

  if (req.body.queijo2) {
    req.body.queijo2 = "\n" + "   • Mussarela";
    pedidos.push(req.body.queijo2);

    req.session.precoTotal += 2;
  }

  if (req.body.queijo3) {
    req.body.queijo3 = "\n" + "   • Coalho";
    pedidos.push(req.body.queijo3);

    req.session.precoTotal += 2;
  }

  pedidos.push("\n\n🥩 *CARNE:* \n");

  if (req.body.carne1) {
    req.body.carne1 = "\n" + "   • Frango Desfiado";
    pedidos.push(req.body.carne1);

    req.session.precoTotal += 3.0;
  }

  if (req.body.carne2) {
    req.body.carne2 = "\n" + "   • Hambúrguer Caseiro";
    pedidos.push(req.body.carne2);

    req.session.precoTotal += 6.0;
  }

  if (req.body.carne3) {
    req.body.carne3 = "\n" + "   • Carne de Sol desfiada";
    pedidos.push(req.body.carne3);

    req.session.precoTotal += 4;
  }

  if (req.body.carne4) {
    req.body.carne4 = "\n" + "   • Hambúrguer";
    pedidos.push(req.body.carne4);

    req.session.precoTotal += 2;
  }

  if (req.body.carne5) {
    req.body.carne5 = "\n" + "   • Filé de frango";
    pedidos.push(req.body.carne5);

    req.session.precoTotal += 3.0;
  }

  if (req.body.carne6) {
    req.body.carne6 = "\n" + "   •Linguiça Suína";
    pedidos.push(req.body.carne6);
    req.session.precoTotal += 3;
  }

  pedidos.push("\n\n🍳 *COMPLEMENTO:* \n");

  if (req.body.mais1) {
    req.body.mais1 = "\n" + "   • Bacon";
    pedidos.push(req.body.mais1);

    req.session.precoTotal += 2.0;
  }

  if (req.body.mais2) {
    req.body.mais2 = "\n" + "   • Ovo";
    pedidos.push(req.body.mais2);

    req.session.precoTotal += 2;
  }

  if (req.body.mais3) {
    req.body.mais3 = "\n" + "   • Cebola Caramelizada";
    pedidos.push(req.body.mais3);

    req.session.precoTotal += 1.0;
  }

  if (req.body.mais4) {
    req.body.mais4 = "\n" + "   • Maionese Golds";
    pedidos.push(req.body.mais4);

    req.session.precoTotal += 0.0;
  }

  if (req.body.mais5) {
    req.body.mais5 = "\n" + "   • Presunto";
    pedidos.push(req.body.mais5);

    req.session.precoTotal += 1.0;
  }

  if (req.body.mais6) {
    req.body.mais6 = "\n" + "   • Calabresa";
    pedidos.push(req.body.mais6);

    req.session.precoTotal += 2;
  }

  if (req.body.mais7) {
    req.body.mais7 = "\n" + "   • Batata Palha";
    pedidos.push(req.body.mais7);

    req.session.precoTotal += 1.0;
  }

  if (req.body.mais8) {
    req.body.mais8 = "\n" + "   • Molho Barbecue";
    pedidos.push(req.body.mais8);

    req.session.precoTotal += 1.0;
  }

  if (req.body.mais9) {
    req.body.mais9 = "\n" + "   • Milho Verde";
    pedidos.push(req.body.mais9);

    req.session.precoTotal += 1.0;
  }

  pedidos.push("\n\n🥬 *VERDURA:* \n");

  if (req.body.verdura1) {
    req.body.verdura1 = "\n" + "   • Alface";
    pedidos.push(req.body.verdura1);

    req.session.precoTotal += 0.0;
  }

  if (req.body.verdura2) {
    req.body.verdura2 = "\n" + "   • Tomate";
    pedidos.push(req.body.verdura2);

    req.session.precoTotal += 0.0;
  }

  if (req.body.verdura3) {
    req.body.verdura3 = "\n" + "   • Cebola";
    pedidos.push(req.body.verdura3);

    req.session.precoTotal += 0.0;
  }

  if (req.body.verdura4) {
    req.body.verdura4 = "\n" + "   • Cenoura Ralada";
    pedidos.push(req.body.verdura4);

    req.session.precoTotal += 0.0;
  }

  pedidos.push("\n\n📣 *OBSERVAÇÃO:* \n");

  if (req.body.observacao) {
    req.body.observacao = "\n    " + req.body.observacao + "\n";
    pedidos.push(req.body.observacao);
  }

  req.session.precoSomado += req.session.precoTotal;

  console.log("1 " + req.session.precoSomado);

  //

  pedidos.push("\n\n*PREÇO:* " + req.session.precoTotal);

  pedidos.push("\n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n");

  var pedidosVarios = pedidos.filter(function () {
    return true;
  });

  pedidos = [];

  pedidosLimpo = pedidosVarios.join(" ");

  agorasim = agorasim.concat(pedidosLimpo);

  req.session.queijoebom += agorasim;

  agorasim = "";

  req.session.precoTotal = 0;

  precoTotal = 0;
  pedidos = [];
});

//FINALIZAR;

app.post("/finalizar", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/finalizar.html"));

  if (!req.session.precoSomado) {
    req.session.precoSomado = 0;

    req.session.precoTotal = 0;
  }

  if (!req.session.numeroDoPedido) {
    pedidos.push("\n\n*PEDIDO N°:* ");
    pedidos.push("*" + "1 ✅" + "* \n\n");
    req.session.numeroDoPedido = 1;
  } else {
    pedidos.push("*PEDIDO N°:* ");
    req.session.numeroDoPedido++;
    pedidos.push("*" + req.session.numeroDoPedido + "* \n\n");
  }

  pedidos.push("🍞 *PÃO:* \n");

  if (req.body.pao1) {
    req.body.pao1 = "\n" + "   • Pão Árabe";
    pedidos.push(req.body.pao1);

    req.session.precoTotal += 3;
  }
  if (req.body.pao2) {
    req.body.pao2 = "\n" + "   • Pão Bola";
    pedidos.push(req.body.pao2);

    req.session.precoTotal += 2;
  }

  if (req.body.pao3) {
    req.body.pao3 = "\n" + "   • Pão Brioche";
    pedidos.push(req.body.pao3);

    req.session.precoTotal += 3;
  }

  if (req.body.pao4) {
    req.body.pao4 = "\n" + "   • Pão Australiano";
    pedidos.push(req.body.pao4);

    req.session.precoTotal += 3;
  }

  pedidos.push("\n\n🧀 *QUEIJO:* \n");

  if (req.body.queijo1) {
    req.body.queijo1 = "\n" + "   • Cheddar";
    pedidos.push(req.body.queijo1);

    req.session.precoTotal += 2;
  }

  if (req.body.queijo2) {
    req.body.queijo2 = "\n" + "   • Mussarela";
    pedidos.push(req.body.queijo2);

    req.session.precoTotal += 2;
  }

  if (req.body.queijo3) {
    req.body.queijo3 = "\n" + "   • Coalho";
    pedidos.push(req.body.queijo3);

    req.session.precoTotal += 2;
  }

  pedidos.push("\n\n🥩 *CARNE:* \n");

  if (req.body.carne1) {
    req.body.carne1 = "\n" + "   • Frango Desfiado";
    pedidos.push(req.body.carne1);

    req.session.precoTotal += 3.0;
  }

  if (req.body.carne2) {
    req.body.carne2 = "\n" + "   • Hambúrguer Caseiro";
    pedidos.push(req.body.carne2);

    req.session.precoTotal += 6.0;
  }

  if (req.body.carne3) {
    req.body.carne3 = "\n" + "   • Carne de Sol desfiada";
    pedidos.push(req.body.carne3);

    req.session.precoTotal += 4;
  }

  if (req.body.carne4) {
    req.body.carne4 = "\n" + "   • Hambúrguer";
    pedidos.push(req.body.carne4);

    req.session.precoTotal += 2;
  }

  if (req.body.carne5) {
    req.body.carne5 = "\n" + "   • Filé de frango";
    pedidos.push(req.body.carne5);

    req.session.precoTotal += 3.0;
  }

  if (req.body.carne6) {
    req.body.carne6 = "\n" + "   •Linguiça Suína";
    pedidos.push(req.body.carne6);
    req.session.precoTotal += 3;
  }

  pedidos.push("\n\n🍳 *COMPLEMENTO:* \n");

  if (req.body.mais1) {
    req.body.mais1 = "\n" + "   • Bacon";
    pedidos.push(req.body.mais1);

    req.session.precoTotal += 2.0;
  }

  if (req.body.mais2) {
    req.body.mais2 = "\n" + "   • Ovo";
    pedidos.push(req.body.mais2);

    req.session.precoTotal += 2;
  }

  if (req.body.mais3) {
    req.body.mais3 = "\n" + "   • Cebola Caramelizada";
    pedidos.push(req.body.mais3);

    req.session.precoTotal += 1.0;
  }

  if (req.body.mais4) {
    req.body.mais4 = "\n" + "   • Maionese Golds";
    pedidos.push(req.body.mais4);

    req.session.precoTotal += 0.0;
  }

  if (req.body.mais5) {
    req.body.mais5 = "\n" + "   • Presunto";
    pedidos.push(req.body.mais5);

    req.session.precoTotal += 1.0;
  }

  if (req.body.mais6) {
    req.body.mais6 = "\n" + "   • Calabresa";
    pedidos.push(req.body.mais6);

    req.session.precoTotal += 2;
  }

  if (req.body.mais7) {
    req.body.mais7 = "\n" + "   • Batata Palha";
    pedidos.push(req.body.mais7);

    req.session.precoTotal += 1.0;
  }
  if (req.body.mais8) {
    req.body.mais8 = "\n" + "   • Molho Barbecue";
    pedidos.push(req.body.mais8);

    req.session.precoTotal += 1.0;
  }

  if (req.body.mais9) {
    req.body.mais9 = "\n" + "   • Milho Verde";
    pedidos.push(req.body.mais9);

    req.session.precoTotal += 1.0;
  }

  pedidos.push("\n\n🥬 *VERDURA:* \n");

  if (req.body.verdura1) {
    req.body.verdura1 = "\n" + "   • Alface";
    pedidos.push(req.body.verdura1);

    req.session.precoTotal += 0.0;
  }

  if (req.body.verdura2) {
    req.body.verdura2 = "\n" + "   • Tomate";
    pedidos.push(req.body.verdura2);

    req.session.precoTotal += 0.0;
  }

  if (req.body.verdura3) {
    req.body.verdura3 = "\n" + "   • Cebola";
    pedidos.push(req.body.verdura3);

    req.session.precoTotal += 0.0;
  }

  if (req.body.verdura4) {
    req.body.verdura4 = "\n" + "   • Cenoura Ralada";
    pedidos.push(req.body.verdura4);

    req.session.precoTotal += 0.0;
  }

  pedidos.push("\n\n📣 *OBSERVAÇÃO:* \n");

  if (req.body.observacao) {
    req.body.observacao = "\n    " + req.body.observacao + "\n";
    pedidos.push(req.body.observacao);
  }

  req.session.precoSomado += req.session.precoTotal;

  console.log("2 " + req.session.precoSomado);

  pedidos.push("\n\n*PREÇO:* " + req.session.precoTotal);

  pedidos.push("\n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n");

  var pedidosVarios = pedidos.filter(function () {
    return true;
  });

  pedidosLimpo = pedidosVarios.join(" ");

  agorasim = agorasim.concat(pedidosLimpo);

  req.session.queijoebom += agorasim;

  agorasim = "";
  req.session.precoTotal = 0;
  precoTotal = 0;
  pedidos = [];
  console.log(req.session.queijoebom);
});

app.post("/enviar", function (req, res) {
  if (!req.session.dadosCliente) {
    req.session.dadosCliente = "";
  }

  if (req.body.nome2) {
    req.session.dadosCliente += " *NOME:* \n\n" + "    • " + req.body.nome2;
  }

  if (req.body.nome) {
    req.session.dadosCliente += "\n *NOME:* \n\n" + "    • " + req.body.nome;
  }

  if (req.body.rua) {
    req.session.dadosCliente += "\n\n *RUA:* \n\n" + "    • " + req.body.rua;
  }

  if (req.body.bairro) {
    req.session.dadosCliente +=
      "\n\n *BAIRRO:* \n\n" + "    • " + req.body.bairro;
  }

  if (req.body.numero) {
    req.session.dadosCliente +=
      "\n\n *NÚMERO DA CASA:* \n\n" + "    • " + req.body.numero;
  }

  if (req.body.referencia) {
    req.session.dadosCliente +=
      "\n\n *PONTO DE REFERÊNCIA:* \n\n" + "    • " + req.body.referencia;
  }

  if (req.body.checkbox1) {
    req.session.precoSomado += 3.0;
  }

  req.session.queijoebom += req.session.dadosCliente;
  console.log("3 " + req.session.precoSomado);

  let enderecoCompleto = `https://api.whatsapp.com/send?1=pt_BR&phone=5588993788451&text= +
    ${req.session.queijoebom} +
    \n\n *PREÇO TOTAL:* \n\n +
        • R$: +
    ${req.session.precoSomado.toFixed(2)}`;

  if (req.body.PIX) {
    enderecoCompleto +=
      "\n\n    • PIX (88994634270)" +
      "\n\n *OBSERVAÇÃO:* \n\n" +
      "    " +
      req.body.observacao;
  }

  if (req.body.cartao) {
    enderecoCompleto +=
      "\n\n    • Cartão" +
      "\n\n *OBSERVAÇÃO:* \n\n" +
      "    " +
      req.body.observacao;
  }
  if (req.body.Dinheiro) {
    enderecoCompleto +=
      "\n\n    • Dinheiro" +
      "\n\n *OBSERVAÇÃO:* \n\n" +
      "    " +
      req.body.observacao;
  }

  if (req.body.checkbox1) {
    enderecoCompleto +=
      "\n\n    • Taxa de entrega inclusa no valor total. \n\n";
  }

  req.session.numeroDoPedido = 0;

  req.session.dadosCliente = "";

  precoSomado = 0;

  req.session.precoSomado = 0;

  req.session.queijoebom = [];

  numeroDoPedido = 0;

  numeroDoPedidoString = "";

  var finalmente = enderecoCompleto.replace("undefined", "");

  req.session.destroy();

  res.redirect(finalmente);
});

app.listen(5555 || process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

//app.listen(3000);
