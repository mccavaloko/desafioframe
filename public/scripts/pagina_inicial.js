//Ativando o pagepiling na página inicial
$(document).ready(() => {
  $("#pagepiling").pagepiling();
  $(".navbar").hide();
  $(".footer").hide();
  $(".fa-check").hide();
});

$(".todos-btn").hover(
  () => {
    // over
    $(".fa-check").show();
    $(".fa-times").hide();
  },
  function () {
    // out
    $(".fa-times").show();
    $(".fa-check").hide();
  }
);
