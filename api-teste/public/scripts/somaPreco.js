function UpdateCost() {
  var sum = 0;
  var gn, elem;
  var gn, elem;
  for (i = 1; i <= 25; i++) {
    gn = "game" + i;
    elem = document.getElementById(gn);
    if (elem.checked == true) {
      sum += Number(elem.value);
    }
  }
  document.getElementById("totalcost").innerHTML = sum.toFixed(2);
}
