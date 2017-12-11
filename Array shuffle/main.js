var list = ["JavaScript", "HTML", "CSS", "VueJS"];
var output = document.querySelector("#output");
var startBtn = document.querySelector(".start-btn--link");

startBtn.addEventListener("click", function () {
  shuffleList(list);
  output.innerHTML += list + "<br>";
});

function shuffleList(arr) {
  for (var i = 0; i < arr.length; i++){
    var holder = Math.floor(Math.random() * (i + 1));
    var tempArr = arr[i];
    arr[i] = arr[holder];
    arr[holder] = tempArr;
  }
  return arr;
}
