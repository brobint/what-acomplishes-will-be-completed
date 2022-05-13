$("button").click(function(){
   let question=$("input").val();
    $(".greeting").append(" your answer is " + question);
});
$("button").click(function(){
   let answer =$("input").val();
   $(".greeting").append("Your favorite movie is "+ answer);
});

$("button").click(function(){
   let future=$("input").val();
    $(".greeting").append(" your answer is " + future);


});
