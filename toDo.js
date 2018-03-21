// $("ul").on("click", "li", function(){
//     $(this).css("color", "gray");
// });

function appendItems() {
    $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
    // $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
    // $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
    // $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
}



$("#inputBox").keyup(function(event){
    if(event.which === 13) {
        let addToDo = $(this).val();
        $(this).val("");
        appendItems();
    }
});





///


function markComplete(myElement) {
    let myDad = $(myElement).parent().parent();
    $(myDad).toggleClass("complete");
    $(myDad).find(".iconSpot").toggleClass("fa fa-check-square");
}

function removeRow(myElement) {
    let grandDad = $(myElement).parent().parent();
    $(grandDad).slideUp("fast", function(){
        $(grandDad).remove();
    });
}

////another option

function removeRow(theElement){
    let granDad = $(theElement).parent().parent();

    $(granDad).animate({
        opacity: 0,
        left: "+=50"
    }, 800, function() {
        // Animation complete.
        $(granDad).remove();
    });
}