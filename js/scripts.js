$(document).ready(function() {
  $("#make-dem-shouts").submit(function(event) {
    const shoutOutput = $("input#shouts").val();
    const shoutOutput2 = shoutOutput.toUpperCase();
    $(".shoutput").text(shoutOutput2);

    $(".mystery-shouts").show();

    event.preventDefault();
  });
});