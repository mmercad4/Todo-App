$(document).ready(function () {

    //Toggle line through task 
    $("ul").on("click","li", function() {
        $(this).toggleClass("completed");
    });

    //Delete Todos
    $("ul").on("click","span", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });

        event.stopPropagation();
    })

    $("input[type='text']").on("keypress", function(event) {
        //making sure keypress is enter key/code which is 13
        if (event.which === 13){
            //grabbing new todo from text
            var todoText = $(this).val();
            $(this).val("");
            //create new li and add to ul
            $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
        }
    });

    $(".fa-plus").on("click", function(){
        $("input[type='text']").fadeToggle();
    });

});