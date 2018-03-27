

//Add new item by pressing enter:

$("input[type='text']").keyup(function(event){
    if(event.which === 13) {
        let addToDo = $(this).val();
        $(".toDoItems").append(
            '<div class="row">' +
                '<div class="rowLeft">' +
                    '<div class="iconSpot fa fa-check-square" aria-hidden="true"></div>' +
                    '<span  contenteditable="true">' + addToDo + '</span>' +
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

//Add new item by click add list button****************





//Mark item complete:
function markComplete(myElement) {
    let myDad = $(myElement).parent().parent();
    $(myDad).toggleClass("complete");
    $(myDad).find(".iconSpot").toggleClass("fa fa-check-square");
}

//Remove item:
function removeRow(myElement) {
    let grandDad = $(myElement).parent().parent();
    $(grandDad).fadeOut("slow", function () {
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