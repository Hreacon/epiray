$(document).ready(function() {
  // write the lyrics
  for(var index = 99; index >= 0; index -= 1) {
    $(".beer").append("<p>"+index+" bottles of beer on the wall"+"</p>");
  }

  $("form").submit(function(event) {
    $(".icecream").empty();
    $(".multianswer").empty();
    var flavors = $("#icecream").val();
    flavors = flavors.split(",");
    for(var index = 0; index < flavors.length; index += 1){
      $(".icecream").append("<li>" + flavors[index] + "</li>");
    }

    var multiplication = $("#maths").val();
    if(multiplication) {
      multiplication = multiplication.split(' ');
      var total = 1;
      for(var index = 0; index < multiplication.length; index += 1){
        if(multiplication[index])
          total = total * parseInt(multiplication[index]);
      }
      $(".multianswer").text(total);
    }
    event.preventDefault();
  });
  
  $("#99bofb").click(function() {
    $(".beer").toggle();
  });

});
