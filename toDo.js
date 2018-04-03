

//add Lists by clicking button or pressing enter:

$(document).ready(function(){
    let currInput;
    $(document).on('click', '.btn', function(){
        let listName = $('#inputBox').val();
        $(".toDoItems").append(
            '<div class="listContainer">' +
                '<div class="row">' +
                    '<div class="rowLeft">' +
                        '<span contenteditable="true">' + listName + '</span>' +
                    '</div>' +
                    '<div class="rowRight">' +
                        '<a class="listCompBtn" href="#" onclick="listMarkComplete(this)"><i class="fa fa-check" aria-hidden="true"></i></a>' +
                        '<a class="removeRow fa fa-trash-o" href="#" onclick="removeList(this)"></a>' +
                        '<a class="addTaskBtn" href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>' +
                    '</div>' +
                '</div>' +
                '<div class="listItemsContainer"' +
                    '<div class="addlistItem">' +
                        '<input class="listItemInputBox" onkeyup="addItem(this, this.value, event)" type="text" placeholder="Create new item..">' +
                        '<a href="#" class="itemBtn">Add</a>' +
                    '</div>' +
                        '<ul class="itemBox" style="padding: 0;">' +
                        '</ul>' +
                    '</div>' +
                '</div>');
            $('#inputBox').val('');
        });
    });




$("input[type='text']").keyup(function (event) {
    if (event.which === 13) {
        let addToDo = $(this).val();
        $(".toDoItems").append(
            '<div class="listContainer">' +
                '<div class="row">' +
                    '<div class="rowLeft">' +
                        '<span contenteditable="true">' + addToDo + '</span>' +
                    '</div>' +
                    '<div class="rowRight">' +
                        '<a class="listCompBtn" href="#" onclick="listMarkComplete(this)"><i class="fa fa-check" aria-hidden="true"></i></a>' +
                        '<a class="removeRow fa fa-trash-o" href="#" onclick="removeList(this)"></a>' +
                        '<a class="addTaskBtn" href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>' +
                    '</div>' +
                '</div>' +
                '<div class="listItemsContainer".' +
                    '<div class="addlistItem">' +
                        '<input class="listItemInputBox" id=" + addToDo + " onkeyup="addItem(this, this.value, event)" type="text" placeholder="Create new item..">' +
                        '<a href="#" class="itemBtn">Add</a>' +
                    '</div>' +
                    '<ul class="itemBox" style="padding: 0;">' +
                    '</ul>' +
                '</div>' +
            '</div>');
        $('input').val('');
    }
});


//add List Items by clicking the button or pressing enter:


$(document).on('click', '.itemBtn', function(){
   let listItem = $('.listItemInputBox').val();
   $(".itemBox").append(
       '<li class="item" style="display: flex; padding: 0 25px;">' +
            '<a class="itemCompBtn" href="#" onclick="itemMarkComplete(this)"><i class="fa fa-check" aria-hidden="true" style="color: #1F5899;"></i></a>' +
            '<a class="removeItem fa fa-trash-o" href="#" onclick="removeItem(this)" style="color: #000000; padding: 0 25px 0 5px"></a>' +
            '<span contenteditable="true">' + listItem + '</span>' +
       '</li>');
   $('.listItemInputBox').val('');
});

function addItem(add, myvalue, event){
    if(event.which === 13){
        $(".itemBox").append(
            '<li class="item" style="display: flex; padding: 0 25px;">' +
                '<a class="itemCompBtn" href="#" onclick="itemMarkComplete(this)"><i class="fa fa-check" aria-hidden="true" style="color: #1F5899;"></i></a>' +
                '<a class="removeItem fa fa-trash-o" href="#" onclick="removeItem(this)" style="color: #000000; padding: 0 25px 0 5px"></a>' +
                '<span contenteditable="true">' + myvalue + '</span>' +
            '</li>');
        $("input").val('');
    }
}
addItem();


//Mark list and items complete:

function listMarkComplete(myElement) {
    let list = $(myElement).parent().parent();
    $(list).toggleClass("complete");
}

function itemMarkComplete(myElement) {
    let item = $(myElement).parent();
    $(item).toggleClass("complete");
}

//Remove list and items:

function removeList(myElement) {
    let greatGrandDad = $(myElement).parent().parent().parent();
    $(greatGrandDad).slideToggle("slow", function () {
        $(greatGrandDad).remove();
    });
}

function removeItem(myElement) {
    let myDad = $(myElement).parent();
    $(myDad).slideToggle("slow", function () {
        $(myDad).remove();
    });
}
