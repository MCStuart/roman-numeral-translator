// Business logic
function isGreaterThanFourThousand(number) {
  if (number >= 4000) {
    return false;
  } else {
    return true;
  }
}

function isNumber(input) {
  if (isNaN(input)) {
    return false;
  } else {
    return true;
  }
}

function numberConverter(number) {
  var romanStr = "";
  for (var i = number; i > 0; i-=1000) {
    if (number >= 1000) {
    romanStr += "M";
    number -= 1000;
    }
  }

  for (var i = number; i > 0; i-=500) {
    if (number >= 500) {
    romanStr += "D";
    number -= 500;
    }
  }

  for (var i = number; i > 0; i-=100) {
    if (number >= 100) {
    romanStr += "C";
    number -= 100;
    }
  }

  for (var i = number; i > 0; i-=50) {
    if (number >= 50) {
    romanStr += "L";
    number -= 50;
    }
  }

  for (var i = number; i > 0; i-=10) {
    if (number >= 10) {
    romanStr += "X";
    number -= 10;
    }
  }

  for (var i = number; i > 0; i-=5) {
    if (number >= 5) {
    romanStr += "V";
    number -= 5;
    }
  }

  for (var i = number; i > 0; i-=1) {
    if (number >= 1) {
    romanStr += "I";
    number -= 1;
    }
  }

  return romanStr;
}
console.log(numberConverter(1999));

// User Interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
  var number = parseInt($("#numberInput").val());
  console.log(number);
  });
});
