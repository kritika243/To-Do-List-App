//checkoff specific todos by clickig
//the event listener below is set on ul and fires off when a li is clicked inside ul
$("ul").on("click", "li",  function(){
  $(this).toggleClass("completed");
});

//click on X to delete a todo
//the event listener below is set on ul and fires off when a span is clicked inside ul
$("ul").on("click", "span", function(event){ 

//below will remove the entire li on clicking particular span but first will fade it out
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  })
  event.stopPropagation(); //to prevent event bubbling
});


//adding a new todo
$('input[type="text"]').keypress(function(event){
  if(event.which ===13){
    //grabbing new todo text from input on pressing eneter 
    var todoText = $(this).val();
    $(this).val("");
    // ceate new li and add that to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
  }
});

$(".fa-plus").click(function(){
  $('input[type="text"]').fadeToggle();
})