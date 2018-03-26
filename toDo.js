// $("ul").on("click", "li", function(){
//     $(this).css("color", "gray");
// });

//new line class:
// class newLine()
//
// function appendItems() {
//     $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
//     // $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
//     // $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
//     // $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
// }


$("input[type='text']").keyup(function(event){
    if(event.which === 13) {
        let addToDo = $(this).val();
        $(".toDoItems").append(
            '<div class=\"row\">' + addToDo +
                '<div class="rowLeft">' +
                    '<div class="iconSpot fa fa-check-square" aria-hidden="true"></div>' +
                    '<div class="label" contenteditable="true"></div>' +
                '</div>' +
                '<div class="rowRight">' +
                    '<a class="compBtn" href="#" onclick="markComplete(this)"><i class="fa fa-check" aria-hidden="true"></i></a>' +
                    '<a class="removeRow fa fa-trash-o" href="#" onclick="removeRow(this)"></a>' +
                    '<a class="addTask" href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>' +
                '</div>' +
            '</div>');
        $('input').val('');
    }
});




// $("#inputBox").keyup(function(event){
//     if(event.which === 13) {
//         let addToDo = $(this).val();
//         $(this).val("");
//         $("ul").append("<li class=\"item\" contenteditable=\"true\"><p>" + addToDo + "</p></li>");
//     }
// });
//
//
//
// $('.button').click(function() {
//     $('#myContainer').append('<div>the new guy</div>');
// });
//
//
//
//
// ///
//
//
function markComplete(myElement) {
    let myDad = $(myElement).parent().parent();
    $(myDad).toggleClass("complete");
    $(myDad).find(".iconSpot").toggleClass("fa fa-check-square");
}

function removeRow(myElement) {
    let grandDad = $(myElement).parent().parent();
    $(grandDad).slideUp("fast", function () {
        $(grandDad).remove();
    });
}
//
// ////another option
//
// function removeRow(theElement){
//     let granDad = $(theElement).parent().parent();
//
//     $(granDad).animate({
//         opacity: 0,
//         left: "+=50"
//     }, 800, function() {
//         // Animation complete.
//         $(granDad).remove();
//     });
// }