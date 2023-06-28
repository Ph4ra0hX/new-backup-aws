function UpdateCost() {
  var sum = 0;
  var gn, elem;
  var gn, elem;

  gn = "carne0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.5);
  }
  gn = "carne1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(5.5);
  }
  gn = "carne2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(3.0);
  }
  gn = "carne3";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(4.0);
  }
  gn = "carne4";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(3.0);
  }

  gn = "pao0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(3);
  }
  gn = "pao1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2);
  }
  gn = "pao2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(3);
  }

  gn = "queijo0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.25);
  }
  gn = "queijo1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.25);
  }
  gn = "queijo2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.5);
  }

  gn = "adicional0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2);
  }
  gn = "adicional1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(3);
  }
  gn = "adicional2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2);
  }
  gn = "adicional3";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.5);
  }
  gn = "adicional4";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1);
  }
  gn = "adicional5";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1.25);
  }
  gn = "adicional6";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1);
  }
  gn = "adicional7";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1.75);
  }

  gn = "molho0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(0.0);
  }
  gn = "molho1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(0.0);
  }
  gn = "molho2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1.0);
  }
  gn = "molho3";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1.0);
  }
  gn = "molho4";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(1.0);
  }
  gn = "molho5";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(2.0);
  }

  document.getElementById("TotalSanduiche").value = sum;

  document.getElementById("totalcost").innerHTML = sum.toFixed(2);
}
