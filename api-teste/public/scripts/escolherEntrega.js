function CopiarPIX() {
  var dummyContent = "88994634270";
  var dummy = $("<input style='position: absolute; left: -9999px;' >")
    .val(dummyContent)
    .appendTo("body")
    .select();
  document.execCommand("copy");
  $("#butcopiarpix").html("PIX Copiado!");
  $("#butcopiarpix").css("background-color", "#00E660");

  setTimeout(function () {
    $("#butcopiarpix").html("Copiar PIX");
    $("#butcopiarpix").css("background-color", "#ffb40d");
  }, 2000);
}

$(document).ready(function () {
  $(".checkbox1").change(function () {
    if (this.checked) {
      $("#autoUpdate").fadeIn("fast");
      $(".checkbox2").prop("disabled", true);
      $("#textonaocelecionado").css("text-decoration", "line-through");
      $("#textonaocelecionado").css("text-decoration-color", "#e3a62b");
      $("#endereco5").val("");
      $("#endereco5").removeAttr("required");
    } else {
      $("#autoUpdate").fadeOut("fast");
      $(".checkbox2").prop("disabled", false);
      $("#textonaocelecionado").css("text-decoration", "");
    }
  });
  $(".checkbox2").change(function () {
    if (this.checked) {
      $("#autoUpdate2").fadeIn("fast");
      $(".checkbox1").prop("disabled", true);
      $("#textonaocelecionado2").css("text-decoration", "line-through");
      $("#textonaocelecionado2").css("text-decoration-color", "#e3a62b");
      $("#endereco").val("");
      $("#endereco1").val("");
      $("#endereco2").val("");
      $("#endereco3").val("");
      $("#endereco4").val("");
      $("#endereco").removeAttr("required");
      $("#endereco1").removeAttr("required");
      $("#endereco2").removeAttr("required");
      $("#endereco3").removeAttr("required");
      $("#endereco4").removeAttr("required");
    } else {
      $("#autoUpdate2").fadeOut("fast");
      $(".checkbox1").prop("disabled", false);
      $("#textonaocelecionado2").css("text-decoration", "");
    }
  });

  $("#vaiSerPIX").change(function () {
    if (this.checked) {
      $("#copiarpix").fadeIn("fast");
    } else {
      $("#copiarpix").fadeOut("fast");
    }
  });

  $("#butcopiarpix").on("click", function (e) {
    e.preventDefault();
  });
});
