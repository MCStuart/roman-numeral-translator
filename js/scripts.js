// Business logic
function numberConverter(number) {
  var romanStr = "";
  var numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (var j = 0; j < numberArray.length; j++) {
    for (var i = number; i >= numberArray[j]; i-=numberArray[j]) {
      while (number >= numberArray[j]) {
        romanStr += romanArray[j];
        number -= numberArray[j];
      }
    }
  }
  return romanStr;
}
function isGreaterThanFourThousand(number) {
  if (number >= 4000) {
    alert("Please Enter a Number Less Than 4000");
  } else {
    return true;
  }
}
function isNumber(input) {
  if (isNaN(input)) {
    alert("Please enter a number I can read.")
  } else {
    return true;
  }
}
// User Interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#numberInput").val());
    isNumber(number);
    isGreaterThanFourThousand(number);
    var output = numberConverter(number);
    $('h3').text(output);
    $("div.result").show();
  });
});
