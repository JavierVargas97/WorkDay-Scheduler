var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"))
function colorCode(){
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}
var saveBtn = $(".saveBtn");


saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var toDo = $(this).siblings(".toDo").val();
    localStorage.setItem(time, toDo);

});

function saveAgenda() {

    $(".hour").each(function(){
        var currHour = $(this).text();
        var currAgenda = localStorage.getItem(currHour);

        if(currAgenda !== null) {
            $(this).siblings(".toDo").val(currAgenda)
        }
    })
}
saveAgenda()
colorCode();