var letters = {
  64: "z",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
}


$("#inputText").keyup(function(e){
  //var inputText = document.getElementById("inputText").value;
  if ($("input:checked").val() == "echo"){
    document.getElementById("textArea").innerHTML += letters[e.keyCode];
  }
  else if ($("input:checked").val() == "shift"){
    document.getElementById("textArea").innerHTML += letters[e.keyCode - 1];
  }
   else if ($("input:checked").val() == "heiroglyphics"){
    var heiroglyphicsString = "<img src = 'images/heiroglyphics/" + letters[e.keyCode] +  ".gif'>"

    document.getElementById("textArea").innerHTML += heiroglyphicsString;
  }

});

  if ($("input:checked").val() == "decoder"){
    document.getElementById("textArea").innerHTML;
  }
  $("#translationText").keydown(function(e){
    if(e.keyCode == 13){
      var message = $("#translationInputText").val();
      var messageArray = message.split("");
      for(var i = 0; i < messageArrayLength; i++){
        var translateNumber = messageArray[i].charCodeAt(0) - 32 + 1;
      }
    }
  });





$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
})
