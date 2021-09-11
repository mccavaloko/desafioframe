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
    $(".fa-times")
      .stop("fade", true, true)
      .delay(300, "fade")
      .slideUp(() => {
        $(".fa-check").slideDown();
      });
  },
  () => {
    // out
    $(".fa-check")
      .stop("fade", true, true)
      .delay(300, "fade")
      .slideUp(() => {
        $(".fa-times").slideDown();
      });
  }
);
