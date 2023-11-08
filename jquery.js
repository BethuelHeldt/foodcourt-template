/* Deze regel staat altijd bovenaan --> */ $(document).ready(function(){

  $(".ingredient1").click(function(){
    $(".ingredient1").toggleClass("ingredient1ani");
    $(".ingredient2, .ingredient3").removeClass("ingredient2ani ingredient3ani");
  });

  $(".ingredient2").click(function(){
    $(".ingredient2").toggleClass("ingredient2ani");
    $(".ingredient1, .ingredient3").removeClass("ingredient1ani ingredient3ani");
  });
 
  $(".ingredient3").click(function(){
    $(".ingredient3").toggleClass("ingredient3ani");
    $(".ingredient1, .ingredient2").removeClass("ingredient1ani ingredient2ani");
  });

  $(".ingredient4").click(function(){
    $(".ingredient4").toggleClass("ingredient4ani");
    $(".ingredient5, .ingredient6").removeClass("ingredient5ani ingredient6ani");
  });

  $(".ingredient5").click(function(){
    $(".ingredient5").toggleClass("ingredient5ani");
    $(".ingredient4, .ingredient6").removeClass("ingredient4ani ingredient6ani");
  });
 
  $(".ingredient6").click(function(){
    $(".ingredient6").toggleClass("ingredient6ani");
    $(".ingredient4, .ingredient5").removeClass("ingredient4ani ingredient5ani");
  });

  $(".ingredient7").click(function(){
    $(".ingredient7").toggleClass("ingredient7ani");
    $(".ingredient8, .ingredient9").removeClass("ingredient8ani ingredient9ani");
  });

  $(".ingredient8").click(function(){
    $(".ingredient8").toggleClass("ingredient8ani");
    $(".ingredient7, .ingredient9").removeClass("ingredient7ani ingredient9ani");
  });
 
  $(".ingredient9").click(function(){
    $(".ingredient9").toggleClass("ingredient9ani");
    $(".ingredient7, .ingredient8").removeClass("ingredient7ani ingredient8ani");
  });




/* Deze regel staat altijd onderaan --> */ });