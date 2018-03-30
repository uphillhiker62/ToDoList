

//Add new item by pressing enter:
$("input[type='text']").keyup(function (event) {
    if (event.which === 13) {
        let addToDo = $(this).val();
        $(".toDoItems").append(
            '<div class="itemContainer">' +
                '<div class="row">' +
                    '<div class="rowLeft">' +
                // '<div class="iconSpot fa fa-check-square" aria-hidden="true"></div>' +
                        '<span contenteditable="true">' + addToDo + '</span>' +
                    '</div>' +
                    '<div class="rowRight">' +
                        '<a class="compBtn" href="#" onclick="markComplete(this)"><i class="fa fa-check" aria-hidden="true"></i></a>' +
                        '<a class="removeRow fa fa-trash-o" href="#" onclick="removeRow(this)"></a>' +
                        '<a class="addTask" href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>' +
                    '</div>' +
                '</div>' +
                '<div class="listItems">' +
                    '<input class="itemInput" id=' + addToDo + ' onkeyup="addItem" type="text" placeholder="Create new item name..">' +
                    '<a href="#" onclick="addItemBtn()" class="itemBtn">Add</a>' +
                '</div>' +
            '</div>');
        $('input').val('');
    }
});

function addItem(incId, myValue, event){
    if(event.keyCode === 16){
        $(incId).parent().find('.listItems').append('<div class=‘myItem’>'+ myValue +'</div>');
        $(incId).val('');
    }
}


//Add new item by click add list button

// function createNewList() {
//     let div = document.createElement('div');
//     let inputValue = document.getElementById("inputBox").value;
//     let text = document.createTextNode(inputValue);
//     div.appendChild(text);
//
//     document.getElementsByClassName("row")
//
//
// }




//Append Tasks to list items:

// $("input[type='text']").keypress(function(event){
//     if (event.which === 13) {
//         let add = $(this).val();
//         $(".itemContainer").append(
//             '<div class="taskHeader">' +
//                 '<input id="taskInput" type="text" placeholder="New List Item">' +
//                 '<a href="#" onclick="addItemBtn()" class="btn">Add Item</a>' +
//             '</div>' +
//             '<div class="item-tasks">' +
//                 '<span>' + add + '</span>' +
//             '</div>');
//         $('input').val('');
//     }
// });


//Mark item complete:
function markComplete(myElement) {
    let myDad = $(myElement).parent().parent();
    $(myDad).toggleClass("complete");
    $(myDad).find(".iconSpot").toggleClass("fa fa-check-square");
}

//Remove item:
function removeRow(myElement) {
    let grandDad = $(myElement).parent().parent().parent();
    $(grandDad).slideToggle("slow", function () {
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