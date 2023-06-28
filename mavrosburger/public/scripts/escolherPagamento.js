$(document).ready(function () {
  $("#vaiSerCartao").change(function () {
    if (this.checked) {
      $("#vaiSerDinheiro").fadeIn("fast");
      $("#vaiSerDinheiro").prop("disabled", true);
      $("#textoPreco2").css("text-decoration", "line-through");
      $("#textoPreco2").css("text-decoration-color", "#FF9302");
      $("#vaiSerDinheiro").removeAttr("required");
      //------------------------------------------
      $("#vaiSerPIX").fadeIn("fast");
      $("#vaiSerPIX").prop("disabled", true);
      $("#textoPreco3").css("text-decoration", "line-through");
      $("#textoPreco3").css("text-decoration-color", "#FF9302");
      $("#vaiSerPIX").removeAttr("required");
    } else {
      $("#vaiSerDinheiro").fadeOut("fast");
      $("#vaiSerDinheiro").prop("disabled", false);
      $("#textoPreco2").css("text-decoration", "");
      //------------------------------------------
      $("#vaiSerPIX").fadeOut("fast");
      $("#vaiSerPIX").prop("disabled", false);
      $("#textoPreco3").css("text-decoration", "");
    }
  });
  $("#vaiSerDinheiro").change(function () {
    if (this.checked) {
      $("#vaiSerCartao").fadeIn("fast");
      $("#vaiSerCartao").prop("disabled", true);
      $("#textoPreco1").css("text-decoration", "line-through");
      $("#textoPreco1").css("text-decoration-color", "#FF9302");
      $("#vaiSerCartao").removeAttr("required");
      //------------------------------------------
      $("#vaiSerPIX").fadeIn("fast");
      $("#vaiSerPIX").prop("disabled", true);
      $("#textoPreco3").css("text-decoration", "line-through");
      $("#textoPreco3").css("text-decoration-color", "#FF9302");
      $("#vaiSerPIX").removeAttr("required");
    } else {
      $("#vaiSerCartao").fadeOut("fast");
      $("#vaiSerCartao").prop("disabled", false);
      $("#textoPreco1").css("text-decoration", "");
      //------------------------------------------
      $("#vaiSerPIX").fadeOut("fast");
      $("#vaiSerPIX").prop("disabled", false);
      $("#textoPreco3").css("text-decoration", "");
    }
  });
  $("#vaiSerPIX").change(function () {
    if (this.checked) {
      $("#vaiSerCartao").fadeIn("fast");
      $("#vaiSerCartao").prop("disabled", true);
      $("#textoPreco1").css("text-decoration", "line-through");
      $("#textoPreco1").css("text-decoration-color", "#FF9302");
      $("#vaiSerCartao").removeAttr("required");
      //------------------------------------------
      $("#vaiSerDinheiro").fadeIn("fast");
      $("#vaiSerDinheiro").prop("disabled", true);
      $("#textoPreco2").css("text-decoration", "line-through");
      $("#textoPreco2").css("text-decoration-color", "#FF9302");
      $("#vaiSerDinheiro").removeAttr("required");
    } else {
      $("#vaiSerDinheiro").fadeOut("fast");
      $("#vaiSerDinheiro").prop("disabled", false);
      $("#textoPreco2").css("text-decoration", "");
      //------------------------------------------
      $("#vaiSerCartao").fadeOut("fast");
      $("#vaiSerCartao").prop("disabled", false);
      $("#textoPreco1").css("text-decoration", "");
    }
  });
});
