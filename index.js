var lightBoxes=$(".div-color").length;
var lightH1=$("h1").length;
var lightPara=$(".para").length;



$("input").click(function(){

$("body").toggleClass("bodycolor");
$("h3").toggleClass("text-color");
$("h3 .overview-today").toggleClass("text-color")
for (var i=0; i<lightBoxes; i++){
  document.querySelectorAll(".div-color")[i].classList.toggle("containerss");
  document.querySelectorAll(".div-color")[i].classList.toggle("divs");
}
for(var i=0; i<lightH1; i++){
  document.querySelectorAll("h1")[i].classList.toggle("text-color")
}
for(var i=0; i<lightPara; i++){
  document.querySelectorAll(".para")[i].classList.toggle("text-color")
  document.querySelectorAll(".para")[i].classList.toggle("para-color")
}
$(".light-div").toggleClass("light-mode")

});
