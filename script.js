var heartuptimer = setInterval(heartup, 300);
function heartup() {
  $(".heart").css("font-weight", "900");
}

var heartdowntimer = setInterval(heartdown, 600);
function heartdown() {
  $(".heart").css("font-weight", "400");
}
