$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();


    var inputNumber = $("input#number").val();
    var inNum = array.split("");
    $("#result").text(inNum);
    // console.log("result");
    // var number1 = inputNumber.slice(' ')

  });
});
