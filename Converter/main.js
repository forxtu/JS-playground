document.getElementById("usdInput").addEventListener("input", function (e) {
  var usdValue = e.target.value;

  var plnOutput = document.getElementById("plnOutput");
  plnOutput.innerHTML = parseInt((usdValue * 3.66) * 100) / 100;

  var uahOutput = document.getElementById("uahOutput");
  uahOutput.innerHTML = parseInt((usdValue * 26.93) * 100) / 100;

  var rubOutput = document.getElementById("rubOutput");
  rubOutput.innerHTML = parseInt((usdValue * 59.05) * 100) / 100;

  // var output = [plnOutput, uahOutput, rubOutput];

  // for (var i = 0; i < output.length; i++) {
  //   if (output[i] == plnOutput) {
  //     output[i].innerHTML = (usdValue * 3.66).toFixed(2);
  //   } else if (output[i] == uahOutput) {
  //     output[i].innerHTML = (usdValue * 26.93).toFixed(2);
  //   } else if (output[i] == rubOutput) {
  //     output[i].innerHTML = (usdValue * 59.05).toFixed(2);
  //   }
  // }
});