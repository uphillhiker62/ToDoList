$("ul").on("click", "li", function(){
    $(this).css("color", "gray");
});

$("#inputBox").keyup(function(event){
    if(event.which === 13) {
        let addToDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>" + addToDo + "</span></li>");
    }
});

