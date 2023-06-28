function UpdateCost() {
  var sum = 0;
  var gn, elem;
  var gn, elem;

  gn = "bebida0";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(4);
  }
  gn = "bebida1";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(4);
  }
  gn = "bebida2";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(4);
  }
  gn = "bebida3";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(4);
  }
  gn = "bebida4";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(6);
  }
  gn = "bebida5";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(6);
  }
  gn = "bebida6";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(6);
  }
  gn = "bebida7";
  elem = document.getElementById(gn);
  if (elem.checked == true) {
    sum += Number(6);
  }

  document.getElementById("TotalBebida").value = sum;

  document.getElementById("totalcost").innerHTML = sum.toFixed(2);
}
